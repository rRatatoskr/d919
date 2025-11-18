(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/spectrum-analyzer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpectrumAnalyzer",
    ()=>SpectrumAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// ============================================================================
// 🎨 スペクトラムアナライザーの調整用パラメータ
// ============================================================================
const SPECTRUM_CONFIG = {
    // バンド設定
    numBands: 17,
    segmentsPerBand: 26,
    levelsPerBand: 13,
    // ブロックの寸法
    blockWidth: 24.5,
    blockHeight: 6.0,
    // 間隔調整
    gapX: 43.61,
    gapY1: 3.1,
    gapY2: 6,
    // スラント・傾斜調整
    slantLR: 2.0,
    slopeTB: 5.0,
    stackSlant: 3.35,
    // 位置調整
    offsetX: 186.6,
    offsetY: 8.2,
    // 音声解析パラメータ
    divisor: 1.8,
    fallSpeed: 0.03,
    fadeAlpha: 0,
    fftSize: 8192,
    smoothing: 0.3,
    minDecibels: -75,
    maxDecibels: -20,
    peakHoldTime: 200,
    // ガイド画像設定
    showGuide: true,
    guideAlpha: 0.2
};
const SIDE_BAND_CONFIG = {
    // サイドバンド設定
    enabled: true,
    segmentsPerBand: 26,
    levelsPerBand: 13,
    // ブロックの寸法
    blockWidth: 7.5,
    blockHeight: 6.0,
    // 間隔調整
    gapY1: 3.1,
    gapY2: 6.0,
    // スラント・傾斜調整
    slantLR: 2.0,
    slopeTB: 2.0,
    stackSlant: 3.35,
    // 位置調整（メインバンドからの相対位置）
    leftOffsetX: -11,
    rightOffsetX: 28,
    leftOffsetY: -2.5,
    rightOffsetY: 5,
    // 連動設定
    linkToBand: 'same',
    levelMultiplier: 1
};
// 色設定（RGB値）
const COLORS = {
    // アクティブなセグメントの色（グラデーション）
    activeBottom: [
        0,
        255,
        200
    ],
    activeTop: [
        50,
        50,
        255
    ],
    // 非アクティブなセグメントの色（グラデーション）
    inactiveBottom: [
        0,
        40,
        30
    ],
    inactiveTop: [
        10,
        10,
        50
    ],
    // サイドバンド用の色設定を追加
    // サイドバンド用の色（メインと同じでも、別の色でも調整可能）
    sideActiveBottom: [
        0,
        255,
        200
    ],
    sideActiveTop: [
        50,
        50,
        255
    ],
    sideInactiveBottom: [
        0,
        40,
        30
    ],
    sideInactiveTop: [
        10,
        10,
        50
    ]
};
function SpectrumAnalyzer() {
    _s();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioFile, setAudioFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ファイル名用のStateを追加
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showGuide, setShowGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SPECTRUM_CONFIG.showGuide);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyzerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousLevelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Array(SPECTRUM_CONFIG.numBands).fill(0));
    // ピークホールド用のRef
    const peakHoldsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Array(SPECTRUM_CONFIG.numBands).fill(null).map({
        "SpectrumAnalyzer.useRef[peakHoldsRef]": ()=>({
                level: 0,
                timestamp: 0
            })
    }["SpectrumAnalyzer.useRef[peakHoldsRef]"]));
    const sidePeakHoldsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Array(SPECTRUM_CONFIG.numBands).fill(null).map({
        "SpectrumAnalyzer.useRef[sidePeakHoldsRef]": ()=>({
                level: 0,
                timestamp: 0
            })
    }["SpectrumAnalyzer.useRef[sidePeakHoldsRef]"]));
    const guideImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpectrumAnalyzer.useEffect": ()=>{
            const img = new Image();
            img.crossOrigin = 'anonymous';
            const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
            img.src = `${basePath}/images/guide.png`; // パスは環境に合わせて確認してください
            img.onload = ({
                "SpectrumAnalyzer.useEffect": ()=>{
                    guideImageRef.current = img;
                    setImageLoaded(true);
                }
            })["SpectrumAnalyzer.useEffect"];
            return ({
                "SpectrumAnalyzer.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                        animationRef.current = null;
                    }
                    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                        audioContextRef.current.close().catch({
                            "SpectrumAnalyzer.useEffect": ()=>{}
                        }["SpectrumAnalyzer.useEffect"]);
                    }
                    audioInitializedRef.current = false;
                    audioContextRef.current = null;
                    sourceRef.current = null;
                    analyzerRef.current = null;
                }
            })["SpectrumAnalyzer.useEffect"];
        }
    }["SpectrumAnalyzer.useEffect"], []);
    const initializeAudio = ()=>{
        if (!audioRef.current || audioInitializedRef.current) {
            return;
        }
        try {
            const audioContext = new AudioContext();
            const analyzer = audioContext.createAnalyser();
            analyzer.fftSize = SPECTRUM_CONFIG.fftSize;
            analyzer.smoothingTimeConstant = SPECTRUM_CONFIG.smoothing;
            analyzer.minDecibels = SPECTRUM_CONFIG.minDecibels;
            analyzer.maxDecibels = SPECTRUM_CONFIG.maxDecibels;
            const source = audioContext.createMediaElementSource(audioRef.current);
            source.connect(analyzer);
            analyzer.connect(audioContext.destination);
            audioContextRef.current = audioContext;
            analyzerRef.current = analyzer;
            sourceRef.current = source;
            audioInitializedRef.current = true;
        } catch (error) {
            console.error('Failed to initialize audio:', error);
        }
    };
    const getGradientColor = (colorStart, colorEnd, ratio)=>{
        const r = Math.floor(colorStart[0] * (1 - ratio) + colorEnd[0] * ratio);
        const g = Math.floor(colorStart[1] * (1 - ratio) + colorEnd[1] * ratio);
        const b = Math.floor(colorStart[2] * (1 - ratio) + colorEnd[2] * ratio);
        return `rgb(${r}, ${g}, ${b})`;
    };
    const drawDoubleSlantedPolygon = (ctx, color, x, y, w, h, slantLR, slopeTB)=>{
        const p4 = {
            x,
            y
        };
        const p3 = {
            x: x + w,
            y: y - slopeTB
        };
        const p1 = {
            x: x + slantLR,
            y: y - h
        };
        const p2 = {
            x: x + w + slantLR,
            y: y - h - slopeTB
        };
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.closePath();
        ctx.fill();
    };
    const getAudioLevels = (dataArray)=>{
        const levels = [];
        const totalBins = dataArray.length / 2;
        const minFreq = 10;
        const maxFreq = totalBins;
        const logMin = Math.log(minFreq);
        const logMax = Math.log(maxFreq);
        const logStep = (logMax - logMin) / SPECTRUM_CONFIG.numBands;
        for(let i = 0; i < SPECTRUM_CONFIG.numBands; i++){
            const start = Math.floor(Math.exp(logMin + i * logStep));
            const end = Math.floor(Math.exp(logMin + (i + 1) * logStep));
            let sum = 0;
            let count = 0;
            for(let j = start; j < end && j < dataArray.length; j++){
                sum += dataArray[j];
                count++;
            }
            const magnitude = count > 0 ? sum / count : 0;
            let val = magnitude / 255.0;
            val = val * SPECTRUM_CONFIG.divisor;
            val = Math.max(0.0, Math.min(val, 1.0));
            levels.push(val);
        }
        return levels;
    };
    // サイドバンド描画関数（計算ロジックを除去し、描画のみに専念）
    const drawSideBand = (ctx, bandIdx, currentLevelRatio, peakHold, baseX, baseY, now)=>{
        if (!SIDE_BAND_CONFIG.enabled) return;
        const activeLevel = Math.floor(currentLevelRatio * SIDE_BAND_CONFIG.levelsPerBand);
        const activeSegments = activeLevel * 2;
        // ピーク表示判定
        let peakLevel = 0;
        let showPeak = false;
        if (now - peakHold.timestamp < SPECTRUM_CONFIG.peakHoldTime) {
            peakLevel = Math.floor(peakHold.level * SIDE_BAND_CONFIG.levelsPerBand);
            showPeak = peakLevel > activeLevel;
        }
        let currentYBottom = baseY;
        for(let segIdx = 0; segIdx < SIDE_BAND_CONFIG.segmentsPerBand; segIdx++){
            const xOffset = segIdx * SIDE_BAND_CONFIG.stackSlant;
            const xDraw = baseX + xOffset;
            const yDraw = currentYBottom;
            const ratio = segIdx / SIDE_BAND_CONFIG.segmentsPerBand;
            const currentSegLevel = Math.floor(segIdx / 2);
            let color;
            const isPeakSegment = showPeak && currentSegLevel === peakLevel;
            if (segIdx < activeSegments || isPeakSegment) {
                color = getGradientColor(COLORS.sideActiveBottom, COLORS.sideActiveTop, ratio);
            } else {
                color = getGradientColor(COLORS.sideInactiveBottom, COLORS.sideInactiveTop, ratio);
            }
            drawDoubleSlantedPolygon(ctx, color, xDraw, yDraw, SIDE_BAND_CONFIG.blockWidth, SIDE_BAND_CONFIG.blockHeight, SIDE_BAND_CONFIG.slantLR, SIDE_BAND_CONFIG.slopeTB);
            const currentGapY = segIdx % 2 === 0 ? SIDE_BAND_CONFIG.gapY1 : SIDE_BAND_CONFIG.gapY2;
            currentYBottom -= SIDE_BAND_CONFIG.blockHeight + currentGapY;
        }
    };
    const updatePeakHold = (currentLevel, peakHold, now, configLevels)=>{
        // ピークホールドのロジック（要件に準拠）
        if (currentLevel > peakHold.level) {
            // 上昇時：ピーク更新 & タイマーリセット
            peakHold.level = currentLevel;
            peakHold.timestamp = now;
        } else if (now - peakHold.timestamp >= SPECTRUM_CONFIG.peakHoldTime) {
            // 時間切れ時：現在値に追従（ホールド解除）
            // ここを '0' にすると再上昇と判定されてしまうため 'currentLevel' にする
            peakHold.level = currentLevel;
        }
    // 時間内（下降中）は peakHold.level を維持
    };
    const drawSpectrum = ()=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', {
            alpha: false
        });
        if (!ctx) return;
        if (SPECTRUM_CONFIG.fadeAlpha > 0) {
            ctx.fillStyle = `rgba(0, 0, 0, ${SPECTRUM_CONFIG.fadeAlpha / 255})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        if (showGuide && guideImageRef.current) {
            ctx.globalAlpha = SPECTRUM_CONFIG.guideAlpha;
            ctx.drawImage(guideImageRef.current, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0;
        }
        let displayLevels = [];
        const now = performance.now();
        if (analyzerRef.current && isPlaying) {
            const bufferLength = analyzerRef.current.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyzerRef.current.getByteFrequencyData(dataArray);
            // 【修正4】シークバーをぬるぬるにするため、アニメーションフレーム内で時間を更新
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
            }
            const rawLevels = getAudioLevels(dataArray);
            for(let i = 0; i < SPECTRUM_CONFIG.numBands; i++){
                const newVal = rawLevels[i];
                const prevVal = previousLevelsRef.current[i] || 0;
                if (newVal > prevVal) {
                    displayLevels[i] = newVal;
                } else {
                    displayLevels[i] = Math.max(0.0, prevVal - SPECTRUM_CONFIG.fallSpeed);
                }
            }
            previousLevelsRef.current = displayLevels;
        } else {
            displayLevels = [
                ...previousLevelsRef.current
            ];
        }
        const startX = SPECTRUM_CONFIG.offsetX;
        const startYBottom = canvas.height - SPECTRUM_CONFIG.offsetY;
        const sideLeftYBottom = canvas.height - SPECTRUM_CONFIG.offsetY - SIDE_BAND_CONFIG.leftOffsetY;
        const sideRightYBottom = canvas.height - SPECTRUM_CONFIG.offsetY - SIDE_BAND_CONFIG.rightOffsetY;
        for(let bandIdx = 0; bandIdx < SPECTRUM_CONFIG.numBands; bandIdx++){
            // 1. メインバンドのレベル計算
            const mainLevel = displayLevels[bandIdx] || 0;
            // 2. サイドバンドのレベル計算
            const sideLevel = mainLevel * SIDE_BAND_CONFIG.levelMultiplier;
            // 3. メインバンドのピーク更新
            updatePeakHold(mainLevel, peakHoldsRef.current[bandIdx], now, SPECTRUM_CONFIG.levelsPerBand);
            // 4. サイドバンドのピーク更新（ここで計算を一回だけ行う）
            updatePeakHold(sideLevel, sidePeakHoldsRef.current[bandIdx], now, SIDE_BAND_CONFIG.levelsPerBand);
            const bandXBase = startX + bandIdx * (SPECTRUM_CONFIG.blockWidth + SPECTRUM_CONFIG.gapX);
            // 5. サイドバンド（左）描画
            drawSideBand(ctx, bandIdx, sideLevel, sidePeakHoldsRef.current[bandIdx], bandXBase + SIDE_BAND_CONFIG.leftOffsetX, sideLeftYBottom, now);
            // 6. メインバンド描画
            const activeLevel = Math.floor(mainLevel * SPECTRUM_CONFIG.levelsPerBand);
            const activeSegments = activeLevel * 2;
            const mainPeakHold = peakHoldsRef.current[bandIdx];
            let peakLevel = 0;
            let showPeak = false;
            if (now - mainPeakHold.timestamp < SPECTRUM_CONFIG.peakHoldTime) {
                peakLevel = Math.floor(mainPeakHold.level * SPECTRUM_CONFIG.levelsPerBand);
                showPeak = peakLevel > activeLevel;
            }
            let currentYBottom = startYBottom;
            for(let segIdx = 0; segIdx < SPECTRUM_CONFIG.segmentsPerBand; segIdx++){
                const xOffset = segIdx * SPECTRUM_CONFIG.stackSlant;
                const xDraw = bandXBase + xOffset;
                const yDraw = currentYBottom;
                const ratio = segIdx / SPECTRUM_CONFIG.segmentsPerBand;
                const currentSegLevel = Math.floor(segIdx / 2);
                let color;
                const isPeakSegment = showPeak && currentSegLevel === peakLevel;
                if (segIdx < activeSegments || isPeakSegment) {
                    color = getGradientColor(COLORS.activeBottom, COLORS.activeTop, ratio);
                } else {
                    color = getGradientColor(COLORS.inactiveBottom, COLORS.inactiveTop, ratio);
                }
                drawDoubleSlantedPolygon(ctx, color, xDraw, yDraw, SPECTRUM_CONFIG.blockWidth, SPECTRUM_CONFIG.blockHeight, SPECTRUM_CONFIG.slantLR, SPECTRUM_CONFIG.slopeTB);
                const currentGapY = segIdx % 2 === 0 ? SPECTRUM_CONFIG.gapY1 : SPECTRUM_CONFIG.gapY2;
                currentYBottom -= SPECTRUM_CONFIG.blockHeight + currentGapY;
            }
            // 7. サイドバンド（右）描画
            drawSideBand(ctx, bandIdx, sideLevel, sidePeakHoldsRef.current[bandIdx], bandXBase + SIDE_BAND_CONFIG.rightOffsetX, sideRightYBottom, now);
        }
        animationRef.current = requestAnimationFrame(drawSpectrum);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpectrumAnalyzer.useEffect": ()=>{
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
            drawSpectrum();
        }
    }["SpectrumAnalyzer.useEffect"], [
        isPlaying,
        imageLoaded,
        showGuide
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpectrumAnalyzer.useEffect": ()=>{
            const audio = audioRef.current;
            if (!audio) return;
            const updateTime = {
                "SpectrumAnalyzer.useEffect.updateTime": ()=>setCurrentTime(audio.currentTime)
            }["SpectrumAnalyzer.useEffect.updateTime"];
            const updateDuration = {
                "SpectrumAnalyzer.useEffect.updateDuration": ()=>setDuration(audio.duration)
            }["SpectrumAnalyzer.useEffect.updateDuration"];
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', updateDuration);
            audio.addEventListener('durationchange', updateDuration);
            return ({
                "SpectrumAnalyzer.useEffect": ()=>{
                    audio.removeEventListener('timeupdate', updateTime);
                    audio.removeEventListener('loadedmetadata', updateDuration);
                    audio.removeEventListener('durationchange', updateDuration);
                }
            })["SpectrumAnalyzer.useEffect"];
        }
    }["SpectrumAnalyzer.useEffect"], [
        audioFile
    ]);
    const handlePlay = async ()=>{
        if (!audioRef.current) return;
        if (!audioInitializedRef.current) {
            initializeAudio();
        }
        try {
            if (audioContextRef.current?.state === 'suspended') {
                await audioContextRef.current.resume();
            }
            await audioRef.current.play();
            setIsPlaying(true);
        } catch (error) {
            console.error('Failed to play audio:', error);
        }
    };
    const handlePause = ()=>{
        if (!audioRef.current) return;
        audioRef.current.pause();
        setIsPlaying(false);
    };
    const handleFileUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            // 【修正2】ファイル名を取得してセット
            setFileName(file.name);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            setIsPlaying(false);
            if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                audioContextRef.current.close().catch(()=>{});
            }
            audioContextRef.current = null;
            analyzerRef.current = null;
            sourceRef.current = null;
            audioInitializedRef.current = false;
            if (audioFile) {
                URL.revokeObjectURL(audioFile);
            }
            const url = URL.createObjectURL(file);
            setAudioFile(url);
            previousLevelsRef.current = new Array(SPECTRUM_CONFIG.numBands).fill(0);
            setCurrentTime(0);
            setDuration(0);
            e.target.value = '';
        }
    };
    const handleSeek = (e)=>{
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };
    const formatTime = (seconds)=>{
        if (!isFinite(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1400px] mx-auto space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black rounded-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    width: 1400,
                    height: 400,
                    className: "w-full h-auto block"
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer.tsx",
                    lineNumber: 578,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "decdc123c2b34c44",
                                [
                                    currentTime / (duration || 1) * 100,
                                    currentTime / (duration || 1) * 100
                                ]
                            ]
                        ]) + " " + "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: duration || 0,
                                value: currentTime,
                                onChange: handleSeek,
                                disabled: !audioFile,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "decdc123c2b34c44",
                                        [
                                            currentTime / (duration || 1) * 100,
                                            currentTime / (duration || 1) * 100
                                        ]
                                    ]
                                ]) + " " + "w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed seek-slider"
                            }, void 0, false, {
                                fileName: "[project]/components/spectrum-analyzer.tsx",
                                lineNumber: 588,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "decdc123c2b34c44",
                                dynamic: [
                                    currentTime / (duration || 1) * 100,
                                    currentTime / (duration || 1) * 100
                                ],
                                children: `.seek-slider.__jsx-style-dynamic-selector::-webkit-slider-thumb{appearance:none;width:0;height:0}.seek-slider.__jsx-style-dynamic-selector::-moz-range-thumb{border:none;width:0;height:0}.seek-slider.__jsx-style-dynamic-selector::-webkit-slider-runnable-track{background:linear-gradient(to right,#fffc 0%,#fffc ${currentTime / (duration || 1) * 100}%,#ffffff1a ${currentTime / (duration || 1) * 100}%,#ffffff1a 100%);height:2px}.seek-slider.__jsx-style-dynamic-selector::-moz-range-track{background:#ffffff1a;height:2px}.seek-slider.__jsx-style-dynamic-selector::-moz-range-progress{background:#fffc;height:2px}`
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-white/50 font-mono tracking-wider",
                            children: [
                                formatTime(currentTime),
                                " / ",
                                formatTime(duration)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/spectrum-analyzer.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-6 text-sm font-light tracking-widest text-white/70 font-mono",
                children: fileName
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "audio/*",
                        onChange: handleFileUpload,
                        className: "hidden",
                        id: "audio-upload"
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "audio-upload",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            asChild: true,
                            className: "bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 text-white transition-all duration-200 font-light tracking-wide text-xs px-4 py-2 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/spectrum-analyzer.tsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this),
                                    "UPLOAD AUDIO"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/spectrum-analyzer.tsx",
                                lineNumber: 654,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/spectrum-analyzer.tsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: isPlaying ? handlePause : handlePlay,
                        size: "sm",
                        disabled: !audioFile,
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 font-light tracking-wide text-xs px-4 py-2",
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 669,
                                    columnNumber: 15
                                }, this),
                                "PAUSE"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 674,
                                    columnNumber: 15
                                }, this),
                                "PLAY"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowGuide(!showGuide),
                        size: "sm",
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 text-white transition-all duration-200 font-light tracking-wide text-xs px-4 py-2 cursor-pointer",
                        children: showGuide ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 687,
                                    columnNumber: 15
                                }, this),
                                "GUIDE OFF"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this),
                                "GUIDE ON"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            audioFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: audioFile,
                className: "hidden",
                loop: true
            }, audioFile, false, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 700,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'white',
                    fontSize: '10px'
                },
                children: "DEPLOYED VERSION 0.1.2"
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 709,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/spectrum-analyzer.tsx",
        lineNumber: 575,
        columnNumber: 6
    }, this);
}
_s(SpectrumAnalyzer, "5OklsxRUeXQ7maYPU6iNwAW7l0o=");
_c = SpectrumAnalyzer;
var _c;
__turbopack_context__.k.register(_c, "SpectrumAnalyzer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer.tsx [app-client] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpectrumAnalyzer"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0f8ad007._.js.map