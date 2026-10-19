import AuthenticationServices
import UIKit

/// Spotify などの OAuth ログインを ASWebAuthenticationSession で行う。
/// カスタム URL スキームへのリダイレクトを OS が受け取ってくれるので、Info.plist の登録は不要。
final class WebAuthenticator: NSObject, ASWebAuthenticationPresentationContextProviding {
    private var session: ASWebAuthenticationSession?
    private let anchorProvider: () -> UIWindow?

    init(anchorProvider: @escaping () -> UIWindow?) {
        self.anchorProvider = anchorProvider
    }

    func start(url: URL, callbackScheme: String, completion: @escaping (Result<URL, Error>) -> Void) {
        session?.cancel()
        let session = ASWebAuthenticationSession(url: url, callbackURLScheme: callbackScheme) { [weak self] callbackURL, error in
            self?.session = nil
            if let callbackURL = callbackURL {
                completion(.success(callbackURL))
            } else {
                completion(.failure(error ?? NSError(domain: "D919Native", code: 2, userInfo: [NSLocalizedDescriptionKey: "ログインがキャンセルされました"])))
            }
        }
        session.presentationContextProvider = self
        session.prefersEphemeralWebBrowserSession = false
        self.session = session
        if !session.start() {
            self.session = nil
            completion(.failure(NSError(domain: "D919Native", code: 3, userInfo: [NSLocalizedDescriptionKey: "ログイン画面を開けませんでした"])))
        }
    }

    func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        if let window = anchorProvider() {
            return window
        }
        let scene = UIApplication.shared.connectedScenes.first { $0.activationState == .foregroundActive } as? UIWindowScene
        return scene?.windows.first { $0.isKeyWindow } ?? ASPresentationAnchor()
    }
}
