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
"[project]/components/dot-matrix/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 設定をエクスポート
__turbopack_context__.s([
    "DOT_MATRIX_CONFIG",
    ()=>DOT_MATRIX_CONFIG
]);
const DOT_MATRIX_CONFIG = {
    position: {
        x: 542.7,
        y: 96.8
    },
    // セル（1文字分）の設定
    rows: 7,
    cols: 5,
    numCells: 12,
    pixel: {
        width: 5.7,
        height: 9,
        slantLR: 3,
        slopeTB: 0.0,
        stackSlant: 4.3
    },
    // ピクセル間の隙間
    dotGapX: 3.65,
    dotGapY: 4.45,
    cellGap: 25,
    // 見た目の設定
    color: "#1fd7f0ff",
    offColor: "#231e2dff",
    glowBlur: 0,
    // デバッグ用: 全点灯させるかどうか
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

// components/spectrum-analyzer/config.ts
__turbopack_context__.s([
    "COLORS",
    ()=>COLORS,
    "SIDE_BAND_CONFIG",
    ()=>SIDE_BAND_CONFIG,
    "SPECTRUM_CONFIG",
    ()=>SPECTRUM_CONFIG
]);
const SPECTRUM_CONFIG = {
    numBands: 17,
    segmentsPerBand: 26,
    levelsPerBand: 13,
    blockWidth: 24.5,
    blockHeight: 6.0,
    gapX: 43.61,
    gapY1: 3.1,
    gapY2: 6,
    slantLR: 2.0,
    slopeTB: 5.0,
    stackSlant: 3.35,
    offsetX: 186.6,
    offsetY: 8.2,
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
const COLORS = {
    inactive: '#231e2dff',
    activeBottom: '#1fd7f0ff',
    activeMiddle: '#baff75',
    activeTop: '#1876eaff',
    sideActive: '#b0f5ffff',
    iconActive: '#1fd7f0ff',
    iconInactive: '#231e2d00'
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
"[project]/components/icons/mp3-logo [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/components/spectrum-analyzer/icon-definitions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/spectrum-analyzer/icon-definitions.tsx
__turbopack_context__.s([
    "CUSTOM_ICONS",
    ()=>CUSTOM_ICONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$mp3$2d$logo__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/mp3-logo [app-ssr] (ecmascript)"); // ★さっき作ったコンポーネント
;
const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
const CUSTOM_ICONS = [
    {
        id: 'mp3-logo',
        name: 'MP3',
        type: 'COMPONENT',
        component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$mp3$2d$logo__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mp3Logo"],
        activeModes: [
            'PEAK_HOLD',
            'ANIMATION',
            'MUSIC'
        ],
        condition: (_, hasFile)=>hasFile,
        x: 1180,
        y: 45,
        width: 80,
        height: 40,
        color: '#ff0055' // ★ここで指定した色がSVGに渡されます
    },
    // ... 他のアイコン（DOT_MATRIXなど）はそのまま ...
    {
        id: 'note-1',
        name: '音符1',
        type: 'DOT_MATRIX',
        maskSrc: `${basePath}/images/masks/icon-note1.png`,
        activeModes: [
            'ANIMATION',
            'MUSIC'
        ],
        condition: (isPlaying)=>isPlaying,
        x: 370,
        y: 82,
        width: 15,
        height: 10,
        color: '#1fd7f0'
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$masked$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaskedDotMatrix"], {
                width: width,
                height: height,
                maskSrc: icon.maskSrc,
                active: isActive,
                // ★位置・サイズ・色を渡す
                iconX: icon.x,
                iconY: icon.y,
                iconWidth: icon.width,
                iconHeight: icon.height,
                color: icon.color || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].iconActive,
                className: "absolute top-0 left-0 w-full h-full"
            }, icon.id, false, {
                fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
                lineNumber: 33,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/spectrum-analyzer/icons-layer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dot$2d$matrix$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dot-matrix/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/config.ts [app-ssr] (ecmascript)"); // ICON_CONFIG削除済み
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$icons$2d$layer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/spectrum-analyzer/icons-layer.tsx [app-ssr] (ecmascript)"); // 新規レイヤー読み込み
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
function SpectrumAnalyzer() {
    // ... (状態定義などは変更なし)
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioFile, setAudioFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showGuide, setShowGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].showGuide);
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
    const guideImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // ... (useEffect, initializeAudio など変更なし) ...
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const img = new Image();
        img.crossOrigin = 'anonymous';
        const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
        img.src = `${basePath}/images/guide.png`;
        img.onload = ()=>{
            guideImageRef.current = img;
            setImageLoaded(true);
        };
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
        if (showGuide && guideImageRef.current) {
            ctx.globalAlpha = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].guideAlpha;
            ctx.drawImage(guideImageRef.current, 0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0;
        }
        let displayLevels = [];
        const now = performance.now();
        if (analyzerRef.current && isPlaying) {
            // ... (解析ロジック変更なし) ...
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
            // ... (バンド描画ロジック変更なし) ...
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
        // ICONの描画ループは削除 (IconsLayerコンポーネント側で行うため)
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
        imageLoaded,
        showGuide,
        displayMode,
        audioFile
    ]);
    // ... (以下イベントハンドラなどは元のまま) ...
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
            if (audioFile) URL.revokeObjectURL(audioFile);
            setAudioFile(URL.createObjectURL(file));
            previousLevelsRef.current = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECTRUM_CONFIG"].numBands).fill(0);
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
        // ... (元のロジック)
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
    let matrixText = "UPLOAD AUDIO";
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
            matrixText = "UPLOAD AUDIO";
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
                        lineNumber: 305,
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
                        lineNumber: 308,
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
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 303,
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
                                lineNumber: 329,
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
                        lineNumber: 328,
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
                            lineNumber: 353,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-6 text-sm font-light tracking-widest text-white/70 font-mono",
                children: fileName
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 359,
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
                        lineNumber: 364,
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
                                        lineNumber: 367,
                                        columnNumber: 55
                                    }, this),
                                    " UPLOAD AUDIO"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/spectrum-analyzer/index.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 365,
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
                                    lineNumber: 371,
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
                                    lineNumber: 371,
                                    columnNumber: 74
                                }, this),
                                " PLAY"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 370,
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
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            " DISP"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowGuide(!showGuide),
                        size: "sm",
                        className: "bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs px-4 py-2 cursor-pointer",
                        children: showGuide ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                    lineNumber: 377,
                                    columnNumber: 26
                                }, this),
                                " GUIDE OFF"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/spectrum-analyzer/index.tsx",
                                    lineNumber: 377,
                                    columnNumber: 79
                                }, this),
                                " GUIDE ON"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/spectrum-analyzer/index.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this),
            audioFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: audioFile,
                className: "hidden",
                loop: true
            }, audioFile, false, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 380,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'white',
                    fontSize: '10px'
                },
                children: "DEPLOYED VERSION 0.2.1"
            }, void 0, false, {
                fileName: "[project]/components/spectrum-analyzer/index.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/spectrum-analyzer/index.tsx",
        lineNumber: 302,
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
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$spectrum$2d$analyzer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpectrumAnalyzer"], {}, void 0, false, {
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

//# sourceMappingURL=_eae90788._.js.map