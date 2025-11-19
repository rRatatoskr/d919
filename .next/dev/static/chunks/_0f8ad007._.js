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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>"); // Added Monitor icon for DISP
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
(()=>{
    const e = new Error("Cannot find module './dot-matrix-display'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// ============================================================================
// 🎨 スペクトラムアナライザー設定
// ============================================================================
const SPECTRUM_CONFIG = {
    numBands: 17,
    segmentsPerBand: 26,
    levelsPerBand: 13,
    // ブロック寸法
    blockWidth: 24.5,
    blockHeight: 6.0,
    // 間隔
    gapX: 43.61,
    gapY1: 3.1,
    gapY2: 6,
    // 傾斜
    slantLR: 2.0,
    slopeTB: 5.0,
    stackSlant: 3.35,
    // 位置
    offsetX: 186.6,
    offsetY: 8.2,
    // 解析
    divisor: 1.8,
    fallSpeed: 0.03,
    fadeAlpha: 0,
    fftSize: 8192,
    smoothing: 0.3,
    minDecibels: -75,
    maxDecibels: -20,
    peakHoldTime: 200,
    showGuide: true,
    guideAlpha: 0.2
};
const SIDE_BAND_CONFIG = {
    enabled: true,
    segmentsPerBand: 26,
    levelsPerBand: 13,
    blockWidth: 7.5,
    blockHeight: 6.0,
    gapY1: 3.1,
    gapY2: 6.0,
    slantLR: 2.0,
    slopeTB: 2.0,
    stackSlant: 3.35,
    leftOffsetX: -11,
    rightOffsetX: 28,
    leftOffsetY: -2.5,
    rightOffsetY: 5,
    linkToBand: 'same',
    levelMultiplier: 1
};
// ============================================================================
// 🎨 色設定（単色・ソリッドカラーに変更）
// ============================================================================
const COLORS = {
    // ① 光っていない時の色（VFDの消灯色：暗い紫/グレー）
    inactive: '#231e2dff',
    // ③ 真ん中より下の色（水色）
    activeBottom: '#1fd7f0ff',
    // ② 真ん中の色（黄緑）
    activeMiddle: '#baff75',
    // ④ 真ん中より上の色（青）
    activeTop: '#1876eaff',
    // ⑤ サイドの色（③と同じ水色）
    sideActive: '#b0f5ffff'
};
function SpectrumAnalyzer() {
    _s();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioFile, setAudioFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showGuide, setShowGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SPECTRUM_CONFIG.showGuide);
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('TEXT');
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PEAK HOLD");
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyzerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousLevelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Array(SPECTRUM_CONFIG.numBands).fill(0));
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
            img.src = `${basePath}/images/guide.png`;
            img.onload = ({
                "SpectrumAnalyzer.useEffect": ()=>{
                    guideImageRef.current = img;
                    setImageLoaded(true);
                }
            })["SpectrumAnalyzer.useEffect"];
            return ({
                "SpectrumAnalyzer.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                    if (audioContextRef.current?.state !== 'closed') audioContextRef.current?.close();
                }
            })["SpectrumAnalyzer.useEffect"];
        }
    }["SpectrumAnalyzer.useEffect"], []);
    const initializeAudio = ()=>{
        if (!audioRef.current || audioInitializedRef.current) return;
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
    // 【変更点】グラデーション関数を廃止し、位置に応じた単色を返す関数を作成
    const getSegmentColor = (levelIndex)=>{
        const middleLevel = 6; // 0始まりの13レベル中、7番目(index 6)を真ん中とする
        if (levelIndex < middleLevel) {
            return COLORS.activeBottom; // 水色
        } else if (levelIndex === middleLevel) {
            return COLORS.activeMiddle; // 黄緑
        } else {
            return COLORS.activeTop; // 青
        }
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
        const logMin = Math.log(10);
        const logMax = Math.log(totalBins);
        const logStep = (logMax - logMin) / SPECTRUM_CONFIG.numBands;
        for(let i = 0; i < SPECTRUM_CONFIG.numBands; i++){
            const start = Math.floor(Math.exp(logMin + i * logStep));
            const end = Math.floor(Math.exp(logMin + (i + 1) * logStep));
            let sum = 0, count = 0;
            for(let j = start; j < end && j < dataArray.length; j++){
                sum += dataArray[j];
                count++;
            }
            const val = count > 0 ? sum / count / 255.0 * SPECTRUM_CONFIG.divisor : 0;
            levels.push(Math.max(0.0, Math.min(val, 1.0)));
        }
        return levels;
    };
    const drawSideBand = (ctx, currentLevelRatio, peakHold, baseX, baseY, now)=>{
        if (!SIDE_BAND_CONFIG.enabled) return;
        const activeLevel = Math.floor(currentLevelRatio * SIDE_BAND_CONFIG.levelsPerBand);
        const activeSegments = activeLevel * 2;
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
            const currentSegLevel = Math.floor(segIdx / 2);
            const isPeakSegment = showPeak && currentSegLevel === peakLevel;
            let color;
            if (segIdx < activeSegments || isPeakSegment) {
                // サイドは③と同じ（水色）単色
                color = COLORS.sideActive;
            } else {
                color = COLORS.inactive;
            }
            drawDoubleSlantedPolygon(ctx, color, xDraw, yDraw, SIDE_BAND_CONFIG.blockWidth, SIDE_BAND_CONFIG.blockHeight, SIDE_BAND_CONFIG.slantLR, SIDE_BAND_CONFIG.slopeTB);
            const currentGapY = segIdx % 2 === 0 ? SIDE_BAND_CONFIG.gapY1 : SIDE_BAND_CONFIG.gapY2;
            currentYBottom -= SIDE_BAND_CONFIG.blockHeight + currentGapY;
        }
    };
    const updatePeakHold = (level, peakHold, now)=>{
        if (level > peakHold.level) {
            peakHold.level = level;
            peakHold.timestamp = now;
        } else if (now - peakHold.timestamp >= SPECTRUM_CONFIG.peakHoldTime) {
            peakHold.level = level;
        }
    };
    const drawSpectrum = ()=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', {
            alpha: false
        });
        if (!ctx) return;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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
            if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
            const rawLevels = getAudioLevels(dataArray);
            for(let i = 0; i < SPECTRUM_CONFIG.numBands; i++){
                const newVal = rawLevels[i];
                const prevVal = previousLevelsRef.current[i] || 0;
                displayLevels[i] = newVal > prevVal ? newVal : Math.max(0.0, prevVal - SPECTRUM_CONFIG.fallSpeed);
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
            const mainLevel = displayLevels[bandIdx] || 0;
            const sideLevel = mainLevel * SIDE_BAND_CONFIG.levelMultiplier;
            updatePeakHold(mainLevel, peakHoldsRef.current[bandIdx], now);
            updatePeakHold(sideLevel, sidePeakHoldsRef.current[bandIdx], now);
            const bandXBase = startX + bandIdx * (SPECTRUM_CONFIG.blockWidth + SPECTRUM_CONFIG.gapX);
            drawSideBand(ctx, sideLevel, sidePeakHoldsRef.current[bandIdx], bandXBase + SIDE_BAND_CONFIG.leftOffsetX, sideLeftYBottom, now);
            // メインバンド描画
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
                const currentSegLevel = Math.floor(segIdx / 2);
                const isPeakSegment = showPeak && currentSegLevel === peakLevel;
                let color;
                if (segIdx < activeSegments || isPeakSegment) {
                    // 【修正】セグメントの高さ（レベル）に応じて、単色を取得
                    color = getSegmentColor(currentSegLevel);
                } else {
                    color = COLORS.inactive;
                }
                drawDoubleSlantedPolygon(ctx, color, xDraw, yDraw, SPECTRUM_CONFIG.blockWidth, SPECTRUM_CONFIG.blockHeight, SPECTRUM_CONFIG.slantLR, SPECTRUM_CONFIG.slopeTB);
                const currentGapY = segIdx % 2 === 0 ? SPECTRUM_CONFIG.gapY1 : SPECTRUM_CONFIG.gapY2;
                currentYBottom -= SPECTRUM_CONFIG.blockHeight + currentGapY;
            }
            drawSideBand(ctx, sideLevel, sidePeakHoldsRef.current[bandIdx], bandXBase + SIDE_BAND_CONFIG.rightOffsetX, sideRightYBottom, now);
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
        if (!audioInitializedRef.current) initializeAudio();
        try {
            if (audioContextRef.current?.state === 'suspended') await audioContextRef.current.resume();
            await audioRef.current.play();
            setIsPlaying(true);
        } catch (error) {
            console.error('Failed to play:', error);
        }
    };
    const handlePause = ()=>{
        audioRef.current?.pause();
        setIsPlaying(false);
    };
    const handleFileUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setIsPlaying(false);
            if (audioFile) URL.revokeObjectURL(audioFile);
            setAudioFile(URL.createObjectURL(file));
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
    const handleDispClick = ()=>{
        if (displayMode === 'TEXT') {
            setDisplayMode('ANIMATION');
        } else {
            setDisplayMode('TEXT');
            setDisplayText("PEAK HOLD"); // Reset text just in case
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1400px] mx-auto space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black rounded-none overflow-hidden relative",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: 1400,
                        height: 400,
                        className: "w-full h-auto block"
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DotMatrixDisplay, {
                        width: 1400,
                        height: 400,
                        className: "absolute top-0 left-0 w-full h-full pointer-events-none z-10",
                        text: displayText,
                        mode: displayMode
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "47cfbccbfea67f55",
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
                                        "47cfbccbfea67f55",
                                        [
                                            currentTime / (duration || 1) * 100,
                                            currentTime / (duration || 1) * 100
                                        ]
                                    ]
                                ]) + " " + "w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed seek-slider"
                            }, void 0, false, {
                                fileName: "[project]/components/spectrum-analyzer.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "47cfbccbfea67f55",
                                dynamic: [
                                    currentTime / (duration || 1) * 100,
                                    currentTime / (duration || 1) * 100
                                ],
                                children: `.seek-slider.__jsx-style-dynamic-selector::-webkit-slider-thumb{appearance:none;width:0;height:0}.seek-slider.__jsx-style-dynamic-selector::-moz-range-thumb{border:none;width:0;height:0}.seek-slider.__jsx-style-dynamic-selector::-webkit-slider-runnable-track{background:linear-gradient(to right,#fffc 0%,#fffc ${currentTime / (duration || 1) * 100}%,#ffffff1a ${currentTime / (duration || 1) * 100}%,#ffffff1a 100%);height:2px}`
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 475,
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
                            lineNumber: 500,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-6 text-sm font-light tracking-widest text-white/70 font-mono",
                children: fileName
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 506,
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
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "audio-upload",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            asChild: true,
                            className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/spectrum-analyzer.tsx",
                                        lineNumber: 514,
                                        columnNumber: 55
                                    }, this),
                                    " UPLOAD AUDIO"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/spectrum-analyzer.tsx",
                                lineNumber: 514,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/spectrum-analyzer.tsx",
                            lineNumber: 513,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: isPlaying ? handlePause : handlePlay,
                        size: "sm",
                        disabled: !audioFile,
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 518,
                                    columnNumber: 26
                                }, this),
                                " PAUSE"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 518,
                                    columnNumber: 74
                                }, this),
                                " PLAY"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 517,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleDispClick,
                        size: "sm",
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/spectrum-analyzer.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this),
                            " DISP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowGuide(!showGuide),
                        size: "sm",
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                        children: showGuide ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 524,
                                    columnNumber: 26
                                }, this),
                                " GUIDE OFF"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer.tsx",
                                    lineNumber: 524,
                                    columnNumber: 79
                                }, this),
                                " GUIDE ON"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            audioFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: audioFile,
                className: "hidden",
                loop: true
            }, audioFile, false, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 527,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'white',
                    fontSize: '10px'
                },
                children: "DEPLOYED VERSION 0.2.0"
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/spectrum-analyzer.tsx",
        lineNumber: 461,
        columnNumber: 6
    }, this);
}
_s(SpectrumAnalyzer, "tiXgx9G4uMPixoBR1nuthlztIyg=");
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