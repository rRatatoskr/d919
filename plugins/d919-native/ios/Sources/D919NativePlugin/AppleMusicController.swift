import MediaPlayer
import UIKit

/// ミュージックアプリ (Apple Music / ライブラリ) の再生を操作する。
/// systemMusicPlayer を使うので、ミュージックアプリ側で再生中の曲もそのまま表示・操作できる。
final class AppleMusicController: NSObject, MPMediaPickerControllerDelegate {
    var onStateChange: (([String: Any]) -> Void)?

    private let player = MPMusicPlayerController.systemMusicPlayer
    private var pickCompletion: ((Int) -> Void)?
    private var observers: [NSObjectProtocol] = []
    private var isObserving = false

    deinit {
        stopObserving()
    }

    static func statusString(_ status: MPMediaLibraryAuthorizationStatus) -> String {
        switch status {
        case .authorized: return "authorized"
        case .denied: return "denied"
        case .restricted: return "restricted"
        case .notDetermined: return "notDetermined"
        @unknown default: return "notDetermined"
        }
    }

    func requestAuthorization(_ completion: @escaping (String) -> Void) {
        let current = MPMediaLibrary.authorizationStatus()
        if current != .notDetermined {
            completion(Self.statusString(current))
            return
        }
        MPMediaLibrary.requestAuthorization { status in
            DispatchQueue.main.async { completion(Self.statusString(status)) }
        }
    }

    func startObserving() {
        guard !isObserving else { return }
        isObserving = true
        player.beginGeneratingPlaybackNotifications()
        let center = NotificationCenter.default
        let names: [Notification.Name] = [
            .MPMusicPlayerControllerNowPlayingItemDidChange,
            .MPMusicPlayerControllerPlaybackStateDidChange,
        ]
        for name in names {
            observers.append(center.addObserver(forName: name, object: player, queue: .main) { [weak self] _ in
                guard let self = self else { return }
                self.onStateChange?(self.state())
            })
        }
    }

    func stopObserving() {
        guard isObserving else { return }
        isObserving = false
        observers.forEach { NotificationCenter.default.removeObserver($0) }
        observers.removeAll()
        player.endGeneratingPlaybackNotifications()
    }

    func presentPicker(from viewController: UIViewController, completion: @escaping (Int) -> Void) {
        pickCompletion = completion
        let picker = MPMediaPickerController(mediaTypes: .music)
        picker.allowsPickingMultipleItems = true
        picker.showsCloudItems = true
        picker.showsItemsWithProtectedAssets = true
        picker.prompt = "D919 で再生する曲を選択"
        picker.delegate = self
        viewController.present(picker, animated: true)
    }

    func mediaPicker(_ mediaPicker: MPMediaPickerController, didPickMediaItems mediaItemCollection: MPMediaItemCollection) {
        mediaPicker.dismiss(animated: true)
        player.setQueue(with: mediaItemCollection)
        player.prepareToPlay()
        player.play()
        pickCompletion?(mediaItemCollection.count)
        pickCompletion = nil
    }

    func mediaPickerDidCancel(_ mediaPicker: MPMediaPickerController) {
        mediaPicker.dismiss(animated: true)
        pickCompletion?(0)
        pickCompletion = nil
    }

    func play() { player.play() }
    func pause() { player.pause() }
    func next() { player.skipToNextItem() }
    func previous() {
        // 再生位置が 3 秒以上なら曲頭へ、それ以外は前の曲へ (一般的なプレーヤーと同じ挙動)
        if player.currentPlaybackTime > 3 {
            player.skipToBeginning()
        } else {
            player.skipToPreviousItem()
        }
    }

    func seek(to time: TimeInterval) {
        player.currentPlaybackTime = max(0, time)
    }

    func state() -> [String: Any] {
        let item = player.nowPlayingItem
        let time = player.currentPlaybackTime
        return [
            "hasItem": item != nil,
            "title": item?.title ?? "",
            "artist": item?.artist ?? "",
            "album": item?.albumTitle ?? "",
            "duration": item?.playbackDuration ?? 0,
            "currentTime": time.isFinite ? time : 0,
            "playing": player.playbackState == .playing,
        ]
    }
}
