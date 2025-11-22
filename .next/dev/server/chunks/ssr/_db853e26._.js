module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * VFD (蛍光表示管) 風カラーパレット定義
 */ __turbopack_context__.s([
    "VFD_COLORS",
    ()=>VFD_COLORS
]);
const VFD_COLORS = {
    // 1. VFD消灯 (紫) - 背景色および消灯時の色として使用
    OFF: '#231e2dff',
    // 2. 蛍光緑
    GREEN: '#00ff15ff',
    // 3. 蛍光青
    BLUE: '#1876eaff',
    // 4. 濃い蛍光シアン (メインのアクティブ色)
    CYAN: '#1fd8f0ff',
    // 5. 淡い蛍光シアン (サイドバンドなどの高輝度/薄い色)
    CYAN_LIGHT: '#b0f5ffff',
    // 6. 蛍光赤
    RED: '#ff0000ff'
};
}),
"[project]/components/dot-matrix/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 作成した定数ファイルをインポートしてください
__turbopack_context__.s([
    "DOT_MATRIX_CONFIG",
    ()=>DOT_MATRIX_CONFIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
;
const DOT_MATRIX_CONFIG = {
    position: {
        x: 542.7,
        y: 126
    },
    // セル（1文字分）の設定
    rows: 7,
    cols: 5,
    numCells: 12,
    pixel: {
        width: 5.7,
        height: 6.8,
        slantLR: 3,
        slopeTB: 0.0,
        stackSlant: 4.3
    },
    // ピクセル間の隙間
    dotGapX: 3.65,
    dotGapY: 2.8,
    cellGap: 25,
    // 見た目の設定：定数を使用
    color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN,
    offColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].OFF,
    glowBlur: 0,
    // デバッグ用
    debugAllOn: false
};
}),
"[project]/components/dot-matrix/frames.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOLPHIN_CUSTOM_FRAMES",
    ()=>DOLPHIN_CUSTOM_FRAMES
]);
const DOLPHIN_CUSTOM_FRAMES = [
    // Frame 1:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111'
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 2:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111'
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 3:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111'
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 4:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111'
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 5:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111'
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 6:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111'
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 7:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 8:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 9:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 10:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 11:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1  11',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1 111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ]
    ],
    // Frame 12:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ]
    ],
    // Frame 13:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ]
    ],
    // Frame 14:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ]
    ],
    // Frame 15:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ]
    ],
    // Frame 16:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1  11',
            '11111',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1  11',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1111 ',
            '1    ',
            '     '
        ]
    ],
    // Frame 17:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1111 ',
            '     ',
            '     '
        ]
    ],
    // Frame 18:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1111 ',
            '     ',
            '     '
        ]
    ],
    // Frame 19:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1111 ',
            '     ',
            '     '
        ]
    ],
    // Frame 20:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1111 ',
            '     ',
            '     '
        ]
    ],
    // Frame 21:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            '11111',
            '  1  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '11111',
            '1    ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '1111 ',
            '     ',
            '     '
        ]
    ],
    // Frame 22:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 23:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 24:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 25:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 26:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 27:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 28:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 29:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 30:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 31:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 32:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 33:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 34:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 35:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 36:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 11  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ]
    ],
    // Frame 37:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 11  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ]
    ],
    // Frame 38:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 11  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ]
    ],
    // Frame 39:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 11  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ]
    ],
    // Frame 40:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 11  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    '
        ]
    ],
    // Frame 41:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '111  ',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 42:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '111  ',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 43:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '111  ',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 44:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '111  ',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 45:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '111  ',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 46:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '  1  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            '  111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 47:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '  1  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            '  111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 48:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '  1  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            '  111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 49:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '  1  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            '  111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 50:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '  1  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            '  111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 51:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 52:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 53:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 54:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 55:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11   ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 56:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 57:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 58:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 59:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 60:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111'
        ]
    ],
    // Frame 61:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ]
    ],
    // Frame 62:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ]
    ],
    // Frame 63:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ]
    ],
    // Frame 64:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ]
    ],
    // Frame 65:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ]
    ],
    // Frame 66:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '1    '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '11111',
            '11   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11  1',
            ' 1 11',
            '111  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1 1  '
        ]
    ],
    // Frame 67:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11  1',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ]
    ],
    // Frame 68:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11  1',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ]
    ],
    // Frame 69:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11  1',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ]
    ],
    // Frame 70:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11  1',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1    '
        ]
    ],
    // Frame 71:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1111',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111 1',
            '   11',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '    1',
            '1    '
        ]
    ],
    // Frame 72:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 73:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 74:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 75:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1111',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 76:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 ',
            '  111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 77:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 ',
            '  111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 78:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 ',
            '  111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 79:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 ',
            '  111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 80:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '   1 ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  11 ',
            '  111',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 81:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 82:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 83:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 84:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 85:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 86:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 87:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 88:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 89:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            ' 1  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 90:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '1   1',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 11  ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 91:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 92:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 93:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 94:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 95:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '11111',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  111',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '1   1',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '  1  ',
            '  11 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 96:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 97:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 98:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 99:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 100:
    [
        [
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1111',
            '1  1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '  11 ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '  1  ',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 101:
    [
        [
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 102:
    [
        [
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 103:
    [
        [
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 104:
    [
        [
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 105:
    [
        [
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1  1',
            '11111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '  1  ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 106:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1  1',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 107:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1  1',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 108:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1  1',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 109:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1  1',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 110:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1  1',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 1111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1  1',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '  1 1',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 111:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1  1',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '  1 1',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 112:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1  1',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '  1 1',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 113:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1  1',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '  1 1',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 114:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1  1',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '  1 1',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 115:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '111  ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1  1',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '  1 1',
            '11  1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 116:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1    ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 117:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1    ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 118:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1    ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 119:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1    ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 120:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1    ',
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '11   ',
            '    1',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 121:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '    1',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 122:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '    1',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 123:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '    1',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 124:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '    1',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 125:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '    1',
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 126:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 127:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 128:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 129:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 130:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 131:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 132:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 133:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 134:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 135:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '11   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 136:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 137:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 138:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 139:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 140:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '    1',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   11',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 141:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 142:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 143:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 144:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 145:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            ' 11  ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '1111 ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '  1  ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 146:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '  1  ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 147:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '  1  ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 148:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '  1  ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 149:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '  1  ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 150:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '1111 ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '   11',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '  1  ',
            '  111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 151:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 152:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 153:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 154:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '   11',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 155:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '  1  ',
            '1111 ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '   11',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 156:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 157:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 158:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 159:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '1    ',
            '  1  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 160:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            ' 1111',
            '11111',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '1    ',
            '11111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 161:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 162:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 163:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 164:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '1111 ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 165:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1  1',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 166:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 167:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 168:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 169:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '111  ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 170:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            '11111',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '    1',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11   ',
            ' 1   ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 171:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 172:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 173:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 174:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 175:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            ' 1111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '11111',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '11111',
            '11   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 176:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            ' 1111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 177:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            ' 1111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 178:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            ' 1111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 179:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            ' 1111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 180:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            ' 1111',
            '1    ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 181:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1111 ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '     '
        ]
    ],
    // Frame 182:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1111 ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '     '
        ]
    ],
    // Frame 183:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1111 ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '     '
        ]
    ],
    // Frame 184:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '1111 ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1111 ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  111',
            '     '
        ]
    ],
    // Frame 185:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1    ',
            ' 1   ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '11111',
            '111  ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   11',
            '1111 ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '1111 ',
            ' 11  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     '
        ]
    ],
    // Frame 186:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     '
        ]
    ],
    // Frame 187:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     '
        ]
    ],
    // Frame 188:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     '
        ]
    ],
    // Frame 189:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     '
        ]
    ],
    // Frame 190:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1 1',
            '    1',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '  1  '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1111',
            '     '
        ]
    ],
    // Frame 191:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 192:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 193:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 194:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 195:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '  1  ',
            '    1',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 196:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 197:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 198:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 199:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            ' 1   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 200:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '    1',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            ' 1   ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 201:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 202:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 203:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 204:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 205:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '   1 ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 206:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 207:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 208:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 209:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 210:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 211:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 212:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 213:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 214:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 215:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 216:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 217:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 218:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 219:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ],
    // Frame 220:
    [
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ],
        [
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     ',
            '     '
        ]
    ]
];
}),
"[project]/components/dot-matrix/patterns.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAR_PATTERNS",
    ()=>CHAR_PATTERNS
]);
const CHAR_PATTERNS = {
    '0': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    '1': [
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    '2': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    '3': [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    '4': [
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ]
    ],
    '5': [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    '6': [
        [
            0,
            0,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    '7': [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ]
    ],
    '8': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    '9': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ]
    ],
    'A': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    'B': [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ]
    ],
    'C': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    'D': [
        [
            1,
            1,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            1,
            1,
            0,
            0
        ]
    ],
    'E': [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    'F': [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ]
    ],
    'G': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    'H': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    'I': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    'J': [
        [
            0,
            0,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            0,
            1,
            1,
            0,
            0
        ]
    ],
    'K': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    'L': [
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    'M': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    'N': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    'O': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    'P': [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ]
    ],
    'Q': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            0,
            1,
            1,
            0,
            1
        ]
    ],
    'R': [
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ],
        [
            1,
            0,
            1,
            0,
            0
        ],
        [
            1,
            0,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    'S': [
        [
            0,
            1,
            1,
            1,
            1
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            0
        ]
    ],
    'T': [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    'U': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    'V': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    'W': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ]
    ],
    'X': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ]
    ],
    'Y': [
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            1,
            0,
            0,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ]
    ],
    'Z': [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ],
    ' ': [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ]
    ],
    '/': [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            1
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ]
    ],
    '-': [
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ]
    ],
    '\'': [
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0
        ]
    ],
    '[': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            0,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ],
    ']': [
        [
            0,
            1,
            1,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            0,
            0,
            1,
            0
        ],
        [
            0,
            1,
            1,
            1,
            0
        ]
    ]
};
}),
"[project]/components/dot-matrix/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotMatrixDisplay",
    ()=>DotMatrixDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dot-matrix/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$frames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dot-matrix/frames.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$patterns$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dot-matrix/patterns.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DotMatrixDisplay({ width = 600, height = 100, className, text = "PEAK HOLD", mode = 'TEXT' }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ==========================================
    // ⚙️ スクロール動作の設定
    // ==========================================
    const SCROLL_CONFIG = {
        startPause: 2000,
        speed: 20,
        charGap: 1
    };
    // 状態管理
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('STATIC');
    const stateStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const frameIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastFrameTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const ANIMATION_SPEED = 30;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        stateRef.current = 'STATIC';
        stateStartTimeRef.current = 0;
        scrollOffsetRef.current = 0;
        frameIndexRef.current = 0;
        lastTimeRef.current = 0;
    }, [
        mode,
        text
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId;
        const render = (timestamp)=>{
            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            if (!stateStartTimeRef.current) stateStartTimeRef.current = timestamp;
            const dt = (timestamp - lastTimeRef.current) / 1000;
            lastTimeRef.current = timestamp;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // --- 設定値 ---
            const { position, rows, cols, numCells, pixel, dotGapX, dotGapY, cellGap, color, offColor, glowBlur, debugAllOn } = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOT_MATRIX_CONFIG"];
            const dotPitch = pixel.width + dotGapX;
            const cellWidth = cols * dotPitch - dotGapX;
            const cellPitch = cellWidth + cellGap;
            // ★ここが修正点: 論理的な1文字の幅（ドット列数）
            // 文字データ(cols) + 設定した空白(charGap)
            const CHAR_COLS = cols + SCROLL_CONFIG.charGap;
            // 画面全体の論理列数も空白分を含めて広げる
            const screenCols = numCells * CHAR_COLS;
            const textCols = (text ? text.length : 0) * CHAR_COLS;
            // -------------------------------------------------------
            // 状態更新
            // -------------------------------------------------------
            if (mode === 'ANIMATION') {
                if (timestamp - lastFrameTimeRef.current > ANIMATION_SPEED) {
                    frameIndexRef.current = (frameIndexRef.current + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$frames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOLPHIN_CUSTOM_FRAMES"].length;
                    lastFrameTimeRef.current = timestamp;
                }
            } else if (mode === 'TEXT' && text) {
                const isOverflow = text.length > numCells;
                if (!isOverflow) {
                    stateRef.current = 'STATIC';
                    scrollOffsetRef.current = 0;
                } else {
                    if (stateRef.current === 'STATIC') {
                        // 待機中
                        scrollOffsetRef.current = 0;
                        if (timestamp - stateStartTimeRef.current > SCROLL_CONFIG.startPause) {
                            stateRef.current = 'SCROLLING';
                        }
                    } else if (stateRef.current === 'SCROLLING') {
                        const moveAmount = SCROLL_CONFIG.speed * dt;
                        const prevOffset = scrollOffsetRef.current;
                        scrollOffsetRef.current += moveAmount;
                        // ループ判定
                        if (scrollOffsetRef.current > textCols) {
                            scrollOffsetRef.current = -screenCols;
                        }
                        // 停止判定
                        if (prevOffset < 0 && scrollOffsetRef.current >= 0) {
                            scrollOffsetRef.current = 0;
                            stateRef.current = 'STATIC';
                            stateStartTimeRef.current = timestamp;
                        }
                    }
                }
            }
            // -------------------------------------------------------
            // 描画
            // -------------------------------------------------------
            ctx.shadowBlur = glowBlur;
            ctx.shadowColor = color;
            const totalHeight = rows * (pixel.height + dotGapY) - dotGapY;
            for(let cellIndex = 0; cellIndex < numCells; cellIndex++){
                const cellStartX = position.x + cellIndex * cellPitch;
                const cellStartY = position.y - totalHeight;
                for(let r = 0; r < rows; r++){
                    const rowIndexFromBottom = rows - 1 - r;
                    const stackShift = rowIndexFromBottom * pixel.stackSlant;
                    for(let c = 0; c < cols; c++){
                        const x = cellStartX + c * dotPitch + stackShift;
                        const y = cellStartY + r * (pixel.height + dotGapY);
                        let isOn = debugAllOn;
                        if (!isOn) {
                            if (mode === 'ANIMATION') {
                                const currentFrame = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$frames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DOLPHIN_CUSTOM_FRAMES"][frameIndexRef.current];
                                if (currentFrame) {
                                    const cellString = currentFrame[r][cellIndex];
                                    if (cellString && cellString[c] === '1') isOn = true;
                                }
                            } else if (mode === 'TEXT' && text) {
                                // 論理座標マッピング
                                // 各セルも、空白分(charGap)を含んだ幅を持っているとみなして計算
                                const logicalCol = cellIndex * CHAR_COLS + c;
                                const targetDataCol = Math.floor(logicalCol + scrollOffsetRef.current);
                                if (targetDataCol >= 0 && targetDataCol < textCols) {
                                    const charIndex = Math.floor(targetDataCol / CHAR_COLS);
                                    const colIndex = targetDataCol % CHAR_COLS;
                                    // 文字データの範囲内（空白部分でない）場合のみ描画
                                    if (colIndex < cols) {
                                        const char = text[charIndex];
                                        const pattern = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$patterns$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAR_PATTERNS"][char.toUpperCase()] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$patterns$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAR_PATTERNS"][' '];
                                        if (pattern && pattern[r] && pattern[r][colIndex]) {
                                            isOn = true;
                                        }
                                    }
                                }
                            }
                        }
                        ctx.fillStyle = isOn ? color : offColor;
                        ctx.shadowBlur = isOn ? glowBlur : 0;
                        const drawX = x;
                        const drawY = y + pixel.height;
                        const p4 = {
                            x: drawX,
                            y: drawY
                        };
                        const p3 = {
                            x: drawX + pixel.width,
                            y: drawY - pixel.slopeTB
                        };
                        const p1 = {
                            x: drawX + pixel.slantLR,
                            y: drawY - pixel.height
                        };
                        const p2 = {
                            x: drawX + pixel.width + pixel.slantLR,
                            y: drawY - pixel.height - pixel.slopeTB
                        };
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.lineTo(p3.x, p3.y);
                        ctx.lineTo(p4.x, p4.y);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(render);
        };
        render(0);
        return ()=>{
            cancelAnimationFrame(animationFrameId);
        };
    }, [
        mode,
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        width: width,
        height: height,
        className: className
    }, void 0, false, {
        fileName: "[project]/components/dot-matrix/index.tsx",
        lineNumber: 210,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/spectrum-analyzer/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLORS",
    ()=>COLORS,
    "SIDE_BAND_CONFIG",
    ()=>SIDE_BAND_CONFIG,
    "SPECTRUM_CONFIG",
    ()=>SPECTRUM_CONFIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
;
const SPECTRUM_CONFIG = {
    numBands: 17,
    segmentsPerBand: 26,
    levelsPerBand: 13,
    blockWidth: 24.5,
    blockHeight: 4.8,
    gapX: 43.60,
    gapY1: 2.2,
    gapY2: 3.35,
    slantLR: 2.0,
    slopeTB: 3.5,
    stackSlant: 3.35,
    offsetX: 186.5,
    offsetY: 62.2,
    divisor: 1.8,
    fallSpeed: 0.03,
    fadeAlpha: 0,
    fftSize: 8192,
    smoothing: 0.3,
    minDecibels: -75,
    maxDecibels: -20,
    peakHoldTime: 200
};
const SIDE_BAND_CONFIG = {
    enabled: true,
    segmentsPerBand: 26,
    levelsPerBand: 13,
    blockWidth: 7.5,
    blockHeight: 4.8,
    gapY1: 2.2,
    gapY2: 3.35,
    slantLR: 2.0,
    slopeTB: 2.0,
    stackSlant: 3.35,
    leftOffsetX: -11,
    rightOffsetX: 29,
    leftOffsetY: -2.3,
    rightOffsetY: 4,
    linkToBand: 'same',
    levelMultiplier: 1
};
const COLORS = {
    inactive: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].OFF,
    activeBottom: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN,
    activeMiddle: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].GREEN,
    activeTop: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].BLUE,
    sideActive: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN_LIGHT,
    iconActive: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN,
    iconInactive: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].OFF
};
}),
"[project]/components/spectrum-analyzer/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawDoubleSlantedPolygon",
    ()=>drawDoubleSlantedPolygon,
    "drawIcon",
    ()=>drawIcon,
    "drawSideBand",
    ()=>drawSideBand,
    "formatTime",
    ()=>formatTime,
    "getAudioLevels",
    ()=>getAudioLevels,
    "getSegmentColor",
    ()=>getSegmentColor,
    "updatePeakHold",
    ()=>updatePeakHold
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/config.ts [app-ssr] (ecmascript)");
;
const formatTime = (seconds)=>{
    if (!isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};
const getSegmentColor = (levelIndex)=>{
    const middleLevel = 6;
    if (levelIndex < middleLevel) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].activeBottom;
    } else if (levelIndex === middleLevel) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].activeMiddle;
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].activeTop;
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
    const logStep = (logMax - logMin) / __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands;
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands; i++){
        const start = Math.floor(Math.exp(logMin + i * logStep));
        const end = Math.floor(Math.exp(logMin + (i + 1) * logStep));
        let sum = 0, count = 0;
        for(let j = start; j < end && j < dataArray.length; j++){
            sum += dataArray[j];
            count++;
        }
        const val = count > 0 ? sum / count / 255.0 * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].divisor : 0;
        levels.push(Math.max(0.0, Math.min(val, 1.0)));
    }
    return levels;
};
const updatePeakHold = (level, peakHold, now)=>{
    if (level > peakHold.level) {
        peakHold.level = level;
        peakHold.timestamp = now;
    } else if (now - peakHold.timestamp >= __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].peakHoldTime) {
        peakHold.level = level;
    }
};
const drawSideBand = (ctx, currentLevelRatio, peakHold, baseX, baseY, now)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].enabled) return;
    const activeLevel = Math.floor(currentLevelRatio * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].levelsPerBand);
    const activeSegments = activeLevel * 2;
    let peakLevel = 0;
    let showPeak = false;
    if (now - peakHold.timestamp < __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].peakHoldTime) {
        peakLevel = Math.floor(peakHold.level * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].levelsPerBand);
        showPeak = peakLevel > activeLevel;
    }
    let currentYBottom = baseY;
    for(let segIdx = 0; segIdx < __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].segmentsPerBand; segIdx++){
        const xOffset = segIdx * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].stackSlant;
        const xDraw = baseX + xOffset;
        const yDraw = currentYBottom;
        const currentSegLevel = Math.floor(segIdx / 2);
        const isPeakSegment = showPeak && currentSegLevel === peakLevel;
        let color;
        if (segIdx < activeSegments || isPeakSegment) {
            color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].sideActive;
        } else {
            color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].inactive;
        }
        drawDoubleSlantedPolygon(ctx, color, xDraw, yDraw, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].blockWidth, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].blockHeight, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].slantLR, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].slopeTB);
        const currentGapY = segIdx % 2 === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].gapY1 : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].gapY2;
        currentYBottom -= __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].blockHeight + currentGapY;
    }
};
const drawIcon = (ctx, icon, currentDisplayMode, isPlaying, audioFile)=>{
    const isActiveMode = icon.activeModes.includes(currentDisplayMode);
    const meetsCondition = icon.condition ? icon.condition(isPlaying, audioFile) : true;
    const isLit = isActiveMode && meetsCondition;
    const scaleX = ctx.canvas.width / 1400;
    const scaleY = ctx.canvas.height / 400;
    const x = icon.offsetX * scaleX;
    const y = icon.offsetY * scaleY;
    const w = icon.width * scaleX;
    const h = icon.height * scaleY;
    ctx.fillStyle = isLit ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].iconActive : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].iconInactive;
    ctx.shadowBlur = isLit ? 10 : 0;
    ctx.shadowColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].iconActive;
    ctx.fillRect(x, y, w, h);
    ctx.shadowBlur = 0;
};
}),
"[project]/components/dot-matrix/masked-display.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dot-matrix/masked-display.tsx
__turbopack_context__.s([
    "MaskedDotMatrix",
    ()=>MaskedDotMatrix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function MaskedDotMatrix({ width, height, maskSrc, active, iconX = 0, iconY = 0, iconWidth, iconHeight, color = '#1fd7f0', inactiveColor = 'rgba(35, 30, 45, 0.0)', dotSize = 3, gap = 2, className }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const img = new Image();
        img.src = maskSrc;
        img.crossOrigin = 'anonymous';
        img.onload = ()=>{
            const offCanvas = document.createElement('canvas');
            offCanvas.width = width;
            offCanvas.height = height;
            const ctx = offCanvas.getContext('2d');
            if (!ctx) return;
            // 描画エリアをクリア
            ctx.clearRect(0, 0, width, height);
            // ★指定された位置とサイズでマスク画像を描画
            const drawW = iconWidth || width;
            const drawH = iconHeight || height;
            ctx.drawImage(img, iconX, iconY, drawW, drawH);
            const imageData = ctx.getImageData(0, 0, width, height).data;
            const validPoints = [];
            const step = dotSize + gap;
            // 画像が描画された範囲だけを重点的にスキャン（パフォーマンス最適化）
            // ※念のため全体スキャンでも良いが、範囲指定した方が軽い
            const startX = Math.max(0, Math.floor(iconX / step) * step);
            const endX = Math.min(width, startX + drawW + step);
            const startY = Math.max(0, Math.floor(iconY / step) * step);
            const endY = Math.min(height, startY + drawH + step);
            for(let y = startY; y < endY; y += step){
                for(let x = startX; x < endX; x += step){
                    const index = (y * width + x) * 4 + 3 // アルファチャンネル
                    ;
                    // 不透明度が一定以上なら「光るドット」とみなす
                    if (imageData[index] > 100) {
                        validPoints.push({
                            x,
                            y
                        });
                    }
                }
            }
            setPoints(validPoints);
            setIsLoaded(true);
        };
    }, [
        maskSrc,
        width,
        height,
        dotSize,
        gap,
        iconX,
        iconY,
        iconWidth,
        iconHeight
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx || !isLoaded) return;
        ctx.clearRect(0, 0, width, height);
        // 点灯時は指定色、消灯時は透明(または指定色)
        ctx.fillStyle = active ? color : inactiveColor;
        if (active) {
            ctx.shadowBlur = 5;
            ctx.shadowColor = color;
        } else {
            ctx.shadowBlur = 0;
        }
        points.forEach((p)=>{
            ctx.fillRect(p.x, p.y, dotSize, dotSize);
        });
    }, [
        active,
        points,
        isLoaded,
        color,
        inactiveColor,
        width,
        height,
        dotSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        width: width,
        height: height,
        className: className
    }, void 0, false, {
        fileName: "[project]/components/dot-matrix/masked-display.tsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/spectrum-analyzer/icon-definitions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUSTOM_ICONS",
    ()=>CUSTOM_ICONS
]);
// 作成した定数ファイルをインポートしてください
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
;
const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
const CUSTOM_ICONS = [
    {
        id: 'mp3-logo',
        name: 'MP3',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/mp3.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 348,
        y: 106.5,
        width: 100,
        height: 18,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].RED
    },
    {
        id: 'mp3-guide',
        name: 'MP3GUIDE',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/mp3-guide.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 312.5,
        y: 133.15,
        width: 233,
        height: 150,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].GREEN
    },
    {
        id: 'balance-center',
        name: 'CENTER',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/balance-center.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 1368.5,
        y: 279.8,
        width: 233,
        height: 9.3,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].RED
    },
    {
        id: 'balance-guide',
        name: 'BALANCEGUIDE',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/balance-guide.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 1325,
        y: 341,
        width: 233,
        height: 157,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].GREEN
    },
    {
        id: 'balance-seat',
        name: 'BALANCESEAT',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/balance-seat.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 1334.5,
        y: 317,
        width: 233,
        height: 73,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].GREEN
    },
    {
        id: 'cd-circle',
        name: 'CDCIRCLE',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/cd-circle.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 92,
        y: 260.5,
        width: 233,
        height: 80,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].GREEN
    },
    {
        id: 'cd-in',
        name: 'CDIN',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/cd-in.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 1359.6,
        y: 128.9,
        width: 233,
        height: 43,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].RED
    },
    {
        id: 'corner-ring',
        name: 'CORNERRING',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/corner-ring.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 16,
        y: 337.5,
        width: 233,
        height: 28,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].GREEN
    },
    {
        id: 'corner',
        name: 'CORNER',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/corner.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 4,
        y: 340.7,
        width: 233,
        height: 78.2,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].BLUE
    },
    {
        id: 'folder',
        name: 'FOLDER',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/folder.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 410.2,
        y: 131.5,
        width: 233,
        height: 60,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN
    },
    {
        id: 'folder-in',
        name: 'FOLDERIN',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/folder-in.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 416,
        y: 121,
        width: 233,
        height: 40,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].BLUE
    },
    {
        id: 'note-1',
        name: 'NOTE1',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/note-1.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 490.9,
        y: 97,
        width: 233,
        height: 34,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN
    },
    {
        id: 'note-2',
        name: 'NOTE2',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/note-2.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 459,
        y: 102,
        width: 233,
        height: 34,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN
    },
    {
        id: 'note-3',
        name: 'NOTE3',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/note-3.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 456.7,
        y: 131.3,
        width: 233,
        height: 34,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN
    },
    {
        id: 'note-ring',
        name: 'NOTERING',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/note-ring.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 461.5,
        y: 125,
        width: 233,
        height: 62,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].BLUE
    },
    {
        id: 'posi',
        name: 'POSI',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/posi.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 1348,
        y: 340,
        width: 233,
        height: 18,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].RED
    },
    {
        id: 'sa',
        name: 'SA',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/sa.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 298.5,
        y: 82.5,
        width: 233,
        height: 21,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN
    },
    {
        id: 'cd',
        name: 'CD',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/cd.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 107.8,
        y: 216.5,
        width: 233,
        height: 22,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN
    },
    {
        id: 'rom',
        name: 'ROM',
        type: 'IMAGE',
        maskSrc: `${basePath}/images/masks/rom.svg`,
        activeModes: [
            'UPLOAD_PROMPT',
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: ()=>true,
        x: 107,
        y: 244,
        width: 233,
        height: 45,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].CYAN
    }
];
}),
"[project]/components/spectrum-analyzer/icons-layer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconsLayer",
    ()=>IconsLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$masked$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dot-matrix/masked-display.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$icon$2d$definitions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/icon-definitions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function IconsLayer({ displayMode, isPlaying, audioFile, width, height }) {
    const hasFile = !!audioFile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-0 left-0 w-full h-full pointer-events-none z-20",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$icon$2d$definitions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CUSTOM_ICONS"].map((icon)=>{
            const isModeActive = icon.activeModes.includes(displayMode);
            const isConditionMet = icon.condition ? icon.condition(isPlaying, hasFile) : true;
            const isActive = isModeActive && isConditionMet;
            // アイコンの基準位置（左下）を計算 (px単位)
            const topPositionPx = icon.y - icon.height;
            // ★ここが修正ポイント：ピクセルをパーセントに変換する
            const leftPct = icon.x / width * 100;
            const topPct = topPositionPx / height * 100;
            const widthPct = icon.width / width * 100;
            const heightPct = icon.height / height * 100;
            const stylePos = {
                position: 'absolute',
                left: `${leftPct}%`,
                top: `${topPct}%`,
                width: `${widthPct}%`,
                height: `${heightPct}%`,
                transition: 'opacity 0.2s ease-in-out',
                opacity: isActive ? 1 : 0.1
            };
            // 1. SVGコンポーネント
            if (icon.type === 'COMPONENT' && icon.component) {
                const SvgComponent = icon.component;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: stylePos,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SvgComponent, {
                        color: icon.color || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].iconActive,
                        active: isActive,
                        // width/height は stylePos で制御するので、
                        // SVG自体は viewBox に合わせて 100% 表示させるためのダミー値を渡すか、
                        // あるいはコンポーネント側で width="100%" height="100%" とする
                        width: 100,
                        height: 100
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this)
                }, icon.id, false, {
                    fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this);
            }
            // 2. ドットマトリクス
            if (icon.type === 'DOT_MATRIX' && icon.maskSrc) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$masked$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaskedDotMatrix"], {
                    // Canvas全体を描画領域とするため、width/heightは親のpropsをそのまま使う
                    width: width,
                    height: height,
                    maskSrc: icon.maskSrc,
                    active: isActive,
                    // 描画位置はCanvas内部の座標系(px)で指定する必要があるため、元の値を渡す
                    iconX: icon.x,
                    iconY: topPositionPx,
                    iconWidth: icon.width,
                    iconHeight: icon.height,
                    color: icon.color || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].iconActive,
                    className: "absolute top-0 left-0 w-full h-full"
                }, icon.id, false, {
                    fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
                    lineNumber: 73,
                    columnNumber: 13
                }, this);
            }
            // 3. 画像 (SVG/PNG)
            if (icon.type === 'IMAGE' && icon.maskSrc) {
                if (icon.color) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...stylePos,
                            backgroundColor: icon.color,
                            maskImage: `url(${icon.maskSrc})`,
                            WebkitMaskImage: `url(${icon.maskSrc})`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskPosition: 'left bottom',
                            WebkitMaskPosition: 'left bottom',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            filter: isActive ? `drop-shadow(0 0 8px ${icon.color})` : 'none'
                        }
                    }, icon.id, false, {
                        fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
                        lineNumber: 95,
                        columnNumber: 16
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: icon.maskSrc,
                    alt: icon.name,
                    style: {
                        ...stylePos,
                        objectFit: 'contain',
                        objectPosition: 'left bottom'
                    }
                }, icon.id, false, {
                    fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
                    lineNumber: 115,
                    columnNumber: 13
                }, this);
            }
            return null;
        })
    }, void 0, false, {
        fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/svg-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/svg-utils.ts
__turbopack_context__.s([
    "parseAndSortPaths",
    ()=>parseAndSortPaths
]);
const parseAndSortPaths = (svgContent, center)=>{
    // サーバーサイド実行時のガード（DOMParserがないため）
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
}),
"[project]/components/spectrum-analyzer/RingLevelizer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RingLevelizer",
    ()=>RingLevelizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$svg$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/svg-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const RingLevelizer = ({ svgContent, config, width = "100%", height = "100%", debug = false })=>{
    const [paths, setPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const prevTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const VIEW_BOX = "0 0 134 117";
    const CENTER = {
        x: 67,
        y: 58.5
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!svgContent) return;
        const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$svg$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAndSortPaths"])(svgContent, CENTER);
        setPaths(sorted);
    }, [
        svgContent
    ]);
    const animate = (time)=>{
        if (prevTimeRef.current !== undefined) {
            setOffset((prev)=>{
                const next = prev + config.direction * config.rotationSpeed;
                if (paths.length > 0) {
                    if (next >= paths.length) return next - paths.length;
                    if (next < 0) return next + paths.length;
                }
                return next;
            });
        }
        prevTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // パスがあれば即アニメーション開始
        if (paths.length > 0) {
            requestRef.current = requestAnimationFrame(animate);
        }
        return ()=>{
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [
        paths,
        config.rotationSpeed,
        config.direction
    ]);
    const isLit = (index)=>{
        if (paths.length === 0) return false;
        const total = paths.length;
        const currentBase = Math.floor(offset) % total;
        const dist = Math.floor(total / config.numSets);
        for(let i = 0; i < config.numSets; i++){
            const start = (currentBase + i * dist) % total;
            let rel = index - start;
            if (rel < 0) rel += total;
            if (rel < config.setSize) return true;
        }
        return false;
    };
    // パスがまだない場合（一瞬）は何も表示しない
    if (paths.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width,
            height,
            position: "relative"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "100%",
            viewBox: VIEW_BOX,
            preserveAspectRatio: "xMidYMid meet",
            style: {
                overflow: "visible"
            },
            children: [
                debug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "0",
                    width: "134",
                    height: "117",
                    fill: "none",
                    stroke: "red",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/RingLevelizer.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: paths.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: d,
                            fill: isLit(i) ? config.litColor : config.dimColor,
                            stroke: "none",
                            style: {
                                transition: "fill 0.05s linear"
                            }
                        }, i, false, {
                            fileName: "[project]/components/spectrum-analyzer/RingLevelizer.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/RingLevelizer.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/spectrum-analyzer/RingLevelizer.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/spectrum-analyzer/RingLevelizer.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/lib/ring-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/ring-data.ts
__turbopack_context__.s([
    "RING_SVG_DATA",
    ()=>RING_SVG_DATA
]);
const RING_SVG_DATA = {
    'ring-level7.svg': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 134 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g><path d="M33.389,97.324l-2.083,2.5c2.083,1.25 3.75,2.5 5.833,3.75l0.833,-3.333c-1.667,-1.25 -2.917,-2.083 -4.583,-2.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M8.389,74.824c0.833,1.25 1.667,2.917 2.917,4.583l4.167,-0.417c-0.833,-1.25 -1.667,-2.083 -2.083,-3.333l-5,-0.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.972,35.658l4.583,4.583c0,-1.667 0.833,-2.917 1.25,-4.167l-4.167,-5.417c-0.833,1.667 -1.25,3.333 -1.667,5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M21.722,18.574l-2.5,-6.25c-1.667,1.25 -3.333,2.917 -5,4.167l3.333,5.833c1.25,-1.25 2.5,-2.5 4.167,-3.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.306,46.908l5,3.333l0,-4.167l-4.583,-4.583c-0.417,2.083 -0.417,3.75 -0.417,5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.306,53.158c0.417,1.667 0.417,3.333 0.833,5l5,2.083c0,-1.25 -0.417,-2.5 -0.833,-3.75l-5,-3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M3.806,64.408c0.417,1.667 1.25,2.917 1.667,4.583l5,0.833c-0.417,-1.25 -1.25,-2.083 -1.667,-3.333l-5,-2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M29.222,93.991c-1.25,-0.833 -2.5,-2.083 -3.75,-3.333l-3.333,1.667c1.667,1.667 3.333,2.917 5,4.167l2.083,-2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M7.139,25.658l4.167,5c0.833,-1.25 1.667,-2.917 2.5,-4.167l-3.333,-5.833c-1.25,1.667 -2.083,3.333 -3.333,5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M21.722,86.908c-0.833,-0.833 -1.667,-2.083 -2.917,-3.333l-4.167,0.417c1.25,1.667 2.5,2.917 3.75,4.583l3.333,-1.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M87.139,114.408l-5,-4.167c-1.667,0.417 -3.75,0.417 -5.417,0.417l3.75,4.167c2.083,0 4.583,-0.417 6.667,-0.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M98.806,14.408c-2.5,-1.667 -5.417,-3.333 -8.333,-4.583l-3.75,5.833c2.5,1.25 5,2.917 7.5,4.167l4.583,-5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M116.306,42.324c1.25,2.083 2.5,4.167 3.333,6.25l7.5,-2.5c-1.25,-2.5 -2.917,-5 -4.167,-7.5l-6.667,3.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M131.722,63.574l-7.917,1.667c0.417,2.083 0.417,4.167 0.417,6.25l7.5,-0.833c0.417,-2.5 0.417,-4.583 0,-7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M121.722,53.574c0.417,2.083 1.25,4.167 1.667,6.25l7.5,-1.25c-0.417,-2.917 -1.25,-5.417 -2.083,-7.917l-7.083,2.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M117.139,91.491l7.083,1.667c1.25,-1.667 2.5,-3.75 3.333,-5.833l-7.917,-0.417c-0.833,1.667 -1.667,3.333 -2.5,4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M131.306,76.074l-7.917,0.417c-0.417,1.667 -0.833,3.75 -1.25,5.417l7.5,0.833c0.833,-2.5 1.25,-4.583 1.667,-6.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M108.389,31.908c1.667,1.667 3.333,3.75 5,5.833l6.667,-3.333c-1.667,-2.5 -3.75,-5 -5.833,-7.083l-5.833,4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M82.139,13.574l3.333,-5.833c-2.917,-1.25 -5.833,-2.5 -9.167,-3.333l-2.5,6.667c2.917,0.833 5.417,1.667 8.333,2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M120.889,97.741l-7.5,-1.667c-1.25,1.25 -2.5,2.5 -3.75,3.333l6.667,2.5c1.667,-1.25 2.917,-2.917 4.583,-4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M99.639,111.074l-5.833,-2.917c-1.667,0.417 -3.333,0.833 -5,1.25l5,3.75c2.083,-0.417 4.167,-1.25 5.833,-2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M111.306,105.658l-6.667,-2.5c-1.667,0.833 -2.917,1.667 -4.583,2.5l5.833,2.917c1.667,-0.833 3.75,-1.667 5.417,-2.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M98.389,22.741c2.083,1.667 4.167,3.75 6.25,5.417l5.833,-4.583c-2.083,-2.083 -4.583,-4.167 -7.5,-6.25l-4.583,5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M42.139,106.074c0.417,0 0.417,0.417 0.833,0.417c2.083,0.833 3.75,1.667 5.417,2.5l-0.833,-4.167c-1.25,-0.417 -2.5,-0.833 -3.75,-1.667c-0.417,0 -0.833,-0.417 -1.25,-0.417l-0.417,3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M60.472,112.741l-2.083,-4.167c-1.667,-0.417 -3.333,-0.833 -5.417,-1.667l0.833,4.167c2.5,0.417 4.583,1.25 6.667,1.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M57.139,1.491c-2.917,-0.417 -5.833,0 -8.75,0l-0.417,7.083c2.5,-0.417 5.417,-0.417 7.917,-0.417l1.25,-6.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M42.972,2.324c-2.5,0.417 -5.417,1.25 -7.917,2.083l1.25,6.667c2.083,-0.833 4.583,-1.25 6.667,-1.667l0,-7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M25.889,15.658c1.667,-0.833 3.75,-2.083 5.417,-2.917l-0.833,-6.667c-2.5,0.833 -4.583,2.083 -6.667,3.333l2.083,6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M70.056,110.658c-2.083,-0.417 -3.75,-0.417 -5.417,-0.833l2.5,4.167c2.083,0.417 4.167,0.417 6.667,0.833l-3.75,-4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M71.306,3.158c-2.917,-0.833 -5.833,-1.25 -9.167,-1.25l-1.25,6.667c2.5,0 5.417,0.417 7.917,1.25l2.5,-6.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/></g></svg>`,
    'ring-level6.svg': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 163 146" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g><path d="M1.306,60.472l6.25,3.75c-0.417,-2.5 0,-4.583 0,-6.667l-5.833,-5c-0.417,2.5 -0.417,5.417 -0.417,7.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.556,46.722l5.833,5c0.833,-2.083 1.25,-4.583 2.083,-6.667l-5.417,-6.25c-0.833,2.917 -1.667,5.417 -2.5,7.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M8.806,76.306c-0.417,-2.083 -0.833,-4.167 -0.833,-6.25l-6.25,-3.333c0,2.5 0.417,5 1.25,7.5l5.833,2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M14.639,100.472l5,-0.417c-1.25,-2.083 -2.5,-4.167 -3.75,-5.833l-5.833,-0.833c1.25,2.5 2.917,5 4.583,7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M4.639,80.472c0.833,2.5 1.667,5 2.917,7.5l5.417,0.417c-0.833,-1.667 -1.667,-3.75 -2.083,-5.833l-6.25,-2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M50.889,127.556c-2.917,-1.667 -5.417,-3.333 -7.917,-5l-2.5,3.333c2.917,2.083 6.25,4.167 10,6.25l0.417,-4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M38.806,119.639c-2.5,-1.667 -4.583,-3.75 -6.667,-5.417l-4.167,2.083c2.5,2.083 5.417,4.583 8.333,6.667l2.5,-3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M7.556,33.806l5.417,6.25c0.833,-2.083 2.083,-4.167 3.75,-6.25l-4.583,-7.083c-1.667,2.083 -3.333,4.583 -4.583,7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M15.889,22.556l4.167,7.083c1.667,-2.083 3.75,-4.167 5.833,-5.833l-3.333,-7.917c-2.5,2.083 -4.583,4.167 -6.667,6.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M27.972,110.472c-1.667,-2.083 -3.333,-3.75 -5,-5.833l-5,0.417c2.083,2.5 4.167,5 6.25,7.5l3.75,-2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M35.889,7.972c-2.917,1.667 -6.25,3.333 -8.75,5l2.917,7.917c2.5,-1.667 5,-3.333 7.917,-4.583l-2.083,-8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M126.306,132.139c-2.5,1.25 -5,2.083 -7.917,3.333l6.667,4.167c0.417,0 0.833,0 1.25,-0.417l2.5,-6.25l-2.5,-0.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M150.056,60.472c1.25,2.917 2.5,5.833 3.333,8.75l4.167,-0.833l3.333,-7.5c-0.833,-1.25 -1.25,-2.917 -2.083,-4.167l-8.75,3.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M142.139,47.139c2.083,2.917 4.167,5.833 5.417,8.75l9.167,-3.75c-2.083,-3.333 -4.167,-6.667 -6.25,-10l-8.333,5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M103.806,7.972c-4.167,-1.667 -8.333,-2.917 -12.5,-3.75l-2.5,8.333c3.333,0.833 7.083,1.667 10.833,3.333l4.167,-7.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M118.806,141.722l-6.667,-4.583c-2.917,0.417 -5.833,1.25 -9.167,1.25l5,5c3.75,-0.417 7.5,-0.833 10.833,-1.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M108.389,9.639l-4.167,7.917c1.25,0.833 2.5,1.25 3.75,1.667c2.5,1.25 4.583,2.5 6.667,3.333l5.417,-7.083c-2.083,-1.25 -4.583,-2.5 -7.083,-3.75c-1.667,-0.833 -2.917,-1.25 -4.583,-2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M118.806,25.472c3.333,2.083 6.25,4.167 9.167,6.667l7.083,-6.25c-3.333,-2.5 -6.667,-5 -10.417,-7.5l-5.833,7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M139.222,43.389l7.917,-5c-2.5,-3.333 -5.417,-6.25 -8.333,-9.167l-7.083,6.25c2.5,2.5 5,5 7.5,7.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M154.639,74.222l0,0.417l0.417,-0.417l-0.417,0Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M65.056,133.806c-3.333,-1.25 -6.25,-2.5 -9.167,-3.75l-0.833,4.167c3.75,1.667 7.5,3.333 11.25,4.583l-1.25,-5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M83.806,142.972l-3.333,-5c-3.333,-0.833 -6.667,-1.25 -9.583,-2.5l1.25,5c3.75,1.25 7.5,2.083 11.667,2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M68.806,1.306c-4.167,0 -8.333,0.417 -12.083,0.833l0.417,8.75c3.333,-0.417 6.667,-0.833 10.417,-0.833l1.25,-8.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M42.556,14.639c3.333,-1.25 6.25,-2.083 9.583,-2.917l-0.417,-8.75c-3.75,0.833 -7.5,2.083 -10.833,3.333l1.667,8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M72.556,10.056c3.75,0.417 7.5,0.833 11.25,1.25l2.5,-8.333c-4.167,-0.833 -8.333,-1.25 -12.5,-1.25l-1.25,8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M101.306,144.222l-5,-5.417c-2.917,0.417 -6.25,0 -9.583,0l3.333,5c3.75,0.417 7.5,0.417 11.25,0.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/></g></svg>`,
    'ring-level5.svg': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 188 178" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g><path d="M7.972,43.285c-1.25,2.5 -2.083,4.583 -2.917,7.083l7.083,6.25c0.833,-2.083 1.667,-4.583 2.5,-6.667c0.417,-0.833 0.833,-1.667 1.25,-2.5l-5.833,-7.917c-0.833,1.25 -1.667,2.5 -2.083,3.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M25.056,124.118l-6.25,0.417c2.5,3.75 5.833,7.5 9.167,11.25l5,-2.5c-2.917,-2.917 -5.417,-5.833 -7.917,-9.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.306,67.035l7.5,5c0.417,-3.333 0.833,-6.667 1.667,-9.583l-7.083,-6.667c-0.833,3.75 -1.667,7.5 -2.083,11.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M21.722,119.118c-2.083,-2.917 -3.75,-6.25 -5.417,-9.583l-7.083,-1.25c1.667,3.75 3.75,7.5 6.25,11.667l6.25,-0.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M3.389,90.785c0.833,3.75 2.083,7.917 3.333,11.667l7.5,1.25c-1.667,-3.333 -2.5,-6.25 -3.333,-9.583l-7.5,-3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M95.472,12.451c4.583,0.417 9.583,1.25 14.167,2.5l3.75,-10c-5.417,-1.667 -10.833,-2.5 -16.25,-2.917l-1.667,10.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.139,84.535l7.5,3.333c-0.417,-3.333 -0.833,-6.667 -0.833,-10l-7.5,-5c0,4.167 0,7.917 0.833,11.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M62.139,156.201c-4.167,-2.083 -7.917,-4.583 -11.667,-7.083l-3.333,3.75c4.583,2.917 9.167,5.833 13.75,8.333l1.25,-5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M46.306,145.785c-3.333,-2.5 -6.667,-5.417 -10,-8.333l-4.583,2.083c3.333,3.75 7.5,7.083 11.667,10.417l2.917,-4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M12.972,34.951l5.833,7.917c2.083,-2.917 4.167,-5.417 6.667,-8.333l-5,-8.75c-2.917,2.917 -5.417,5.833 -7.5,9.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M128.806,21.618l5.417,-9.583c-5,-2.5 -10.417,-4.167 -15.833,-5.833l-3.75,10c4.583,1.667 9.167,3.333 14.167,5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M97.972,168.701c-4.167,-0.833 -8.75,-1.667 -12.917,-2.917l1.25,5.833c5,1.667 10,2.5 15,3.333l-3.333,-6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M58.389,15.368c4.167,-1.25 8.333,-2.083 12.917,-2.917l0,-10.417c-5,0.417 -10,1.667 -14.583,2.917l1.667,10.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M76.306,12.035c4.583,-0.417 9.167,-0.417 13.75,0l2.083,-10.417c-5.417,-0.417 -10.417,-0.417 -15.833,0l0,10.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M107.556,175.785c5,0.833 10,0.833 15,0.833l-5.833,-6.25c-4.167,0 -8.333,-0.417 -12.5,-0.833l3.333,6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M146.306,31.201l7.5,-8.75c-4.583,-2.917 -9.583,-5.833 -14.583,-8.333l-5.833,9.583c4.583,2.083 8.75,4.583 12.917,7.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M133.389,175.785l2.917,-6.667l-0.833,-0.833c-4.167,0.833 -7.917,1.667 -12.083,1.667l5.833,6.25c1.25,0 2.917,-0.417 4.167,-0.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M150.472,33.701c4.167,3.333 7.917,6.25 11.25,9.583l9.167,-7.083c-4.167,-3.75 -8.333,-7.5 -12.917,-10.833l-7.5,8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M165.472,47.035c3.333,3.333 6.667,7.083 9.167,10.833l10.417,-5.833c-3.333,-4.167 -6.667,-8.333 -10.417,-12.5l-9.167,7.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M181.306,67.868l4.583,-10.833l-8.333,5c1.25,2.083 2.5,3.75 3.75,5.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M24.222,22.035l5,9.167c2.5,-2.5 5.833,-5 8.75,-7.083l-3.333,-9.583c-3.75,2.083 -7.083,4.583 -10.417,7.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M39.222,11.618l3.333,10c3.333,-1.667 7.083,-3.333 10.833,-5l-1.667,-10.417c-4.167,1.667 -8.75,3.333 -12.5,5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M79.639,163.701c-4.167,-1.25 -8.333,-2.917 -12.083,-5l-0.833,0l-0.833,5l0,0.417c5,2.083 10,4.167 15,5.833l-1.25,-6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/></g></svg>`,
    'ring-level4.svg': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 216 215" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g><path d="M27.972,146.306c-0.833,-1.25 -1.667,-2.5 -2.5,-3.75l-8.333,0c1.25,1.667 2.083,3.333 3.333,5l7.5,-1.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M34.222,155.056c-1.25,-1.25 -2.083,-2.917 -3.333,-4.167l-7.083,1.25c1.25,1.667 2.5,3.333 3.75,5l6.667,-2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M41.306,162.972c-1.25,-1.25 -2.5,-2.5 -3.75,-3.75l-6.667,2.083c1.667,1.667 2.917,3.333 4.583,5l5.833,-3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M49.639,170.889c-1.667,-1.25 -2.917,-2.5 -4.583,-4.167l-5.833,3.333c1.667,1.667 3.75,3.333 5.417,5l5,-4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M22.556,137.556c-0.833,-1.25 -1.25,-2.5 -2.083,-3.75l-8.333,-1.25c0.417,1.667 1.25,3.333 2.083,5l8.333,0Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.139,102.139c0.417,1.25 0.833,2.917 0.833,4.583l9.167,2.917c-0.417,-0.833 -0.417,-2.083 -0.833,-3.333l-9.167,-4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M17.972,128.389c-0.417,-1.25 -0.833,-2.5 -1.25,-3.333l-9.167,-2.5c0.833,1.667 1.25,3.333 2.083,4.583l8.333,1.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M14.639,119.222c-0.417,-1.25 -0.833,-2.5 -1.25,-3.333l-9.167,-3.333c0.417,1.25 0.833,2.917 1.667,4.583l8.75,2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M120.056,15.472c2.5,0.417 4.583,0.833 6.667,1.25l4.167,-12.5c-2.5,-0.417 -5,-0.833 -7.917,-1.25l-2.917,12.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.722,95.889l9.167,4.583c-0.417,-1.25 -0.417,-2.5 -0.417,-3.333l-9.167,-5.417c0,1.25 0,2.917 0.417,4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M58.389,177.972c-1.667,-1.25 -3.333,-2.5 -5,-3.75l-4.583,4.167c1.667,1.667 3.75,2.917 6.25,4.583l3.333,-5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.306,85.889l9.167,5l0,-3.333l-8.75,-6.25c-0.417,1.25 -0.417,2.917 -0.417,4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M9.222,52.556c-0.417,0.833 -0.833,2.083 -1.25,3.333l7.917,8.333c0.417,-1.25 1.25,-2.5 1.667,-3.75l-7.917,-8.75c0,0 0,0.417 -0.417,0.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M4.222,65.472l8.75,7.5c0.417,-1.25 0.833,-2.5 1.25,-3.75l-8.333,-7.917c-0.417,1.25 -1.25,2.917 -1.667,4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.139,75.472l9.167,6.25c0,-1.25 0,-2.083 0.417,-3.333l-8.75,-7.5c-0.417,1.667 -0.417,2.917 -0.833,4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M17.972,38.389l7.083,9.583c0.833,-1.25 1.667,-2.083 2.917,-3.333l-6.667,-10.417c-1.25,1.25 -2.083,2.5 -3.333,4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M25.056,30.472l6.25,10.417c1.25,-1.25 2.083,-2.083 3.333,-3.333l-5.833,-10.833c-1.25,1.25 -2.5,2.5 -3.75,3.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M12.139,46.722l7.917,9.167c0.833,-1.25 1.25,-2.5 2.083,-3.333l-7.083,-10c-0.833,1.25 -2.083,2.917 -2.917,4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M143.389,21.306c2.083,0.417 4.167,1.25 6.25,2.083l6.25,-11.667c-2.5,-0.833 -5,-1.667 -7.5,-2.5l-5,12.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M160.472,28.389l7.5,-11.25c-0.417,0 -0.833,-0.417 -1.25,-0.417c-2.083,-1.25 -4.167,-2.083 -6.25,-2.917l-6.25,11.667c2.083,0.833 3.75,1.667 5.833,2.5l0.417,0.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M108.806,208.389c2.917,0.833 5.417,1.25 7.917,2.083l-3.333,-7.5c-2.083,-0.417 -4.167,-1.25 -6.25,-1.667l1.667,7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M105.472,1.306l-7.5,0l-0.833,12.917l6.667,0l1.667,-12.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M80.472,2.972c-2.083,0.417 -4.583,0.833 -6.667,1.25l1.667,12.917c1.667,-0.417 3.75,-0.833 5.417,-1.25l-0.417,-12.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M175.472,36.722c1.667,1.25 3.75,2.5 5.417,3.75l9.583,-10c-2.5,-1.25 -4.583,-2.917 -6.667,-4.167l-8.333,10.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M185.056,43.389c1.667,1.25 3.333,2.917 5,4.167l10.417,-9.167c-2.083,-1.667 -4.167,-3.333 -6.25,-5l-9.167,10Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M193.806,50.889c1.667,1.667 3.333,2.917 5,4.583l10.833,-8.333c-1.667,-1.667 -3.333,-3.75 -5.417,-5.417l-10.417,9.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M138.389,19.639l5,-12.083c-2.5,-0.833 -5,-1.25 -7.5,-2.083l-4.167,12.5c2.083,0.417 4.583,1.25 6.667,1.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M202.139,59.222c1.25,1.667 2.917,2.917 4.167,4.583l4.583,-2.917l3.75,-8.333c-0.417,-0.833 -0.833,-1.25 -1.25,-1.667l-11.25,8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M165.056,30.472c2.083,1.25 4.167,2.5 5.833,3.333l8.333,-10.417c-2.083,-1.25 -4.583,-2.5 -6.667,-3.75l-7.5,10.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M65.056,20.056c1.667,-0.833 3.75,-1.25 5.417,-1.667l-1.667,-12.917c-2.083,0.833 -4.167,1.25 -6.25,2.083l2.5,12.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M41.722,17.139l5,11.667c1.25,-0.833 2.5,-1.667 4.167,-2.5l-3.75,-12.083c-1.667,0.833 -3.75,1.667 -5.417,2.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M57.556,9.222c-2.083,0.833 -3.75,1.667 -5.833,2.5l3.75,12.083c1.667,-0.833 3.333,-1.25 5,-2.083l-2.917,-12.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M32.972,23.389l5.417,10.833c1.25,-0.833 2.5,-1.667 3.75,-2.5l-4.583,-11.667c-1.667,0.833 -3.333,2.083 -4.583,3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M86.306,15.056c1.667,0 3.75,-0.417 5.833,-0.417l0.833,-12.917c-2.5,0 -5,0.417 -7.5,0.417l0.833,12.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M108.806,14.639c2.083,0 4.167,0 6.25,0.417l2.917,-12.917c-2.5,0 -5,-0.417 -7.5,-0.417l-1.667,12.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M103.389,207.139l-2.083,-7.5c-2.083,-0.417 -4.167,-1.25 -6.25,-2.083l0.417,7.083c2.5,0.833 5.417,1.667 7.917,2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M130.472,212.556l-4.583,-7.917c-2.083,0 -4.167,-0.417 -6.25,-0.833l3.333,7.5c2.5,0.417 5,0.833 7.5,1.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M90.056,195.472c-2.5,-0.833 -4.583,-1.667 -6.667,-2.5l-0.833,6.25c2.5,1.25 5,2.083 7.5,3.333l0,-7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M143.389,212.972l0.417,-0.417l-5.833,-7.083l-5.833,0l4.583,7.5l6.667,0Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M78.806,190.472c-2.083,-0.833 -4.167,-2.083 -6.25,-3.333l-2.083,5.833c2.083,1.25 4.583,2.5 7.083,3.75l1.25,-6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M68.389,184.639c-2.083,-1.25 -3.75,-2.5 -5.833,-3.75l-3.75,5c2.5,1.667 4.583,2.917 7.083,4.583l2.5,-5.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/></g></svg>`,
    'ring-level3.svg': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 249 258" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g><path d="M38.389,183.389c-1.667,-2.083 -3.333,-4.167 -4.583,-6.667l-9.583,0.833c2.083,2.917 3.75,5.417 5.833,7.917l8.333,-2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M47.139,193.806c-1.667,-2.083 -3.75,-4.167 -5.417,-6.25l-8.333,2.083c2.083,2.5 4.167,5.417 6.667,7.917l7.083,-3.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M57.139,203.806c-2.083,-1.667 -4.167,-3.75 -6.25,-5.833l-7.083,3.333c2.5,2.5 5,5 7.5,7.5l5.833,-5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M14.222,160.056l10,0.417c-1.25,-2.083 -2.083,-4.167 -2.917,-6.25l-10.417,-2.083c0.833,2.5 2.083,5 3.333,7.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M68.389,213.389c-2.5,-2.083 -5,-4.167 -7.083,-5.833l-6.25,4.583c2.917,2.083 5.833,4.583 8.75,6.667l4.583,-5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M30.472,172.139c-1.25,-2.083 -2.5,-4.167 -3.75,-6.25l-10,-0.833c1.667,2.5 2.917,5.417 4.583,7.917l9.167,-0.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M229.639,57.139c2.083,2.083 4.167,4.167 6.667,6.25l8.333,-6.667l2.5,-5.833c-2.083,-1.667 -3.75,-3.333 -5.833,-5l-11.667,11.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M167.139,23.389c2.917,0.833 5.833,2.083 8.75,2.917l7.083,-14.167c-3.333,-1.25 -6.667,-2.5 -10.417,-3.333l-5.417,14.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M180.472,27.972c2.917,1.25 5.833,2.5 8.75,3.75l8.333,-13.75c-3.333,-1.25 -6.667,-2.917 -10,-4.167l-7.083,14.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M153.389,20.056c2.917,0.417 5.833,1.25 8.75,2.083l5.833,-14.583c-3.333,-1.25 -7.083,-2.083 -10.417,-2.5l-4.167,15Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M206.306,40.472c2.5,1.667 5.417,3.333 7.917,5l10.833,-12.083c-2.917,-2.083 -5.833,-3.75 -9.167,-5.833l-9.583,12.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M218.389,48.389c2.5,1.667 5,3.75 7.083,5.417l12.083,-11.25c-2.917,-2.083 -5.417,-4.167 -8.333,-6.25l-10.833,12.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M193.806,33.806c2.5,1.25 5.417,2.917 7.917,4.167l9.583,-12.917c-2.917,-1.667 -5.833,-3.333 -9.167,-5l-8.333,13.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M13.389,58.806l9.583,10.417c0.833,-1.667 1.667,-3.333 2.917,-5l-9.167,-11.667c-1.25,2.083 -2.5,4.167 -3.333,6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M58.806,15.472l5,14.583c2.083,-1.25 4.167,-2.083 6.25,-3.333l-3.75,-14.583c-2.5,0.833 -5,2.083 -7.5,3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M139.639,17.972c2.917,0 5.833,0.417 8.75,1.25l4.167,-15.417c-3.333,-0.417 -6.667,-0.833 -10,-1.25l-2.917,15.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M99.222,18.389c2.917,-0.417 5.417,-0.833 8.333,-0.833l0,-15.417c-3.333,0 -6.25,0.417 -9.583,0.833l1.25,15.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M86.722,21.306c2.5,-0.833 5,-1.25 7.5,-1.667l-1.25,-15.417c-2.917,0.417 -5.833,1.25 -8.75,1.667l2.5,15.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M125.889,16.722c2.917,0 5.833,0.417 8.75,0.417l2.917,-15.417c-3.333,0 -6.667,-0.417 -10,-0.417l-1.667,15.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M112.556,17.139c2.5,-0.417 5.417,-0.417 8.333,-0.417l1.25,-15.417c-2.917,0 -6.25,0 -9.583,0.417l0,15.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M134.639,243.806c-2.917,-0.417 -5.833,-1.25 -8.75,-2.083l1.667,8.75c3.333,0.833 6.667,1.667 10.417,2.5l-3.333,-9.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M154.639,247.139l2.917,5.417l2.5,-5c-1.667,0 -3.333,-0.417 -5.417,-0.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M122.139,248.806l-1.667,-8.75c-2.917,-0.833 -5.833,-1.667 -8.75,-2.917l0,8.333c3.333,1.25 7.083,2.083 10.417,3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.139,94.222l10.833,7.083c0,-1.667 0.417,-3.75 0.833,-5.417l-10.833,-8.75c-0.417,2.5 -0.833,4.583 -0.833,7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M47.139,22.139l6.25,13.75c2.083,-1.25 3.75,-2.5 5.833,-3.333l-5,-14.583c-2.5,1.25 -4.583,2.5 -7.083,4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M71.306,10.056l3.75,15c2.083,-0.833 4.583,-1.667 6.667,-2.5l-2.5,-15c-2.5,0.833 -5.417,1.667 -7.917,2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M7.972,70.056l10,9.583c0.833,-2.083 1.667,-3.75 2.5,-5.417l-9.583,-10.833c-1.25,2.083 -2.083,4.583 -2.917,6.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M16.306,84.639l-10,-9.583c-0.833,2.5 -1.667,4.583 -2.083,6.667l10.417,8.333c0.417,-1.667 1.25,-3.75 1.667,-5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M27.556,38.389l8.333,12.5c1.25,-1.667 2.917,-2.917 4.167,-4.583l-7.083,-12.917c-1.667,1.667 -3.333,3.333 -5.417,5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M37.139,29.639l7.083,13.333c1.667,-1.25 3.333,-2.917 5,-4.167l-6.25,-13.75c-2.083,1.667 -4.167,2.917 -5.833,4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M19.639,48.389l9.167,11.25c0.833,-1.667 2.083,-3.333 3.333,-4.583l-7.917,-12.5c-1.667,1.667 -2.917,3.75 -4.583,5.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M106.722,235.056c-2.917,-1.25 -5.833,-2.5 -8.75,-3.75l-1.667,7.5c3.333,1.667 7.083,2.917 10.417,4.583l0,-8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M153.806,255.889l-5,-9.583c-2.917,0 -5.833,-0.833 -8.333,-1.25l3.333,9.167c3.333,0.417 6.667,1.25 10,1.667Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M12.972,124.639c0,-1.667 -0.417,-3.75 -0.417,-5.833l-11.25,-5.833c0.417,2.5 0.417,4.583 0.833,7.083l10.833,4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M19.222,148.806c-0.833,-2.083 -1.667,-4.167 -2.083,-6.25l-10.833,-3.333c0.417,2.5 1.25,5 2.5,7.5l10.417,2.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M15.472,136.722c-0.417,-2.083 -0.833,-4.167 -1.25,-6.25l-11.25,-4.583c0.417,2.5 1.25,5 1.667,7.5l10.833,3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.306,107.139l10.833,5.833c0,-2.083 0,-3.75 0.417,-5.833l-11.25,-7.083l0,7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M72.556,216.306l-4.583,5.833c2.917,2.083 6.25,4.167 9.167,6.25l3.333,-6.667c-2.5,-1.667 -5.417,-3.75 -7.917,-5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M93.389,228.806c-2.917,-1.25 -5.833,-2.917 -8.333,-4.583l-3.333,6.667c3.333,2.083 6.667,3.75 10,5.417l1.667,-7.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/></g></svg>`,
    'ring-level2.svg': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 308 308" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g><path d="M158.389,293.389l2.5,10.417c3.75,1.25 7.917,2.083 11.667,2.5l1.25,-3.333l-2.917,-7.083c-4.167,-0.417 -8.333,-1.667 -12.5,-2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M305.889,68.389c-3.333,-2.917 -6.25,-5.833 -9.583,-9.167l-15,13.333c0.417,0.417 0.833,0.833 0.833,0.833l17.083,0l6.667,-5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M62.972,22.972l6.667,16.667c2.917,-1.667 5.417,-2.917 8.333,-4.583l-5.417,-17.5c-3.333,1.667 -6.667,3.333 -9.583,5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M49.639,31.722l8.333,15.833c2.5,-1.667 4.583,-3.333 7.5,-5l-7.083,-17.083c-2.917,2.083 -5.833,4.167 -8.75,6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M37.972,41.722l9.167,15c2.083,-2.083 4.583,-3.75 6.667,-5.833l-8.333,-16.25c-2.5,2.5 -5,4.583 -7.5,7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M92.556,9.639l4.167,17.917c3.333,-0.833 6.667,-1.667 10,-2.5l-2.5,-18.75c-4.167,1.25 -7.917,2.083 -11.667,3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M27.556,52.972l10.417,14.167c2.083,-2.5 3.75,-4.583 5.833,-6.667l-9.583,-15c-2.083,2.083 -4.583,4.583 -6.667,7.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M77.139,15.472l5.417,17.5c2.917,-1.25 6.25,-2.5 9.167,-3.75l-3.75,-17.917c-3.75,1.25 -7.5,2.5 -10.833,4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M25.472,87.139c0.417,-1.25 1.25,-2.917 2.083,-4.167l-11.25,-13.333c-0.833,2.083 -2.083,4.167 -2.917,6.25c-0.417,0.417 -0.833,1.25 -1.25,2.083l12.083,12.083c0.417,-0.833 0.833,-2.083 1.25,-2.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M3.389,106.306l12.917,9.167c0.417,-2.5 0.833,-5 1.667,-7.5l-12.5,-10.833c-0.833,2.917 -1.667,6.25 -2.083,9.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.722,121.306l13.333,7.5c0,-2.5 0,-5 0.417,-7.5l-12.917,-9.583c-0.417,3.333 -0.833,6.25 -0.833,9.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M6.722,91.722l12.917,10.833c0.417,-2.5 1.25,-5 2.5,-7.5l-12.083,-12.083c-1.25,2.917 -2.083,5.833 -3.333,8.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M208.806,30.472c3.75,1.25 7.5,2.5 11.25,4.167l9.167,-17.083c-4.583,-1.667 -8.75,-3.333 -12.917,-4.583l-7.5,17.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M159.222,20.472c4.167,0.417 7.917,0.417 11.667,1.25l4.167,-18.75c-4.583,-0.417 -8.75,-0.833 -13.333,-1.25l-2.5,18.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M192.556,25.472c3.75,1.25 7.5,2.083 11.25,3.333l7.5,-17.5c-4.167,-1.25 -8.75,-2.5 -12.917,-3.75l-5.833,17.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M175.889,22.139c3.75,0.833 7.917,1.667 11.667,2.5l5.833,-18.333c-4.583,-0.833 -8.75,-1.667 -13.333,-2.5l-4.167,18.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M233.806,19.639l-9.167,16.667c2.917,1.25 5.417,2.5 8.333,3.75c0.833,0.417 1.667,0.833 2.5,1.25l10.833,-15.833c-1.25,-0.833 -2.5,-1.25 -3.333,-1.667c-2.917,-1.667 -6.25,-2.917 -9.167,-4.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.722,136.306l13.333,6.25c-0.417,-2.5 -0.417,-5 -0.417,-7.917l-13.333,-7.5c0,2.917 0,6.25 0.417,9.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M109.222,5.472l2.083,18.333c3.75,-0.833 7.083,-1.667 10.833,-2.083l-0.833,-18.75c-4.167,0.833 -8.333,1.667 -12.083,2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M127.139,21.306c3.333,-0.417 7.083,-0.833 10.833,-1.25l0.833,-18.75c-4.167,0.417 -8.333,0.833 -12.5,1.25l0.833,18.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M143.806,1.306l-0.833,18.75l11.25,0l2.5,-18.75l-12.917,0Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M240.056,43.806c3.333,2.083 7.083,3.75 10.417,5.833l12.083,-15.417c-3.75,-2.083 -7.917,-4.583 -11.667,-6.667l-10.833,16.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M155.472,302.556l-2.917,-10.833c-4.167,-0.833 -8.333,-2.083 -12.5,-3.75l0.417,10c5,1.667 10,3.333 15,4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M20.056,170.472c-0.833,-2.5 -1.667,-5.417 -2.083,-7.917l-13.333,-5c0.833,3.333 1.667,6.667 2.5,9.583l12.917,3.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M31.306,197.972c-1.25,-2.5 -2.917,-5.417 -4.167,-7.917l-12.083,-1.667c1.25,3.333 2.917,6.25 4.583,9.583l11.667,0Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M16.722,156.722c-0.417,-2.917 -0.833,-5.417 -1.25,-7.917l-13.333,-6.667c0.417,3.333 0.833,6.667 1.25,9.583l13.333,5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M25.056,184.222c-1.25,-2.5 -2.083,-5.417 -3.333,-7.917l-12.917,-3.333c1.25,3.333 2.5,6.667 3.75,10l12.5,1.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M135.056,286.306c-4.167,-1.667 -8.333,-3.333 -12.5,-5.417l-1.667,9.167c5,2.5 9.583,4.167 14.583,6.25l-0.417,-10Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M116.306,287.972l1.25,-9.167c-3.75,-2.083 -7.917,-4.167 -11.667,-6.25l-3.333,8.333c4.167,2.5 8.75,4.583 12.917,6.667c0.278,0.278 0.556,0.417 0.833,0.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M19.222,65.056l11.25,12.917c1.25,-2.083 2.917,-4.583 4.583,-6.667l-10.417,-14.167c-2.083,2.5 -3.75,5 -5.417,7.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M86.306,260.056c-3.333,-2.5 -6.667,-5 -10,-7.5l-7.083,5.833c3.75,2.917 7.917,5.833 11.667,8.75l5.417,-7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M268.389,62.139c3.333,2.083 6.25,4.583 9.167,7.083l15,-13.333c-3.333,-2.5 -6.667,-5.417 -10.417,-8.333l-13.75,14.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M28.389,212.972l10.833,-1.25c-1.667,-2.917 -3.333,-5.833 -5,-8.333l-11.667,-0.417c1.667,3.333 3.75,6.667 5.833,10Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M48.806,224.639c-2.083,-2.917 -4.167,-5.417 -6.25,-8.333l-10.833,1.25c2.5,3.333 5,6.667 7.5,10l9.583,-2.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M60.056,237.139c-2.917,-2.5 -5.417,-5.417 -7.5,-8.333l-10,2.917c2.917,3.333 5.833,6.667 8.75,10l8.75,-4.583Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M72.556,248.806c-3.333,-2.5 -6.25,-5 -8.75,-7.917l-8.75,4.583c3.333,3.333 7.083,6.25 10.417,9.583l7.083,-6.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M101.306,270.056c-3.75,-2.5 -7.083,-4.583 -10.833,-7.083l-5.417,7.083c4.167,2.917 8.75,5.833 12.917,8.333l3.333,-8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M254.639,52.556c3.333,2.083 6.667,4.167 9.583,6.25l13.75,-14.167c-3.333,-2.5 -7.083,-5 -10.833,-7.5l-12.5,15.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/></g></svg>`,
    'ring-level1.svg': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 366 320" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g><path d="M284.639,26.306l15.833,-17.5c-3.75,-2.5 -7.5,-5 -11.667,-7.5l-4.583,0l-12.5,17.083c4.583,2.5 8.75,5.417 12.917,7.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M47.139,12.972l-5,-11.667l-14.583,0l10.417,18.75c2.917,-2.5 5.833,-4.583 9.167,-7.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M135.889,305.472l0.417,12.083c0.417,0 0.833,0.417 1.25,0.417l15.833,0l-1.667,-7.083c-5,-1.667 -10.417,-3.333 -15.833,-5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.139,27.139l12.917,16.667c2.083,-2.917 4.583,-5.833 7.083,-8.75l-11.667,-17.917c-2.917,3.333 -5.833,6.667 -8.333,10Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M13.806,13.389l11.667,17.917c2.5,-2.917 5.417,-5.417 8.333,-7.917l-10.417,-19.167c-3.333,2.917 -6.667,5.833 -9.583,9.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M15.056,208.806c-2.5,-4.167 -4.583,-8.333 -6.667,-12.083l-7.083,-0.417l0,12.5c0,0.417 0.417,0.833 0.417,1.25l13.333,-1.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M267.139,15.889l10.833,-14.583l-20,0l-4.167,7.083c4.583,2.5 9.167,5 13.333,7.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M252.139,1.306l-15,0c4.167,1.667 7.917,3.333 12.083,5l2.917,-5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M333.389,70.056c0.833,1.25 1.667,2.5 2.5,3.333l20.833,0l7.083,-3.75c-2.917,-4.583 -6.667,-8.75 -10,-13.333l-20.417,13.75Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M66.722,1.722c0,0 0.417,-0.417 0.833,-0.417l-1.25,0l0.417,0.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M5.889,57.556c2.083,-3.333 3.75,-6.25 5.833,-9.167l-10.417,-14.167l0,17.917l4.583,5.417Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M62.139,4.222l-1.25,-2.917l-13.333,0l3.75,8.75c3.75,-2.083 7.083,-4.167 10.833,-5.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M168.806,315.056c-3.75,-0.833 -7.5,-1.667 -11.667,-2.917l1.25,5.833l9.583,0l0.833,-2.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M1.306,180.472l0,10.417l4.583,0.417c-1.667,-3.333 -3.333,-7.083 -4.583,-10.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M2.139,64.639c0.417,-0.833 0.833,-1.667 1.25,-2.5l-2.083,-2.5l0,7.5c0,-0.833 0.417,-1.667 0.833,-2.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M40.056,241.722c-3.333,-3.75 -6.667,-7.5 -10,-11.667l-12.083,2.917c3.75,5 7.5,9.583 11.667,13.75l10.417,-5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M46.722,263.806l8.75,-6.667c-4.167,-3.75 -7.917,-7.5 -11.667,-11.25l-10.417,5c4.167,4.167 8.75,8.75 13.333,12.917Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M14.639,228.806l12.083,-3.333c-2.917,-3.75 -5.833,-7.917 -8.333,-12.083l-13.75,1.25c3.333,5 6.667,9.583 10,14.167Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M72.556,270.889c-4.583,-3.333 -8.75,-6.667 -12.917,-10.417l-9.167,6.667c5,4.167 10,8.333 15.417,12.083l6.667,-8.333Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M130.889,303.389c-5,-2.083 -10.417,-4.167 -15.417,-6.667l-2.5,10.833c5.833,2.917 12.083,5.417 17.917,7.917l0,-12.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M110.472,294.639c-5,-2.917 -10,-5.417 -15,-8.333l-4.583,9.583c5.417,3.333 11.25,6.667 17.5,9.583l2.083,-10.833Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M90.889,283.389c-4.583,-2.917 -9.583,-5.833 -14.167,-9.167l-6.667,8.333c5,3.75 10.833,7.5 16.25,10.833l4.583,-10Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M288.806,29.222c4.167,3.333 8.333,6.25 12.5,9.583l17.5,-16.667c-4.583,-3.75 -9.167,-7.083 -14.167,-10.417l-15.833,17.5Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M305.056,41.722c3.75,3.333 7.5,6.667 11.25,10l19.167,-15c-4.167,-3.75 -8.333,-7.5 -12.917,-11.25l-17.5,16.25Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/><path d="M338.806,40.472l-18.75,15c3.333,3.75 6.667,7.083 10,10.833l20.417,-13.75c-3.75,-4.167 -7.5,-8.333 -11.667,-12.083Z" style="fill:#020202;stroke:#000;stroke-width:0.63px;"/></g></svg>`
};
}),
"[project]/components/spectrum-analyzer/LevelizerLayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LevelizerLayer",
    ()=>LevelizerLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/RingLevelizer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
// データを直接読み込む（これで表示遅延ゼロ）
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ring-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const BASE_CONFIG = {
    rotationSpeed: 0.2,
    numSets: 2,
    setSize: 4,
    litColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].BLUE,
    dimColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFD_COLORS"].OFF,
    direction: 1
};
const LevelizerLayer = ({ width, height, active = false })=>{
    // activeがfalseなら回転を止め、色を暗くする
    const currentConfig = active ? BASE_CONFIG : {
        ...BASE_CONFIG,
        rotationSpeed: 0,
        litColor: BASE_CONFIG.dimColor
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-0 left-0 pointer-events-none z-20 w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: '42%',
                    right: '85.21%',
                    width: '9.57%',
                    height: '25.57%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RingLevelizer"], {
                    svgContent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SVG_DATA"]['ring-level7.svg'],
                    config: {
                        ...currentConfig,
                        rotationSpeed: active ? 0.15 : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: '38.1%',
                    right: '86.1%',
                    width: '9.57%',
                    height: '25.5%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RingLevelizer"], {
                    svgContent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SVG_DATA"]['ring-level6.svg'],
                    config: {
                        ...currentConfig,
                        rotationSpeed: active ? 0.15 : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: '33.5%',
                    right: '86.95%',
                    width: '9.57%',
                    height: '25.7%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RingLevelizer"], {
                    svgContent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SVG_DATA"]['ring-level5.svg'],
                    config: {
                        ...currentConfig,
                        rotationSpeed: active ? 0.15 : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: '28.5%',
                    right: '88%',
                    width: '9.57%',
                    height: '25.5%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RingLevelizer"], {
                    svgContent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SVG_DATA"]['ring-level4.svg'],
                    config: {
                        ...currentConfig,
                        rotationSpeed: active ? 0.15 : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: '22.7%',
                    right: '89.2%',
                    width: '9.57%',
                    height: '25.5%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RingLevelizer"], {
                    svgContent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SVG_DATA"]['ring-level3.svg'],
                    config: {
                        ...currentConfig,
                        rotationSpeed: active ? 0.15 : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: '15.2%',
                    right: '90.7%',
                    width: '9.57%',
                    height: '25.5%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RingLevelizer"], {
                    svgContent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SVG_DATA"]['ring-level2.svg'],
                    config: {
                        ...currentConfig,
                        rotationSpeed: active ? 0.15 : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    top: '15.2%',
                    right: '90.7%',
                    width: '9.57%',
                    height: '25.6%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$RingLevelizer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RingLevelizer"], {
                    svgContent: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ring$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RING_SVG_DATA"]['ring-level1.svg'],
                    config: {
                        ...currentConfig,
                        rotationSpeed: active ? 0.15 : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/spectrum-analyzer/LevelizerLayer.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/spectrum-analyzer/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpectrumAnalyzer",
    ()=>SpectrumAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>"); // Eye, EyeOff を削除
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dot-matrix/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$icons$2d$layer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/icons-layer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$LevelizerLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/LevelizerLayer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function SpectrumAnalyzer() {
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioFile, setAudioFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('UPLOAD_PROMPT');
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyzerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousLevelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Array(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands).fill(0));
    const peakHoldsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Array(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands).fill(null).map(()=>({
            level: 0,
            timestamp: 0
        })));
    const sidePeakHoldsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Array(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands).fill(null).map(()=>({
            level: 0,
            timestamp: 0
        })));
    const audioInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // コンポーネントのクリーンアップ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (audioContextRef.current?.state !== 'closed') audioContextRef.current?.close();
        };
    }, []);
    const initializeAudio = ()=>{
        if (!audioRef.current || audioInitializedRef.current) return;
        try {
            const audioContext = new AudioContext();
            const analyzer = audioContext.createAnalyser();
            analyzer.fftSize = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].fftSize;
            analyzer.smoothingTimeConstant = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].smoothing;
            analyzer.minDecibels = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].minDecibels;
            analyzer.maxDecibels = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].maxDecibels;
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
    const drawSpectrum = ()=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', {
            alpha: false
        });
        if (!ctx) return;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let displayLevels = [];
        const now = performance.now();
        if (analyzerRef.current && isPlaying) {
            const bufferLength = analyzerRef.current.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyzerRef.current.getByteFrequencyData(dataArray);
            if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
            const rawLevels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAudioLevels"])(dataArray);
            for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands; i++){
                const newVal = rawLevels[i];
                const prevVal = previousLevelsRef.current[i] || 0;
                displayLevels[i] = newVal > prevVal ? newVal : Math.max(0.0, prevVal - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].fallSpeed);
            }
            previousLevelsRef.current = displayLevels;
        } else {
            displayLevels = [
                ...previousLevelsRef.current
            ];
        }
        const startX = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].offsetX;
        const startYBottom = canvas.height - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].offsetY;
        const sideLeftYBottom = canvas.height - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].offsetY - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].leftOffsetY;
        const sideRightYBottom = canvas.height - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].offsetY - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].rightOffsetY;
        for(let bandIdx = 0; bandIdx < __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands; bandIdx++){
            const mainLevel = displayLevels[bandIdx] || 0;
            const sideLevel = mainLevel * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].levelMultiplier;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatePeakHold"])(mainLevel, peakHoldsRef.current[bandIdx], now);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatePeakHold"])(sideLevel, sidePeakHoldsRef.current[bandIdx], now);
            const bandXBase = startX + bandIdx * (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].blockWidth + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].gapX);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSideBand"])(ctx, sideLevel, sidePeakHoldsRef.current[bandIdx], bandXBase + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].leftOffsetX, sideLeftYBottom, now);
            const activeLevel = Math.floor(mainLevel * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].levelsPerBand);
            const activeSegments = activeLevel * 2;
            const mainPeakHold = peakHoldsRef.current[bandIdx];
            let peakLevel = 0;
            let showPeak = false;
            if (now - mainPeakHold.timestamp < __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].peakHoldTime) {
                peakLevel = Math.floor(mainPeakHold.level * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].levelsPerBand);
                showPeak = peakLevel > activeLevel;
            }
            let currentYBottom = startYBottom;
            for(let segIdx = 0; segIdx < __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].segmentsPerBand; segIdx++){
                const xOffset = segIdx * __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].stackSlant;
                const xDraw = bandXBase + xOffset;
                const yDraw = currentYBottom;
                const currentSegLevel = Math.floor(segIdx / 2);
                const isPeakSegment = showPeak && currentSegLevel === peakLevel;
                let color;
                if (segIdx < activeSegments || isPeakSegment) {
                    color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSegmentColor"])(currentSegLevel);
                } else {
                    color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].inactive;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawDoubleSlantedPolygon"])(ctx, color, xDraw, yDraw, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].blockWidth, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].blockHeight, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].slantLR, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].slopeTB);
                const currentGapY = segIdx % 2 === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].gapY1 : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].gapY2;
                currentYBottom -= __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].blockHeight + currentGapY;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSideBand"])(ctx, sideLevel, sidePeakHoldsRef.current[bandIdx], bandXBase + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDE_BAND_CONFIG"].rightOffsetX, sideRightYBottom, now);
        }
        animationRef.current = requestAnimationFrame(drawSpectrum);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
        drawSpectrum();
    }, [
        isPlaying,
        displayMode,
        audioFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = audioRef.current;
        if (!audio) return;
        const updateTime = ()=>setCurrentTime(audio.currentTime);
        const updateDuration = ()=>setDuration(audio.duration);
        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('durationchange', updateDuration);
        return ()=>{
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('durationchange', updateDuration);
        };
    }, [
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
            if (audioContextRef.current) {
                audioContextRef.current.close();
                audioContextRef.current = null;
            }
            audioInitializedRef.current = false;
            if (audioFile) URL.revokeObjectURL(audioFile);
            setAudioFile(URL.createObjectURL(file));
            previousLevelsRef.current = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands).fill(0);
            peakHoldsRef.current = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands).fill(null).map(()=>({
                    level: 0,
                    timestamp: 0
                }));
            sidePeakHoldsRef.current = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands).fill(null).map(()=>({
                    level: 0,
                    timestamp: 0
                }));
            setCurrentTime(0);
            setDuration(0);
            e.target.value = '';
            setDisplayMode('PEAK_HOLD');
        }
    };
    const handleSeek = (e)=>{
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };
    const handleDispClick = ()=>{
        if (!audioFile) {
            switch(displayMode){
                case 'UPLOAD_PROMPT':
                    setDisplayMode('ANIMATION');
                    break;
                case 'ANIMATION':
                    setDisplayMode('MUSIC');
                    break;
                case 'MUSIC':
                    setDisplayMode('PEAK_HOLD');
                    break;
                case 'PEAK_HOLD':
                    setDisplayMode('UPLOAD_PROMPT');
                    break;
                default:
                    setDisplayMode('UPLOAD_PROMPT');
                    break;
            }
        } else {
            switch(displayMode){
                case 'PEAK_HOLD':
                    setDisplayMode('ANIMATION');
                    break;
                case 'ANIMATION':
                    setDisplayMode('MUSIC');
                    break;
                case 'MUSIC':
                    setDisplayMode('PEAK_HOLD');
                    break;
                case 'UPLOAD_PROMPT':
                    setDisplayMode('PEAK_HOLD');
                    break;
                default:
                    setDisplayMode('PEAK_HOLD');
                    break;
            }
        }
    };
    let matrixText = "";
    let matrixMode = 'TEXT';
    switch(displayMode){
        case 'ANIMATION':
            matrixMode = 'ANIMATION';
            break;
        case 'MUSIC':
            matrixMode = 'TEXT';
            matrixText = fileName ? fileName.replace(/\.[^/.]+$/, "") : "NO FILE";
            break;
        case 'PEAK_HOLD':
            matrixMode = 'TEXT';
            matrixText = "PEAK HOLD";
            break;
        case 'UPLOAD_PROMPT':
        default:
            matrixMode = 'TEXT';
            matrixText = "";
            break;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1400px] mx-auto space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black rounded-none overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: 1400,
                        height: 400,
                        className: "w-full h-auto block"
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotMatrixDisplay"], {
                        width: 1400,
                        height: 400,
                        className: "absolute top-0 left-0 w-full h-full pointer-events-none z-10",
                        text: matrixText,
                        mode: matrixMode
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$icons$2d$layer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconsLayer"], {
                        displayMode: displayMode,
                        isPlaying: isPlaying,
                        audioFile: audioFile,
                        width: 1400,
                        height: 400
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$LevelizerLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LevelizerLayer"], {
                        width: 1400,
                        height: 400,
                        active: !!audioFile
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "47cfbccbfea67f55",
                                [
                                    currentTime / (duration || 1) * 100,
                                    currentTime / (duration || 1) * 100
                                ]
                            ]
                        ]) + " " + "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: duration || 0,
                                value: currentTime,
                                onChange: handleSeek,
                                disabled: !audioFile,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "47cfbccbfea67f55",
                                        [
                                            currentTime / (duration || 1) * 100,
                                            currentTime / (duration || 1) * 100
                                        ]
                                    ]
                                ]) + " " + "w-full h-0.5 bg-white/10 rounded-full appearance-none cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed seek-slider"
                            }, void 0, false, {
                                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                id: "47cfbccbfea67f55",
                                dynamic: [
                                    currentTime / (duration || 1) * 100,
                                    currentTime / (duration || 1) * 100
                                ],
                                children: `.seek-slider.__jsx-style-dynamic-selector::-webkit-slider-thumb{appearance:none;width:0;height:0}.seek-slider.__jsx-style-dynamic-selector::-moz-range-thumb{border:none;width:0;height:0}.seek-slider.__jsx-style-dynamic-selector::-webkit-slider-runnable-track{background:linear-gradient(to right,#fffc 0%,#fffc ${currentTime / (duration || 1) * 100}%,#ffffff1a ${currentTime / (duration || 1) * 100}%,#ffffff1a 100%);height:2px}`
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-white/50 font-mono tracking-wider",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTime"])(currentTime),
                                " / ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTime"])(duration)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/spectrum-analyzer/index.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-6 text-sm font-light tracking-widest text-white/70 font-mono",
                children: fileName
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "audio/*",
                        onChange: handleFileUpload,
                        className: "hidden",
                        id: "audio-upload"
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "audio-upload",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            asChild: true,
                            className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                        lineNumber: 351,
                                        columnNumber: 55
                                    }, this),
                                    " UPLOAD AUDIO"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/spectrum-analyzer/index.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: isPlaying ? handlePause : handlePlay,
                        size: "sm",
                        disabled: !audioFile,
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                    lineNumber: 355,
                                    columnNumber: 26
                                }, this),
                                " PAUSE"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                    lineNumber: 355,
                                    columnNumber: 74
                                }, this),
                                " PLAY"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleDispClick,
                        size: "sm",
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            " DISP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            audioFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: audioFile,
                className: "hidden",
                loop: true
            }, audioFile, false, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 361,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'white',
                    fontSize: '10px'
                },
                children: "DEPLOYED VERSION 0.2.2"
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/spectrum-analyzer/index.tsx",
        lineNumber: 288,
        columnNumber: 6
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/index.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen flex-col items-center justify-between bg-black p-4 md:p-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpectrumAnalyzer"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
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
}),
];

//# sourceMappingURL=_db853e26._.js.map