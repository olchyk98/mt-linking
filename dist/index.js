var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __glob = (map3) => (path) => {
  var fn = map3[path];
  if (fn)
    return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/blessed/lib/alias.js
var require_alias = __commonJS({
  "node_modules/blessed/lib/alias.js"(exports) {
    var alias = exports;
    alias.bools = {
      //         Variable                                      Cap-                               TCap                                  Description
      //         Booleans                                      name                               Code
      "auto_left_margin": ["bw", "bw"],
      //                                cub1 wraps from col‐ umn 0 to last column
      "auto_right_margin": ["am", "am"],
      //                                terminal has auto‐ matic margins
      "back_color_erase": ["bce", "ut"],
      //                                screen erased with background color
      "can_change": ["ccc", "cc"],
      //                                terminal can re- define existing col‐ ors
      "ceol_standout_glitch": ["xhp", "xs"],
      //                                standout not erased by overwriting (hp)
      "col_addr_glitch": ["xhpa", "YA"],
      //                                only positive motion for hpa/mhpa caps
      "cpi_changes_res": ["cpix", "YF"],
      //                                changing character pitch changes reso‐ lution
      "cr_cancels_micro_mode": ["crxm", "YB"],
      //                                using cr turns off micro mode
      "dest_tabs_magic_smso": ["xt", "xt"],
      //                                tabs destructive, magic so char (t1061)
      "eat_newline_glitch": ["xenl", "xn"],
      //                                newline ignored after 80 cols (con‐ cept)
      "erase_overstrike": ["eo", "eo"],
      //                                can erase over‐ strikes with a blank
      "generic_type": ["gn", "gn"],
      //                                generic line type
      "hard_copy": ["hc", "hc"],
      //                                hardcopy terminal
      "hard_cursor": ["chts", "HC"],
      //                                cursor is hard to see
      "has_meta_key": ["km", "km"],
      //                                Has a meta key (i.e., sets 8th-bit)
      "has_print_wheel": ["daisy", "YC"],
      //                                printer needs opera‐ tor to change char‐ acter set
      "has_status_line": ["hs", "hs"],
      //                                has extra status line
      "hue_lightness_saturation": ["hls", "hl"],
      //                                terminal uses only HLS color notation (Tektronix)
      "insert_null_glitch": ["in", "in"],
      //                                insert mode distin‐ guishes nulls
      "lpi_changes_res": ["lpix", "YG"],
      //                                changing line pitch changes resolution
      "memory_above": ["da", "da"],
      //                                display may be retained above the screen
      "memory_below": ["db", "db"],
      //                                display may be retained below the screen
      "move_insert_mode": ["mir", "mi"],
      //                                safe to move while in insert mode
      "move_standout_mode": ["msgr", "ms"],
      //                                safe to move while in standout mode
      "needs_xon_xoff": ["nxon", "nx"],
      //                                padding will not work, xon/xoff required
      "no_esc_ctlc": ["xsb", "xb"],
      //                                beehive (f1=escape, f2=ctrl C)
      "no_pad_char": ["npc", "NP"],
      //                                pad character does not exist
      "non_dest_scroll_region": ["ndscr", "ND"],
      //                                scrolling region is non-destructive
      "non_rev_rmcup": ["nrrmc", "NR"],
      //                                smcup does not reverse rmcup
      "over_strike": ["os", "os"],
      //                                terminal can over‐ strike
      "prtr_silent": ["mc5i", "5i"],
      //                                printer will not echo on screen
      "row_addr_glitch": ["xvpa", "YD"],
      //                                only positive motion for vpa/mvpa caps
      "semi_auto_right_margin": ["sam", "YE"],
      //                                printing in last column causes cr
      "status_line_esc_ok": ["eslok", "es"],
      //                                escape can be used on the status line
      "tilde_glitch": ["hz", "hz"],
      //                                cannot print ~'s (hazeltine)
      "transparent_underline": ["ul", "ul"],
      //                                underline character overstrikes
      "xon_xoff": ["xon", "xo"]
      //                                terminal uses xon/xoff handshaking
    };
    alias.numbers = {
      //         Variable                                      Cap-                               TCap                                  Description
      //          Numeric                                      name                               Code
      "columns": ["cols", "co"],
      //                                number of columns in a line
      "init_tabs": ["it", "it"],
      //                                tabs initially every # spaces
      "label_height": ["lh", "lh"],
      //                                rows in each label
      "label_width": ["lw", "lw"],
      //                                columns in each label
      "lines": ["lines", "li"],
      //                                number of lines on screen or page
      "lines_of_memory": ["lm", "lm"],
      //                                lines of memory if > line. 0 means varies
      "magic_cookie_glitch": ["xmc", "sg"],
      //                                number of blank characters left by smso or rmso
      "max_attributes": ["ma", "ma"],
      //                                maximum combined attributes terminal can handle
      "max_colors": ["colors", "Co"],
      //                                maximum number of colors on screen
      "max_pairs": ["pairs", "pa"],
      //                                maximum number of color-pairs on the screen
      "maximum_windows": ["wnum", "MW"],
      //                                maximum number of defineable windows
      "no_color_video": ["ncv", "NC"],
      //                                video attributes that cannot be used with colors
      "num_labels": ["nlab", "Nl"],
      //                                number of labels on screen
      "padding_baud_rate": ["pb", "pb"],
      //                                lowest baud rate where padding needed
      "virtual_terminal": ["vt", "vt"],
      //                                virtual terminal number (CB/unix)
      "width_status_line": ["wsl", "ws"],
      //                                number of columns in status line
      // The  following  numeric  capabilities  are present in the SVr4.0 term structure, but are not yet documented in the man page.  They came in with
      // SVr4's printer support.
      //         Variable                                      Cap-                               TCap                                  Description
      //          Numeric                                      name                               Code
      "bit_image_entwining": ["bitwin", "Yo"],
      //                                number of passes for each bit-image row
      "bit_image_type": ["bitype", "Yp"],
      //                                type of bit-image device
      "buffer_capacity": ["bufsz", "Ya"],
      //                                numbers of bytes buffered before printing
      "buttons": ["btns", "BT"],
      //                                number of buttons on mouse
      "dot_horz_spacing": ["spinh", "Yc"],
      //                                spacing of dots hor‐ izontally in dots per inch
      "dot_vert_spacing": ["spinv", "Yb"],
      //                                spacing of pins ver‐ tically in pins per inch
      "max_micro_address": ["maddr", "Yd"],
      //                                maximum value in micro_..._address
      "max_micro_jump": ["mjump", "Ye"],
      //                                maximum value in parm_..._micro
      "micro_col_size": ["mcs", "Yf"],
      //                                character step size when in micro mode
      "micro_line_size": ["mls", "Yg"],
      //                                line step size when in micro mode
      "number_of_pins": ["npins", "Yh"],
      //                                numbers of pins in print-head
      "output_res_char": ["orc", "Yi"],
      //                                horizontal resolu‐ tion in units per line
      "output_res_horz_inch": ["orhi", "Yk"],
      //                                horizontal resolu‐ tion in units per inch
      "output_res_line": ["orl", "Yj"],
      //                                vertical resolution in units per line
      "output_res_vert_inch": ["orvi", "Yl"],
      //                                vertical resolution in units per inch
      "print_rate": ["cps", "Ym"],
      //                                print rate in char‐ acters per second
      "wide_char_size": ["widcs", "Yn"]
      //                                character step size when in double wide mode
    };
    alias.strings = {
      //         Variable                                    Cap-                             TCap                                   Description
      //          String                                     name                             Code
      "acs_chars": ["acsc", "ac"],
      //                              graphics charset pairs, based on vt100
      "back_tab": ["cbt", "bt"],
      //                              back tab (P)
      "bell": ["bel", "bl"],
      //                              audible signal (bell) (P)
      "carriage_return": ["cr", "cr"],
      //                              carriage return (P*) (P*)
      "change_char_pitch": ["cpi", "ZA"],
      //                              Change number of characters per inch to #1
      "change_line_pitch": ["lpi", "ZB"],
      //                              Change number of lines per inch to #1
      "change_res_horz": ["chr", "ZC"],
      //                              Change horizontal resolution to #1
      "change_res_vert": ["cvr", "ZD"],
      //                              Change vertical res‐ olution to #1
      "change_scroll_region": ["csr", "cs"],
      //                              change region to line #1 to line #2 (P)
      "char_padding": ["rmp", "rP"],
      //                              like ip but when in insert mode
      "clear_all_tabs": ["tbc", "ct"],
      //                              clear all tab stops (P)
      "clear_margins": ["mgc", "MC"],
      //                              clear right and left soft margins
      "clear_screen": ["clear", "cl"],
      //                              clear screen and home cursor (P*)
      "clr_bol": ["el1", "cb"],
      //                              Clear to beginning of line
      "clr_eol": ["el", "ce"],
      //                              clear to end of line (P)
      "clr_eos": ["ed", "cd"],
      //                              clear to end of screen (P*)
      "column_address": ["hpa", "ch"],
      //                              horizontal position #1, absolute (P)
      "command_character": ["cmdch", "CC"],
      //                              terminal settable cmd character in prototype !?
      "create_window": ["cwin", "CW"],
      //                              define a window #1 from #2,#3 to #4,#5
      "cursor_address": ["cup", "cm"],
      //                              move to row #1 col‐ umns #2
      "cursor_down": ["cud1", "do"],
      //                              down one line
      "cursor_home": ["home", "ho"],
      //                              home cursor (if no cup)
      "cursor_invisible": ["civis", "vi"],
      //                              make cursor invisi‐ ble
      "cursor_left": ["cub1", "le"],
      //                              move left one space
      "cursor_mem_address": ["mrcup", "CM"],
      //                              memory relative cur‐ sor addressing, move to row #1 columns #2
      "cursor_normal": ["cnorm", "ve"],
      //                              make cursor appear normal (undo civis/cvvis)
      "cursor_right": ["cuf1", "nd"],
      //                              non-destructive space (move right one space)
      "cursor_to_ll": ["ll", "ll"],
      //                              last line, first column (if no cup)
      "cursor_up": ["cuu1", "up"],
      //                              up one line
      "cursor_visible": ["cvvis", "vs"],
      //                              make cursor very visible
      "define_char": ["defc", "ZE"],
      //                              Define a character #1, #2 dots wide, descender #3
      "delete_character": ["dch1", "dc"],
      //                              delete character (P*)
      "delete_line": ["dl1", "dl"],
      //                              delete line (P*)
      "dial_phone": ["dial", "DI"],
      //                              dial number #1
      "dis_status_line": ["dsl", "ds"],
      //                              disable status line
      "display_clock": ["dclk", "DK"],
      //                              display clock
      "down_half_line": ["hd", "hd"],
      //                              half a line down
      "ena_acs": ["enacs", "eA"],
      //                              enable alternate char set
      "enter_alt_charset_mode": ["smacs", "as"],
      //                              start alternate character set (P)
      "enter_am_mode": ["smam", "SA"],
      //                              turn on automatic margins
      "enter_blink_mode": ["blink", "mb"],
      //                              turn on blinking
      "enter_bold_mode": ["bold", "md"],
      //                              turn on bold (extra bright) mode
      "enter_ca_mode": ["smcup", "ti"],
      //                              string to start pro‐ grams using cup
      "enter_delete_mode": ["smdc", "dm"],
      //                              enter delete mode
      "enter_dim_mode": ["dim", "mh"],
      //                              turn on half-bright mode
      "enter_doublewide_mode": ["swidm", "ZF"],
      //                              Enter double-wide mode
      "enter_draft_quality": ["sdrfq", "ZG"],
      //                              Enter draft-quality mode
      "enter_insert_mode": ["smir", "im"],
      //                              enter insert mode
      "enter_italics_mode": ["sitm", "ZH"],
      //                              Enter italic mode
      "enter_leftward_mode": ["slm", "ZI"],
      //                              Start leftward car‐ riage motion
      "enter_micro_mode": ["smicm", "ZJ"],
      //                              Start micro-motion mode
      "enter_near_letter_quality": ["snlq", "ZK"],
      //                              Enter NLQ mode
      "enter_normal_quality": ["snrmq", "ZL"],
      //                              Enter normal-quality mode
      "enter_protected_mode": ["prot", "mp"],
      //                              turn on protected mode
      "enter_reverse_mode": ["rev", "mr"],
      //                              turn on reverse video mode
      "enter_secure_mode": ["invis", "mk"],
      //                              turn on blank mode (characters invisi‐ ble)
      "enter_shadow_mode": ["sshm", "ZM"],
      //                              Enter shadow-print mode
      "enter_standout_mode": ["smso", "so"],
      //                              begin standout mode
      "enter_subscript_mode": ["ssubm", "ZN"],
      //                              Enter subscript mode
      "enter_superscript_mode": ["ssupm", "ZO"],
      //                              Enter superscript mode
      "enter_underline_mode": ["smul", "us"],
      //                              begin underline mode
      "enter_upward_mode": ["sum", "ZP"],
      //                              Start upward car‐ riage motion
      "enter_xon_mode": ["smxon", "SX"],
      //                              turn on xon/xoff handshaking
      "erase_chars": ["ech", "ec"],
      //                              erase #1 characters (P)
      "exit_alt_charset_mode": ["rmacs", "ae"],
      //                              end alternate char‐ acter set (P)
      "exit_am_mode": ["rmam", "RA"],
      //                              turn off automatic margins
      "exit_attribute_mode": ["sgr0", "me"],
      //                              turn off all attributes
      "exit_ca_mode": ["rmcup", "te"],
      //                              strings to end pro‐ grams using cup
      "exit_delete_mode": ["rmdc", "ed"],
      //                              end delete mode
      "exit_doublewide_mode": ["rwidm", "ZQ"],
      //                              End double-wide mode
      "exit_insert_mode": ["rmir", "ei"],
      //                              exit insert mode
      "exit_italics_mode": ["ritm", "ZR"],
      //                              End italic mode
      "exit_leftward_mode": ["rlm", "ZS"],
      //                              End left-motion mode
      "exit_micro_mode": ["rmicm", "ZT"],
      //                              End micro-motion mode
      "exit_shadow_mode": ["rshm", "ZU"],
      //                              End shadow-print mode
      "exit_standout_mode": ["rmso", "se"],
      //                              exit standout mode
      "exit_subscript_mode": ["rsubm", "ZV"],
      //                              End subscript mode
      "exit_superscript_mode": ["rsupm", "ZW"],
      //                              End superscript mode
      "exit_underline_mode": ["rmul", "ue"],
      //                              exit underline mode
      "exit_upward_mode": ["rum", "ZX"],
      //                              End reverse charac‐ ter motion
      "exit_xon_mode": ["rmxon", "RX"],
      //                              turn off xon/xoff handshaking
      "fixed_pause": ["pause", "PA"],
      //                              pause for 2-3 sec‐ onds
      "flash_hook": ["hook", "fh"],
      //                              flash switch hook
      "flash_screen": ["flash", "vb"],
      //                              visible bell (may not move cursor)
      "form_feed": ["ff", "ff"],
      //                              hardcopy terminal page eject (P*)
      "from_status_line": ["fsl", "fs"],
      //                              return from status line
      "goto_window": ["wingo", "WG"],
      //                              go to window #1
      "hangup": ["hup", "HU"],
      //                              hang-up phone
      "init_1string": ["is1", "i1"],
      //                              initialization string
      "init_2string": ["is2", "is"],
      //                              initialization string
      "init_3string": ["is3", "i3"],
      //                              initialization string
      "init_file": ["if", "if"],
      //                              name of initializa‐ tion file
      "init_prog": ["iprog", "iP"],
      //                              path name of program for initialization
      "initialize_color": ["initc", "Ic"],
      //                              initialize color #1 to (#2,#3,#4)
      "initialize_pair": ["initp", "Ip"],
      //                              Initialize color pair #1 to fg=(#2,#3,#4), bg=(#5,#6,#7)
      "insert_character": ["ich1", "ic"],
      //                              insert character (P)
      "insert_line": ["il1", "al"],
      //                              insert line (P*)
      "insert_padding": ["ip", "ip"],
      //                              insert padding after inserted character
      "key_a1": ["ka1", "K1"],
      //                              upper left of keypad
      "key_a3": ["ka3", "K3"],
      //                              upper right of key‐ pad
      "key_b2": ["kb2", "K2"],
      //                              center of keypad
      "key_backspace": ["kbs", "kb"],
      //                              backspace key
      "key_beg": ["kbeg", "@1"],
      //                              begin key
      "key_btab": ["kcbt", "kB"],
      //                              back-tab key
      "key_c1": ["kc1", "K4"],
      //                              lower left of keypad
      "key_c3": ["kc3", "K5"],
      //                              lower right of key‐ pad
      "key_cancel": ["kcan", "@2"],
      //                              cancel key
      "key_catab": ["ktbc", "ka"],
      //                              clear-all-tabs key
      "key_clear": ["kclr", "kC"],
      //                              clear-screen or erase key
      "key_close": ["kclo", "@3"],
      //                              close key
      "key_command": ["kcmd", "@4"],
      //                              command key
      "key_copy": ["kcpy", "@5"],
      //                              copy key
      "key_create": ["kcrt", "@6"],
      //                              create key
      "key_ctab": ["kctab", "kt"],
      //                              clear-tab key
      "key_dc": ["kdch1", "kD"],
      //                              delete-character key
      "key_dl": ["kdl1", "kL"],
      //                              delete-line key
      "key_down": ["kcud1", "kd"],
      //                              down-arrow key
      "key_eic": ["krmir", "kM"],
      //                              sent by rmir or smir in insert mode
      "key_end": ["kend", "@7"],
      //                              end key
      "key_enter": ["kent", "@8"],
      //                              enter/send key
      "key_eol": ["kel", "kE"],
      //                              clear-to-end-of-line key
      "key_eos": ["ked", "kS"],
      //                              clear-to-end-of- screen key
      "key_exit": ["kext", "@9"],
      //                              exit key
      "key_f0": ["kf0", "k0"],
      //                              F0 function key
      "key_f1": ["kf1", "k1"],
      //                              F1 function key
      "key_f10": ["kf10", "k;"],
      //                              F10 function key
      "key_f11": ["kf11", "F1"],
      //                              F11 function key
      "key_f12": ["kf12", "F2"],
      //                              F12 function key
      "key_f13": ["kf13", "F3"],
      //                              F13 function key
      "key_f14": ["kf14", "F4"],
      //                              F14 function key
      "key_f15": ["kf15", "F5"],
      //                              F15 function key
      "key_f16": ["kf16", "F6"],
      //                              F16 function key
      "key_f17": ["kf17", "F7"],
      //                              F17 function key
      "key_f18": ["kf18", "F8"],
      //                              F18 function key
      "key_f19": ["kf19", "F9"],
      //                              F19 function key
      "key_f2": ["kf2", "k2"],
      //                              F2 function key
      "key_f20": ["kf20", "FA"],
      //                              F20 function key
      "key_f21": ["kf21", "FB"],
      //                              F21 function key
      "key_f22": ["kf22", "FC"],
      //                              F22 function key
      "key_f23": ["kf23", "FD"],
      //                              F23 function key
      "key_f24": ["kf24", "FE"],
      //                              F24 function key
      "key_f25": ["kf25", "FF"],
      //                              F25 function key
      "key_f26": ["kf26", "FG"],
      //                              F26 function key
      "key_f27": ["kf27", "FH"],
      //                              F27 function key
      "key_f28": ["kf28", "FI"],
      //                              F28 function key
      "key_f29": ["kf29", "FJ"],
      //                              F29 function key
      "key_f3": ["kf3", "k3"],
      //                              F3 function key
      "key_f30": ["kf30", "FK"],
      //                              F30 function key
      "key_f31": ["kf31", "FL"],
      //                              F31 function key
      "key_f32": ["kf32", "FM"],
      //                              F32 function key
      "key_f33": ["kf33", "FN"],
      //                              F33 function key
      "key_f34": ["kf34", "FO"],
      //                              F34 function key
      "key_f35": ["kf35", "FP"],
      //                              F35 function key
      "key_f36": ["kf36", "FQ"],
      //                              F36 function key
      "key_f37": ["kf37", "FR"],
      //                              F37 function key
      "key_f38": ["kf38", "FS"],
      //                              F38 function key
      "key_f39": ["kf39", "FT"],
      //                              F39 function key
      "key_f4": ["kf4", "k4"],
      //                              F4 function key
      "key_f40": ["kf40", "FU"],
      //                              F40 function key
      "key_f41": ["kf41", "FV"],
      //                              F41 function key
      "key_f42": ["kf42", "FW"],
      //                              F42 function key
      "key_f43": ["kf43", "FX"],
      //                              F43 function key
      "key_f44": ["kf44", "FY"],
      //                              F44 function key
      "key_f45": ["kf45", "FZ"],
      //                              F45 function key
      "key_f46": ["kf46", "Fa"],
      //                              F46 function key
      "key_f47": ["kf47", "Fb"],
      //                              F47 function key
      "key_f48": ["kf48", "Fc"],
      //                              F48 function key
      "key_f49": ["kf49", "Fd"],
      //                              F49 function key
      "key_f5": ["kf5", "k5"],
      //                              F5 function key
      "key_f50": ["kf50", "Fe"],
      //                              F50 function key
      "key_f51": ["kf51", "Ff"],
      //                              F51 function key
      "key_f52": ["kf52", "Fg"],
      //                              F52 function key
      "key_f53": ["kf53", "Fh"],
      //                              F53 function key
      "key_f54": ["kf54", "Fi"],
      //                              F54 function key
      "key_f55": ["kf55", "Fj"],
      //                              F55 function key
      "key_f56": ["kf56", "Fk"],
      //                              F56 function key
      "key_f57": ["kf57", "Fl"],
      //                              F57 function key
      "key_f58": ["kf58", "Fm"],
      //                              F58 function key
      "key_f59": ["kf59", "Fn"],
      //                              F59 function key
      "key_f6": ["kf6", "k6"],
      //                              F6 function key
      "key_f60": ["kf60", "Fo"],
      //                              F60 function key
      "key_f61": ["kf61", "Fp"],
      //                              F61 function key
      "key_f62": ["kf62", "Fq"],
      //                              F62 function key
      "key_f63": ["kf63", "Fr"],
      //                              F63 function key
      "key_f7": ["kf7", "k7"],
      //                              F7 function key
      "key_f8": ["kf8", "k8"],
      //                              F8 function key
      "key_f9": ["kf9", "k9"],
      //                              F9 function key
      "key_find": ["kfnd", "@0"],
      //                              find key
      "key_help": ["khlp", "%1"],
      //                              help key
      "key_home": ["khome", "kh"],
      //                              home key
      "key_ic": ["kich1", "kI"],
      //                              insert-character key
      "key_il": ["kil1", "kA"],
      //                              insert-line key
      "key_left": ["kcub1", "kl"],
      //                              left-arrow key
      "key_ll": ["kll", "kH"],
      //                              lower-left key (home down)
      "key_mark": ["kmrk", "%2"],
      //                              mark key
      "key_message": ["kmsg", "%3"],
      //                              message key
      "key_move": ["kmov", "%4"],
      //                              move key
      "key_next": ["knxt", "%5"],
      //                              next key
      "key_npage": ["knp", "kN"],
      //                              next-page key
      "key_open": ["kopn", "%6"],
      //                              open key
      "key_options": ["kopt", "%7"],
      //                              options key
      "key_ppage": ["kpp", "kP"],
      //                              previous-page key
      "key_previous": ["kprv", "%8"],
      //                              previous key
      "key_print": ["kprt", "%9"],
      //                              print key
      "key_redo": ["krdo", "%0"],
      //                              redo key
      "key_reference": ["kref", "&1"],
      //                              reference key
      "key_refresh": ["krfr", "&2"],
      //                              refresh key
      "key_replace": ["krpl", "&3"],
      //                              replace key
      "key_restart": ["krst", "&4"],
      //                              restart key
      "key_resume": ["kres", "&5"],
      //                              resume key
      "key_right": ["kcuf1", "kr"],
      //                              right-arrow key
      "key_save": ["ksav", "&6"],
      //                              save key
      "key_sbeg": ["kBEG", "&9"],
      //                              shifted begin key
      "key_scancel": ["kCAN", "&0"],
      //                              shifted cancel key
      "key_scommand": ["kCMD", "*1"],
      //                              shifted command key
      "key_scopy": ["kCPY", "*2"],
      //                              shifted copy key
      "key_screate": ["kCRT", "*3"],
      //                              shifted create key
      "key_sdc": ["kDC", "*4"],
      //                              shifted delete-char‐ acter key
      "key_sdl": ["kDL", "*5"],
      //                              shifted delete-line key
      "key_select": ["kslt", "*6"],
      //                              select key
      "key_send": ["kEND", "*7"],
      //                              shifted end key
      "key_seol": ["kEOL", "*8"],
      //                              shifted clear-to- end-of-line key
      "key_sexit": ["kEXT", "*9"],
      //                              shifted exit key
      "key_sf": ["kind", "kF"],
      //                              scroll-forward key
      "key_sfind": ["kFND", "*0"],
      //                              shifted find key
      "key_shelp": ["kHLP", "#1"],
      //                              shifted help key
      "key_shome": ["kHOM", "#2"],
      //                              shifted home key
      "key_sic": ["kIC", "#3"],
      //                              shifted insert-char‐ acter key
      "key_sleft": ["kLFT", "#4"],
      //                              shifted left-arrow key
      "key_smessage": ["kMSG", "%a"],
      //                              shifted message key
      "key_smove": ["kMOV", "%b"],
      //                              shifted move key
      "key_snext": ["kNXT", "%c"],
      //                              shifted next key
      "key_soptions": ["kOPT", "%d"],
      //                              shifted options key
      "key_sprevious": ["kPRV", "%e"],
      //                              shifted previous key
      "key_sprint": ["kPRT", "%f"],
      //                              shifted print key
      "key_sr": ["kri", "kR"],
      //                              scroll-backward key
      "key_sredo": ["kRDO", "%g"],
      //                              shifted redo key
      "key_sreplace": ["kRPL", "%h"],
      //                              shifted replace key
      "key_sright": ["kRIT", "%i"],
      //                              shifted right-arrow key
      "key_srsume": ["kRES", "%j"],
      //                              shifted resume key
      "key_ssave": ["kSAV", "!1"],
      //                              shifted save key
      "key_ssuspend": ["kSPD", "!2"],
      //                              shifted suspend key
      "key_stab": ["khts", "kT"],
      //                              set-tab key
      "key_sundo": ["kUND", "!3"],
      //                              shifted undo key
      "key_suspend": ["kspd", "&7"],
      //                              suspend key
      "key_undo": ["kund", "&8"],
      //                              undo key
      "key_up": ["kcuu1", "ku"],
      //                              up-arrow key
      "keypad_local": ["rmkx", "ke"],
      //                              leave 'key‐ board_transmit' mode
      "keypad_xmit": ["smkx", "ks"],
      //                              enter 'key‐ board_transmit' mode
      "lab_f0": ["lf0", "l0"],
      //                              label on function key f0 if not f0
      "lab_f1": ["lf1", "l1"],
      //                              label on function key f1 if not f1
      "lab_f10": ["lf10", "la"],
      //                              label on function key f10 if not f10
      "lab_f2": ["lf2", "l2"],
      //                              label on function key f2 if not f2
      "lab_f3": ["lf3", "l3"],
      //                              label on function key f3 if not f3
      "lab_f4": ["lf4", "l4"],
      //                              label on function key f4 if not f4
      "lab_f5": ["lf5", "l5"],
      //                              label on function key f5 if not f5
      "lab_f6": ["lf6", "l6"],
      //                              label on function key f6 if not f6
      "lab_f7": ["lf7", "l7"],
      //                              label on function key f7 if not f7
      "lab_f8": ["lf8", "l8"],
      //                              label on function key f8 if not f8
      "lab_f9": ["lf9", "l9"],
      //                              label on function key f9 if not f9
      "label_format": ["fln", "Lf"],
      //                              label format
      "label_off": ["rmln", "LF"],
      //                              turn off soft labels
      "label_on": ["smln", "LO"],
      //                              turn on soft labels
      "meta_off": ["rmm", "mo"],
      //                              turn off meta mode
      "meta_on": ["smm", "mm"],
      //                              turn on meta mode (8th-bit on)
      "micro_column_address": ["mhpa", "ZY"],
      //                              Like column_address in micro mode
      "micro_down": ["mcud1", "ZZ"],
      //                              Like cursor_down in micro mode
      "micro_left": ["mcub1", "Za"],
      //                              Like cursor_left in micro mode
      "micro_right": ["mcuf1", "Zb"],
      //                              Like cursor_right in micro mode
      "micro_row_address": ["mvpa", "Zc"],
      //                              Like row_address #1 in micro mode
      "micro_up": ["mcuu1", "Zd"],
      //                              Like cursor_up in micro mode
      "newline": ["nel", "nw"],
      //                              newline (behave like cr followed by lf)
      "order_of_pins": ["porder", "Ze"],
      //                              Match software bits to print-head pins
      "orig_colors": ["oc", "oc"],
      //                              Set all color pairs to the original ones
      "orig_pair": ["op", "op"],
      //                              Set default pair to its original value
      "pad_char": ["pad", "pc"],
      //                              padding char (instead of null)
      "parm_dch": ["dch", "DC"],
      //                              delete #1 characters (P*)
      "parm_delete_line": ["dl", "DL"],
      //                              delete #1 lines (P*)
      "parm_down_cursor": ["cud", "DO"],
      //                              down #1 lines (P*)
      "parm_down_micro": ["mcud", "Zf"],
      //                              Like parm_down_cur‐ sor in micro mode
      "parm_ich": ["ich", "IC"],
      //                              insert #1 characters (P*)
      "parm_index": ["indn", "SF"],
      //                              scroll forward #1 lines (P)
      "parm_insert_line": ["il", "AL"],
      //                              insert #1 lines (P*)
      "parm_left_cursor": ["cub", "LE"],
      //                              move #1 characters to the left (P)
      "parm_left_micro": ["mcub", "Zg"],
      //                              Like parm_left_cur‐ sor in micro mode
      "parm_right_cursor": ["cuf", "RI"],
      //                              move #1 characters to the right (P*)
      "parm_right_micro": ["mcuf", "Zh"],
      //                              Like parm_right_cur‐ sor in micro mode
      "parm_rindex": ["rin", "SR"],
      //                              scroll back #1 lines (P)
      "parm_up_cursor": ["cuu", "UP"],
      //                              up #1 lines (P*)
      "parm_up_micro": ["mcuu", "Zi"],
      //                              Like parm_up_cursor in micro mode
      "pkey_key": ["pfkey", "pk"],
      //                              program function key #1 to type string #2
      "pkey_local": ["pfloc", "pl"],
      //                              program function key #1 to execute string #2
      "pkey_xmit": ["pfx", "px"],
      //                              program function key #1 to transmit string #2
      "plab_norm": ["pln", "pn"],
      //                              program label #1 to show string #2
      "print_screen": ["mc0", "ps"],
      //                              print contents of screen
      "prtr_non": ["mc5p", "pO"],
      //                              turn on printer for #1 bytes
      "prtr_off": ["mc4", "pf"],
      //                              turn off printer
      "prtr_on": ["mc5", "po"],
      //                              turn on printer
      "pulse": ["pulse", "PU"],
      //                              select pulse dialing
      "quick_dial": ["qdial", "QD"],
      //                              dial number #1 with‐ out checking
      "remove_clock": ["rmclk", "RC"],
      //                              remove clock
      "repeat_char": ["rep", "rp"],
      //                              repeat char #1 #2 times (P*)
      "req_for_input": ["rfi", "RF"],
      //                              send next input char (for ptys)
      "reset_1string": ["rs1", "r1"],
      //                              reset string
      "reset_2string": ["rs2", "r2"],
      //                              reset string
      "reset_3string": ["rs3", "r3"],
      //                              reset string
      "reset_file": ["rf", "rf"],
      //                              name of reset file
      "restore_cursor": ["rc", "rc"],
      //                              restore cursor to position of last save_cursor
      "row_address": ["vpa", "cv"],
      //                              vertical position #1 absolute (P)
      "save_cursor": ["sc", "sc"],
      //                              save current cursor position (P)
      "scroll_forward": ["ind", "sf"],
      //                              scroll text up (P)
      "scroll_reverse": ["ri", "sr"],
      //                              scroll text down (P)
      "select_char_set": ["scs", "Zj"],
      //                              Select character set, #1
      "set_attributes": ["sgr", "sa"],
      //                              define video attributes #1-#9 (PG9)
      "set_background": ["setb", "Sb"],
      //                              Set background color #1
      "set_bottom_margin": ["smgb", "Zk"],
      //                              Set bottom margin at current line
      "set_bottom_margin_parm": ["smgbp", "Zl"],
      //                              Set bottom margin at line #1 or (if smgtp is not given) #2 lines from bottom
      "set_clock": ["sclk", "SC"],
      //                              set clock, #1 hrs #2 mins #3 secs
      "set_color_pair": ["scp", "sp"],
      //                              Set current color pair to #1
      "set_foreground": ["setf", "Sf"],
      //                              Set foreground color #1
      "set_left_margin": ["smgl", "ML"],
      //                              set left soft margin at current col‐ umn.  See smgl. (ML is not in BSD termcap).
      "set_left_margin_parm": ["smglp", "Zm"],
      //                              Set left (right) margin at column #1
      "set_right_margin": ["smgr", "MR"],
      //                              set right soft margin at current column
      "set_right_margin_parm": ["smgrp", "Zn"],
      //                              Set right margin at column #1
      "set_tab": ["hts", "st"],
      //                              set a tab in every row, current columns
      "set_top_margin": ["smgt", "Zo"],
      //                              Set top margin at current line
      "set_top_margin_parm": ["smgtp", "Zp"],
      //                              Set top (bottom) margin at row #1
      "set_window": ["wind", "wi"],
      //                              current window is lines #1-#2 cols #3-#4
      "start_bit_image": ["sbim", "Zq"],
      //                              Start printing bit image graphics
      "start_char_set_def": ["scsd", "Zr"],
      //                              Start character set defi‐ nition #1, with #2 charac‐ ters in the set
      "stop_bit_image": ["rbim", "Zs"],
      //                              Stop printing bit image graphics
      "stop_char_set_def": ["rcsd", "Zt"],
      //                              End definition of charac‐ ter set #1
      "subscript_characters": ["subcs", "Zu"],
      //                              List of subscriptable characters
      "superscript_characters": ["supcs", "Zv"],
      //                              List of superscriptable characters
      "tab": ["ht", "ta"],
      //                              tab to next 8-space hard‐ ware tab stop
      "these_cause_cr": ["docr", "Zw"],
      //                              Printing any of these characters causes CR
      "to_status_line": ["tsl", "ts"],
      //                              move to status line, col‐ umn #1
      "tone": ["tone", "TO"],
      //                              select touch tone dialing
      "underline_char": ["uc", "uc"],
      //                              underline char and move past it
      "up_half_line": ["hu", "hu"],
      //                              half a line up
      "user0": ["u0", "u0"],
      //                              User string #0
      "user1": ["u1", "u1"],
      //                              User string #1
      "user2": ["u2", "u2"],
      //                              User string #2
      "user3": ["u3", "u3"],
      //                              User string #3
      "user4": ["u4", "u4"],
      //                              User string #4
      "user5": ["u5", "u5"],
      //                              User string #5
      "user6": ["u6", "u6"],
      //                              User string #6
      "user7": ["u7", "u7"],
      //                              User string #7
      "user8": ["u8", "u8"],
      //                              User string #8
      "user9": ["u9", "u9"],
      //                              User string #9
      "wait_tone": ["wait", "WA"],
      //                              wait for dial-tone
      "xoff_character": ["xoffc", "XF"],
      //                              XOFF character
      "xon_character": ["xonc", "XN"],
      //                              XON character
      "zero_motion": ["zerom", "Zx"],
      //                              No motion for subsequent character
      // The following string capabilities are present in the SVr4.0 term structure, but were originally not documented in the man page.
      //         Variable                                      Cap-                                 TCap                                 Description
      //          String                                       name                                 Code
      "alt_scancode_esc": ["scesa", "S8"],
      //                                Alternate escape for scancode emu‐ lation
      "bit_image_carriage_return": ["bicr", "Yv"],
      //                                Move to beginning of same row
      "bit_image_newline": ["binel", "Zz"],
      //                                Move to next row of the bit image
      "bit_image_repeat": ["birep", "Xy"],
      //                                Repeat bit image cell #1 #2 times
      "char_set_names": ["csnm", "Zy"],
      //                                Produce #1'th item from list of char‐ acter set names
      "code_set_init": ["csin", "ci"],
      //                                Init sequence for multiple codesets
      "color_names": ["colornm", "Yw"],
      //                                Give name for color #1
      "define_bit_image_region": ["defbi", "Yx"],
      //                                Define rectan‐ gualar bit image region
      "device_type": ["devt", "dv"],
      //                                Indicate lan‐ guage/codeset sup‐ port
      "display_pc_char": ["dispc", "S1"],
      //                                Display PC charac‐ ter #1
      "end_bit_image_region": ["endbi", "Yy"],
      //                                End a bit-image region
      "enter_pc_charset_mode": ["smpch", "S2"],
      //                                Enter PC character display mode
      "enter_scancode_mode": ["smsc", "S4"],
      //                                Enter PC scancode mode
      "exit_pc_charset_mode": ["rmpch", "S3"],
      //                                Exit PC character display mode
      "exit_scancode_mode": ["rmsc", "S5"],
      //                                Exit PC scancode mode
      "get_mouse": ["getm", "Gm"],
      //                                Curses should get button events, parameter #1 not documented.
      "key_mouse": ["kmous", "Km"],
      //                                Mouse event has occurred
      "mouse_info": ["minfo", "Mi"],
      //                                Mouse status information
      "pc_term_options": ["pctrm", "S6"],
      //                                PC terminal options
      "pkey_plab": ["pfxl", "xl"],
      //                                Program function key #1 to type string #2 and show string #3
      "req_mouse_pos": ["reqmp", "RQ"],
      //                                Request mouse position
      "scancode_escape": ["scesc", "S7"],
      //                                Escape for scan‐ code emulation
      "set0_des_seq": ["s0ds", "s0"],
      //                                Shift to codeset 0 (EUC set 0, ASCII)
      "set1_des_seq": ["s1ds", "s1"],
      //                                Shift to codeset 1
      "set2_des_seq": ["s2ds", "s2"],
      //                                Shift to codeset 2
      "set3_des_seq": ["s3ds", "s3"],
      //                                Shift to codeset 3
      "set_a_background": ["setab", "AB"],
      //                                Set background color to #1, using ANSI escape
      "set_a_foreground": ["setaf", "AF"],
      //                                Set foreground color to #1, using ANSI escape
      "set_color_band": ["setcolor", "Yz"],
      //                                Change to ribbon color #1
      "set_lr_margin": ["smglr", "ML"],
      //                                Set both left and right margins to #1, #2.  (ML is not in BSD term‐ cap).
      "set_page_length": ["slines", "YZ"],
      //                                Set page length to #1 lines
      "set_tb_margin": ["smgtb", "MT"],
      //                                Sets both top and bottom margins to #1, #2
      // The XSI Curses standard added these.  They are some post-4.1 versions of System V curses, e.g., Solaris 2.5 and IRIX 6.x.  The ncurses termcap
      // names for them are invented; according to the XSI Curses standard, they have no termcap names.  If your compiled terminfo entries  use  these,
      // they may not be binary-compatible with System V terminfo entries after SVr4.1; beware!
      //         Variable                                      Cap-                               TCap                                 Description
      //          String                                       name                               Code
      "enter_horizontal_hl_mode": ["ehhlm", "Xh"],
      //                               Enter horizontal highlight mode
      "enter_left_hl_mode": ["elhlm", "Xl"],
      //                               Enter left highlight mode
      "enter_low_hl_mode": ["elohlm", "Xo"],
      //                               Enter low highlight mode
      "enter_right_hl_mode": ["erhlm", "Xr"],
      //                               Enter right high‐ light mode
      "enter_top_hl_mode": ["ethlm", "Xt"],
      //                               Enter top highlight mode
      "enter_vertical_hl_mode": ["evhlm", "Xv"],
      //                               Enter vertical high‐ light mode
      "set_a_attributes": ["sgr1", "sA"],
      //                               Define second set of video attributes #1-#6
      "set_pglen_inch": ["slength", "sL"]
      //                               YI Set page length to #1 hundredth of an inch
    };
  }
});

// node_modules/blessed/lib/tput.js
var require_tput = __commonJS({
  "node_modules/blessed/lib/tput.js"(exports, module2) {
    var assert = require("assert");
    var path = require("path");
    var fs = require("fs");
    var cp = require("child_process");
    function Tput(options) {
      if (!(this instanceof Tput)) {
        return new Tput(options);
      }
      options = options || {};
      if (typeof options === "string") {
        options = { terminal: options };
      }
      this.options = options;
      this.terminal = options.terminal || options.term || process.env.TERM || (process.platform === "win32" ? "windows-ansi" : "xterm");
      this.terminal = this.terminal.toLowerCase();
      this.debug = options.debug;
      this.padding = options.padding;
      this.extended = options.extended;
      this.printf = options.printf;
      this.termcap = options.termcap;
      this.error = null;
      this.terminfoPrefix = options.terminfoPrefix;
      this.terminfoFile = options.terminfoFile;
      this.termcapFile = options.termcapFile;
      if (options.terminal || options.term) {
        this.setup();
      }
    }
    Tput.prototype.setup = function() {
      this.error = null;
      try {
        if (this.termcap) {
          try {
            this.injectTermcap();
          } catch (e) {
            if (this.debug)
              throw e;
            this.error = new Error("Termcap parse error.");
            this._useInternalCap(this.terminal);
          }
        } else {
          try {
            this.injectTerminfo();
          } catch (e) {
            if (this.debug)
              throw e;
            this.error = new Error("Terminfo parse error.");
            this._useInternalInfo(this.terminal);
          }
        }
      } catch (e) {
        if (this.debug)
          throw e;
        this.error = new Error("Terminfo not found.");
        this._useXtermInfo();
      }
    };
    Tput.prototype.term = function(is) {
      return this.terminal.indexOf(is) === 0;
    };
    Tput.prototype._debug = function() {
      if (!this.debug)
        return;
      return console.log.apply(console, arguments);
    };
    Tput.prototype._useVt102Cap = function() {
      return this.injectTermcap("vt102");
    };
    Tput.prototype._useXtermCap = function() {
      return this.injectTermcap(__dirname + "/../usr/xterm.termcap");
    };
    Tput.prototype._useXtermInfo = function() {
      return this.injectTerminfo(__dirname + "/../usr/xterm");
    };
    Tput.prototype._useInternalInfo = function(name) {
      name = path.basename(name);
      return this.injectTerminfo(__dirname + "/../usr/" + name);
    };
    Tput.prototype._useInternalCap = function(name) {
      name = path.basename(name);
      return this.injectTermcap(__dirname + "/../usr/" + name + ".termcap");
    };
    Tput.ipaths = [
      process.env.TERMINFO || "",
      (process.env.TERMINFO_DIRS || "").split(":"),
      (process.env.HOME || "") + "/.terminfo",
      "/usr/share/terminfo",
      "/usr/share/lib/terminfo",
      "/usr/lib/terminfo",
      "/usr/local/share/terminfo",
      "/usr/local/share/lib/terminfo",
      "/usr/local/lib/terminfo",
      "/usr/local/ncurses/lib/terminfo",
      "/lib/terminfo"
    ];
    Tput.prototype.readTerminfo = function(term) {
      var data, file, info;
      term = term || this.terminal;
      file = path.normalize(this._prefix(term));
      data = fs.readFileSync(file);
      info = this.parseTerminfo(data, file);
      if (this.debug) {
        this._terminfo = info;
      }
      return info;
    };
    Tput._prefix = Tput.prototype._prefix = function(term) {
      if (term) {
        if (~term.indexOf(path.sep)) {
          return term;
        }
        if (this.terminfoFile) {
          return this.terminfoFile;
        }
      }
      var paths = Tput.ipaths.slice(), file;
      if (this.terminfoPrefix) {
        paths.unshift(this.terminfoPrefix);
      }
      file = this._tprefix(paths, term);
      if (file)
        return file;
      file = this._tprefix(paths, term, true);
      if (file)
        return file;
      throw new Error("Terminfo directory not found.");
    };
    Tput._tprefix = Tput.prototype._tprefix = function(prefix, term, soft) {
      if (!prefix)
        return;
      var file, dir, i, sdiff, sfile, list;
      if (Array.isArray(prefix)) {
        for (i = 0; i < prefix.length; i++) {
          file = this._tprefix(prefix[i], term, soft);
          if (file)
            return file;
        }
        return;
      }
      var find = function(word) {
        var file2, ch;
        file2 = path.resolve(prefix, word[0]);
        try {
          fs.statSync(file2);
          return file2;
        } catch (e) {
          ;
        }
        ch = word[0].charCodeAt(0).toString(16);
        if (ch.length < 2)
          ch = "0" + ch;
        file2 = path.resolve(prefix, ch);
        try {
          fs.statSync(file2);
          return file2;
        } catch (e) {
          ;
        }
      };
      if (!term) {
        try {
          dir = fs.readdirSync(prefix).filter(function(file2) {
            return file2.length !== 1 && !/^[0-9a-fA-F]{2}$/.test(file2);
          });
          if (!dir.length) {
            return prefix;
          }
        } catch (e) {
          ;
        }
        return;
      }
      term = path.basename(term);
      dir = find(term);
      if (!dir)
        return;
      if (soft) {
        try {
          list = fs.readdirSync(dir);
        } catch (e) {
          return;
        }
        list.forEach(function(file2) {
          if (file2.indexOf(term) === 0) {
            var diff = file2.length - term.length;
            if (!sfile || diff < sdiff) {
              sdiff = diff;
              sfile = file2;
            }
          }
        });
        return sfile && (soft || sdiff === 0) ? path.resolve(dir, sfile) : null;
      }
      file = path.resolve(dir, term);
      try {
        fs.statSync(file);
        return file;
      } catch (e) {
        ;
      }
    };
    Tput.prototype.parseTerminfo = function(data, file) {
      var info = {}, extended, l = data.length, i = 0, v, o;
      var h = info.header = {
        dataSize: data.length,
        headerSize: 12,
        magicNumber: data[1] << 8 | data[0],
        namesSize: data[3] << 8 | data[2],
        boolCount: data[5] << 8 | data[4],
        numCount: data[7] << 8 | data[6],
        strCount: data[9] << 8 | data[8],
        strTableSize: data[11] << 8 | data[10]
      };
      h.total = h.headerSize + h.namesSize + h.boolCount + h.numCount * 2 + h.strCount * 2 + h.strTableSize;
      i += h.headerSize;
      var names = data.toString("ascii", i, i + h.namesSize - 1), parts = names.split("|"), name = parts[0], desc = parts.pop();
      info.name = name;
      info.names = parts;
      info.desc = desc;
      info.dir = path.resolve(file, "..", "..");
      info.file = file;
      i += h.namesSize - 1;
      assert.equal(data[i], 0);
      i++;
      info.bools = {};
      l = i + h.boolCount;
      o = 0;
      for (; i < l; i++) {
        v = Tput.bools[o++];
        info.bools[v] = data[i] === 1;
      }
      if (i % 2) {
        assert.equal(data[i], 0);
        i++;
      }
      info.numbers = {};
      l = i + h.numCount * 2;
      o = 0;
      for (; i < l; i += 2) {
        v = Tput.numbers[o++];
        if (data[i + 1] === 255 && data[i] === 255) {
          info.numbers[v] = -1;
        } else {
          info.numbers[v] = data[i + 1] << 8 | data[i];
        }
      }
      info.strings = {};
      l = i + h.strCount * 2;
      o = 0;
      for (; i < l; i += 2) {
        v = Tput.strings[o++];
        if (data[i + 1] === 255 && data[i] === 255) {
          info.strings[v] = -1;
        } else {
          info.strings[v] = data[i + 1] << 8 | data[i];
        }
      }
      Object.keys(info.strings).forEach(function(key) {
        if (info.strings[key] === -1) {
          delete info.strings[key];
          return;
        }
        if (info.strings[key] === 65534) {
          delete info.strings[key];
          return;
        }
        var s = i + info.strings[key], j = s;
        while (data[j])
          j++;
        assert(j < data.length);
        info.strings[key] = data.toString("ascii", s, j);
      });
      if (this.extended !== false) {
        i--;
        i += h.strTableSize;
        if (i % 2) {
          assert.equal(data[i], 0);
          i++;
        }
        l = data.length;
        if (i < l - 1) {
          try {
            extended = this.parseExtended(data.slice(i));
          } catch (e) {
            if (this.debug) {
              throw e;
            }
            return info;
          }
          info.header.extended = extended.header;
          ["bools", "numbers", "strings"].forEach(function(key) {
            merge(info[key], extended[key]);
          });
        }
      }
      return info;
    };
    Tput.prototype.parseExtended = function(data) {
      var info = {}, l = data.length, i = 0;
      var h = info.header = {
        dataSize: data.length,
        headerSize: 10,
        boolCount: data[i + 1] << 8 | data[i + 0],
        numCount: data[i + 3] << 8 | data[i + 2],
        strCount: data[i + 5] << 8 | data[i + 4],
        strTableSize: data[i + 7] << 8 | data[i + 6],
        lastStrTableOffset: data[i + 9] << 8 | data[i + 8]
      };
      h.total = h.headerSize + h.boolCount + h.numCount * 2 + h.strCount * 2 + h.strTableSize;
      i += h.headerSize;
      var _bools = [];
      l = i + h.boolCount;
      for (; i < l; i++) {
        _bools.push(data[i] === 1);
      }
      if (i % 2) {
        assert.equal(data[i], 0);
        i++;
      }
      var _numbers = [];
      l = i + h.numCount * 2;
      for (; i < l; i += 2) {
        if (data[i + 1] === 255 && data[i] === 255) {
          _numbers.push(-1);
        } else {
          _numbers.push(data[i + 1] << 8 | data[i]);
        }
      }
      var _strings = [];
      l = i + h.strCount * 2;
      for (; i < l; i += 2) {
        if (data[i + 1] === 255 && data[i] === 255) {
          _strings.push(-1);
        } else {
          _strings.push(data[i + 1] << 8 | data[i]);
        }
      }
      i = data.length - h.lastStrTableOffset;
      var high = 0;
      _strings.forEach(function(offset, k) {
        if (offset === -1) {
          _strings[k] = "";
          return;
        }
        var s = i + offset, j2 = s;
        while (data[j2])
          j2++;
        assert(j2 < data.length);
        if (high < j2 - i) {
          high = j2 - i;
        }
        _strings[k] = data.toString("ascii", s, j2);
      });
      i += high + 1;
      l = data.length;
      var sym = [], j;
      for (; i < l; i++) {
        j = i;
        while (data[j])
          j++;
        sym.push(data.toString("ascii", i, j));
        i = j;
      }
      j = 0;
      info.bools = {};
      _bools.forEach(function(bool) {
        info.bools[sym[j++]] = bool;
      });
      info.numbers = {};
      _numbers.forEach(function(number) {
        info.numbers[sym[j++]] = number;
      });
      info.strings = {};
      _strings.forEach(function(string) {
        info.strings[sym[j++]] = string;
      });
      assert.equal(i, data.length);
      return info;
    };
    Tput.prototype.compileTerminfo = function(term) {
      return this.compile(this.readTerminfo(term));
    };
    Tput.prototype.injectTerminfo = function(term) {
      return this.inject(this.compileTerminfo(term));
    };
    Tput.prototype.compile = function(info) {
      var self = this;
      if (!info) {
        throw new Error("Terminal not found.");
      }
      this.detectFeatures(info);
      this._debug(info);
      info.all = {};
      info.methods = {};
      ["bools", "numbers", "strings"].forEach(function(type3) {
        Object.keys(info[type3]).forEach(function(key) {
          info.all[key] = info[type3][key];
          info.methods[key] = self._compile(info, key, info.all[key]);
        });
      });
      Tput.bools.forEach(function(key) {
        if (info.methods[key] == null)
          info.methods[key] = false;
      });
      Tput.numbers.forEach(function(key) {
        if (info.methods[key] == null)
          info.methods[key] = -1;
      });
      Tput.strings.forEach(function(key) {
        if (!info.methods[key])
          info.methods[key] = noop;
      });
      Object.keys(info.methods).forEach(function(key) {
        if (!Tput.alias[key])
          return;
        Tput.alias[key].forEach(function(alias) {
          info.methods[alias] = info.methods[key];
        });
      });
      return info;
    };
    Tput.prototype.inject = function(info) {
      var self = this, methods = info.methods || info;
      Object.keys(methods).forEach(function(key) {
        if (typeof methods[key] !== "function") {
          self[key] = methods[key];
          return;
        }
        self[key] = function() {
          var args = Array.prototype.slice.call(arguments);
          return methods[key].call(self, args);
        };
      });
      this.info = info;
      this.all = info.all;
      this.methods = info.methods;
      this.bools = info.bools;
      this.numbers = info.numbers;
      this.strings = info.strings;
      if (!~info.names.indexOf(this.terminal)) {
        this.terminal = info.name;
      }
      this.features = info.features;
      Object.keys(info.features).forEach(function(key) {
        if (key === "padding") {
          if (!info.features.padding && self.options.padding !== true) {
            self.padding = false;
          }
          return;
        }
        self[key] = info.features[key];
      });
    };
    Tput.prototype._compile = function(info, key, str) {
      var v;
      this._debug("Compiling %s: %s", key, JSON.stringify(str));
      switch (typeof str) {
        case "boolean":
          return str;
        case "number":
          return str;
        case "string":
          break;
        default:
          return noop;
      }
      if (!str) {
        return noop;
      }
      if (key === "init_file" || key === "reset_file") {
        try {
          str = fs.readFileSync(str, "utf8");
          if (this.debug) {
            v = ("return " + JSON.stringify(str) + ";").replace(/\x1b/g, "\\x1b").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
            process.stdout.write(v + "\n");
          }
          return function() {
            return str;
          };
        } catch (e) {
          return noop;
        }
      }
      var tkey = info.name + "." + key, header = "var v, dyn = {}, stat = {}, stack = [], out = [];", footer = ';return out.join("");', code = header, val = str, buff = "", cap, ch, fi, then, els, end;
      function read(regex, no) {
        cap = regex.exec(val);
        if (!cap)
          return;
        val = val.substring(cap[0].length);
        ch = cap[1];
        if (!no)
          clear();
        return cap;
      }
      function stmt(c) {
        if (code[code.length - 1] === ",") {
          code = code.slice(0, -1);
        }
        code += c;
      }
      function expr(c) {
        code += c + ",";
      }
      function echo(c) {
        if (c === '""')
          return;
        expr("out.push(" + c + ")");
      }
      function print(c) {
        buff += c;
      }
      function clear() {
        if (buff) {
          echo(JSON.stringify(buff).replace(/\\u00([0-9a-fA-F]{2})/g, "\\x$1"));
          buff = "";
        }
      }
      while (val) {
        if (read(/^\n /, true)) {
          continue;
        }
        if (read(/^\^(.)/i, true)) {
          if (!(ch >= " " && ch <= "~")) {
            this._debug("%s: bad caret char.", tkey);
            print(cap[0]);
            continue;
          }
          if (ch === "?") {
            ch = "\x7F";
          } else {
            ch = ch.charCodeAt(0) & 31;
            if (ch === 0)
              ch = 128;
            ch = String.fromCharCode(ch);
          }
          print(ch);
          continue;
        }
        if (read(/^\\([0-7]{3})/, true)) {
          print(String.fromCharCode(parseInt(ch, 8)));
          continue;
        }
        if (read(/^\\([eEnlrtbfs\^\\,:0]|.)/, true)) {
          switch (ch) {
            case "e":
            case "E":
              ch = "\x1B";
              break;
            case "n":
              ch = "\n";
              break;
            case "l":
              ch = "\x85";
              break;
            case "r":
              ch = "\r";
              break;
            case "t":
              ch = "	";
              break;
            case "b":
              ch = "\b";
              break;
            case "f":
              ch = "\f";
              break;
            case "s":
              ch = " ";
              break;
            case "^":
              ch = "^";
              break;
            case "\\":
              ch = "\\";
              break;
            case ",":
              ch = ",";
              break;
            case ":":
              ch = ":";
              break;
            case "0":
              ch = "\x80";
              break;
            case "a":
              ch = "\x07";
              break;
            default:
              this._debug("%s: bad backslash char.", tkey);
              ch = cap[0];
              break;
          }
          print(ch);
          continue;
        }
        if (read(/^\$<(\d+)([*\/]{0,2})>/, true)) {
          if (this.padding)
            print(cap[0]);
          continue;
        }
        if (read(/^%%/, true)) {
          print("%");
          continue;
        }
        if (read(/^%((?::-|[+# ]){1,4})?(\d+(?:\.\d+)?)?([doxXsc])/)) {
          if (this.printf || cap[1] || cap[2] || ~"oxX".indexOf(cap[3])) {
            echo('sprintf("' + cap[0].replace(":-", "-") + '", stack.pop())');
          } else if (cap[3] === "c") {
            echo('(v = stack.pop(), isFinite(v) ? String.fromCharCode(v || 0200) : "")');
          } else {
            echo("stack.pop()");
          }
          continue;
        }
        if (read(/^%p([1-9])/)) {
          expr("(stack.push(v = params[" + (ch - 1) + "]), v)");
          continue;
        }
        if (read(/^%P([a-z])/)) {
          expr("dyn." + ch + " = stack.pop()");
          continue;
        }
        if (read(/^%g([a-z])/)) {
          expr("(stack.push(dyn." + ch + "), dyn." + ch + ")");
          continue;
        }
        if (read(/^%P([A-Z])/)) {
          expr("stat." + ch + " = stack.pop()");
          continue;
        }
        if (read(/^%g([A-Z])/)) {
          expr("(stack.push(v = stat." + ch + "), v)");
          continue;
        }
        if (read(/^%'(.)'/)) {
          expr("(stack.push(v = " + ch.charCodeAt(0) + "), v)");
          continue;
        }
        if (read(/^%\{(\d+)\}/)) {
          expr("(stack.push(v = " + ch + "), v)");
          continue;
        }
        if (read(/^%l/)) {
          expr('(stack.push(v = (stack.pop() || "").length || 0), v)');
          continue;
        }
        if (read(/^%([+\-*\/m&|\^=><])/)) {
          if (ch === "=")
            ch = "===";
          else if (ch === "m")
            ch = "%";
          expr("(v = stack.pop(), stack.push(v = (stack.pop() " + ch + " v) || 0), v)");
          continue;
        }
        if (read(/^%([AO])/)) {
          expr("(stack.push(v = (stack.pop() " + (ch === "A" ? "&&" : "||") + " stack.pop())), v)");
          continue;
        }
        if (read(/^%([!~])/)) {
          expr("(stack.push(v = " + ch + "stack.pop()), v)");
          continue;
        }
        if (read(/^%i/)) {
          expr("(params[0]++, params[1]++)");
          continue;
        }
        if (read(/^%\?/)) {
          end = -1;
          stmt(";if (");
          continue;
        }
        if (read(/^%t/)) {
          end = -1;
          stmt(") {");
          continue;
        }
        if (read(/^%e/)) {
          fi = val.indexOf("%?");
          then = val.indexOf("%t");
          els = val.indexOf("%e");
          end = val.indexOf("%;");
          if (end === -1)
            end = Infinity;
          if (then !== -1 && then < end && (fi === -1 || then < fi) && (els === -1 || then < els)) {
            stmt("} else if (");
          } else {
            stmt("} else {");
          }
          continue;
        }
        if (read(/^%;/)) {
          end = null;
          stmt("}");
          continue;
        }
        buff += val[0];
        val = val.substring(1);
      }
      clear();
      if (end != null) {
        stmt("}");
      }
      stmt(footer);
      v = code.slice(header.length, -footer.length);
      if (!v.length) {
        code = 'return "";';
      } else if (v = /^out\.push\(("(?:[^"]|\\")+")\)$/.exec(v)) {
        code = "return " + v[1] + ";";
      } else {
        code = code.replace(
          /\(stack\.push\(v = params\[(\d+)\]\), v\),out\.push\(stack\.pop\(\)\)/g,
          "out.push(params[$1])"
        );
        v = code.slice(header.length, -footer.length);
        if (!~v.indexOf("v = "))
          code = code.replace("v, ", "");
        if (!~v.indexOf("dyn"))
          code = code.replace("dyn = {}, ", "");
        if (!~v.indexOf("stat"))
          code = code.replace("stat = {}, ", "");
        if (!~v.indexOf("stack"))
          code = code.replace("stack = [], ", "");
        code = code.replace(
          /out = \[\];out\.push\(("(?:[^"]|\\")+")\),/,
          "out = [$1];"
        );
      }
      if (str === "\x1B%?") {
        code = 'return "\\x1b";';
      }
      if (this.debug) {
        v = code.replace(/\x1b/g, "\\x1b").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
        process.stdout.write(v + "\n");
      }
      try {
        if (this.options.stringify && code.indexOf("return ") === 0) {
          return new Function("", code)();
        }
        return this.printf || ~code.indexOf("sprintf(") ? new Function("sprintf, params", code).bind(null, sprintf) : new Function("params", code);
      } catch (e) {
        console.error("");
        console.error("Error on %s:", tkey);
        console.error(JSON.stringify(str));
        console.error("");
        console.error(code.replace(/(,|;)/g, "$1\n"));
        e.stack = e.stack.replace(/\x1b/g, "\\x1b");
        throw e;
      }
    };
    Tput.prototype._print = function(code, print, done) {
      var xon = !this.bools.needs_xon_xoff || this.bools.xon_xoff;
      print = print || write;
      done = done || noop;
      if (!this.padding) {
        print(code);
        return done();
      }
      var parts = code.split(/(?=\$<[\d.]+[*\/]{0,2}>)/), i = 0;
      (function next() {
        if (i === parts.length) {
          return done();
        }
        var part = parts[i++], padding = /^\$<([\d.]+)([*\/]{0,2})>/.exec(part), amount, suffix;
        if (!padding) {
          print(part);
          return next();
        }
        part = part.substring(padding[0].length);
        amount = +padding[1];
        suffix = padding[2];
        if (xon && !~suffix.indexOf("/")) {
          print(part);
          return next();
        }
        if (~suffix.indexOf("*")) {
          amount = amount;
        }
        return setTimeout(function() {
          print(part);
          return next();
        }, amount);
      })();
    };
    Tput.print = function() {
      var fake = {
        padding: true,
        bools: { needs_xon_xoff: true, xon_xoff: false }
      };
      return Tput.prototype._print.apply(fake, arguments);
    };
    Tput.cpaths = [
      process.env.TERMCAP || "",
      (process.env.TERMPATH || "").split(/[: ]/),
      (process.env.HOME || "") + "/.termcap",
      "/usr/share/misc/termcap",
      "/etc/termcap"
    ];
    Tput.prototype.readTermcap = function(term) {
      var self = this, terms, term_, root, paths;
      term = term || this.terminal;
      if (~term.indexOf(path.sep) && (terms = this._tryCap(path.resolve(term)))) {
        term_ = path.basename(term).split(".")[0];
        if (terms[process.env.TERM]) {
          term = process.env.TERM;
        } else if (terms[term_]) {
          term = term_;
        } else {
          term = Object.keys(terms)[0];
        }
      } else {
        paths = Tput.cpaths.slice();
        if (this.termcapFile) {
          paths.unshift(this.termcapFile);
        }
        paths.push(Tput.termcap);
        terms = this._tryCap(paths, term);
      }
      if (!terms) {
        throw new Error("Cannot find termcap for: " + term);
      }
      root = terms[term];
      if (this.debug) {
        this._termcap = terms;
      }
      (function tc(term2) {
        if (term2 && term2.strings.tc) {
          root.inherits = root.inherits || [];
          root.inherits.push(term2.strings.tc);
          var names = terms[term2.strings.tc] ? terms[term2.strings.tc].names : [term2.strings.tc];
          self._debug(
            "%s inherits from %s.",
            term2.names.join("/"),
            names.join("/")
          );
          var inherit = tc(terms[term2.strings.tc]);
          if (inherit) {
            ["bools", "numbers", "strings"].forEach(function(type3) {
              merge(term2[type3], inherit[type3]);
            });
          }
        }
        return term2;
      })(root);
      root = this.translateTermcap(root);
      return root;
    };
    Tput.prototype._tryCap = function(file, term) {
      if (!file)
        return;
      var terms, data, i;
      if (Array.isArray(file)) {
        for (i = 0; i < file.length; i++) {
          data = this._tryCap(file[i], term);
          if (data)
            return data;
        }
        return;
      }
      data = file[0] === "/" ? tryRead(file) : file;
      if (!data)
        return;
      terms = this.parseTermcap(data, file);
      if (term && !terms[term]) {
        return;
      }
      return terms;
    };
    Tput.prototype.parseTermcap = function(data, file) {
      var terms = {}, parts, term, entries, fields, field, names, i, j, k;
      data = data.replace(/\\\n[ \t]*/g, "");
      data = data.replace(/^#[^\n]+/gm, "");
      entries = data.trim().split(/\n+/);
      for (i = 0; i < entries.length; i++) {
        fields = entries[i].split(/:+/);
        for (j = 0; j < fields.length; j++) {
          field = fields[j].trim();
          if (!field)
            continue;
          if (j === 0) {
            names = field.split("|");
            term = {
              name: names[0],
              names,
              desc: names.pop(),
              file: ~file.indexOf(path.sep) ? path.resolve(file) : file,
              termcap: true
            };
            for (k = 0; k < names.length; k++) {
              terms[names[k]] = term;
            }
            term.bools = {};
            term.numbers = {};
            term.strings = {};
            continue;
          }
          if (~field.indexOf("=")) {
            parts = field.split("=");
            term.strings[parts[0]] = parts.slice(1).join("=");
          } else if (~field.indexOf("#")) {
            parts = field.split("#");
            term.numbers[parts[0]] = +parts.slice(1).join("#");
          } else {
            term.bools[field] = true;
          }
        }
      }
      return terms;
    };
    Tput.prototype.translateTermcap = function(info) {
      var self = this, out = {};
      if (!info)
        return;
      this._debug(info);
      ["name", "names", "desc", "file", "termcap"].forEach(function(key) {
        out[key] = info[key];
      });
      var map3 = function() {
        var out2 = {};
        Object.keys(Tput.alias).forEach(function(key) {
          var aliases = Tput.alias[key];
          out2[aliases.termcap] = key;
        });
        return out2;
      }();
      ["bools", "numbers", "strings"].forEach(function(key) {
        out[key] = {};
        Object.keys(info[key]).forEach(function(cap) {
          if (key === "strings") {
            info.strings[cap] = self._captoinfo(cap, info.strings[cap], 1);
          }
          if (map3[cap]) {
            out[key][map3[cap]] = info[key][cap];
          } else {
            out[key][cap] = info[key][cap];
          }
        });
      });
      return out;
    };
    Tput.prototype.compileTermcap = function(term) {
      return this.compile(this.readTermcap(term));
    };
    Tput.prototype.injectTermcap = function(term) {
      return this.inject(this.compileTermcap(term));
    };
    Tput.prototype._captoinfo = function(cap, s, parameterized) {
      var self = this;
      var capstart;
      if (parameterized == null) {
        parameterized = 0;
      }
      var MAX_PUSHED = 16, stack = [];
      var stackptr = 0, onstack = 0, seenm = 0, seenn = 0, seenr = 0, param = 1, i = 0, out = "";
      function warn() {
        var args = Array.prototype.slice.call(arguments);
        args[0] = "captoinfo: " + (args[0] || "");
        return self._debug.apply(self, args);
      }
      function isdigit(ch) {
        return ch >= "0" && ch <= "9";
      }
      function isgraph(ch) {
        return ch > " " && ch <= "~";
      }
      function cvtchar(sp) {
        var c = "\0", len;
        var j = i;
        switch (sp[j]) {
          case "\\":
            switch (sp[++j]) {
              case "'":
              case "$":
              case "\\":
              case "%":
                c = sp[j];
                len = 2;
                break;
              case "\0":
                c = "\\";
                len = 1;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
                len = 1;
                while (isdigit(sp[j])) {
                  c = String.fromCharCode(8 * c.charCodeAt(0) + (sp[j++].charCodeAt(0) - "0".charCodeAt(0)));
                  len++;
                }
                break;
              default:
                c = sp[j];
                len = 2;
                break;
            }
            break;
          case "^":
            c = String.fromCharCode(sp[++j].charCodeAt(0) & 31);
            len = 2;
            break;
          default:
            c = sp[j];
            len = 1;
        }
        if (isgraph(c) && c !== "," && c !== "'" && c !== "\\" && c !== ":") {
          out += "%'";
          out += c;
          out += "'";
        } else {
          out += "%{";
          if (c.charCodeAt(0) > 99) {
            out += String.fromCharCode(
              (c.charCodeAt(0) / 100 | 0) + "0".charCodeAt(0)
            );
          }
          if (c.charCodeAt(0) > 9) {
            out += String.fromCharCode(
              (c.charCodeAt(0) / 10 | 0) % 10 + "0".charCodeAt(0)
            );
          }
          out += String.fromCharCode(
            c.charCodeAt(0) % 10 + "0".charCodeAt(0)
          );
          out += "}";
        }
        return len;
      }
      function getparm(parm, n) {
        if (seenr) {
          if (parm === 1) {
            parm = 2;
          } else if (parm === 2) {
            parm = 1;
          }
        }
        if (onstack === parm) {
          if (n > 1) {
            warn("string may not be optimal");
            out += "%Pa";
            while (n--) {
              out += "%ga";
            }
          }
          return;
        }
        if (onstack !== 0) {
          push();
        }
        onstack = parm;
        while (n--) {
          out += "%p";
          out += String.fromCharCode("0".charCodeAt(0) + parm);
        }
        if (seenn && parm < 3) {
          out += "%{96}%^";
        }
        if (seenm && parm < 3) {
          out += "%{127}%^";
        }
      }
      function push() {
        if (stackptr >= MAX_PUSHED) {
          warn("string too complex to convert");
        } else {
          stack[stackptr++] = onstack;
        }
      }
      function pop() {
        if (stackptr === 0) {
          if (onstack === 0) {
            warn("I'm confused");
          } else {
            onstack = 0;
          }
        } else {
          onstack = stack[--stackptr];
        }
        param++;
      }
      function see03() {
        getparm(param, 1);
        out += "%3d";
        pop();
      }
      function invalid() {
        out += "%";
        i--;
        warn(
          "unknown %% code %s (%#x) in %s",
          JSON.stringify(s[i]),
          s[i].charCodeAt(0),
          cap
        );
      }
      capstart = null;
      if (s == null)
        s = "";
      if (parameterized >= 0 && isdigit(s[i])) {
        for (capstart = i; ; i++) {
          if (!(isdigit(s[i]) || s[i] === "*" || s[i] === ".")) {
            break;
          }
        }
      }
      while (s[i]) {
        switch (s[i]) {
          case "%":
            i++;
            if (parameterized < 1) {
              out += "%";
              break;
            }
            switch (s[i++]) {
              case "%":
                out += "%";
                break;
              case "r":
                if (seenr++ === 1) {
                  warn("saw %%r twice in %s", cap);
                }
                break;
              case "m":
                if (seenm++ === 1) {
                  warn("saw %%m twice in %s", cap);
                }
                break;
              case "n":
                if (seenn++ === 1) {
                  warn("saw %%n twice in %s", cap);
                }
                break;
              case "i":
                out += "%i";
                break;
              case "6":
              case "B":
                getparm(param, 1);
                out += "%{10}%/%{16}%*";
                getparm(param, 1);
                out += "%{10}%m%+";
                break;
              case "8":
              case "D":
                getparm(param, 2);
                out += "%{2}%*%-";
                break;
              case ">":
                getparm(param, 2);
                out += "%?";
                i += cvtchar(s);
                out += "%>%t";
                i += cvtchar(s);
                out += "%+%;";
                break;
              case "a":
                if ((s[i] === "=" || s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") && (s[i + 1] === "p" || s[i + 1] === "c") && s[i + 2] !== "\0" && s[i + 2]) {
                  var l;
                  l = 2;
                  if (s[i] !== "=") {
                    getparm(param, 1);
                  }
                  if (s[i + 1] === "p") {
                    getparm(param + s[i + 2].charCodeAt(0) - "@".charCodeAt(0), 1);
                    if (param !== onstack) {
                      pop();
                      param--;
                    }
                    l++;
                  } else {
                    i += 2, l += cvtchar(s), i -= 2;
                  }
                  switch (s[i]) {
                    case "+":
                      out += "%+";
                      break;
                    case "-":
                      out += "%-";
                      break;
                    case "*":
                      out += "%*";
                      break;
                    case "/":
                      out += "%/";
                      break;
                    case "=":
                      if (seenr) {
                        if (param === 1) {
                          onstack = 2;
                        } else if (param === 2) {
                          onstack = 1;
                        } else {
                          onstack = param;
                        }
                      } else {
                        onstack = param;
                      }
                      break;
                  }
                  i += l;
                  break;
                }
                getparm(param, 1);
                i += cvtchar(s);
                out += "%+";
                break;
              case "+":
                getparm(param, 1);
                i += cvtchar(s);
                out += "%+%c";
                pop();
                break;
              case "s":
                getparm(param, 1);
                out += "%s";
                pop();
                break;
              case "-":
                i += cvtchar(s);
                getparm(param, 1);
                out += "%-%c";
                pop();
                break;
              case ".":
                getparm(param, 1);
                out += "%c";
                pop();
                break;
              case "0":
                if (s[i] === "3") {
                  see03();
                  break;
                } else if (s[i] !== "2") {
                  invalid();
                  break;
                }
              case "2":
                getparm(param, 1);
                out += "%2d";
                pop();
                break;
              case "3":
                see03();
                break;
              case "d":
                getparm(param, 1);
                out += "%d";
                pop();
                break;
              case "f":
                param++;
                break;
              case "b":
                param--;
                break;
              case "\\":
                out += "%\\";
                break;
              default:
                invalid();
                break;
            }
            break;
          default:
            out += s[i++];
            break;
        }
      }
      if (capstart != null) {
        out += "$<";
        for (i = capstart; ; i++) {
          if (isdigit(s[i]) || s[i] === "*" || s[i] === ".") {
            out += s[i];
          } else {
            break;
          }
        }
        out += "/>";
      }
      if (s !== out) {
        warn(
          "Translating %s from %s to %s.",
          cap,
          JSON.stringify(s),
          JSON.stringify(out)
        );
      }
      return out;
    };
    Tput.prototype.getAll = function() {
      var dir = this._prefix(), list = asort(fs.readdirSync(dir)), infos = [];
      list.forEach(function(letter) {
        var terms = asort(fs.readdirSync(path.resolve(dir, letter)));
        infos.push.apply(infos, terms);
      });
      function asort(obj) {
        return obj.sort(function(a, b) {
          a = a.toLowerCase().charCodeAt(0);
          b = b.toLowerCase().charCodeAt(0);
          return a - b;
        });
      }
      return infos;
    };
    Tput.prototype.compileAll = function(start) {
      var self = this, all = {};
      this.getAll().forEach(function(name) {
        if (start && name !== start) {
          return;
        } else {
          start = null;
        }
        all[name] = self.compileTerminfo(name);
      });
      return all;
    };
    Tput.prototype.detectFeatures = function(info) {
      var data = this.parseACS(info);
      info.features = {
        unicode: this.detectUnicode(info),
        brokenACS: this.detectBrokenACS(info),
        PCRomSet: this.detectPCRomSet(info),
        magicCookie: this.detectMagicCookie(info),
        padding: this.detectPadding(info),
        setbuf: this.detectSetbuf(info),
        acsc: data.acsc,
        acscr: data.acscr
      };
      return info.features;
    };
    Tput.prototype.detectUnicode = function() {
      if (this.options.forceUnicode != null) {
        return this.options.forceUnicode;
      }
      var LANG = process.env.LANG + ":" + process.env.LANGUAGE + ":" + process.env.LC_ALL + ":" + process.env.LC_CTYPE;
      return /utf-?8/i.test(LANG) || this.GetConsoleCP() === 65001;
    };
    Tput.prototype.detectBrokenACS = function(info) {
      if (process.env.NCURSES_NO_UTF8_ACS != null) {
        return !!+process.env.NCURSES_NO_UTF8_ACS;
      }
      if (info.numbers.U8 >= 0) {
        return !!info.numbers.U8;
      }
      if (info.name === "linux") {
        return true;
      }
      if (this.detectPCRomSet(info)) {
        return true;
      }
      if (this.termcap && info.name.indexOf("screen") === 0 && process.env.TERMCAP && ~process.env.TERMCAP.indexOf("screen") && ~process.env.TERMCAP.indexOf("hhII00")) {
        if (~info.strings.enter_alt_charset_mode.indexOf("") || ~info.strings.enter_alt_charset_mode.indexOf("") || ~info.strings.set_attributes.indexOf("") || ~info.strings.set_attributes.indexOf("")) {
          return true;
        }
      }
      return false;
    };
    Tput.prototype.detectPCRomSet = function(info) {
      var s = info.strings;
      if (s.enter_pc_charset_mode && s.enter_alt_charset_mode && s.enter_pc_charset_mode === s.enter_alt_charset_mode && s.exit_pc_charset_mode === s.exit_alt_charset_mode) {
        return true;
      }
      return false;
    };
    Tput.prototype.detectMagicCookie = function() {
      return process.env.NCURSES_NO_MAGIC_COOKIE == null;
    };
    Tput.prototype.detectPadding = function() {
      return process.env.NCURSES_NO_PADDING == null;
    };
    Tput.prototype.detectSetbuf = function() {
      return process.env.NCURSES_NO_SETBUF == null;
    };
    Tput.prototype.parseACS = function(info) {
      var data = {};
      data.acsc = {};
      data.acscr = {};
      if (this.detectPCRomSet(info)) {
        return data;
      }
      Object.keys(Tput.acsc).forEach(function(ch) {
        var acs_chars = info.strings.acs_chars || "", i = acs_chars.indexOf(ch), next = acs_chars[i + 1];
        if (!next || i === -1 || !Tput.acsc[next]) {
          return;
        }
        data.acsc[ch] = Tput.acsc[next];
        data.acscr[Tput.acsc[next]] = ch;
      });
      return data;
    };
    Tput.prototype.GetConsoleCP = function() {
      var ccp;
      if (process.platform !== "win32") {
        return -1;
      }
      if (+process.env.NCURSES_UNICODE !== 0) {
        return 65001;
      }
      try {
        ccp = cp.execFileSync(process.env.WINDIR + "\\system32\\chcp.com", [], {
          stdio: ["ignore", "pipe", "ignore"],
          encoding: "ascii",
          timeout: 1500
        });
      } catch (e) {
        ;
      }
      ccp = /\d+/.exec(ccp);
      if (!ccp) {
        return -1;
      }
      ccp = +ccp[0];
      return ccp;
    };
    function noop() {
      return "";
    }
    noop.unsupported = true;
    function merge(a, b) {
      Object.keys(b).forEach(function(key) {
        a[key] = b[key];
      });
      return a;
    }
    function write(data) {
      return process.stdout.write(data);
    }
    function tryRead(file) {
      if (Array.isArray(file)) {
        for (var i = 0; i < file.length; i++) {
          var data = tryRead(file[i]);
          if (data)
            return data;
        }
        return "";
      }
      if (!file)
        return "";
      file = path.resolve.apply(path, arguments);
      try {
        return fs.readFileSync(file, "utf8");
      } catch (e) {
        return "";
      }
    }
    function sprintf(src) {
      var params2 = Array.prototype.slice.call(arguments, 1), rule = /%([\-+# ]{1,4})?(\d+(?:\.\d+)?)?([doxXsc])/g, i = 0;
      return src.replace(rule, function(_, flag, width, type3) {
        var flags = (flag || "").split(""), param = params2[i] != null ? params2[i] : "", initial = param, opt = {}, pre = "";
        i++;
        switch (type3) {
          case "d":
            param = (+param).toString(10);
            break;
          case "o":
            param = (+param).toString(8);
            break;
          case "x":
            param = (+param).toString(16);
            break;
          case "X":
            param = (+param).toString(16).toUppercase();
            break;
          case "s":
            break;
          case "c":
            param = isFinite(param) ? String.fromCharCode(param || 128) : "";
            break;
        }
        flags.forEach(function(flag2) {
          switch (flag2) {
            case "-":
              opt.left = true;
              break;
            case "+":
              opt.signs = true;
              break;
            case "#":
              opt.hexpoint = true;
              break;
            case " ":
              opt.space = true;
              break;
          }
        });
        width = +width.split(".")[0];
        if (width && !opt.left) {
          param = param + "";
          while (param.length < width) {
            param = "0" + param;
          }
        }
        if (opt.signs) {
          if (+initial >= 0) {
            pre += "+";
          }
        }
        if (opt.space) {
          if (!opt.signs && +initial >= 0) {
            pre += " ";
          }
        }
        if (opt.hexpoint) {
          switch (type3) {
            case "o":
              pre += "0";
              break;
            case "x":
              pre += "0x";
              break;
            case "X":
              pre += "0X";
              break;
          }
        }
        if (opt.left) {
          if (width > pre.length + param.length) {
            width -= pre.length + param.length;
            pre = Array(width + 1).join(" ") + pre;
          }
        }
        return pre + param;
      });
    }
    Tput._alias = require_alias();
    Tput.alias = {};
    ["bools", "numbers", "strings"].forEach(function(type3) {
      Object.keys(Tput._alias[type3]).forEach(function(key) {
        var aliases = Tput._alias[type3][key];
        Tput.alias[key] = [aliases[0]];
        Tput.alias[key].terminfo = aliases[0];
        Tput.alias[key].termcap = aliases[1];
      });
    });
    Tput.alias.no_esc_ctlc.push("beehive_glitch");
    Tput.alias.dest_tabs_magic_smso.push("teleray_glitch");
    Tput.alias.micro_col_size.push("micro_char_size");
    Tput.aliasMap = {};
    Object.keys(Tput.alias).forEach(function(key) {
      Tput.aliasMap[key] = key;
      Tput.alias[key].forEach(function(k) {
        Tput.aliasMap[k] = key;
      });
    });
    Tput.prototype.has = function(name) {
      name = Tput.aliasMap[name];
      var val = this.all[name];
      if (!name)
        return false;
      if (typeof val === "number") {
        return val !== -1;
      }
      return !!val;
    };
    Tput.termcap = "vt102|dec vt102::do=^J:co#80:li#24:cl=50\\E[;H\\E[2J::le=^H:bs:cm=5\\E[%i%d;%dH:nd=2\\E[C:up=2\\E[A::ce=3\\E[K:cd=50\\E[J:so=2\\E[7m:se=2\\E[m:us=2\\E[4m:ue=2\\E[m::md=2\\E[1m:mr=2\\E[7m:mb=2\\E[5m:me=2\\E[m:is=\\E[1;24r\\E[24;1H::rs=\\E>\\E[?3l\\E[?4l\\E[?5l\\E[?7h\\E[?8h:ks=\\E[?1h\\E=:ke=\\E[?1l\\E>::ku=\\EOA:kd=\\EOB:kr=\\EOC:kl=\\EOD:kb=^H:\\\n:ho=\\E[H:k1=\\EOP:k2=\\EOQ:k3=\\EOR:k4=\\EOS:pt:sr=5\\EM:vt#3::sc=\\E7:rc=\\E8:cs=\\E[%i%d;%dr:vs=\\E[?7l:ve=\\E[?7h::mi:al=\\E[L:dc=\\E[P:dl=\\E[M:ei=\\E[4l:im=\\E[4h:";
    Tput.bools = [
      "auto_left_margin",
      "auto_right_margin",
      "no_esc_ctlc",
      "ceol_standout_glitch",
      "eat_newline_glitch",
      "erase_overstrike",
      "generic_type",
      "hard_copy",
      "has_meta_key",
      "has_status_line",
      "insert_null_glitch",
      "memory_above",
      "memory_below",
      "move_insert_mode",
      "move_standout_mode",
      "over_strike",
      "status_line_esc_ok",
      "dest_tabs_magic_smso",
      "tilde_glitch",
      "transparent_underline",
      "xon_xoff",
      "needs_xon_xoff",
      "prtr_silent",
      "hard_cursor",
      "non_rev_rmcup",
      "no_pad_char",
      "non_dest_scroll_region",
      "can_change",
      "back_color_erase",
      "hue_lightness_saturation",
      "col_addr_glitch",
      "cr_cancels_micro_mode",
      "has_print_wheel",
      "row_addr_glitch",
      "semi_auto_right_margin",
      "cpi_changes_res",
      "lpi_changes_res",
      // #ifdef __INTERNAL_CAPS_VISIBLE
      "backspaces_with_bs",
      "crt_no_scrolling",
      "no_correctly_working_cr",
      "gnu_has_meta_key",
      "linefeed_is_newline",
      "has_hardware_tabs",
      "return_does_clr_eol"
    ];
    Tput.numbers = [
      "columns",
      "init_tabs",
      "lines",
      "lines_of_memory",
      "magic_cookie_glitch",
      "padding_baud_rate",
      "virtual_terminal",
      "width_status_line",
      "num_labels",
      "label_height",
      "label_width",
      "max_attributes",
      "maximum_windows",
      "max_colors",
      "max_pairs",
      "no_color_video",
      "buffer_capacity",
      "dot_vert_spacing",
      "dot_horz_spacing",
      "max_micro_address",
      "max_micro_jump",
      "micro_col_size",
      "micro_line_size",
      "number_of_pins",
      "output_res_char",
      "output_res_line",
      "output_res_horz_inch",
      "output_res_vert_inch",
      "print_rate",
      "wide_char_size",
      "buttons",
      "bit_image_entwining",
      "bit_image_type",
      // #ifdef __INTERNAL_CAPS_VISIBLE
      "magic_cookie_glitch_ul",
      "carriage_return_delay",
      "new_line_delay",
      "backspace_delay",
      "horizontal_tab_delay",
      "number_of_function_keys"
    ];
    Tput.strings = [
      "back_tab",
      "bell",
      "carriage_return",
      "change_scroll_region",
      "clear_all_tabs",
      "clear_screen",
      "clr_eol",
      "clr_eos",
      "column_address",
      "command_character",
      "cursor_address",
      "cursor_down",
      "cursor_home",
      "cursor_invisible",
      "cursor_left",
      "cursor_mem_address",
      "cursor_normal",
      "cursor_right",
      "cursor_to_ll",
      "cursor_up",
      "cursor_visible",
      "delete_character",
      "delete_line",
      "dis_status_line",
      "down_half_line",
      "enter_alt_charset_mode",
      "enter_blink_mode",
      "enter_bold_mode",
      "enter_ca_mode",
      "enter_delete_mode",
      "enter_dim_mode",
      "enter_insert_mode",
      "enter_secure_mode",
      "enter_protected_mode",
      "enter_reverse_mode",
      "enter_standout_mode",
      "enter_underline_mode",
      "erase_chars",
      "exit_alt_charset_mode",
      "exit_attribute_mode",
      "exit_ca_mode",
      "exit_delete_mode",
      "exit_insert_mode",
      "exit_standout_mode",
      "exit_underline_mode",
      "flash_screen",
      "form_feed",
      "from_status_line",
      "init_1string",
      "init_2string",
      "init_3string",
      "init_file",
      "insert_character",
      "insert_line",
      "insert_padding",
      "key_backspace",
      "key_catab",
      "key_clear",
      "key_ctab",
      "key_dc",
      "key_dl",
      "key_down",
      "key_eic",
      "key_eol",
      "key_eos",
      "key_f0",
      "key_f1",
      "key_f10",
      "key_f2",
      "key_f3",
      "key_f4",
      "key_f5",
      "key_f6",
      "key_f7",
      "key_f8",
      "key_f9",
      "key_home",
      "key_ic",
      "key_il",
      "key_left",
      "key_ll",
      "key_npage",
      "key_ppage",
      "key_right",
      "key_sf",
      "key_sr",
      "key_stab",
      "key_up",
      "keypad_local",
      "keypad_xmit",
      "lab_f0",
      "lab_f1",
      "lab_f10",
      "lab_f2",
      "lab_f3",
      "lab_f4",
      "lab_f5",
      "lab_f6",
      "lab_f7",
      "lab_f8",
      "lab_f9",
      "meta_off",
      "meta_on",
      "newline",
      "pad_char",
      "parm_dch",
      "parm_delete_line",
      "parm_down_cursor",
      "parm_ich",
      "parm_index",
      "parm_insert_line",
      "parm_left_cursor",
      "parm_right_cursor",
      "parm_rindex",
      "parm_up_cursor",
      "pkey_key",
      "pkey_local",
      "pkey_xmit",
      "print_screen",
      "prtr_off",
      "prtr_on",
      "repeat_char",
      "reset_1string",
      "reset_2string",
      "reset_3string",
      "reset_file",
      "restore_cursor",
      "row_address",
      "save_cursor",
      "scroll_forward",
      "scroll_reverse",
      "set_attributes",
      "set_tab",
      "set_window",
      "tab",
      "to_status_line",
      "underline_char",
      "up_half_line",
      "init_prog",
      "key_a1",
      "key_a3",
      "key_b2",
      "key_c1",
      "key_c3",
      "prtr_non",
      "char_padding",
      "acs_chars",
      "plab_norm",
      "key_btab",
      "enter_xon_mode",
      "exit_xon_mode",
      "enter_am_mode",
      "exit_am_mode",
      "xon_character",
      "xoff_character",
      "ena_acs",
      "label_on",
      "label_off",
      "key_beg",
      "key_cancel",
      "key_close",
      "key_command",
      "key_copy",
      "key_create",
      "key_end",
      "key_enter",
      "key_exit",
      "key_find",
      "key_help",
      "key_mark",
      "key_message",
      "key_move",
      "key_next",
      "key_open",
      "key_options",
      "key_previous",
      "key_print",
      "key_redo",
      "key_reference",
      "key_refresh",
      "key_replace",
      "key_restart",
      "key_resume",
      "key_save",
      "key_suspend",
      "key_undo",
      "key_sbeg",
      "key_scancel",
      "key_scommand",
      "key_scopy",
      "key_screate",
      "key_sdc",
      "key_sdl",
      "key_select",
      "key_send",
      "key_seol",
      "key_sexit",
      "key_sfind",
      "key_shelp",
      "key_shome",
      "key_sic",
      "key_sleft",
      "key_smessage",
      "key_smove",
      "key_snext",
      "key_soptions",
      "key_sprevious",
      "key_sprint",
      "key_sredo",
      "key_sreplace",
      "key_sright",
      "key_srsume",
      "key_ssave",
      "key_ssuspend",
      "key_sundo",
      "req_for_input",
      "key_f11",
      "key_f12",
      "key_f13",
      "key_f14",
      "key_f15",
      "key_f16",
      "key_f17",
      "key_f18",
      "key_f19",
      "key_f20",
      "key_f21",
      "key_f22",
      "key_f23",
      "key_f24",
      "key_f25",
      "key_f26",
      "key_f27",
      "key_f28",
      "key_f29",
      "key_f30",
      "key_f31",
      "key_f32",
      "key_f33",
      "key_f34",
      "key_f35",
      "key_f36",
      "key_f37",
      "key_f38",
      "key_f39",
      "key_f40",
      "key_f41",
      "key_f42",
      "key_f43",
      "key_f44",
      "key_f45",
      "key_f46",
      "key_f47",
      "key_f48",
      "key_f49",
      "key_f50",
      "key_f51",
      "key_f52",
      "key_f53",
      "key_f54",
      "key_f55",
      "key_f56",
      "key_f57",
      "key_f58",
      "key_f59",
      "key_f60",
      "key_f61",
      "key_f62",
      "key_f63",
      "clr_bol",
      "clear_margins",
      "set_left_margin",
      "set_right_margin",
      "label_format",
      "set_clock",
      "display_clock",
      "remove_clock",
      "create_window",
      "goto_window",
      "hangup",
      "dial_phone",
      "quick_dial",
      "tone",
      "pulse",
      "flash_hook",
      "fixed_pause",
      "wait_tone",
      "user0",
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
      "user9",
      "orig_pair",
      "orig_colors",
      "initialize_color",
      "initialize_pair",
      "set_color_pair",
      "set_foreground",
      "set_background",
      "change_char_pitch",
      "change_line_pitch",
      "change_res_horz",
      "change_res_vert",
      "define_char",
      "enter_doublewide_mode",
      "enter_draft_quality",
      "enter_italics_mode",
      "enter_leftward_mode",
      "enter_micro_mode",
      "enter_near_letter_quality",
      "enter_normal_quality",
      "enter_shadow_mode",
      "enter_subscript_mode",
      "enter_superscript_mode",
      "enter_upward_mode",
      "exit_doublewide_mode",
      "exit_italics_mode",
      "exit_leftward_mode",
      "exit_micro_mode",
      "exit_shadow_mode",
      "exit_subscript_mode",
      "exit_superscript_mode",
      "exit_upward_mode",
      "micro_column_address",
      "micro_down",
      "micro_left",
      "micro_right",
      "micro_row_address",
      "micro_up",
      "order_of_pins",
      "parm_down_micro",
      "parm_left_micro",
      "parm_right_micro",
      "parm_up_micro",
      "select_char_set",
      "set_bottom_margin",
      "set_bottom_margin_parm",
      "set_left_margin_parm",
      "set_right_margin_parm",
      "set_top_margin",
      "set_top_margin_parm",
      "start_bit_image",
      "start_char_set_def",
      "stop_bit_image",
      "stop_char_set_def",
      "subscript_characters",
      "superscript_characters",
      "these_cause_cr",
      "zero_motion",
      "char_set_names",
      "key_mouse",
      "mouse_info",
      "req_mouse_pos",
      "get_mouse",
      "set_a_foreground",
      "set_a_background",
      "pkey_plab",
      "device_type",
      "code_set_init",
      "set0_des_seq",
      "set1_des_seq",
      "set2_des_seq",
      "set3_des_seq",
      "set_lr_margin",
      "set_tb_margin",
      "bit_image_repeat",
      "bit_image_newline",
      "bit_image_carriage_return",
      "color_names",
      "define_bit_image_region",
      "end_bit_image_region",
      "set_color_band",
      "set_page_length",
      "display_pc_char",
      "enter_pc_charset_mode",
      "exit_pc_charset_mode",
      "enter_scancode_mode",
      "exit_scancode_mode",
      "pc_term_options",
      "scancode_escape",
      "alt_scancode_esc",
      "enter_horizontal_hl_mode",
      "enter_left_hl_mode",
      "enter_low_hl_mode",
      "enter_right_hl_mode",
      "enter_top_hl_mode",
      "enter_vertical_hl_mode",
      "set_a_attributes",
      "set_pglen_inch",
      // #ifdef __INTERNAL_CAPS_VISIBLE
      "termcap_init2",
      "termcap_reset",
      "linefeed_if_not_lf",
      "backspace_if_not_bs",
      "other_non_function_keys",
      "arrow_key_map",
      "acs_ulcorner",
      "acs_llcorner",
      "acs_urcorner",
      "acs_lrcorner",
      "acs_ltee",
      "acs_rtee",
      "acs_btee",
      "acs_ttee",
      "acs_hline",
      "acs_vline",
      "acs_plus",
      "memory_lock",
      "memory_unlock",
      "box_chars_1"
    ];
    Tput.acsc = {
      // (0
      "`": "\u25C6",
      // '◆'
      "a": "\u2592",
      // '▒'
      "b": "	",
      // '\t'
      "c": "\f",
      // '\f'
      "d": "\r",
      // '\r'
      "e": "\n",
      // '\n'
      "f": "\xB0",
      // '°'
      "g": "\xB1",
      // '±'
      "h": "\u2424",
      // '\u2424' (NL)
      "i": "\v",
      // '\v'
      "j": "\u2518",
      // '┘'
      "k": "\u2510",
      // '┐'
      "l": "\u250C",
      // '┌'
      "m": "\u2514",
      // '└'
      "n": "\u253C",
      // '┼'
      "o": "\u23BA",
      // '⎺'
      "p": "\u23BB",
      // '⎻'
      "q": "\u2500",
      // '─'
      "r": "\u23BC",
      // '⎼'
      "s": "\u23BD",
      // '⎽'
      "t": "\u251C",
      // '├'
      "u": "\u2524",
      // '┤'
      "v": "\u2534",
      // '┴'
      "w": "\u252C",
      // '┬'
      "x": "\u2502",
      // '│'
      "y": "\u2264",
      // '≤'
      "z": "\u2265",
      // '≥'
      "{": "\u03C0",
      // 'π'
      "|": "\u2260",
      // '≠'
      "}": "\xA3",
      // '£'
      "~": "\xB7"
      // '·'
    };
    Tput.utoa = Tput.prototype.utoa = {
      "\u25C6": "*",
      // '◆'
      "\u2592": " ",
      // '▒'
      // '\u0009': '\t', // '\t'
      // '\u000c': '\f', // '\f'
      // '\u000d': '\r', // '\r'
      // '\u000a': '\n', // '\n'
      "\xB0": "*",
      // '°'
      "\xB1": "+",
      // '±'
      "\u2424": "\n",
      // '\u2424' (NL)
      // '\u000b': '\v', // '\v'
      "\u2518": "+",
      // '┘'
      "\u2510": "+",
      // '┐'
      "\u250C": "+",
      // '┌'
      "\u2514": "+",
      // '└'
      "\u253C": "+",
      // '┼'
      "\u23BA": "-",
      // '⎺'
      "\u23BB": "-",
      // '⎻'
      "\u2500": "-",
      // '─'
      "\u23BC": "-",
      // '⎼'
      "\u23BD": "_",
      // '⎽'
      "\u251C": "+",
      // '├'
      "\u2524": "+",
      // '┤'
      "\u2534": "+",
      // '┴'
      "\u252C": "+",
      // '┬'
      "\u2502": "|",
      // '│'
      "\u2264": "<",
      // '≤'
      "\u2265": ">",
      // '≥'
      "\u03C0": "?",
      // 'π'
      "\u2260": "=",
      // '≠'
      "\xA3": "?",
      // '£'
      "\xB7": "*"
      // '·'
    };
    exports = Tput;
    exports.sprintf = sprintf;
    exports.tryRead = tryRead;
    module2.exports = exports;
  }
});

// node_modules/blessed/lib/colors.js
var require_colors = __commonJS({
  "node_modules/blessed/lib/colors.js"(exports) {
    exports.match = function(r1, g1, b1) {
      if (typeof r1 === "string") {
        var hex = r1;
        if (hex[0] !== "#") {
          return -1;
        }
        hex = exports.hexToRGB(hex);
        r1 = hex[0], g1 = hex[1], b1 = hex[2];
      } else if (Array.isArray(r1)) {
        b1 = r1[2], g1 = r1[1], r1 = r1[0];
      }
      var hash = r1 << 16 | g1 << 8 | b1;
      if (exports._cache[hash] != null) {
        return exports._cache[hash];
      }
      var ldiff = Infinity, li = -1, i = 0, c, r2, g2, b2, diff;
      for (; i < exports.vcolors.length; i++) {
        c = exports.vcolors[i];
        r2 = c[0];
        g2 = c[1];
        b2 = c[2];
        diff = colorDistance(r1, g1, b1, r2, g2, b2);
        if (diff === 0) {
          li = i;
          break;
        }
        if (diff < ldiff) {
          ldiff = diff;
          li = i;
        }
      }
      return exports._cache[hash] = li;
    };
    exports.RGBToHex = function(r, g, b) {
      if (Array.isArray(r)) {
        b = r[2], g = r[1], r = r[0];
      }
      function hex(n) {
        n = n.toString(16);
        if (n.length < 2)
          n = "0" + n;
        return n;
      }
      return "#" + hex(r) + hex(g) + hex(b);
    };
    exports.hexToRGB = function(hex) {
      if (hex.length === 4) {
        hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
      }
      var col = parseInt(hex.substring(1), 16), r = col >> 16 & 255, g = col >> 8 & 255, b = col & 255;
      return [r, g, b];
    };
    function colorDistance(r1, g1, b1, r2, g2, b2) {
      return Math.pow(30 * (r1 - r2), 2) + Math.pow(59 * (g1 - g2), 2) + Math.pow(11 * (b1 - b2), 2);
    }
    exports.mixColors = function(c1, c2, alpha) {
      if (c1 === 511)
        c1 = 0;
      if (c2 === 511)
        c2 = 0;
      if (alpha == null)
        alpha = 0.5;
      c1 = exports.vcolors[c1];
      var r1 = c1[0];
      var g1 = c1[1];
      var b1 = c1[2];
      c2 = exports.vcolors[c2];
      var r2 = c2[0];
      var g2 = c2[1];
      var b2 = c2[2];
      r1 += (r2 - r1) * alpha | 0;
      g1 += (g2 - g1) * alpha | 0;
      b1 += (b2 - b1) * alpha | 0;
      return exports.match([r1, g1, b1]);
    };
    exports.blend = function blend(attr, attr2, alpha) {
      var name, i, c, nc;
      var bg = attr & 511;
      if (attr2 != null) {
        var bg2 = attr2 & 511;
        if (bg === 511)
          bg = 0;
        if (bg2 === 511)
          bg2 = 0;
        bg = exports.mixColors(bg, bg2, alpha);
      } else {
        if (blend._cache[bg] != null) {
          bg = blend._cache[bg];
        } else if (bg >= 8 && bg <= 15) {
          bg -= 8;
        } else {
          name = exports.ncolors[bg];
          if (name) {
            for (i = 0; i < exports.ncolors.length; i++) {
              if (name === exports.ncolors[i] && i !== bg) {
                c = exports.vcolors[bg];
                nc = exports.vcolors[i];
                if (nc[0] + nc[1] + nc[2] < c[0] + c[1] + c[2]) {
                  blend._cache[bg] = i;
                  bg = i;
                  break;
                }
              }
            }
          }
        }
      }
      attr &= ~511;
      attr |= bg;
      var fg = attr >> 9 & 511;
      if (attr2 != null) {
        var fg2 = attr2 >> 9 & 511;
        if (fg === 511) {
          fg = 248;
        } else {
          if (fg === 511)
            fg = 7;
          if (fg2 === 511)
            fg2 = 7;
          fg = exports.mixColors(fg, fg2, alpha);
        }
      } else {
        if (blend._cache[fg] != null) {
          fg = blend._cache[fg];
        } else if (fg >= 8 && fg <= 15) {
          fg -= 8;
        } else {
          name = exports.ncolors[fg];
          if (name) {
            for (i = 0; i < exports.ncolors.length; i++) {
              if (name === exports.ncolors[i] && i !== fg) {
                c = exports.vcolors[fg];
                nc = exports.vcolors[i];
                if (nc[0] + nc[1] + nc[2] < c[0] + c[1] + c[2]) {
                  blend._cache[fg] = i;
                  fg = i;
                  break;
                }
              }
            }
          }
        }
      }
      attr &= ~(511 << 9);
      attr |= fg << 9;
      return attr;
    };
    exports.blend._cache = {};
    exports._cache = {};
    exports.reduce = function(color, total) {
      if (color >= 16 && total <= 16) {
        color = exports.ccolors[color];
      } else if (color >= 8 && total <= 8) {
        color -= 8;
      } else if (color >= 2 && total <= 2) {
        color %= 2;
      }
      return color;
    };
    exports.xterm = [
      "#000000",
      // black
      "#cd0000",
      // red3
      "#00cd00",
      // green3
      "#cdcd00",
      // yellow3
      "#0000ee",
      // blue2
      "#cd00cd",
      // magenta3
      "#00cdcd",
      // cyan3
      "#e5e5e5",
      // gray90
      "#7f7f7f",
      // gray50
      "#ff0000",
      // red
      "#00ff00",
      // green
      "#ffff00",
      // yellow
      "#5c5cff",
      // rgb:5c/5c/ff
      "#ff00ff",
      // magenta
      "#00ffff",
      // cyan
      "#ffffff"
      // white
    ];
    exports.colors = function() {
      var cols = exports.colors = [], _cols = exports.vcolors = [], r, g, b, i, l;
      function hex(n) {
        n = n.toString(16);
        if (n.length < 2)
          n = "0" + n;
        return n;
      }
      function push(i2, r2, g2, b2) {
        cols[i2] = "#" + hex(r2) + hex(g2) + hex(b2);
        _cols[i2] = [r2, g2, b2];
      }
      exports.xterm.forEach(function(c, i2) {
        c = parseInt(c.substring(1), 16);
        push(i2, c >> 16 & 255, c >> 8 & 255, c & 255);
      });
      for (r = 0; r < 6; r++) {
        for (g = 0; g < 6; g++) {
          for (b = 0; b < 6; b++) {
            i = 16 + r * 36 + g * 6 + b;
            push(
              i,
              r ? r * 40 + 55 : 0,
              g ? g * 40 + 55 : 0,
              b ? b * 40 + 55 : 0
            );
          }
        }
      }
      for (g = 0; g < 24; g++) {
        l = g * 10 + 8;
        i = 232 + g;
        push(i, l, l, l);
      }
      return cols;
    }();
    exports.ccolors = function() {
      var _cols = exports.vcolors.slice(), cols = exports.colors.slice(), out;
      exports.vcolors = exports.vcolors.slice(0, 8);
      exports.colors = exports.colors.slice(0, 8);
      out = cols.map(exports.match);
      exports.colors = cols;
      exports.vcolors = _cols;
      exports.ccolors = out;
      return out;
    }();
    var colorNames = exports.colorNames = {
      // special
      default: -1,
      normal: -1,
      bg: -1,
      fg: -1,
      // normal
      black: 0,
      red: 1,
      green: 2,
      yellow: 3,
      blue: 4,
      magenta: 5,
      cyan: 6,
      white: 7,
      // light
      lightblack: 8,
      lightred: 9,
      lightgreen: 10,
      lightyellow: 11,
      lightblue: 12,
      lightmagenta: 13,
      lightcyan: 14,
      lightwhite: 15,
      // bright
      brightblack: 8,
      brightred: 9,
      brightgreen: 10,
      brightyellow: 11,
      brightblue: 12,
      brightmagenta: 13,
      brightcyan: 14,
      brightwhite: 15,
      // alternate spellings
      grey: 8,
      gray: 8,
      lightgrey: 7,
      lightgray: 7,
      brightgrey: 7,
      brightgray: 7
    };
    exports.convert = function(color) {
      if (typeof color === "number") {
        ;
      } else if (typeof color === "string") {
        color = color.replace(/[\- ]/g, "");
        if (colorNames[color] != null) {
          color = colorNames[color];
        } else {
          color = exports.match(color);
        }
      } else if (Array.isArray(color)) {
        color = exports.match(color);
      } else {
        color = -1;
      }
      return color !== -1 ? color : 511;
    };
    exports.ccolors = {
      blue: [
        4,
        12,
        [17, 21],
        [24, 27],
        [31, 33],
        [38, 39],
        45,
        [54, 57],
        [60, 63],
        [67, 69],
        [74, 75],
        81,
        [91, 93],
        [97, 99],
        [103, 105],
        [110, 111],
        117,
        [128, 129],
        [134, 135],
        [140, 141],
        [146, 147],
        153,
        165,
        171,
        177,
        183,
        189
      ],
      green: [
        2,
        10,
        22,
        [28, 29],
        [34, 36],
        [40, 43],
        [46, 50],
        [64, 65],
        [70, 72],
        [76, 79],
        [82, 86],
        [106, 108],
        [112, 115],
        [118, 122],
        [148, 151],
        [154, 158],
        [190, 194]
      ],
      cyan: [
        6,
        14,
        23,
        30,
        37,
        44,
        51,
        66,
        73,
        80,
        87,
        109,
        116,
        123,
        152,
        159,
        195
      ],
      red: [
        1,
        9,
        52,
        [88, 89],
        [94, 95],
        [124, 126],
        [130, 132],
        [136, 138],
        [160, 163],
        [166, 169],
        [172, 175],
        [178, 181],
        [196, 200],
        [202, 206],
        [208, 212],
        [214, 218],
        [220, 224]
      ],
      magenta: [
        5,
        13,
        53,
        90,
        96,
        127,
        133,
        139,
        164,
        170,
        176,
        182,
        201,
        207,
        213,
        219,
        225
      ],
      yellow: [
        3,
        11,
        58,
        [100, 101],
        [142, 144],
        [184, 187],
        [226, 230]
      ],
      black: [
        0,
        8,
        16,
        59,
        102,
        [232, 243]
      ],
      white: [
        7,
        15,
        145,
        188,
        231,
        [244, 255]
      ]
    };
    exports.ncolors = [];
    Object.keys(exports.ccolors).forEach(function(name) {
      exports.ccolors[name].forEach(function(offset) {
        if (typeof offset === "number") {
          exports.ncolors[offset] = name;
          exports.ccolors[offset] = exports.colorNames[name];
          return;
        }
        for (var i = offset[0], l = offset[1]; i <= l; i++) {
          exports.ncolors[i] = name;
          exports.ccolors[i] = exports.colorNames[name];
        }
      });
      delete exports.ccolors[name];
    });
  }
});

// node_modules/blessed/lib/keys.js
var require_keys = __commonJS({
  "node_modules/blessed/lib/keys.js"(exports) {
    var EventEmitter = require("events").EventEmitter;
    function listenerCount(stream, event) {
      return EventEmitter.listenerCount ? EventEmitter.listenerCount(stream, event) : stream.listeners(event).length;
    }
    function emitKeypressEvents(stream) {
      if (stream._keypressDecoder)
        return;
      var StringDecoder = require("string_decoder").StringDecoder;
      stream._keypressDecoder = new StringDecoder("utf8");
      function onData(b) {
        if (listenerCount(stream, "keypress") > 0) {
          var r = stream._keypressDecoder.write(b);
          if (r)
            emitKeys(stream, r);
        } else {
          stream.removeListener("data", onData);
          stream.on("newListener", onNewListener);
        }
      }
      function onNewListener(event) {
        if (event === "keypress") {
          stream.on("data", onData);
          stream.removeListener("newListener", onNewListener);
        }
      }
      if (listenerCount(stream, "keypress") > 0) {
        stream.on("data", onData);
      } else {
        stream.on("newListener", onNewListener);
      }
    }
    exports.emitKeypressEvents = emitKeypressEvents;
    var metaKeyCodeReAnywhere = /(?:\x1b)([a-zA-Z0-9])/;
    var metaKeyCodeRe = new RegExp("^" + metaKeyCodeReAnywhere.source + "$");
    var functionKeyCodeReAnywhere = new RegExp("(?:\x1B+)(O|N|\\[|\\[\\[)(?:" + [
      "(\\d+)(?:;(\\d+))?([~^$])",
      "(?:M([@ #!a`])(.)(.))",
      // mouse
      "(?:1;)?(\\d+)?([a-zA-Z])"
    ].join("|") + ")");
    var functionKeyCodeRe = new RegExp("^" + functionKeyCodeReAnywhere.source);
    var escapeCodeReAnywhere = new RegExp([
      functionKeyCodeReAnywhere.source,
      metaKeyCodeReAnywhere.source,
      /\x1b./.source
    ].join("|"));
    function emitKeys(stream, s) {
      if (Buffer.isBuffer(s)) {
        if (s[0] > 127 && s[1] === void 0) {
          s[0] -= 128;
          s = "\x1B" + s.toString(stream.encoding || "utf-8");
        } else {
          s = s.toString(stream.encoding || "utf-8");
        }
      }
      if (isMouse(s))
        return;
      var buffer = [];
      var match;
      while (match = escapeCodeReAnywhere.exec(s)) {
        buffer = buffer.concat(s.slice(0, match.index).split(""));
        buffer.push(match[0]);
        s = s.slice(match.index + match[0].length);
      }
      buffer = buffer.concat(s.split(""));
      buffer.forEach(function(s2) {
        var ch, key = {
          sequence: s2,
          name: void 0,
          ctrl: false,
          meta: false,
          shift: false
        }, parts;
        if (s2 === "\r") {
          key.name = "return";
        } else if (s2 === "\n") {
          key.name = "enter";
        } else if (s2 === "	") {
          key.name = "tab";
        } else if (s2 === "\b" || s2 === "\x7F" || s2 === "\x1B\x7F" || s2 === "\x1B\b") {
          key.name = "backspace";
          key.meta = s2.charAt(0) === "\x1B";
        } else if (s2 === "\x1B" || s2 === "\x1B\x1B") {
          key.name = "escape";
          key.meta = s2.length === 2;
        } else if (s2 === " " || s2 === "\x1B ") {
          key.name = "space";
          key.meta = s2.length === 2;
        } else if (s2.length === 1 && s2 <= "") {
          key.name = String.fromCharCode(s2.charCodeAt(0) + "a".charCodeAt(0) - 1);
          key.ctrl = true;
        } else if (s2.length === 1 && s2 >= "a" && s2 <= "z") {
          key.name = s2;
        } else if (s2.length === 1 && s2 >= "A" && s2 <= "Z") {
          key.name = s2.toLowerCase();
          key.shift = true;
        } else if (parts = metaKeyCodeRe.exec(s2)) {
          key.name = parts[1].toLowerCase();
          key.meta = true;
          key.shift = /^[A-Z]$/.test(parts[1]);
        } else if (parts = functionKeyCodeRe.exec(s2)) {
          var code = (parts[1] || "") + (parts[2] || "") + (parts[4] || "") + (parts[9] || ""), modifier = (parts[3] || parts[8] || 1) - 1;
          key.ctrl = !!(modifier & 4);
          key.meta = !!(modifier & 10);
          key.shift = !!(modifier & 1);
          key.code = code;
          switch (code) {
            case "OP":
              key.name = "f1";
              break;
            case "OQ":
              key.name = "f2";
              break;
            case "OR":
              key.name = "f3";
              break;
            case "OS":
              key.name = "f4";
              break;
            case "[11~":
              key.name = "f1";
              break;
            case "[12~":
              key.name = "f2";
              break;
            case "[13~":
              key.name = "f3";
              break;
            case "[14~":
              key.name = "f4";
              break;
            case "[[A":
              key.name = "f1";
              break;
            case "[[B":
              key.name = "f2";
              break;
            case "[[C":
              key.name = "f3";
              break;
            case "[[D":
              key.name = "f4";
              break;
            case "[[E":
              key.name = "f5";
              break;
            case "[15~":
              key.name = "f5";
              break;
            case "[17~":
              key.name = "f6";
              break;
            case "[18~":
              key.name = "f7";
              break;
            case "[19~":
              key.name = "f8";
              break;
            case "[20~":
              key.name = "f9";
              break;
            case "[21~":
              key.name = "f10";
              break;
            case "[23~":
              key.name = "f11";
              break;
            case "[24~":
              key.name = "f12";
              break;
            case "[A":
              key.name = "up";
              break;
            case "[B":
              key.name = "down";
              break;
            case "[C":
              key.name = "right";
              break;
            case "[D":
              key.name = "left";
              break;
            case "[E":
              key.name = "clear";
              break;
            case "[F":
              key.name = "end";
              break;
            case "[H":
              key.name = "home";
              break;
            case "OA":
              key.name = "up";
              break;
            case "OB":
              key.name = "down";
              break;
            case "OC":
              key.name = "right";
              break;
            case "OD":
              key.name = "left";
              break;
            case "OE":
              key.name = "clear";
              break;
            case "OF":
              key.name = "end";
              break;
            case "OH":
              key.name = "home";
              break;
            case "[1~":
              key.name = "home";
              break;
            case "[2~":
              key.name = "insert";
              break;
            case "[3~":
              key.name = "delete";
              break;
            case "[4~":
              key.name = "end";
              break;
            case "[5~":
              key.name = "pageup";
              break;
            case "[6~":
              key.name = "pagedown";
              break;
            case "[[5~":
              key.name = "pageup";
              break;
            case "[[6~":
              key.name = "pagedown";
              break;
            case "[7~":
              key.name = "home";
              break;
            case "[8~":
              key.name = "end";
              break;
            case "[a":
              key.name = "up";
              key.shift = true;
              break;
            case "[b":
              key.name = "down";
              key.shift = true;
              break;
            case "[c":
              key.name = "right";
              key.shift = true;
              break;
            case "[d":
              key.name = "left";
              key.shift = true;
              break;
            case "[e":
              key.name = "clear";
              key.shift = true;
              break;
            case "[2$":
              key.name = "insert";
              key.shift = true;
              break;
            case "[3$":
              key.name = "delete";
              key.shift = true;
              break;
            case "[5$":
              key.name = "pageup";
              key.shift = true;
              break;
            case "[6$":
              key.name = "pagedown";
              key.shift = true;
              break;
            case "[7$":
              key.name = "home";
              key.shift = true;
              break;
            case "[8$":
              key.name = "end";
              key.shift = true;
              break;
            case "Oa":
              key.name = "up";
              key.ctrl = true;
              break;
            case "Ob":
              key.name = "down";
              key.ctrl = true;
              break;
            case "Oc":
              key.name = "right";
              key.ctrl = true;
              break;
            case "Od":
              key.name = "left";
              key.ctrl = true;
              break;
            case "Oe":
              key.name = "clear";
              key.ctrl = true;
              break;
            case "[2^":
              key.name = "insert";
              key.ctrl = true;
              break;
            case "[3^":
              key.name = "delete";
              key.ctrl = true;
              break;
            case "[5^":
              key.name = "pageup";
              key.ctrl = true;
              break;
            case "[6^":
              key.name = "pagedown";
              key.ctrl = true;
              break;
            case "[7^":
              key.name = "home";
              key.ctrl = true;
              break;
            case "[8^":
              key.name = "end";
              key.ctrl = true;
              break;
            case "[Z":
              key.name = "tab";
              key.shift = true;
              break;
            default:
              key.name = "undefined";
              break;
          }
        }
        if (key.name === void 0) {
          key = void 0;
        }
        if (s2.length === 1) {
          ch = s2;
        }
        if (key || ch) {
          stream.emit("keypress", ch, key);
        }
      });
    }
    function isMouse(s) {
      return /\x1b\[M/.test(s) || /\x1b\[M([\x00\u0020-\uffff]{3})/.test(s) || /\x1b\[(\d+;\d+;\d+)M/.test(s) || /\x1b\[<(\d+;\d+;\d+)([mM])/.test(s) || /\x1b\[<(\d+;\d+;\d+;\d+)&w/.test(s) || /\x1b\[24([0135])~\[(\d+),(\d+)\]\r/.test(s) || /\x1b\[(O|I)/.test(s);
    }
  }
});

// node_modules/blessed/lib/gpmclient.js
var require_gpmclient = __commonJS({
  "node_modules/blessed/lib/gpmclient.js"(exports, module2) {
    var net = require("net");
    var fs = require("fs");
    var EventEmitter = require("events").EventEmitter;
    var GPM_USE_MAGIC = false;
    var GPM_MOVE = 1;
    var GPM_DRAG = 2;
    var GPM_DOWN = 4;
    var GPM_UP = 8;
    var GPM_DOUBLE = 32;
    var GPM_MFLAG = 128;
    var GPM_REQ_NOPASTE = 3;
    var GPM_HARD = 256;
    var GPM_MAGIC = 1198550348;
    var GPM_SOCKET = "/dev/gpmctl";
    function send_config(socket, Gpm_Connect, callback) {
      var buffer;
      if (GPM_USE_MAGIC) {
        buffer = new Buffer(20);
        buffer.writeUInt32LE(GPM_MAGIC, 0);
        buffer.writeUInt16LE(Gpm_Connect.eventMask, 4);
        buffer.writeUInt16LE(Gpm_Connect.defaultMask, 6);
        buffer.writeUInt16LE(Gpm_Connect.minMod, 8);
        buffer.writeUInt16LE(Gpm_Connect.maxMod, 10);
        buffer.writeInt16LE(process.pid, 12);
        buffer.writeInt16LE(Gpm_Connect.vc, 16);
      } else {
        buffer = new Buffer(16);
        buffer.writeUInt16LE(Gpm_Connect.eventMask, 0);
        buffer.writeUInt16LE(Gpm_Connect.defaultMask, 2);
        buffer.writeUInt16LE(Gpm_Connect.minMod, 4);
        buffer.writeUInt16LE(Gpm_Connect.maxMod, 6);
        buffer.writeInt16LE(Gpm_Connect.pid, 8);
        buffer.writeInt16LE(Gpm_Connect.vc, 12);
      }
      socket.write(buffer, function() {
        if (callback)
          callback();
      });
    }
    function parseEvent(raw) {
      var evnt = {};
      evnt.buttons = raw[0];
      evnt.modifiers = raw[1];
      evnt.vc = raw.readUInt16LE(2);
      evnt.dx = raw.readInt16LE(4);
      evnt.dy = raw.readInt16LE(6);
      evnt.x = raw.readInt16LE(8);
      evnt.y = raw.readInt16LE(10);
      evnt.type = raw.readInt16LE(12);
      evnt.clicks = raw.readInt32LE(16);
      evnt.margin = raw.readInt32LE(20);
      evnt.wdx = raw.readInt16LE(24);
      evnt.wdy = raw.readInt16LE(26);
      return evnt;
    }
    function GpmClient(options) {
      if (!(this instanceof GpmClient)) {
        return new GpmClient(options);
      }
      EventEmitter.call(this);
      var pid = process.pid;
      var path;
      try {
        path = fs.readlinkSync("/proc/" + pid + "/fd/0");
      } catch (e) {
        ;
      }
      var tty = /tty[0-9]+$/.exec(path);
      if (tty === null) {
      }
      var vc;
      if (tty) {
        tty = tty[0];
        vc = +/[0-9]+$/.exec(tty)[0];
      }
      var self = this;
      if (tty) {
        fs.stat(GPM_SOCKET, function(err, stat) {
          if (err || !stat.isSocket()) {
            return;
          }
          var conf = {
            eventMask: 65535,
            defaultMask: GPM_MOVE | GPM_HARD,
            minMod: 0,
            maxMod: 65535,
            pid,
            vc
          };
          var gpm = net.createConnection(GPM_SOCKET);
          this.gpm = gpm;
          gpm.on("connect", function() {
            send_config(gpm, conf, function() {
              conf.pid = 0;
              conf.vc = GPM_REQ_NOPASTE;
            });
          });
          gpm.on("data", function(packet) {
            var evnt = parseEvent(packet);
            switch (evnt.type & 15) {
              case GPM_MOVE:
                if (evnt.dx || evnt.dy) {
                  self.emit("move", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
                }
                if (evnt.wdx || evnt.wdy) {
                  self.emit(
                    "mousewheel",
                    evnt.buttons,
                    evnt.modifiers,
                    evnt.x,
                    evnt.y,
                    evnt.wdx,
                    evnt.wdy
                  );
                }
                break;
              case GPM_DRAG:
                if (evnt.dx || evnt.dy) {
                  self.emit("drag", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
                }
                if (evnt.wdx || evnt.wdy) {
                  self.emit(
                    "mousewheel",
                    evnt.buttons,
                    evnt.modifiers,
                    evnt.x,
                    evnt.y,
                    evnt.wdx,
                    evnt.wdy
                  );
                }
                break;
              case GPM_DOWN:
                self.emit("btndown", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
                if (evnt.type & GPM_DOUBLE) {
                  self.emit("dblclick", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
                }
                break;
              case GPM_UP:
                self.emit("btnup", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
                if (!(evnt.type & GPM_MFLAG)) {
                  self.emit("click", evnt.buttons, evnt.modifiers, evnt.x, evnt.y);
                }
                break;
            }
          });
          gpm.on("error", function() {
            self.stop();
          });
        });
      }
    }
    GpmClient.prototype.__proto__ = EventEmitter.prototype;
    GpmClient.prototype.stop = function() {
      if (this.gpm) {
        this.gpm.end();
      }
      delete this.gpm;
    };
    GpmClient.prototype.ButtonName = function(btn) {
      if (btn & 4)
        return "left";
      if (btn & 2)
        return "middle";
      if (btn & 1)
        return "right";
      return "";
    };
    GpmClient.prototype.hasShiftKey = function(mod) {
      return mod & 1 ? true : false;
    };
    GpmClient.prototype.hasCtrlKey = function(mod) {
      return mod & 4 ? true : false;
    };
    GpmClient.prototype.hasMetaKey = function(mod) {
      return mod & 8 ? true : false;
    };
    module2.exports = GpmClient;
  }
});

// node_modules/blessed/lib/program.js
var require_program = __commonJS({
  "node_modules/blessed/lib/program.js"(exports, module2) {
    var EventEmitter = require("events").EventEmitter;
    var StringDecoder = require("string_decoder").StringDecoder;
    var cp = require("child_process");
    var util = require("util");
    var fs = require("fs");
    var Tput = require_tput();
    var colors = require_colors();
    var slice = Array.prototype.slice;
    var nextTick = global.setImmediate || process.nextTick.bind(process);
    function Program(options) {
      var self = this;
      if (!(this instanceof Program)) {
        return new Program(options);
      }
      Program.bind(this);
      EventEmitter.call(this);
      if (!options || options.__proto__ !== Object.prototype) {
        options = {
          input: arguments[0],
          output: arguments[1]
        };
      }
      this.options = options;
      this.input = options.input || process.stdin;
      this.output = options.output || process.stdout;
      options.log = options.log || options.dump;
      if (options.log) {
        this._logger = fs.createWriteStream(options.log);
        if (options.dump)
          this.setupDump();
      }
      this.zero = options.zero !== false;
      this.useBuffer = options.buffer;
      this.x = 0;
      this.y = 0;
      this.savedX = 0;
      this.savedY = 0;
      this.cols = this.output.columns || 1;
      this.rows = this.output.rows || 1;
      this.scrollTop = 0;
      this.scrollBottom = this.rows - 1;
      this._terminal = options.terminal || options.term || process.env.TERM || (process.platform === "win32" ? "windows-ansi" : "xterm");
      this._terminal = this._terminal.toLowerCase();
      this.isOSXTerm = process.env.TERM_PROGRAM === "Apple_Terminal";
      this.isiTerm2 = process.env.TERM_PROGRAM === "iTerm.app" || !!process.env.ITERM_SESSION_ID;
      this.isXFCE = /xfce/i.test(process.env.COLORTERM);
      this.isTerminator = !!process.env.TERMINATOR_UUID;
      this.isLXDE = false;
      this.isVTE = !!process.env.VTE_VERSION || this.isXFCE || this.isTerminator || this.isLXDE;
      this.isRxvt = /rxvt/i.test(process.env.COLORTERM);
      this.isXterm = false;
      this.tmux = !!process.env.TMUX;
      this.tmuxVersion = function() {
        if (!self.tmux)
          return 2;
        try {
          var version = cp.execFileSync("tmux", ["-V"], { encoding: "utf8" });
          return +/^tmux ([\d.]+)/i.exec(version.trim().split("\n")[0])[1];
        } catch (e) {
          return 2;
        }
      }();
      this._buf = "";
      this._flush = this.flush.bind(this);
      if (options.tput !== false) {
        this.setupTput();
      }
      this.listen();
    }
    Program.global = null;
    Program.total = 0;
    Program.instances = [];
    Program.bind = function(program) {
      if (!Program.global) {
        Program.global = program;
      }
      if (!~Program.instances.indexOf(program)) {
        Program.instances.push(program);
        program.index = Program.total;
        Program.total++;
      }
      if (Program._bound)
        return;
      Program._bound = true;
      unshiftEvent(process, "exit", Program._exitHandler = function() {
        Program.instances.forEach(function(program2) {
          program2.flush();
          program2._exiting = true;
        });
      });
    };
    Program.prototype.__proto__ = EventEmitter.prototype;
    Program.prototype.type = "program";
    Program.prototype.log = function() {
      return this._log("LOG", util.format.apply(util, arguments));
    };
    Program.prototype.debug = function() {
      if (!this.options.debug)
        return;
      return this._log("DEBUG", util.format.apply(util, arguments));
    };
    Program.prototype._log = function(pre, msg) {
      if (!this._logger)
        return;
      return this._logger.write(pre + ": " + msg + "\n-\n");
    };
    Program.prototype.setupDump = function() {
      var self = this, write = this.output.write, decoder = new StringDecoder("utf8");
      function stringify(data) {
        return caret(data.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t")).replace(/[^ -~]/g, function(ch) {
          if (ch.charCodeAt(0) > 255)
            return ch;
          ch = ch.charCodeAt(0).toString(16);
          if (ch.length > 2) {
            if (ch.length < 4)
              ch = "0" + ch;
            return "\\u" + ch;
          }
          if (ch.length < 2)
            ch = "0" + ch;
          return "\\x" + ch;
        });
      }
      function caret(data) {
        return data.replace(/[\0\x80\x1b-\x1f\x7f\x01-\x1a]/g, function(ch) {
          switch (ch) {
            case "\0":
            case "\x80":
              ch = "@";
              break;
            case "\x1B":
              ch = "[";
              break;
            case "":
              ch = "\\";
              break;
            case "":
              ch = "]";
              break;
            case "":
              ch = "^";
              break;
            case "":
              ch = "_";
              break;
            case "\x7F":
              ch = "?";
              break;
            default:
              ch = ch.charCodeAt(0);
              if (ch >= 1 && ch <= 26) {
                ch = String.fromCharCode(ch + 64);
              } else {
                return String.fromCharCode(ch);
              }
              break;
          }
          return "^" + ch;
        });
      }
      this.input.on("data", function(data) {
        self._log("IN", stringify(decoder.write(data)));
      });
      this.output.write = function(data) {
        self._log("OUT", stringify(data));
        return write.apply(this, arguments);
      };
    };
    Program.prototype.setupTput = function() {
      if (this._tputSetup)
        return;
      this._tputSetup = true;
      var self = this, options = this.options, write = this._write.bind(this);
      var tput = this.tput = new Tput({
        terminal: this.terminal,
        padding: options.padding,
        extended: options.extended,
        printf: options.printf,
        termcap: options.termcap,
        forceUnicode: options.forceUnicode
      });
      if (tput.error) {
        nextTick(function() {
          self.emit("warning", tput.error.message);
        });
      }
      if (tput.padding) {
        nextTick(function() {
          self.emit("warning", "Terminfo padding has been enabled.");
        });
      }
      this.put = function() {
        var args = slice.call(arguments), cap = args.shift();
        if (tput[cap]) {
          return this._write(tput[cap].apply(tput, args));
        }
      };
      Object.keys(tput).forEach(function(key) {
        if (self[key] == null) {
          self[key] = tput[key];
        }
        if (typeof tput[key] !== "function") {
          self.put[key] = tput[key];
          return;
        }
        if (tput.padding) {
          self.put[key] = function() {
            return tput._print(tput[key].apply(tput, arguments), write);
          };
        } else {
          self.put[key] = function() {
            return self._write(tput[key].apply(tput, arguments));
          };
        }
      });
    };
    Program.prototype.__defineGetter__("terminal", function() {
      return this._terminal;
    });
    Program.prototype.__defineSetter__("terminal", function(terminal) {
      this.setTerminal(terminal);
      return this.terminal;
    });
    Program.prototype.setTerminal = function(terminal) {
      this._terminal = terminal.toLowerCase();
      delete this._tputSetup;
      this.setupTput();
    };
    Program.prototype.has = function(name) {
      return this.tput ? this.tput.has(name) : false;
    };
    Program.prototype.term = function(is) {
      return this.terminal.indexOf(is) === 0;
    };
    Program.prototype.listen = function() {
      var self = this;
      if (!this.input._blessedInput) {
        this.input._blessedInput = 1;
        this._listenInput();
      } else {
        this.input._blessedInput++;
      }
      this.on("newListener", this._newHandler = function fn(type3) {
        if (type3 === "keypress" || type3 === "mouse") {
          self.removeListener("newListener", fn);
          if (self.input.setRawMode && !self.input.isRaw) {
            self.input.setRawMode(true);
            self.input.resume();
          }
        }
      });
      this.on("newListener", function fn(type3) {
        if (type3 === "mouse") {
          self.removeListener("newListener", fn);
          self.bindMouse();
        }
      });
      if (!this.output._blessedOutput) {
        this.output._blessedOutput = 1;
        this._listenOutput();
      } else {
        this.output._blessedOutput++;
      }
    };
    Program.prototype._listenInput = function() {
      var keys4 = require_keys(), self = this;
      this.input.on("keypress", this.input._keypressHandler = function(ch, key) {
        key = key || { ch };
        if (key.name === "undefined" && (key.code === "[M" || key.code === "[I" || key.code === "[O")) {
          return;
        }
        if (key.name === "undefined") {
          return;
        }
        if (key.name === "enter" && key.sequence === "\n") {
          key.name = "linefeed";
        }
        if (key.name === "return" && key.sequence === "\r") {
          self.input.emit("keypress", ch, merge({}, key, { name: "enter" }));
        }
        var name = (key.ctrl ? "C-" : "") + (key.meta ? "M-" : "") + (key.shift && key.name ? "S-" : "") + (key.name || ch);
        key.full = name;
        Program.instances.forEach(function(program) {
          if (program.input !== self.input)
            return;
          program.emit("keypress", ch, key);
          program.emit("key " + name, ch, key);
        });
      });
      this.input.on("data", this.input._dataHandler = function(data) {
        Program.instances.forEach(function(program) {
          if (program.input !== self.input)
            return;
          program.emit("data", data);
        });
      });
      keys4.emitKeypressEvents(this.input);
    };
    Program.prototype._listenOutput = function() {
      var self = this;
      if (!this.output.isTTY) {
        nextTick(function() {
          self.emit("warning", "Output is not a TTY");
        });
      }
      function resize() {
        Program.instances.forEach(function(program) {
          if (program.output !== self.output)
            return;
          program.cols = program.output.columns;
          program.rows = program.output.rows;
          program.emit("resize");
        });
      }
      this.output.on("resize", this.output._resizeHandler = function() {
        Program.instances.forEach(function(program) {
          if (program.output !== self.output)
            return;
          if (!program.options.resizeTimeout) {
            return resize();
          }
          if (program._resizeTimer) {
            clearTimeout(program._resizeTimer);
            delete program._resizeTimer;
          }
          var time = typeof program.options.resizeTimeout === "number" ? program.options.resizeTimeout : 300;
          program._resizeTimer = setTimeout(resize, time);
        });
      });
    };
    Program.prototype.destroy = function() {
      var index = Program.instances.indexOf(this);
      if (~index) {
        Program.instances.splice(index, 1);
        Program.total--;
        this.flush();
        this._exiting = true;
        Program.global = Program.instances[0];
        if (Program.total === 0) {
          Program.global = null;
          process.removeListener("exit", Program._exitHandler);
          delete Program._exitHandler;
          delete Program._bound;
        }
        this.input._blessedInput--;
        this.output._blessedOutput--;
        if (this.input._blessedInput === 0) {
          this.input.removeListener("keypress", this.input._keypressHandler);
          this.input.removeListener("data", this.input._dataHandler);
          delete this.input._keypressHandler;
          delete this.input._dataHandler;
          if (this.input.setRawMode) {
            if (this.input.isRaw) {
              this.input.setRawMode(false);
            }
            if (!this.input.destroyed) {
              this.input.pause();
            }
          }
        }
        if (this.output._blessedOutput === 0) {
          this.output.removeListener("resize", this.output._resizeHandler);
          delete this.output._resizeHandler;
        }
        this.removeListener("newListener", this._newHandler);
        delete this._newHandler;
        this.destroyed = true;
        this.emit("destroy");
      }
    };
    Program.prototype.key = function(key, listener) {
      if (typeof key === "string")
        key = key.split(/\s*,\s*/);
      key.forEach(function(key2) {
        return this.on("key " + key2, listener);
      }, this);
    };
    Program.prototype.onceKey = function(key, listener) {
      if (typeof key === "string")
        key = key.split(/\s*,\s*/);
      key.forEach(function(key2) {
        return this.once("key " + key2, listener);
      }, this);
    };
    Program.prototype.unkey = Program.prototype.removeKey = function(key, listener) {
      if (typeof key === "string")
        key = key.split(/\s*,\s*/);
      key.forEach(function(key2) {
        return this.removeListener("key " + key2, listener);
      }, this);
    };
    Program.prototype.bindMouse = function() {
      if (this._boundMouse)
        return;
      this._boundMouse = true;
      var decoder = new StringDecoder("utf8"), self = this;
      this.on("data", function(data) {
        var text = decoder.write(data);
        if (!text)
          return;
        self._bindMouse(text, data);
      });
    };
    Program.prototype._bindMouse = function(s, buf) {
      var self = this, key, parts, b, x, y, mod, params2, down, page, button;
      key = {
        name: void 0,
        ctrl: false,
        meta: false,
        shift: false
      };
      if (Buffer.isBuffer(s)) {
        if (s[0] > 127 && s[1] === void 0) {
          s[0] -= 128;
          s = "\x1B" + s.toString("utf-8");
        } else {
          s = s.toString("utf-8");
        }
      }
      var bx = s.charCodeAt(4);
      var by = s.charCodeAt(5);
      if (buf[0] === 27 && buf[1] === 91 && buf[2] === 77 && (this.isVTE || bx >= 65533 || by >= 65533 || bx > 0 && bx < 32 || by > 0 && by < 32 || buf[4] > 223 && buf[4] < 248 && buf.length === 6 || buf[5] > 223 && buf[5] < 248 && buf.length === 6)) {
        b = buf[3];
        x = buf[4];
        y = buf[5];
        if (x < 32)
          x += 255;
        if (y < 32)
          y += 255;
        s = "\x1B[M" + String.fromCharCode(b) + String.fromCharCode(x) + String.fromCharCode(y);
      }
      if (parts = /^\x1b\[M([\x00\u0020-\uffff]{3})/.exec(s)) {
        b = parts[1].charCodeAt(0);
        x = parts[1].charCodeAt(1);
        y = parts[1].charCodeAt(2);
        key.name = "mouse";
        key.type = "X10";
        key.raw = [b, x, y, parts[0]];
        key.buf = buf;
        key.x = x - 32;
        key.y = y - 32;
        if (this.zero)
          key.x--, key.y--;
        if (x === 0)
          key.x = 255;
        if (y === 0)
          key.y = 255;
        mod = b >> 2;
        key.shift = !!(mod & 1);
        key.meta = !!(mod >> 1 & 1);
        key.ctrl = !!(mod >> 2 & 1);
        b -= 32;
        if (b >> 6 & 1) {
          key.action = b & 1 ? "wheeldown" : "wheelup";
          key.button = "middle";
        } else if (b === 3) {
          key.action = "mouseup";
          key.button = this._lastButton || "unknown";
          delete this._lastButton;
        } else {
          key.action = "mousedown";
          button = b & 3;
          key.button = button === 0 ? "left" : button === 1 ? "middle" : button === 2 ? "right" : "unknown";
          this._lastButton = key.button;
        }
        if (b === 35 || b === 39 || b === 51 || b === 43 || this.isVTE && (b === 32 || b === 36 || b === 48 || b === 40)) {
          delete key.button;
          key.action = "mousemove";
        }
        self.emit("mouse", key);
        return;
      }
      if (parts = /^\x1b\[(\d+;\d+;\d+)M/.exec(s)) {
        params2 = parts[1].split(";");
        b = +params2[0];
        x = +params2[1];
        y = +params2[2];
        key.name = "mouse";
        key.type = "urxvt";
        key.raw = [b, x, y, parts[0]];
        key.buf = buf;
        key.x = x;
        key.y = y;
        if (this.zero)
          key.x--, key.y--;
        mod = b >> 2;
        key.shift = !!(mod & 1);
        key.meta = !!(mod >> 1 & 1);
        key.ctrl = !!(mod >> 2 & 1);
        if (b === 128 || b === 129) {
          b = 67;
        }
        b -= 32;
        if (b >> 6 & 1) {
          key.action = b & 1 ? "wheeldown" : "wheelup";
          key.button = "middle";
        } else if (b === 3) {
          key.action = "mouseup";
          key.button = this._lastButton || "unknown";
          delete this._lastButton;
        } else {
          key.action = "mousedown";
          button = b & 3;
          key.button = button === 0 ? "left" : button === 1 ? "middle" : button === 2 ? "right" : "unknown";
          this._lastButton = key.button;
        }
        if (b === 35 || b === 39 || b === 51 || b === 43 || this.isVTE && (b === 32 || b === 36 || b === 48 || b === 40)) {
          delete key.button;
          key.action = "mousemove";
        }
        self.emit("mouse", key);
        return;
      }
      if (parts = /^\x1b\[<(\d+;\d+;\d+)([mM])/.exec(s)) {
        down = parts[2] === "M";
        params2 = parts[1].split(";");
        b = +params2[0];
        x = +params2[1];
        y = +params2[2];
        key.name = "mouse";
        key.type = "sgr";
        key.raw = [b, x, y, parts[0]];
        key.buf = buf;
        key.x = x;
        key.y = y;
        if (this.zero)
          key.x--, key.y--;
        mod = b >> 2;
        key.shift = !!(mod & 1);
        key.meta = !!(mod >> 1 & 1);
        key.ctrl = !!(mod >> 2 & 1);
        if (b >> 6 & 1) {
          key.action = b & 1 ? "wheeldown" : "wheelup";
          key.button = "middle";
        } else {
          key.action = down ? "mousedown" : "mouseup";
          button = b & 3;
          key.button = button === 0 ? "left" : button === 1 ? "middle" : button === 2 ? "right" : "unknown";
        }
        if (b === 35 || b === 39 || b === 51 || b === 43 || this.isVTE && (b === 32 || b === 36 || b === 48 || b === 40)) {
          delete key.button;
          key.action = "mousemove";
        }
        self.emit("mouse", key);
        return;
      }
      if (parts = /^\x1b\[<(\d+;\d+;\d+;\d+)&w/.exec(s)) {
        params2 = parts[1].split(";");
        b = +params2[0];
        x = +params2[1];
        y = +params2[2];
        page = +params2[3];
        key.name = "mouse";
        key.type = "dec";
        key.raw = [b, x, y, parts[0]];
        key.buf = buf;
        key.x = x;
        key.y = y;
        key.page = page;
        if (this.zero)
          key.x--, key.y--;
        key.action = b === 3 ? "mouseup" : "mousedown";
        key.button = b === 2 ? "left" : b === 4 ? "middle" : b === 6 ? "right" : "unknown";
        self.emit("mouse", key);
        return;
      }
      if (parts = /^\x1b\[24([0135])~\[(\d+),(\d+)\]\r/.exec(s)) {
        b = +parts[1];
        x = +parts[2];
        y = +parts[3];
        key.name = "mouse";
        key.type = "vt300";
        key.raw = [b, x, y, parts[0]];
        key.buf = buf;
        key.x = x;
        key.y = y;
        if (this.zero)
          key.x--, key.y--;
        key.action = "mousedown";
        key.button = b === 1 ? "left" : b === 2 ? "middle" : b === 5 ? "right" : "unknown";
        self.emit("mouse", key);
        return;
      }
      if (parts = /^\x1b\[(O|I)/.exec(s)) {
        key.action = parts[1] === "I" ? "focus" : "blur";
        self.emit("mouse", key);
        self.emit(key.action);
        return;
      }
    };
    Program.prototype.enableGpm = function() {
      var self = this;
      var gpmclient = require_gpmclient();
      if (this.gpm)
        return;
      this.gpm = gpmclient();
      this.gpm.on("btndown", function(btn, modifier, x, y) {
        x--, y--;
        var key = {
          name: "mouse",
          type: "GPM",
          action: "mousedown",
          button: self.gpm.ButtonName(btn),
          raw: [btn, modifier, x, y],
          x,
          y,
          shift: self.gpm.hasShiftKey(modifier),
          meta: self.gpm.hasMetaKey(modifier),
          ctrl: self.gpm.hasCtrlKey(modifier)
        };
        self.emit("mouse", key);
      });
      this.gpm.on("btnup", function(btn, modifier, x, y) {
        x--, y--;
        var key = {
          name: "mouse",
          type: "GPM",
          action: "mouseup",
          button: self.gpm.ButtonName(btn),
          raw: [btn, modifier, x, y],
          x,
          y,
          shift: self.gpm.hasShiftKey(modifier),
          meta: self.gpm.hasMetaKey(modifier),
          ctrl: self.gpm.hasCtrlKey(modifier)
        };
        self.emit("mouse", key);
      });
      this.gpm.on("move", function(btn, modifier, x, y) {
        x--, y--;
        var key = {
          name: "mouse",
          type: "GPM",
          action: "mousemove",
          button: self.gpm.ButtonName(btn),
          raw: [btn, modifier, x, y],
          x,
          y,
          shift: self.gpm.hasShiftKey(modifier),
          meta: self.gpm.hasMetaKey(modifier),
          ctrl: self.gpm.hasCtrlKey(modifier)
        };
        self.emit("mouse", key);
      });
      this.gpm.on("drag", function(btn, modifier, x, y) {
        x--, y--;
        var key = {
          name: "mouse",
          type: "GPM",
          action: "mousemove",
          button: self.gpm.ButtonName(btn),
          raw: [btn, modifier, x, y],
          x,
          y,
          shift: self.gpm.hasShiftKey(modifier),
          meta: self.gpm.hasMetaKey(modifier),
          ctrl: self.gpm.hasCtrlKey(modifier)
        };
        self.emit("mouse", key);
      });
      this.gpm.on("mousewheel", function(btn, modifier, x, y, dx, dy) {
        var key = {
          name: "mouse",
          type: "GPM",
          action: dy > 0 ? "wheelup" : "wheeldown",
          button: self.gpm.ButtonName(btn),
          raw: [btn, modifier, x, y, dx, dy],
          x,
          y,
          shift: self.gpm.hasShiftKey(modifier),
          meta: self.gpm.hasMetaKey(modifier),
          ctrl: self.gpm.hasCtrlKey(modifier)
        };
        self.emit("mouse", key);
      });
    };
    Program.prototype.disableGpm = function() {
      if (this.gpm) {
        this.gpm.stop();
        delete this.gpm;
      }
    };
    Program.prototype.bindResponse = function() {
      if (this._boundResponse)
        return;
      this._boundResponse = true;
      var decoder = new StringDecoder("utf8"), self = this;
      this.on("data", function(data) {
        data = decoder.write(data);
        if (!data)
          return;
        self._bindResponse(data);
      });
    };
    Program.prototype._bindResponse = function(s) {
      var out = {}, parts;
      if (Buffer.isBuffer(s)) {
        if (s[0] > 127 && s[1] === void 0) {
          s[0] -= 128;
          s = "\x1B" + s.toString("utf-8");
        } else {
          s = s.toString("utf-8");
        }
      }
      if (parts = /^\x1b\[(\?|>)(\d*(?:;\d*)*)c/.exec(s)) {
        parts = parts[2].split(";").map(function(ch) {
          return +ch || 0;
        });
        out.event = "device-attributes";
        out.code = "DA";
        if (parts[1] === "?") {
          out.type = "primary-attribute";
          if (parts[0] === 1 && parts[2] === 2) {
            out.term = "vt100";
            out.advancedVideo = true;
          } else if (parts[0] === 1 && parts[2] === 0) {
            out.term = "vt101";
          } else if (parts[0] === 6) {
            out.term = "vt102";
          } else if (parts[0] === 60 && parts[1] === 1 && parts[2] === 2 && parts[3] === 6 && parts[4] === 8 && parts[5] === 9 && parts[6] === 15) {
            out.term = "vt220";
          } else {
            parts.forEach(function(attr) {
              switch (attr) {
                case 1:
                  out.cols132 = true;
                  break;
                case 2:
                  out.printer = true;
                  break;
                case 6:
                  out.selectiveErase = true;
                  break;
                case 8:
                  out.userDefinedKeys = true;
                  break;
                case 9:
                  out.nationalReplacementCharsets = true;
                  break;
                case 15:
                  out.technicalCharacters = true;
                  break;
                case 18:
                  out.userWindows = true;
                  break;
                case 21:
                  out.horizontalScrolling = true;
                  break;
                case 22:
                  out.ansiColor = true;
                  break;
                case 29:
                  out.ansiTextLocator = true;
                  break;
              }
            });
          }
        } else {
          out.type = "secondary-attribute";
          switch (parts[0]) {
            case 0:
              out.term = "vt100";
              break;
            case 1:
              out.term = "vt220";
              break;
            case 2:
              out.term = "vt240";
              break;
            case 18:
              out.term = "vt330";
              break;
            case 19:
              out.term = "vt340";
              break;
            case 24:
              out.term = "vt320";
              break;
            case 41:
              out.term = "vt420";
              break;
            case 61:
              out.term = "vt510";
              break;
            case 64:
              out.term = "vt520";
              break;
            case 65:
              out.term = "vt525";
              break;
          }
          out.firmwareVersion = parts[1];
          out.romCartridgeRegistrationNumber = parts[2];
        }
        out.deviceAttributes = out;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts = /^\x1b\[(\?)?(\d+)(?:;(\d+);(\d+);(\d+))?n/.exec(s)) {
        out.event = "device-status";
        out.code = "DSR";
        if (!parts[1] && parts[2] === "0" && !parts[3]) {
          out.type = "device-status";
          out.status = "OK";
          out.deviceStatus = out.status;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] && (parts[2] === "10" || parts[2] === "11") && !parts[3]) {
          out.type = "printer-status";
          out.status = parts[2] === "10" ? "ready" : "not ready";
          out.printerStatus = out.status;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] && (parts[2] === "20" || parts[2] === "21") && !parts[3]) {
          out.type = "udk-status";
          out.status = parts[2] === "20" ? "unlocked" : "locked";
          out.UDKStatus = out.status;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] && parts[2] === "27" && parts[3] === "1" && parts[4] === "0" && parts[5] === "0") {
          out.type = "keyboard-status";
          out.status = "OK";
          out.keyboardStatus = out.status;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] && (parts[2] === "53" || parts[2] === "50") && !parts[3]) {
          out.type = "locator-status";
          out.status = parts[2] === "53" ? "available" : "unavailable";
          out.locator = out.status;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        out.type = "error";
        out.text = "Unhandled: " + JSON.stringify(parts);
        out.error = out.text;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts = /^\x1b\[(\?)?(\d+);(\d+)R/.exec(s)) {
        out.event = "device-status";
        out.code = "DSR";
        out.type = "cursor-status";
        out.status = {
          x: +parts[3],
          y: +parts[2],
          page: !parts[1] ? void 0 : 0
        };
        out.x = out.status.x;
        out.y = out.status.y;
        out.page = out.status.page;
        out.cursor = out.status;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts = /^\x1b\[(\d+)(?:;(\d+);(\d+))?t/.exec(s)) {
        out.event = "window-manipulation";
        out.code = "";
        if ((parts[1] === "1" || parts[1] === "2") && !parts[2]) {
          out.type = "window-state";
          out.state = parts[1] === "1" ? "non-iconified" : "iconified";
          out.windowState = out.state;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] === "3" && parts[2]) {
          out.type = "window-position";
          out.position = {
            x: +parts[2],
            y: +parts[3]
          };
          out.x = out.position.x;
          out.y = out.position.y;
          out.windowPosition = out.position;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] === "4" && parts[2]) {
          out.type = "window-size-pixels";
          out.size = {
            height: +parts[2],
            width: +parts[3]
          };
          out.height = out.size.height;
          out.width = out.size.width;
          out.windowSizePixels = out.size;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] === "8" && parts[2]) {
          out.type = "textarea-size";
          out.size = {
            height: +parts[2],
            width: +parts[3]
          };
          out.height = out.size.height;
          out.width = out.size.width;
          out.textAreaSizeCharacters = out.size;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] === "9" && parts[2]) {
          out.type = "screen-size";
          out.size = {
            height: +parts[2],
            width: +parts[3]
          };
          out.height = out.size.height;
          out.width = out.size.width;
          out.screenSizeCharacters = out.size;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        out.type = "error";
        out.text = "Unhandled: " + JSON.stringify(parts);
        out.error = out.text;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts = /^\x1b\](l|L)([^\x07\x1b]*)$/.exec(s)) {
        parts[2] = "rxvt";
        s = "\x1B]" + parts[1] + parts[2] + "\x1B\\";
      }
      if (parts = /^\x1b\](l|L)([^\x07\x1b]*)(?:\x07|\x1b\\)/.exec(s)) {
        out.event = "window-manipulation";
        out.code = "";
        if (parts[1] === "L") {
          out.type = "window-icon-label";
          out.text = parts[2];
          out.windowIconLabel = out.text;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        if (parts[1] === "l") {
          out.type = "window-title";
          out.text = parts[2];
          out.windowTitle = out.text;
          this.emit("response", out);
          this.emit("response " + out.event, out);
          return;
        }
        out.type = "error";
        out.text = "Unhandled: " + JSON.stringify(parts);
        out.error = out.text;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts = /^\x1b\[(\d+(?:;\d+){4})&w/.exec(s)) {
        parts = parts[1].split(";").map(function(ch) {
          return +ch;
        });
        out.event = "locator-position";
        out.code = "DECRQLP";
        switch (parts[0]) {
          case 0:
            out.status = "locator-unavailable";
            break;
          case 1:
            out.status = "request";
            break;
          case 2:
            out.status = "left-button-down";
            break;
          case 3:
            out.status = "left-button-up";
            break;
          case 4:
            out.status = "middle-button-down";
            break;
          case 5:
            out.status = "middle-button-up";
            break;
          case 6:
            out.status = "right-button-down";
            break;
          case 7:
            out.status = "right-button-up";
            break;
          case 8:
            out.status = "m4-button-down";
            break;
          case 9:
            out.status = "m4-button-up";
            break;
          case 10:
            out.status = "locator-outside";
            break;
        }
        out.mask = parts[1];
        out.row = parts[2];
        out.col = parts[3];
        out.page = parts[4];
        out.locatorPosition = out;
        this.emit("response", out);
        this.emit("response " + out.event, out);
        return;
      }
      if (parts = /^\x1b\](\d+);([^\x07\x1b]+)(?:\x07|\x1b\\)/.exec(s)) {
        out.event = "text-params";
        out.code = "Set Text Parameters";
        out.ps = +s[1];
        out.pt = s[2];
        this.emit("response", out);
        this.emit("response " + out.event, out);
      }
    };
    Program.prototype.response = function(name, text, callback, noBypass) {
      var self = this;
      if (arguments.length === 2) {
        callback = text;
        text = name;
        name = null;
      }
      if (!callback) {
        callback = function() {
        };
      }
      this.bindResponse();
      name = name ? "response " + name : "response";
      var onresponse;
      this.once(name, onresponse = function(event) {
        if (timeout)
          clearTimeout(timeout);
        if (event.type === "error") {
          return callback(new Error(event.event + ": " + event.text));
        }
        return callback(null, event);
      });
      var timeout = setTimeout(function() {
        self.removeListener(name, onresponse);
        return callback(new Error("Timeout."));
      }, 2e3);
      return noBypass ? this._write(text) : this._twrite(text);
    };
    Program.prototype._owrite = Program.prototype.write = function(text) {
      if (!this.output.writable)
        return;
      return this.output.write(text);
    };
    Program.prototype._buffer = function(text) {
      if (this._exiting) {
        this.flush();
        this._owrite(text);
        return;
      }
      if (this._buf) {
        this._buf += text;
        return;
      }
      this._buf = text;
      nextTick(this._flush);
      return true;
    };
    Program.prototype.flush = function() {
      if (!this._buf)
        return;
      this._owrite(this._buf);
      this._buf = "";
    };
    Program.prototype._write = function(text) {
      if (this.ret)
        return text;
      if (this.useBuffer) {
        return this._buffer(text);
      }
      return this._owrite(text);
    };
    Program.prototype._twrite = function(data) {
      var self = this, iterations = 0, timer;
      if (this.tmux) {
        data = data.replace(/\x1b\\/g, "\x07");
        data = "\x1BPtmux;\x1B" + data + "\x1B\\";
        if (this.output.bytesWritten === 0) {
          timer = setInterval(function() {
            if (self.output.bytesWritten > 0 || ++iterations === 50) {
              clearInterval(timer);
              self.flush();
              self._owrite(data);
            }
          }, 100);
          return true;
        }
        this.flush();
        return this._owrite(data);
      }
      return this._write(data);
    };
    Program.prototype.echo = Program.prototype.print = function(text, attr) {
      return attr ? this._write(this.text(text, attr)) : this._write(text);
    };
    Program.prototype._ncoords = function() {
      if (this.x < 0)
        this.x = 0;
      else if (this.x >= this.cols)
        this.x = this.cols - 1;
      if (this.y < 0)
        this.y = 0;
      else if (this.y >= this.rows)
        this.y = this.rows - 1;
    };
    Program.prototype.setx = function(x) {
      return this.cursorCharAbsolute(x);
    };
    Program.prototype.sety = function(y) {
      return this.linePosAbsolute(y);
    };
    Program.prototype.move = function(x, y) {
      return this.cursorPos(y, x);
    };
    Program.prototype.omove = function(x, y) {
      if (!this.zero) {
        x = (x || 1) - 1;
        y = (y || 1) - 1;
      } else {
        x = x || 0;
        y = y || 0;
      }
      if (y === this.y && x === this.x) {
        return;
      }
      if (y === this.y) {
        if (x > this.x) {
          this.cuf(x - this.x);
        } else if (x < this.x) {
          this.cub(this.x - x);
        }
      } else if (x === this.x) {
        if (y > this.y) {
          this.cud(y - this.y);
        } else if (y < this.y) {
          this.cuu(this.y - y);
        }
      } else {
        if (!this.zero)
          x++, y++;
        this.cup(y, x);
      }
    };
    Program.prototype.rsetx = function(x) {
      if (!x)
        return;
      return x > 0 ? this.forward(x) : this.back(-x);
    };
    Program.prototype.rsety = function(y) {
      if (!y)
        return;
      return y > 0 ? this.up(y) : this.down(-y);
    };
    Program.prototype.rmove = function(x, y) {
      this.rsetx(x);
      this.rsety(y);
    };
    Program.prototype.simpleInsert = function(ch, i, attr) {
      return this._write(this.repeat(ch, i), attr);
    };
    Program.prototype.repeat = function(ch, i) {
      if (!i || i < 0)
        i = 0;
      return Array(i + 1).join(ch);
    };
    Program.prototype.__defineGetter__("title", function() {
      return this._title;
    });
    Program.prototype.__defineSetter__("title", function(title) {
      this.setTitle(title);
      return this._title;
    });
    Program.prototype.copyToClipboard = function(text) {
      if (this.isiTerm2) {
        this._twrite("\x1B]50;CopyToCliboard=" + text + "\x07");
        return true;
      }
      return false;
    };
    Program.prototype.cursorShape = function(shape, blink) {
      if (this.isiTerm2) {
        switch (shape) {
          case "block":
            if (!blink) {
              this._twrite("\x1B]50;CursorShape=0;BlinkingCursorEnabled=0\x07");
            } else {
              this._twrite("\x1B]50;CursorShape=0;BlinkingCursorEnabled=1\x07");
            }
            break;
          case "underline":
            if (!blink) {
            } else {
            }
            break;
          case "line":
            if (!blink) {
              this._twrite("\x1B]50;CursorShape=1;BlinkingCursorEnabled=0\x07");
            } else {
              this._twrite("\x1B]50;CursorShape=1;BlinkingCursorEnabled=1\x07");
            }
            break;
        }
        return true;
      } else if (this.term("xterm") || this.term("screen")) {
        switch (shape) {
          case "block":
            if (!blink) {
              this._twrite("\x1B[0 q");
            } else {
              this._twrite("\x1B[1 q");
            }
            break;
          case "underline":
            if (!blink) {
              this._twrite("\x1B[2 q");
            } else {
              this._twrite("\x1B[3 q");
            }
            break;
          case "line":
            if (!blink) {
              this._twrite("\x1B[4 q");
            } else {
              this._twrite("\x1B[5 q");
            }
            break;
        }
        return true;
      }
      return false;
    };
    Program.prototype.cursorColor = function(color) {
      if (this.term("xterm") || this.term("rxvt") || this.term("screen")) {
        this._twrite("\x1B]12;" + color + "\x07");
        return true;
      }
      return false;
    };
    Program.prototype.cursorReset = Program.prototype.resetCursor = function() {
      if (this.term("xterm") || this.term("rxvt") || this.term("screen")) {
        this._twrite("\x1B[0 q");
        this._twrite("\x1B]112\x07");
        this._twrite("\x1B]12;white\x07");
        return true;
      }
      return false;
    };
    Program.prototype.getTextParams = function(param, callback) {
      return this.response("text-params", "\x1B]" + param + ";?\x07", function(err, data) {
        if (err)
          return callback(err);
        return callback(null, data.pt);
      });
    };
    Program.prototype.getCursorColor = function(callback) {
      return this.getTextParams(12, callback);
    };
    Program.prototype.nul = function() {
      return this._write("\x80");
    };
    Program.prototype.bel = Program.prototype.bell = function() {
      if (this.has("bel"))
        return this.put.bel();
      return this._write("\x07");
    };
    Program.prototype.vtab = function() {
      this.y++;
      this._ncoords();
      return this._write("\v");
    };
    Program.prototype.ff = Program.prototype.form = function() {
      if (this.has("ff"))
        return this.put.ff();
      return this._write("\f");
    };
    Program.prototype.kbs = Program.prototype.backspace = function() {
      this.x--;
      this._ncoords();
      if (this.has("kbs"))
        return this.put.kbs();
      return this._write("\b");
    };
    Program.prototype.ht = Program.prototype.tab = function() {
      this.x += 8;
      this._ncoords();
      if (this.has("ht"))
        return this.put.ht();
      return this._write("	");
    };
    Program.prototype.shiftOut = function() {
      return this._write("");
    };
    Program.prototype.shiftIn = function() {
      return this._write("");
    };
    Program.prototype.cr = Program.prototype.return = function() {
      this.x = 0;
      if (this.has("cr"))
        return this.put.cr();
      return this._write("\r");
    };
    Program.prototype.nel = Program.prototype.newline = Program.prototype.feed = function() {
      if (this.tput && this.tput.bools.eat_newline_glitch && this.x >= this.cols) {
        return;
      }
      this.x = 0;
      this.y++;
      this._ncoords();
      if (this.has("nel"))
        return this.put.nel();
      return this._write("\n");
    };
    Program.prototype.ind = Program.prototype.index = function() {
      this.y++;
      this._ncoords();
      if (this.tput)
        return this.put.ind();
      return this._write("\x1BD");
    };
    Program.prototype.ri = Program.prototype.reverse = Program.prototype.reverseIndex = function() {
      this.y--;
      this._ncoords();
      if (this.tput)
        return this.put.ri();
      return this._write("\x1BM");
    };
    Program.prototype.nextLine = function() {
      this.y++;
      this.x = 0;
      this._ncoords();
      if (this.has("nel"))
        return this.put.nel();
      return this._write("\x1BE");
    };
    Program.prototype.reset = function() {
      this.x = this.y = 0;
      if (this.has("rs1") || this.has("ris")) {
        return this.has("rs1") ? this.put.rs1() : this.put.ris();
      }
      return this._write("\x1Bc");
    };
    Program.prototype.tabSet = function() {
      if (this.tput)
        return this.put.hts();
      return this._write("\x1BH");
    };
    Program.prototype.sc = Program.prototype.saveCursor = function(key) {
      if (key)
        return this.lsaveCursor(key);
      this.savedX = this.x || 0;
      this.savedY = this.y || 0;
      if (this.tput)
        return this.put.sc();
      return this._write("\x1B7");
    };
    Program.prototype.rc = Program.prototype.restoreCursor = function(key, hide) {
      if (key)
        return this.lrestoreCursor(key, hide);
      this.x = this.savedX || 0;
      this.y = this.savedY || 0;
      if (this.tput)
        return this.put.rc();
      return this._write("\x1B8");
    };
    Program.prototype.lsaveCursor = function(key) {
      key = key || "local";
      this._saved = this._saved || {};
      this._saved[key] = this._saved[key] || {};
      this._saved[key].x = this.x;
      this._saved[key].y = this.y;
      this._saved[key].hidden = this.cursorHidden;
    };
    Program.prototype.lrestoreCursor = function(key, hide) {
      var pos;
      key = key || "local";
      if (!this._saved || !this._saved[key])
        return;
      pos = this._saved[key];
      this.cup(pos.y, pos.x);
      if (hide && pos.hidden !== this.cursorHidden) {
        if (pos.hidden) {
          this.hideCursor();
        } else {
          this.showCursor();
        }
      }
    };
    Program.prototype.lineHeight = function() {
      return this._write("\x1B#");
    };
    Program.prototype.charset = function(val, level) {
      level = level || 0;
      switch (level) {
        case 0:
          level = "(";
          break;
        case 1:
          level = ")";
          break;
        case 2:
          level = "*";
          break;
        case 3:
          level = "+";
          break;
      }
      var name = typeof val === "string" ? val.toLowerCase() : val;
      switch (name) {
        case "acs":
        case "scld":
          if (this.tput)
            return this.put.smacs();
          val = "0";
          break;
        case "uk":
          val = "A";
          break;
        case "us":
        case "usascii":
        case "ascii":
          if (this.tput)
            return this.put.rmacs();
          val = "B";
          break;
        case "dutch":
          val = "4";
          break;
        case "finnish":
          val = "C";
          val = "5";
          break;
        case "french":
          val = "R";
          break;
        case "frenchcanadian":
          val = "Q";
          break;
        case "german":
          val = "K";
          break;
        case "italian":
          val = "Y";
          break;
        case "norwegiandanish":
          val = "E";
          val = "6";
          break;
        case "spanish":
          val = "Z";
          break;
        case "swedish":
          val = "H";
          val = "7";
          break;
        case "swiss":
          val = "=";
          break;
        case "isolatin":
          val = "/A";
          break;
        default:
          if (this.tput)
            return this.put.rmacs();
          val = "B";
          break;
      }
      return this._write("\x1B(" + val);
    };
    Program.prototype.enter_alt_charset_mode = Program.prototype.as = Program.prototype.smacs = function() {
      return this.charset("acs");
    };
    Program.prototype.exit_alt_charset_mode = Program.prototype.ae = Program.prototype.rmacs = function() {
      return this.charset("ascii");
    };
    Program.prototype.setG = function(val) {
      switch (val) {
        case 1:
          val = "~";
          break;
        case 2:
          val = "n";
          val = "}";
          val = "N";
          break;
        case 3:
          val = "o";
          val = "|";
          val = "O";
          break;
      }
      return this._write("\x1B" + val);
    };
    Program.prototype.setTitle = function(title) {
      this._title = title;
      return this._twrite("\x1B]0;" + title + "\x07");
    };
    Program.prototype.resetColors = function(param) {
      if (this.has("Cr")) {
        return this.put.Cr(param);
      }
      return this._twrite("\x1B]112\x07");
    };
    Program.prototype.dynamicColors = function(param) {
      if (this.has("Cs")) {
        return this.put.Cs(param);
      }
      return this._twrite("\x1B]12;" + param + "\x07");
    };
    Program.prototype.selData = function(a, b) {
      if (this.has("Ms")) {
        return this.put.Ms(a, b);
      }
      return this._twrite("\x1B]52;" + a + ";" + b + "\x07");
    };
    Program.prototype.cuu = Program.prototype.up = Program.prototype.cursorUp = function(param) {
      this.y -= param || 1;
      this._ncoords();
      if (this.tput) {
        if (!this.tput.strings.parm_up_cursor) {
          return this._write(this.repeat(this.tput.cuu1(), param));
        }
        return this.put.cuu(param);
      }
      return this._write("\x1B[" + (param || "") + "A");
    };
    Program.prototype.cud = Program.prototype.down = Program.prototype.cursorDown = function(param) {
      this.y += param || 1;
      this._ncoords();
      if (this.tput) {
        if (!this.tput.strings.parm_down_cursor) {
          return this._write(this.repeat(this.tput.cud1(), param));
        }
        return this.put.cud(param);
      }
      return this._write("\x1B[" + (param || "") + "B");
    };
    Program.prototype.cuf = Program.prototype.right = Program.prototype.forward = Program.prototype.cursorForward = function(param) {
      this.x += param || 1;
      this._ncoords();
      if (this.tput) {
        if (!this.tput.strings.parm_right_cursor) {
          return this._write(this.repeat(this.tput.cuf1(), param));
        }
        return this.put.cuf(param);
      }
      return this._write("\x1B[" + (param || "") + "C");
    };
    Program.prototype.cub = Program.prototype.left = Program.prototype.back = Program.prototype.cursorBackward = function(param) {
      this.x -= param || 1;
      this._ncoords();
      if (this.tput) {
        if (!this.tput.strings.parm_left_cursor) {
          return this._write(this.repeat(this.tput.cub1(), param));
        }
        return this.put.cub(param);
      }
      return this._write("\x1B[" + (param || "") + "D");
    };
    Program.prototype.cup = Program.prototype.pos = Program.prototype.cursorPos = function(row, col) {
      if (!this.zero) {
        row = (row || 1) - 1;
        col = (col || 1) - 1;
      } else {
        row = row || 0;
        col = col || 0;
      }
      this.x = col;
      this.y = row;
      this._ncoords();
      if (this.tput)
        return this.put.cup(row, col);
      return this._write("\x1B[" + (row + 1) + ";" + (col + 1) + "H");
    };
    Program.prototype.ed = Program.prototype.eraseInDisplay = function(param) {
      if (this.tput) {
        switch (param) {
          case "above":
            param = 1;
            break;
          case "all":
            param = 2;
            break;
          case "saved":
            param = 3;
            break;
          case "below":
          default:
            param = 0;
            break;
        }
        return this.put.ed(param);
      }
      switch (param) {
        case "above":
          return this._write("X1b[1J");
        case "all":
          return this._write("\x1B[2J");
        case "saved":
          return this._write("\x1B[3J");
        case "below":
        default:
          return this._write("\x1B[J");
      }
    };
    Program.prototype.clear = function() {
      this.x = 0;
      this.y = 0;
      if (this.tput)
        return this.put.clear();
      return this._write("\x1B[H\x1B[J");
    };
    Program.prototype.el = Program.prototype.eraseInLine = function(param) {
      if (this.tput) {
        switch (param) {
          case "left":
            param = 1;
            break;
          case "all":
            param = 2;
            break;
          case "right":
          default:
            param = 0;
            break;
        }
        return this.put.el(param);
      }
      switch (param) {
        case "left":
          return this._write("\x1B[1K");
        case "all":
          return this._write("\x1B[2K");
        case "right":
        default:
          return this._write("\x1B[K");
      }
    };
    Program.prototype.sgr = Program.prototype.attr = Program.prototype.charAttributes = function(param, val) {
      return this._write(this._attr(param, val));
    };
    Program.prototype.text = function(text, attr) {
      return this._attr(attr, true) + text + this._attr(attr, false);
    };
    Program.prototype._attr = function(param, val) {
      var self = this, parts, color, m;
      if (Array.isArray(param)) {
        parts = param;
        param = parts[0] || "normal";
      } else {
        param = param || "normal";
        parts = param.split(/\s*[,;]\s*/);
      }
      if (parts.length > 1) {
        var used = {}, out = [];
        parts.forEach(function(part) {
          part = self._attr(part, val).slice(2, -1);
          if (part === "")
            return;
          if (used[part])
            return;
          used[part] = true;
          out.push(part);
        });
        return "\x1B[" + out.join(";") + "m";
      }
      if (param.indexOf("no ") === 0) {
        param = param.substring(3);
        val = false;
      } else if (param.indexOf("!") === 0) {
        param = param.substring(1);
        val = false;
      }
      switch (param) {
        case "normal":
        case "default":
          if (val === false)
            return "";
          return "\x1B[m";
        case "bold":
          return val === false ? "\x1B[22m" : "\x1B[1m";
        case "ul":
        case "underline":
        case "underlined":
          return val === false ? "\x1B[24m" : "\x1B[4m";
        case "blink":
          return val === false ? "\x1B[25m" : "\x1B[5m";
        case "inverse":
          return val === false ? "\x1B[27m" : "\x1B[7m";
        case "invisible":
          return val === false ? "\x1B[28m" : "\x1B[8m";
        case "black fg":
          return val === false ? "\x1B[39m" : "\x1B[30m";
        case "red fg":
          return val === false ? "\x1B[39m" : "\x1B[31m";
        case "green fg":
          return val === false ? "\x1B[39m" : "\x1B[32m";
        case "yellow fg":
          return val === false ? "\x1B[39m" : "\x1B[33m";
        case "blue fg":
          return val === false ? "\x1B[39m" : "\x1B[34m";
        case "magenta fg":
          return val === false ? "\x1B[39m" : "\x1B[35m";
        case "cyan fg":
          return val === false ? "\x1B[39m" : "\x1B[36m";
        case "white fg":
        case "light grey fg":
        case "light gray fg":
        case "bright grey fg":
        case "bright gray fg":
          return val === false ? "\x1B[39m" : "\x1B[37m";
        case "default fg":
          if (val === false)
            return "";
          return "\x1B[39m";
        case "black bg":
          return val === false ? "\x1B[49m" : "\x1B[40m";
        case "red bg":
          return val === false ? "\x1B[49m" : "\x1B[41m";
        case "green bg":
          return val === false ? "\x1B[49m" : "\x1B[42m";
        case "yellow bg":
          return val === false ? "\x1B[49m" : "\x1B[43m";
        case "blue bg":
          return val === false ? "\x1B[49m" : "\x1B[44m";
        case "magenta bg":
          return val === false ? "\x1B[49m" : "\x1B[45m";
        case "cyan bg":
          return val === false ? "\x1B[49m" : "\x1B[46m";
        case "white bg":
        case "light grey bg":
        case "light gray bg":
        case "bright grey bg":
        case "bright gray bg":
          return val === false ? "\x1B[49m" : "\x1B[47m";
        case "default bg":
          if (val === false)
            return "";
          return "\x1B[49m";
        case "light black fg":
        case "bright black fg":
        case "grey fg":
        case "gray fg":
          return val === false ? "\x1B[39m" : "\x1B[90m";
        case "light red fg":
        case "bright red fg":
          return val === false ? "\x1B[39m" : "\x1B[91m";
        case "light green fg":
        case "bright green fg":
          return val === false ? "\x1B[39m" : "\x1B[92m";
        case "light yellow fg":
        case "bright yellow fg":
          return val === false ? "\x1B[39m" : "\x1B[93m";
        case "light blue fg":
        case "bright blue fg":
          return val === false ? "\x1B[39m" : "\x1B[94m";
        case "light magenta fg":
        case "bright magenta fg":
          return val === false ? "\x1B[39m" : "\x1B[95m";
        case "light cyan fg":
        case "bright cyan fg":
          return val === false ? "\x1B[39m" : "\x1B[96m";
        case "light white fg":
        case "bright white fg":
          return val === false ? "\x1B[39m" : "\x1B[97m";
        case "light black bg":
        case "bright black bg":
        case "grey bg":
        case "gray bg":
          return val === false ? "\x1B[49m" : "\x1B[100m";
        case "light red bg":
        case "bright red bg":
          return val === false ? "\x1B[49m" : "\x1B[101m";
        case "light green bg":
        case "bright green bg":
          return val === false ? "\x1B[49m" : "\x1B[102m";
        case "light yellow bg":
        case "bright yellow bg":
          return val === false ? "\x1B[49m" : "\x1B[103m";
        case "light blue bg":
        case "bright blue bg":
          return val === false ? "\x1B[49m" : "\x1B[104m";
        case "light magenta bg":
        case "bright magenta bg":
          return val === false ? "\x1B[49m" : "\x1B[105m";
        case "light cyan bg":
        case "bright cyan bg":
          return val === false ? "\x1B[49m" : "\x1B[106m";
        case "light white bg":
        case "bright white bg":
          return val === false ? "\x1B[49m" : "\x1B[107m";
        case "default fg bg":
          if (val === false)
            return "";
          return this.term("rxvt") ? "\x1B[100m" : "\x1B[39;49m";
        default:
          if (param[0] === "#") {
            param = param.replace(/#(?:[0-9a-f]{3}){1,2}/i, colors.match);
          }
          m = /^(-?\d+) (fg|bg)$/.exec(param);
          if (m) {
            color = +m[1];
            if (val === false || color === -1) {
              return this._attr("default " + m[2]);
            }
            color = colors.reduce(color, this.tput.colors);
            if (color < 16 || this.tput && this.tput.colors <= 16) {
              if (m[2] === "fg") {
                if (color < 8) {
                  color += 30;
                } else if (color < 16) {
                  color -= 8;
                  color += 90;
                }
              } else if (m[2] === "bg") {
                if (color < 8) {
                  color += 40;
                } else if (color < 16) {
                  color -= 8;
                  color += 100;
                }
              }
              return "\x1B[" + color + "m";
            }
            if (m[2] === "fg") {
              return "\x1B[38;5;" + color + "m";
            }
            if (m[2] === "bg") {
              return "\x1B[48;5;" + color + "m";
            }
          }
          if (/^[\d;]*$/.test(param)) {
            return "\x1B[" + param + "m";
          }
          return null;
      }
    };
    Program.prototype.fg = Program.prototype.setForeground = function(color, val) {
      color = color.split(/\s*[,;]\s*/).join(" fg, ") + " fg";
      return this.attr(color, val);
    };
    Program.prototype.bg = Program.prototype.setBackground = function(color, val) {
      color = color.split(/\s*[,;]\s*/).join(" bg, ") + " bg";
      return this.attr(color, val);
    };
    Program.prototype.dsr = Program.prototype.deviceStatus = function(param, callback, dec, noBypass) {
      if (dec) {
        return this.response(
          "device-status",
          "\x1B[?" + (param || "0") + "n",
          callback,
          noBypass
        );
      }
      return this.response(
        "device-status",
        "\x1B[" + (param || "0") + "n",
        callback,
        noBypass
      );
    };
    Program.prototype.getCursor = function(callback) {
      return this.deviceStatus(6, callback, false, true);
    };
    Program.prototype.saveReportedCursor = function(callback) {
      var self = this;
      if (this.tput.strings.user7 === "\x1B[6n" || this.term("screen")) {
        return this.getCursor(function(err, data) {
          if (data) {
            self._rx = data.status.x;
            self._ry = data.status.y;
          }
          if (!callback)
            return;
          return callback(err);
        });
      }
      if (!callback)
        return;
      return callback();
    };
    Program.prototype.restoreReportedCursor = function() {
      if (this._rx == null)
        return;
      return this.cup(this._ry, this._rx);
    };
    Program.prototype.ich = Program.prototype.insertChars = function(param) {
      this.x += param || 1;
      this._ncoords();
      if (this.tput)
        return this.put.ich(param);
      return this._write("\x1B[" + (param || 1) + "@");
    };
    Program.prototype.cnl = Program.prototype.cursorNextLine = function(param) {
      this.y += param || 1;
      this._ncoords();
      return this._write("\x1B[" + (param || "") + "E");
    };
    Program.prototype.cpl = Program.prototype.cursorPrecedingLine = function(param) {
      this.y -= param || 1;
      this._ncoords();
      return this._write("\x1B[" + (param || "") + "F");
    };
    Program.prototype.cha = Program.prototype.cursorCharAbsolute = function(param) {
      if (!this.zero) {
        param = (param || 1) - 1;
      } else {
        param = param || 0;
      }
      this.x = param;
      this.y = 0;
      this._ncoords();
      if (this.tput)
        return this.put.hpa(param);
      return this._write("\x1B[" + (param + 1) + "G");
    };
    Program.prototype.il = Program.prototype.insertLines = function(param) {
      if (this.tput)
        return this.put.il(param);
      return this._write("\x1B[" + (param || "") + "L");
    };
    Program.prototype.dl = Program.prototype.deleteLines = function(param) {
      if (this.tput)
        return this.put.dl(param);
      return this._write("\x1B[" + (param || "") + "M");
    };
    Program.prototype.dch = Program.prototype.deleteChars = function(param) {
      if (this.tput)
        return this.put.dch(param);
      return this._write("\x1B[" + (param || "") + "P");
    };
    Program.prototype.ech = Program.prototype.eraseChars = function(param) {
      if (this.tput)
        return this.put.ech(param);
      return this._write("\x1B[" + (param || "") + "X");
    };
    Program.prototype.hpa = Program.prototype.charPosAbsolute = function(param) {
      this.x = param || 0;
      this._ncoords();
      if (this.tput) {
        return this.put.hpa.apply(this.put, arguments);
      }
      param = slice.call(arguments).join(";");
      return this._write("\x1B[" + (param || "") + "`");
    };
    Program.prototype.hpr = Program.prototype.HPositionRelative = function(param) {
      if (this.tput)
        return this.cuf(param);
      this.x += param || 1;
      this._ncoords();
      return this._write("\x1B[" + (param || "") + "a");
    };
    Program.prototype.da = Program.prototype.sendDeviceAttributes = function(param, callback) {
      return this.response(
        "device-attributes",
        "\x1B[" + (param || "") + "c",
        callback
      );
    };
    Program.prototype.vpa = Program.prototype.linePosAbsolute = function(param) {
      this.y = param || 1;
      this._ncoords();
      if (this.tput) {
        return this.put.vpa.apply(this.put, arguments);
      }
      param = slice.call(arguments).join(";");
      return this._write("\x1B[" + (param || "") + "d");
    };
    Program.prototype.vpr = Program.prototype.VPositionRelative = function(param) {
      if (this.tput)
        return this.cud(param);
      this.y += param || 1;
      this._ncoords();
      return this._write("\x1B[" + (param || "") + "e");
    };
    Program.prototype.hvp = Program.prototype.HVPosition = function(row, col) {
      if (!this.zero) {
        row = (row || 1) - 1;
        col = (col || 1) - 1;
      } else {
        row = row || 0;
        col = col || 0;
      }
      this.y = row;
      this.x = col;
      this._ncoords();
      if (this.tput)
        return this.put.cup(row, col);
      return this._write("\x1B[" + (row + 1) + ";" + (col + 1) + "f");
    };
    Program.prototype.sm = Program.prototype.setMode = function() {
      var param = slice.call(arguments).join(";");
      return this._write("\x1B[" + (param || "") + "h");
    };
    Program.prototype.decset = function() {
      var param = slice.call(arguments).join(";");
      return this.setMode("?" + param);
    };
    Program.prototype.dectcem = Program.prototype.cnorm = Program.prototype.cvvis = Program.prototype.showCursor = function() {
      this.cursorHidden = false;
      if (this.tput)
        return this.put.cnorm();
      return this.setMode("?25");
    };
    Program.prototype.alternate = Program.prototype.smcup = Program.prototype.alternateBuffer = function() {
      this.isAlt = true;
      if (this.tput)
        return this.put.smcup();
      if (this.term("vt") || this.term("linux"))
        return;
      this.setMode("?47");
      return this.setMode("?1049");
    };
    Program.prototype.rm = Program.prototype.resetMode = function() {
      var param = slice.call(arguments).join(";");
      return this._write("\x1B[" + (param || "") + "l");
    };
    Program.prototype.decrst = function() {
      var param = slice.call(arguments).join(";");
      return this.resetMode("?" + param);
    };
    Program.prototype.dectcemh = Program.prototype.cursor_invisible = Program.prototype.vi = Program.prototype.civis = Program.prototype.hideCursor = function() {
      this.cursorHidden = true;
      if (this.tput)
        return this.put.civis();
      return this.resetMode("?25");
    };
    Program.prototype.rmcup = Program.prototype.normalBuffer = function() {
      this.isAlt = false;
      if (this.tput)
        return this.put.rmcup();
      this.resetMode("?47");
      return this.resetMode("?1049");
    };
    Program.prototype.enableMouse = function() {
      if (process.env.BLESSED_FORCE_MODES) {
        var modes = process.env.BLESSED_FORCE_MODES.split(",");
        var options = {};
        for (var n = 0; n < modes.length; ++n) {
          var pair = modes[n].split("=");
          var v = pair[1] !== "0";
          switch (pair[0].toUpperCase()) {
            case "SGRMOUSE":
              options.sgrMouse = v;
              break;
            case "UTFMOUSE":
              options.utfMouse = v;
              break;
            case "VT200MOUSE":
              options.vt200Mouse = v;
              break;
            case "URXVTMOUSE":
              options.urxvtMouse = v;
              break;
            case "X10MOUSE":
              options.x10Mouse = v;
              break;
            case "DECMOUSE":
              options.decMouse = v;
              break;
            case "PTERMMOUSE":
              options.ptermMouse = v;
              break;
            case "JSBTERMMOUSE":
              options.jsbtermMouse = v;
              break;
            case "VT200HILITE":
              options.vt200Hilite = v;
              break;
            case "GPMMOUSE":
              options.gpmMouse = v;
              break;
            case "CELLMOTION":
              options.cellMotion = v;
              break;
            case "ALLMOTION":
              options.allMotion = v;
              break;
            case "SENDFOCUS":
              options.sendFocus = v;
              break;
          }
        }
        return this.setMouse(options, true);
      }
      if (this.term("rxvt-unicode")) {
        return this.setMouse({
          urxvtMouse: true,
          cellMotion: true,
          allMotion: true
        }, true);
      }
      if (this.term("rxvt")) {
        return this.setMouse({
          vt200Mouse: true,
          x10Mouse: true,
          cellMotion: true,
          allMotion: true
        }, true);
      }
      if (this.isVTE) {
        return this.setMouse({
          // NOTE: Could also use urxvtMouse here.
          sgrMouse: true,
          cellMotion: true,
          allMotion: true
        }, true);
      }
      if (this.term("linux")) {
        return this.setMouse({
          vt200Mouse: true,
          gpmMouse: true
        }, true);
      }
      if (this.term("xterm") || this.term("screen") || this.tput && this.tput.strings.key_mouse) {
        return this.setMouse({
          vt200Mouse: true,
          utfMouse: true,
          cellMotion: true,
          allMotion: true
        }, true);
      }
    };
    Program.prototype.disableMouse = function() {
      if (!this._currentMouse)
        return;
      var obj = {};
      Object.keys(this._currentMouse).forEach(function(key) {
        obj[key] = false;
      });
      return this.setMouse(obj, false);
    };
    Program.prototype.setMouse = function(opt, enable) {
      if (opt.normalMouse != null) {
        opt.vt200Mouse = opt.normalMouse;
        opt.allMotion = opt.normalMouse;
      }
      if (opt.hiliteTracking != null) {
        opt.vt200Hilite = opt.hiliteTracking;
      }
      if (enable === true) {
        if (this._currentMouse) {
          this.setMouse(opt);
          Object.keys(opt).forEach(function(key) {
            this._currentMouse[key] = opt[key];
          }, this);
          return;
        }
        this._currentMouse = opt;
        this.mouseEnabled = true;
      } else if (enable === false) {
        delete this._currentMouse;
        this.mouseEnabled = false;
      }
      if (opt.x10Mouse != null) {
        if (opt.x10Mouse)
          this.setMode("?9");
        else
          this.resetMode("?9");
      }
      if (opt.vt200Mouse != null) {
        if (opt.vt200Mouse)
          this.setMode("?1000");
        else
          this.resetMode("?1000");
      }
      if (opt.vt200Hilite != null) {
        if (opt.vt200Hilite)
          this.setMode("?1001");
        else
          this.resetMode("?1001");
      }
      if (opt.cellMotion != null) {
        if (opt.cellMotion)
          this.setMode("?1002");
        else
          this.resetMode("?1002");
      }
      if (opt.allMotion != null) {
        if (this.tmux && this.tmuxVersion >= 2) {
          if (opt.allMotion)
            this._twrite("\x1B[?1003h");
          else
            this._twrite("\x1B[?1003l");
        } else {
          if (opt.allMotion)
            this.setMode("?1003");
          else
            this.resetMode("?1003");
        }
      }
      if (opt.sendFocus != null) {
        if (opt.sendFocus)
          this.setMode("?1004");
        else
          this.resetMode("?1004");
      }
      if (opt.utfMouse != null) {
        if (opt.utfMouse)
          this.setMode("?1005");
        else
          this.resetMode("?1005");
      }
      if (opt.sgrMouse != null) {
        if (opt.sgrMouse)
          this.setMode("?1006");
        else
          this.resetMode("?1006");
      }
      if (opt.urxvtMouse != null) {
        if (opt.urxvtMouse)
          this.setMode("?1015");
        else
          this.resetMode("?1015");
      }
      if (opt.decMouse != null) {
        if (opt.decMouse)
          this._write("\x1B[1;2'z\x1B[1;3'{");
        else
          this._write("\x1B['z");
      }
      if (opt.ptermMouse != null) {
        if (opt.ptermMouse)
          this._write("\x1B[>1h\x1B[>6h\x1B[>7h\x1B[>1h\x1B[>9l");
        else
          this._write("\x1B[>1l\x1B[>6l\x1B[>7l\x1B[>1l\x1B[>9h");
      }
      if (opt.jsbtermMouse != null) {
        if (opt.jsbtermMouse)
          this._write("\x1B[0~ZwLMRK+1Q\x1B\\");
        else
          this._write("\x1B[0~ZwQ\x1B\\");
      }
      if (opt.gpmMouse != null) {
        if (opt.gpmMouse)
          this.enableGpm();
        else
          this.disableGpm();
      }
    };
    Program.prototype.decstbm = Program.prototype.csr = Program.prototype.setScrollRegion = function(top, bottom) {
      if (!this.zero) {
        top = (top || 1) - 1;
        bottom = (bottom || this.rows) - 1;
      } else {
        top = top || 0;
        bottom = bottom || this.rows - 1;
      }
      this.scrollTop = top;
      this.scrollBottom = bottom;
      this.x = 0;
      this.y = 0;
      this._ncoords();
      if (this.tput)
        return this.put.csr(top, bottom);
      return this._write("\x1B[" + (top + 1) + ";" + (bottom + 1) + "r");
    };
    Program.prototype.scA = Program.prototype.saveCursorA = function() {
      this.savedX = this.x;
      this.savedY = this.y;
      if (this.tput)
        return this.put.sc();
      return this._write("\x1B[s");
    };
    Program.prototype.rcA = Program.prototype.restoreCursorA = function() {
      this.x = this.savedX || 0;
      this.y = this.savedY || 0;
      if (this.tput)
        return this.put.rc();
      return this._write("\x1B[u");
    };
    Program.prototype.cht = Program.prototype.cursorForwardTab = function(param) {
      this.x += 8;
      this._ncoords();
      if (this.tput)
        return this.put.tab(param);
      return this._write("\x1B[" + (param || 1) + "I");
    };
    Program.prototype.su = Program.prototype.scrollUp = function(param) {
      this.y -= param || 1;
      this._ncoords();
      if (this.tput)
        return this.put.parm_index(param);
      return this._write("\x1B[" + (param || 1) + "S");
    };
    Program.prototype.sd = Program.prototype.scrollDown = function(param) {
      this.y += param || 1;
      this._ncoords();
      if (this.tput)
        return this.put.parm_rindex(param);
      return this._write("\x1B[" + (param || 1) + "T");
    };
    Program.prototype.initMouseTracking = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "T");
    };
    Program.prototype.resetTitleModes = function() {
      return this._write("\x1B[>" + slice.call(arguments).join(";") + "T");
    };
    Program.prototype.cbt = Program.prototype.cursorBackwardTab = function(param) {
      this.x -= 8;
      this._ncoords();
      if (this.tput)
        return this.put.cbt(param);
      return this._write("\x1B[" + (param || 1) + "Z");
    };
    Program.prototype.rep = Program.prototype.repeatPrecedingCharacter = function(param) {
      this.x += param || 1;
      this._ncoords();
      if (this.tput)
        return this.put.rep(param);
      return this._write("\x1B[" + (param || 1) + "b");
    };
    Program.prototype.tbc = Program.prototype.tabClear = function(param) {
      if (this.tput)
        return this.put.tbc(param);
      return this._write("\x1B[" + (param || 0) + "g");
    };
    Program.prototype.mc = Program.prototype.mediaCopy = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "i");
    };
    Program.prototype.print_screen = Program.prototype.ps = Program.prototype.mc0 = function() {
      if (this.tput)
        return this.put.mc0();
      return this.mc("0");
    };
    Program.prototype.prtr_on = Program.prototype.po = Program.prototype.mc5 = function() {
      if (this.tput)
        return this.put.mc5();
      return this.mc("5");
    };
    Program.prototype.prtr_off = Program.prototype.pf = Program.prototype.mc4 = function() {
      if (this.tput)
        return this.put.mc4();
      return this.mc("4");
    };
    Program.prototype.prtr_non = Program.prototype.pO = Program.prototype.mc5p = function() {
      if (this.tput)
        return this.put.mc5p();
      return this.mc("?5");
    };
    Program.prototype.setResources = function() {
      return this._write("\x1B[>" + slice.call(arguments).join(";") + "m");
    };
    Program.prototype.disableModifiers = function(param) {
      return this._write("\x1B[>" + (param || "") + "n");
    };
    Program.prototype.setPointerMode = function(param) {
      return this._write("\x1B[>" + (param || "") + "p");
    };
    Program.prototype.decstr = Program.prototype.rs2 = Program.prototype.softReset = function() {
      if (this.tput)
        return this.put.rs2();
      return this._write("\x1B[!p\x1B[?3;4l\x1B[4l\x1B>");
    };
    Program.prototype.decrqm = Program.prototype.requestAnsiMode = function(param) {
      return this._write("\x1B[" + (param || "") + "$p");
    };
    Program.prototype.decrqmp = Program.prototype.requestPrivateMode = function(param) {
      return this._write("\x1B[?" + (param || "") + "$p");
    };
    Program.prototype.decscl = Program.prototype.setConformanceLevel = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + '"p');
    };
    Program.prototype.decll = Program.prototype.loadLEDs = function(param) {
      return this._write("\x1B[" + (param || "") + "q");
    };
    Program.prototype.decscusr = Program.prototype.setCursorStyle = function(param) {
      switch (param) {
        case "blinking block":
          param = 1;
          break;
        case "block":
        case "steady block":
          param = 2;
          break;
        case "blinking underline":
          param = 3;
          break;
        case "underline":
        case "steady underline":
          param = 4;
          break;
        case "blinking bar":
          param = 5;
          break;
        case "bar":
        case "steady bar":
          param = 6;
          break;
      }
      if (param === 2 && this.has("Se")) {
        return this.put.Se();
      }
      if (this.has("Ss")) {
        return this.put.Ss(param);
      }
      return this._write("\x1B[" + (param || 1) + " q");
    };
    Program.prototype.decsca = Program.prototype.setCharProtectionAttr = function(param) {
      return this._write("\x1B[" + (param || 0) + '"q');
    };
    Program.prototype.restorePrivateValues = function() {
      return this._write("\x1B[?" + slice.call(arguments).join(";") + "r");
    };
    Program.prototype.deccara = Program.prototype.setAttrInRectangle = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "$r");
    };
    Program.prototype.savePrivateValues = function() {
      return this._write("\x1B[?" + slice.call(arguments).join(";") + "s");
    };
    Program.prototype.manipulateWindow = function() {
      var args = slice.call(arguments);
      var callback = typeof args[args.length - 1] === "function" ? args.pop() : function() {
      };
      return this.response(
        "window-manipulation",
        "\x1B[" + args.join(";") + "t",
        callback
      );
    };
    Program.prototype.getWindowSize = function(callback) {
      return this.manipulateWindow(18, callback);
    };
    Program.prototype.decrara = Program.prototype.reverseAttrInRectangle = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "$t");
    };
    Program.prototype.setTitleModeFeature = function() {
      return this._twrite("\x1B[>" + slice.call(arguments).join(";") + "t");
    };
    Program.prototype.decswbv = Program.prototype.setWarningBellVolume = function(param) {
      return this._write("\x1B[" + (param || "") + " t");
    };
    Program.prototype.decsmbv = Program.prototype.setMarginBellVolume = function(param) {
      return this._write("\x1B[" + (param || "") + " u");
    };
    Program.prototype.deccra = Program.prototype.copyRectangle = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "$v");
    };
    Program.prototype.decefr = Program.prototype.enableFilterRectangle = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "'w");
    };
    Program.prototype.decreqtparm = Program.prototype.requestParameters = function(param) {
      return this._write("\x1B[" + (param || 0) + "x");
    };
    Program.prototype.decsace = Program.prototype.selectChangeExtent = function(param) {
      return this._write("\x1B[" + (param || 0) + "x");
    };
    Program.prototype.decfra = Program.prototype.fillRectangle = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "$x");
    };
    Program.prototype.decelr = Program.prototype.enableLocatorReporting = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "'z");
    };
    Program.prototype.decera = Program.prototype.eraseRectangle = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "$z");
    };
    Program.prototype.decsle = Program.prototype.setLocatorEvents = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "'{");
    };
    Program.prototype.decsera = Program.prototype.selectiveEraseRectangle = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + "${");
    };
    Program.prototype.decrqlp = Program.prototype.req_mouse_pos = Program.prototype.reqmp = Program.prototype.requestLocatorPosition = function(param, callback) {
      if (this.has("req_mouse_pos")) {
        var code = this.tput.req_mouse_pos(param);
        return this.response("locator-position", code, callback);
      }
      return this.response(
        "locator-position",
        "\x1B[" + (param || "") + "'|",
        callback
      );
    };
    Program.prototype.decic = Program.prototype.insertColumns = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + " }");
    };
    Program.prototype.decdc = Program.prototype.deleteColumns = function() {
      return this._write("\x1B[" + slice.call(arguments).join(";") + " ~");
    };
    Program.prototype.out = function(name) {
      var args = Array.prototype.slice.call(arguments, 1);
      this.ret = true;
      var out = this[name].apply(this, args);
      this.ret = false;
      return out;
    };
    Program.prototype.sigtstp = function(callback) {
      var resume = this.pause();
      process.once("SIGCONT", function() {
        resume();
        if (callback)
          callback();
      });
      process.kill(process.pid, "SIGTSTP");
    };
    Program.prototype.pause = function(callback) {
      var self = this, isAlt = this.isAlt, mouseEnabled = this.mouseEnabled;
      this.lsaveCursor("pause");
      if (isAlt)
        this.normalBuffer();
      this.showCursor();
      if (mouseEnabled)
        this.disableMouse();
      var write = this.output.write;
      this.output.write = function() {
      };
      if (this.input.setRawMode) {
        this.input.setRawMode(false);
      }
      this.input.pause();
      return this._resume = function() {
        delete self._resume;
        if (self.input.setRawMode) {
          self.input.setRawMode(true);
        }
        self.input.resume();
        self.output.write = write;
        if (isAlt)
          self.alternateBuffer();
        if (mouseEnabled)
          self.enableMouse();
        self.lrestoreCursor("pause", true);
        if (callback)
          callback();
      };
    };
    Program.prototype.resume = function() {
      if (this._resume)
        return this._resume();
    };
    function unshiftEvent(obj, event, listener) {
      var listeners = obj.listeners(event);
      obj.removeAllListeners(event);
      obj.on(event, listener);
      listeners.forEach(function(listener2) {
        obj.on(event, listener2);
      });
    }
    function merge(out) {
      slice.call(arguments, 1).forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
          out[key] = obj[key];
        });
      });
      return out;
    }
    module2.exports = Program;
  }
});

// node_modules/blessed/lib/events.js
var require_events = __commonJS({
  "node_modules/blessed/lib/events.js"(exports, module2) {
    var slice = Array.prototype.slice;
    function EventEmitter() {
      if (!this._events)
        this._events = {};
    }
    EventEmitter.prototype.setMaxListeners = function(n) {
      this._maxListeners = n;
    };
    EventEmitter.prototype.addListener = function(type3, listener) {
      if (!this._events[type3]) {
        this._events[type3] = listener;
      } else if (typeof this._events[type3] === "function") {
        this._events[type3] = [this._events[type3], listener];
      } else {
        this._events[type3].push(listener);
      }
      this._emit("newListener", [type3, listener]);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.removeListener = function(type3, listener) {
      var handler = this._events[type3];
      if (!handler)
        return;
      if (typeof handler === "function" || handler.length === 1) {
        delete this._events[type3];
        this._emit("removeListener", [type3, listener]);
        return;
      }
      for (var i = 0; i < handler.length; i++) {
        if (handler[i] === listener || handler[i].listener === listener) {
          handler.splice(i, 1);
          this._emit("removeListener", [type3, listener]);
          return;
        }
      }
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function(type3) {
      if (type3) {
        delete this._events[type3];
      } else {
        this._events = {};
      }
    };
    EventEmitter.prototype.once = function(type3, listener) {
      function on() {
        this.removeListener(type3, on);
        return listener.apply(this, arguments);
      }
      on.listener = listener;
      return this.on(type3, on);
    };
    EventEmitter.prototype.listeners = function(type3) {
      return typeof this._events[type3] === "function" ? [this._events[type3]] : this._events[type3] || [];
    };
    EventEmitter.prototype._emit = function(type3, args) {
      var handler = this._events[type3], ret;
      if (!handler) {
        if (type3 === "error") {
          throw new args[0]();
        }
        return;
      }
      if (typeof handler === "function") {
        return handler.apply(this, args);
      }
      for (var i = 0; i < handler.length; i++) {
        if (handler[i].apply(this, args) === false) {
          ret = false;
        }
      }
      return ret !== false;
    };
    EventEmitter.prototype.emit = function(type3) {
      var args = slice.call(arguments, 1), params2 = slice.call(arguments), el = this;
      this._emit("event", params2);
      if (this.type === "screen") {
        return this._emit(type3, args);
      }
      if (this._emit(type3, args) === false) {
        return false;
      }
      type3 = "element " + type3;
      args.unshift(this);
      do {
        if (!el._events[type3])
          continue;
        if (el._emit(type3, args) === false) {
          return false;
        }
      } while (el = el.parent);
      return true;
    };
    exports = EventEmitter;
    exports.EventEmitter = EventEmitter;
    module2.exports = exports;
  }
});

// node_modules/blessed/lib/unicode.js
var require_unicode = __commonJS({
  "node_modules/blessed/lib/unicode.js"(exports) {
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    exports.charWidth = function(str, i) {
      var point = typeof str !== "number" ? exports.codePointAt(str, i || 0) : str;
      if (point === 0)
        return 0;
      if (point === 9) {
        if (!exports.blessed) {
          exports.blessed = require_blessed();
        }
        return exports.blessed.screen.global ? exports.blessed.screen.global.tabc.length : 8;
      }
      if (point < 32 || point >= 127 && point < 160) {
        return 0;
      }
      if (exports.combining[point]) {
        return 0;
      }
      if (12288 === point || 65281 <= point && point <= 65376 || 65504 <= point && point <= 65510) {
        return 2;
      }
      if (4352 <= point && point <= 4447 || 4515 <= point && point <= 4519 || 4602 <= point && point <= 4607 || 9001 <= point && point <= 9002 || 11904 <= point && point <= 11929 || 11931 <= point && point <= 12019 || 12032 <= point && point <= 12245 || 12272 <= point && point <= 12283 || 12289 <= point && point <= 12350 || 12353 <= point && point <= 12438 || 12441 <= point && point <= 12543 || 12549 <= point && point <= 12589 || 12593 <= point && point <= 12686 || 12688 <= point && point <= 12730 || 12736 <= point && point <= 12771 || 12784 <= point && point <= 12830 || 12832 <= point && point <= 12871 || 12880 <= point && point <= 13054 || 13056 <= point && point <= 19903 || 19968 <= point && point <= 42124 || 42128 <= point && point <= 42182 || 43360 <= point && point <= 43388 || 44032 <= point && point <= 55203 || 55216 <= point && point <= 55238 || 55243 <= point && point <= 55291 || 63744 <= point && point <= 64255 || 65040 <= point && point <= 65049 || 65072 <= point && point <= 65106 || 65108 <= point && point <= 65126 || 65128 <= point && point <= 65131 || 110592 <= point && point <= 110593 || 127488 <= point && point <= 127490 || 127504 <= point && point <= 127546 || 127552 <= point && point <= 127560 || 127568 <= point && point <= 127569 || 131072 <= point && point <= 194367 || 177984 <= point && point <= 196605 || 196608 <= point && point <= 262141) {
        return 2;
      }
      if (process.env.NCURSES_CJK_WIDTH) {
        if (161 === point || 164 === point || 167 <= point && point <= 168 || 170 === point || 173 <= point && point <= 174 || 176 <= point && point <= 180 || 182 <= point && point <= 186 || 188 <= point && point <= 191 || 198 === point || 208 === point || 215 <= point && point <= 216 || 222 <= point && point <= 225 || 230 === point || 232 <= point && point <= 234 || 236 <= point && point <= 237 || 240 === point || 242 <= point && point <= 243 || 247 <= point && point <= 250 || 252 === point || 254 === point || 257 === point || 273 === point || 275 === point || 283 === point || 294 <= point && point <= 295 || 299 === point || 305 <= point && point <= 307 || 312 === point || 319 <= point && point <= 322 || 324 === point || 328 <= point && point <= 331 || 333 === point || 338 <= point && point <= 339 || 358 <= point && point <= 359 || 363 === point || 462 === point || 464 === point || 466 === point || 468 === point || 470 === point || 472 === point || 474 === point || 476 === point || 593 === point || 609 === point || 708 === point || 711 === point || 713 <= point && point <= 715 || 717 === point || 720 === point || 728 <= point && point <= 731 || 733 === point || 735 === point || 768 <= point && point <= 879 || 913 <= point && point <= 929 || 931 <= point && point <= 937 || 945 <= point && point <= 961 || 963 <= point && point <= 969 || 1025 === point || 1040 <= point && point <= 1103 || 1105 === point || 8208 === point || 8211 <= point && point <= 8214 || 8216 <= point && point <= 8217 || 8220 <= point && point <= 8221 || 8224 <= point && point <= 8226 || 8228 <= point && point <= 8231 || 8240 === point || 8242 <= point && point <= 8243 || 8245 === point || 8251 === point || 8254 === point || 8308 === point || 8319 === point || 8321 <= point && point <= 8324 || 8364 === point || 8451 === point || 8453 === point || 8457 === point || 8467 === point || 8470 === point || 8481 <= point && point <= 8482 || 8486 === point || 8491 === point || 8531 <= point && point <= 8532 || 8539 <= point && point <= 8542 || 8544 <= point && point <= 8555 || 8560 <= point && point <= 8569 || 8585 === point || 8592 <= point && point <= 8601 || 8632 <= point && point <= 8633 || 8658 === point || 8660 === point || 8679 === point || 8704 === point || 8706 <= point && point <= 8707 || 8711 <= point && point <= 8712 || 8715 === point || 8719 === point || 8721 === point || 8725 === point || 8730 === point || 8733 <= point && point <= 8736 || 8739 === point || 8741 === point || 8743 <= point && point <= 8748 || 8750 === point || 8756 <= point && point <= 8759 || 8764 <= point && point <= 8765 || 8776 === point || 8780 === point || 8786 === point || 8800 <= point && point <= 8801 || 8804 <= point && point <= 8807 || 8810 <= point && point <= 8811 || 8814 <= point && point <= 8815 || 8834 <= point && point <= 8835 || 8838 <= point && point <= 8839 || 8853 === point || 8857 === point || 8869 === point || 8895 === point || 8978 === point || 9312 <= point && point <= 9449 || 9451 <= point && point <= 9547 || 9552 <= point && point <= 9587 || 9600 <= point && point <= 9615 || 9618 <= point && point <= 9621 || 9632 <= point && point <= 9633 || 9635 <= point && point <= 9641 || 9650 <= point && point <= 9651 || 9654 <= point && point <= 9655 || 9660 <= point && point <= 9661 || 9664 <= point && point <= 9665 || 9670 <= point && point <= 9672 || 9675 === point || 9678 <= point && point <= 9681 || 9698 <= point && point <= 9701 || 9711 === point || 9733 <= point && point <= 9734 || 9737 === point || 9742 <= point && point <= 9743 || 9748 <= point && point <= 9749 || 9756 === point || 9758 === point || 9792 === point || 9794 === point || 9824 <= point && point <= 9825 || 9827 <= point && point <= 9829 || 9831 <= point && point <= 9834 || 9836 <= point && point <= 9837 || 9839 === point || 9886 <= point && point <= 9887 || 9918 <= point && point <= 9919 || 9924 <= point && point <= 9933 || 9935 <= point && point <= 9953 || 9955 === point || 9960 <= point && point <= 9983 || 10045 === point || 10071 === point || 10102 <= point && point <= 10111 || 11093 <= point && point <= 11097 || 12872 <= point && point <= 12879 || 57344 <= point && point <= 63743 || 65024 <= point && point <= 65039 || 65533 === point || 127232 <= point && point <= 127242 || 127248 <= point && point <= 127277 || 127280 <= point && point <= 127337 || 127344 <= point && point <= 127386 || 917760 <= point && point <= 917999 || 983040 <= point && point <= 1048573 || 1048576 <= point && point <= 1114109) {
          return +process.env.NCURSES_CJK_WIDTH || 1;
        }
      }
      return 1;
    };
    exports.strWidth = function(str) {
      var width = 0;
      for (var i = 0; i < str.length; i++) {
        width += exports.charWidth(str, i);
        if (exports.isSurrogate(str, i))
          i++;
      }
      return width;
    };
    exports.isSurrogate = function(str, i) {
      var point = typeof str !== "number" ? exports.codePointAt(str, i || 0) : str;
      return point > 65535;
    };
    exports.combiningTable = [
      [768, 879],
      [1155, 1158],
      [1160, 1161],
      [1425, 1469],
      [1471, 1471],
      [1473, 1474],
      [1476, 1477],
      [1479, 1479],
      [1536, 1539],
      [1552, 1557],
      [1611, 1630],
      [1648, 1648],
      [1750, 1764],
      [1767, 1768],
      [1770, 1773],
      [1807, 1807],
      [1809, 1809],
      [1840, 1866],
      [1958, 1968],
      [2027, 2035],
      [2305, 2306],
      [2364, 2364],
      [2369, 2376],
      [2381, 2381],
      [2385, 2388],
      [2402, 2403],
      [2433, 2433],
      [2492, 2492],
      [2497, 2500],
      [2509, 2509],
      [2530, 2531],
      [2561, 2562],
      [2620, 2620],
      [2625, 2626],
      [2631, 2632],
      [2635, 2637],
      [2672, 2673],
      [2689, 2690],
      [2748, 2748],
      [2753, 2757],
      [2759, 2760],
      [2765, 2765],
      [2786, 2787],
      [2817, 2817],
      [2876, 2876],
      [2879, 2879],
      [2881, 2883],
      [2893, 2893],
      [2902, 2902],
      [2946, 2946],
      [3008, 3008],
      [3021, 3021],
      [3134, 3136],
      [3142, 3144],
      [3146, 3149],
      [3157, 3158],
      [3260, 3260],
      [3263, 3263],
      [3270, 3270],
      [3276, 3277],
      [3298, 3299],
      [3393, 3395],
      [3405, 3405],
      [3530, 3530],
      [3538, 3540],
      [3542, 3542],
      [3633, 3633],
      [3636, 3642],
      [3655, 3662],
      [3761, 3761],
      [3764, 3769],
      [3771, 3772],
      [3784, 3789],
      [3864, 3865],
      [3893, 3893],
      [3895, 3895],
      [3897, 3897],
      [3953, 3966],
      [3968, 3972],
      [3974, 3975],
      [3984, 3991],
      [3993, 4028],
      [4038, 4038],
      [4141, 4144],
      [4146, 4146],
      [4150, 4151],
      [4153, 4153],
      [4184, 4185],
      [4448, 4607],
      [4959, 4959],
      [5906, 5908],
      [5938, 5940],
      [5970, 5971],
      [6002, 6003],
      [6068, 6069],
      [6071, 6077],
      [6086, 6086],
      [6089, 6099],
      [6109, 6109],
      [6155, 6157],
      [6313, 6313],
      [6432, 6434],
      [6439, 6440],
      [6450, 6450],
      [6457, 6459],
      [6679, 6680],
      [6912, 6915],
      [6964, 6964],
      [6966, 6970],
      [6972, 6972],
      [6978, 6978],
      [7019, 7027],
      [7616, 7626],
      [7678, 7679],
      [8203, 8207],
      [8234, 8238],
      [8288, 8291],
      [8298, 8303],
      [8400, 8431],
      [12330, 12335],
      [12441, 12442],
      [43014, 43014],
      [43019, 43019],
      [43045, 43046],
      [64286, 64286],
      [65024, 65039],
      [65056, 65059],
      [65279, 65279],
      [65529, 65531],
      [68097, 68099],
      [68101, 68102],
      [68108, 68111],
      [68152, 68154],
      [68159, 68159],
      [119143, 119145],
      [119155, 119170],
      [119173, 119179],
      [119210, 119213],
      [119362, 119364],
      [917505, 917505],
      [917536, 917631],
      [917760, 917999]
    ];
    exports.combining = exports.combiningTable.reduce(function(out, row) {
      for (var i = row[0]; i <= row[1]; i++) {
        out[i] = true;
      }
      return out;
    }, {});
    exports.isCombining = function(str, i) {
      var point = typeof str !== "number" ? exports.codePointAt(str, i || 0) : str;
      return exports.combining[point] === true;
    };
    exports.codePointAt = function(str, position) {
      if (str == null) {
        throw TypeError();
      }
      var string = String(str);
      if (string.codePointAt) {
        return string.codePointAt(position);
      }
      var size = string.length;
      var index = position ? Number(position) : 0;
      if (index !== index) {
        index = 0;
      }
      if (index < 0 || index >= size) {
        return void 0;
      }
      var first = string.charCodeAt(index);
      var second;
      if (
        // check if it’s the start of a surrogate pair
        first >= 55296 && first <= 56319 && // high surrogate
        size > index + 1
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 56320 && second <= 57343) {
          return (first - 55296) * 1024 + second - 56320 + 65536;
        }
      }
      return first;
    };
    exports.fromCodePoint = function() {
      if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
      }
      var MAX_SIZE = 16384;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return "";
      }
      var result = "";
      while (++index < length) {
        var codePoint = Number(arguments[index]);
        if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
        codePoint < 0 || // not a valid Unicode code point
        codePoint > 1114111 || // not a valid Unicode code point
        floor(codePoint) !== codePoint) {
          throw RangeError("Invalid code point: " + codePoint);
        }
        if (codePoint <= 65535) {
          codeUnits.push(codePoint);
        } else {
          codePoint -= 65536;
          highSurrogate = (codePoint >> 10) + 55296;
          lowSurrogate = codePoint % 1024 + 56320;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 === length || codeUnits.length > MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    exports.chars = {};
    exports.chars.wide = new RegExp("([\\u1100-\\u115f\\u2329\\u232a\\u2e80-\\u303e\\u3040-\\ua4cf\\uac00-\\ud7a3\\uf900-\\ufaff\\ufe10-\\ufe19\\ufe30-\\ufe6f\\uff00-\\uff60\\uffe0-\\uffe6])", "g");
    exports.chars.swide = new RegExp("([\\ud840-\\ud87f][\\udc00-\\udffd]|[\\ud880-\\ud8bf][\\udc00-\\udffd])", "g");
    exports.chars.all = new RegExp("(" + exports.chars.swide.source.slice(1, -1) + "|" + exports.chars.wide.source.slice(1, -1) + ")", "g");
    exports.chars.surrogate = /[\ud800-\udbff][\udc00-\udfff]/g;
    exports.chars.combining = exports.combiningTable.reduce(function(out, row) {
      var low, high, range;
      if (row[0] > 65535) {
        low = exports.fromCodePoint(row[0]);
        low = [
          hexify(low.charCodeAt(0)),
          hexify(low.charCodeAt(1))
        ];
        high = exports.fromCodePoint(row[1]);
        high = [
          hexify(high.charCodeAt(0)),
          hexify(high.charCodeAt(1))
        ];
        range = "[\\u" + low[0] + "-\\u" + high[0] + "][\\u" + low[1] + "-\\u" + high[1] + "]";
        if (!~out.indexOf("|"))
          out += "]";
        out += "|" + range;
      } else {
        low = hexify(row[0]);
        high = hexify(row[1]);
        low = "\\u" + low;
        high = "\\u" + high;
        out += low + "-" + high;
      }
      return out;
    }, "[");
    exports.chars.combining = new RegExp(exports.chars.combining, "g");
    function hexify(n) {
      n = n.toString(16);
      while (n.length < 4)
        n = "0" + n;
      return n;
    }
  }
});

// node_modules/blessed/lib/widgets/box.js
var require_box = __commonJS({
  "node_modules/blessed/lib/widgets/box.js"(exports, module2) {
    var Node = require_node();
    var Element = require_element();
    function Box(options) {
      if (!(this instanceof Node)) {
        return new Box(options);
      }
      options = options || {};
      Element.call(this, options);
    }
    Box.prototype.__proto__ = Element.prototype;
    Box.prototype.type = "box";
    module2.exports = Box;
  }
});

// node_modules/blessed/lib/widgets/scrollablebox.js
var require_scrollablebox = __commonJS({
  "node_modules/blessed/lib/widgets/scrollablebox.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function ScrollableBox(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new ScrollableBox(options);
      }
      options = options || {};
      Box.call(this, options);
      if (options.scrollable === false) {
        return this;
      }
      this.scrollable = true;
      this.childOffset = 0;
      this.childBase = 0;
      this.baseLimit = options.baseLimit || Infinity;
      this.alwaysScroll = options.alwaysScroll;
      this.scrollbar = options.scrollbar;
      if (this.scrollbar) {
        this.scrollbar.ch = this.scrollbar.ch || " ";
        this.style.scrollbar = this.style.scrollbar || this.scrollbar.style;
        if (!this.style.scrollbar) {
          this.style.scrollbar = {};
          this.style.scrollbar.fg = this.scrollbar.fg;
          this.style.scrollbar.bg = this.scrollbar.bg;
          this.style.scrollbar.bold = this.scrollbar.bold;
          this.style.scrollbar.underline = this.scrollbar.underline;
          this.style.scrollbar.inverse = this.scrollbar.inverse;
          this.style.scrollbar.invisible = this.scrollbar.invisible;
        }
        if (this.track || this.scrollbar.track) {
          this.track = this.scrollbar.track || this.track;
          this.style.track = this.style.scrollbar.track || this.style.track;
          this.track.ch = this.track.ch || " ";
          this.style.track = this.style.track || this.track.style;
          if (!this.style.track) {
            this.style.track = {};
            this.style.track.fg = this.track.fg;
            this.style.track.bg = this.track.bg;
            this.style.track.bold = this.track.bold;
            this.style.track.underline = this.track.underline;
            this.style.track.inverse = this.track.inverse;
            this.style.track.invisible = this.track.invisible;
          }
          this.track.style = this.style.track;
        }
        if (options.mouse) {
          this.on("mousedown", function(data) {
            if (self._scrollingBar) {
              delete self.screen._dragging;
              delete self._drag;
              return;
            }
            var x = data.x - self.aleft;
            var y = data.y - self.atop;
            if (x === self.width - self.iright - 1) {
              delete self.screen._dragging;
              delete self._drag;
              var perc = (y - self.itop) / (self.height - self.iheight);
              self.setScrollPerc(perc * 100 | 0);
              self.screen.render();
              var smd, smu;
              self._scrollingBar = true;
              self.onScreenEvent("mousedown", smd = function(data2) {
                var y2 = data2.y - self.atop;
                var perc2 = y2 / self.height;
                self.setScrollPerc(perc2 * 100 | 0);
                self.screen.render();
              });
              self.onScreenEvent("mouseup", smu = function() {
                self._scrollingBar = false;
                self.removeScreenEvent("mousedown", smd);
                self.removeScreenEvent("mouseup", smu);
              });
            }
          });
        }
      }
      if (options.mouse) {
        this.on("wheeldown", function() {
          self.scroll(self.height / 2 | 0 || 1);
          self.screen.render();
        });
        this.on("wheelup", function() {
          self.scroll(-(self.height / 2 | 0) || -1);
          self.screen.render();
        });
      }
      if (options.keys && !options.ignoreKeys) {
        this.on("keypress", function(ch, key) {
          if (key.name === "up" || options.vi && key.name === "k") {
            self.scroll(-1);
            self.screen.render();
            return;
          }
          if (key.name === "down" || options.vi && key.name === "j") {
            self.scroll(1);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "u" && key.ctrl) {
            self.scroll(-(self.height / 2 | 0) || -1);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "d" && key.ctrl) {
            self.scroll(self.height / 2 | 0 || 1);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "b" && key.ctrl) {
            self.scroll(-self.height || -1);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "f" && key.ctrl) {
            self.scroll(self.height || 1);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "g" && !key.shift) {
            self.scrollTo(0);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "g" && key.shift) {
            self.scrollTo(self.getScrollHeight());
            self.screen.render();
            return;
          }
        });
      }
      this.on("parsed content", function() {
        self._recalculateIndex();
      });
      self._recalculateIndex();
    }
    ScrollableBox.prototype.__proto__ = Box.prototype;
    ScrollableBox.prototype.type = "scrollable-box";
    ScrollableBox.prototype.__defineGetter__("reallyScrollable", function() {
      if (this.shrink)
        return this.scrollable;
      return this.getScrollHeight() > this.height;
    });
    ScrollableBox.prototype._scrollBottom = function() {
      if (!this.scrollable)
        return 0;
      if (this._isList) {
        return this.items ? this.items.length : 0;
      }
      if (this.lpos && this.lpos._scrollBottom) {
        return this.lpos._scrollBottom;
      }
      var bottom = this.children.reduce(function(current, el) {
        if (!el.detached) {
          var lpos = el._getCoords(false, true);
          if (lpos) {
            return Math.max(current, el.rtop + (lpos.yl - lpos.yi));
          }
        }
        return Math.max(current, el.rtop + el.height);
      }, 0);
      if (this.lpos)
        this.lpos._scrollBottom = bottom;
      return bottom;
    };
    ScrollableBox.prototype.setScroll = ScrollableBox.prototype.scrollTo = function(offset, always) {
      this.scroll(0);
      return this.scroll(offset - (this.childBase + this.childOffset), always);
    };
    ScrollableBox.prototype.getScroll = function() {
      return this.childBase + this.childOffset;
    };
    ScrollableBox.prototype.scroll = function(offset, always) {
      if (!this.scrollable)
        return;
      if (this.detached)
        return;
      var visible = this.height - this.iheight, base = this.childBase, d, p, t, b, max, emax;
      if (this.alwaysScroll || always) {
        this.childOffset = offset > 0 ? visible - 1 + offset : offset;
      } else {
        this.childOffset += offset;
      }
      if (this.childOffset > visible - 1) {
        d = this.childOffset - (visible - 1);
        this.childOffset -= d;
        this.childBase += d;
      } else if (this.childOffset < 0) {
        d = this.childOffset;
        this.childOffset += -d;
        this.childBase += d;
      }
      if (this.childBase < 0) {
        this.childBase = 0;
      } else if (this.childBase > this.baseLimit) {
        this.childBase = this.baseLimit;
      }
      if (this.childBase === base) {
        return this.emit("scroll");
      }
      this.parseContent();
      max = this._clines.length - (this.height - this.iheight);
      if (max < 0)
        max = 0;
      emax = this._scrollBottom() - (this.height - this.iheight);
      if (emax < 0)
        emax = 0;
      this.childBase = Math.min(this.childBase, Math.max(emax, max));
      if (this.childBase < 0) {
        this.childBase = 0;
      } else if (this.childBase > this.baseLimit) {
        this.childBase = this.baseLimit;
      }
      p = this.lpos;
      if (p && this.childBase !== base && this.screen.cleanSides(this)) {
        t = p.yi + this.itop;
        b = p.yl - this.ibottom - 1;
        d = this.childBase - base;
        if (d > 0 && d < visible) {
          this.screen.deleteLine(d, t, t, b);
        } else if (d < 0 && -d < visible) {
          d = -d;
          this.screen.insertLine(d, t, t, b);
        }
      }
      return this.emit("scroll");
    };
    ScrollableBox.prototype._recalculateIndex = function() {
      var max, emax;
      if (this.detached || !this.scrollable) {
        return 0;
      }
      max = this._clines.length - (this.height - this.iheight);
      if (max < 0)
        max = 0;
      emax = this._scrollBottom() - (this.height - this.iheight);
      if (emax < 0)
        emax = 0;
      this.childBase = Math.min(this.childBase, Math.max(emax, max));
      if (this.childBase < 0) {
        this.childBase = 0;
      } else if (this.childBase > this.baseLimit) {
        this.childBase = this.baseLimit;
      }
    };
    ScrollableBox.prototype.resetScroll = function() {
      if (!this.scrollable)
        return;
      this.childOffset = 0;
      this.childBase = 0;
      return this.emit("scroll");
    };
    ScrollableBox.prototype.getScrollHeight = function() {
      return Math.max(this._clines.length, this._scrollBottom());
    };
    ScrollableBox.prototype.getScrollPerc = function(s) {
      var pos = this.lpos || this._getCoords();
      if (!pos)
        return s ? -1 : 0;
      var height = pos.yl - pos.yi - this.iheight, i = this.getScrollHeight(), p;
      if (height < i) {
        if (this.alwaysScroll) {
          p = this.childBase / (i - height);
        } else {
          p = (this.childBase + this.childOffset) / (i - 1);
        }
        return p * 100;
      }
      return s ? -1 : 0;
    };
    ScrollableBox.prototype.setScrollPerc = function(i) {
      var m = Math.max(this._clines.length, this._scrollBottom());
      return this.scrollTo(i / 100 * m | 0);
    };
    module2.exports = ScrollableBox;
  }
});

// node_modules/blessed/lib/widgets/element.js
var require_element = __commonJS({
  "node_modules/blessed/lib/widgets/element.js"(exports, module2) {
    var assert = require("assert");
    var colors = require_colors();
    var unicode = require_unicode();
    var nextTick = global.setImmediate || process.nextTick.bind(process);
    var helpers = require_helpers();
    var Node = require_node();
    function Element(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Element(options);
      }
      options = options || {};
      if (options.scrollable && !this._ignore && this.type !== "scrollable-box") {
        var ScrollableBox = require_scrollablebox();
        Object.getOwnPropertyNames(ScrollableBox.prototype).forEach(function(key) {
          if (key === "type")
            return;
          Object.defineProperty(
            this,
            key,
            Object.getOwnPropertyDescriptor(ScrollableBox.prototype, key)
          );
        }, this);
        this._ignore = true;
        ScrollableBox.call(this, options);
        delete this._ignore;
        return this;
      }
      Node.call(this, options);
      this.name = options.name;
      options.position = options.position || {
        left: options.left,
        right: options.right,
        top: options.top,
        bottom: options.bottom,
        width: options.width,
        height: options.height
      };
      if (options.position.width === "shrink" || options.position.height === "shrink") {
        if (options.position.width === "shrink") {
          delete options.position.width;
        }
        if (options.position.height === "shrink") {
          delete options.position.height;
        }
        options.shrink = true;
      }
      this.position = options.position;
      this.noOverflow = options.noOverflow;
      this.dockBorders = options.dockBorders;
      this.shadow = options.shadow;
      this.style = options.style;
      if (!this.style) {
        this.style = {};
        this.style.fg = options.fg;
        this.style.bg = options.bg;
        this.style.bold = options.bold;
        this.style.underline = options.underline;
        this.style.blink = options.blink;
        this.style.inverse = options.inverse;
        this.style.invisible = options.invisible;
        this.style.transparent = options.transparent;
      }
      this.hidden = options.hidden || false;
      this.fixed = options.fixed || false;
      this.align = options.align || "left";
      this.valign = options.valign || "top";
      this.wrap = options.wrap !== false;
      this.shrink = options.shrink;
      this.fixed = options.fixed;
      this.ch = options.ch || " ";
      if (typeof options.padding === "number" || !options.padding) {
        options.padding = {
          left: options.padding,
          top: options.padding,
          right: options.padding,
          bottom: options.padding
        };
      }
      this.padding = {
        left: options.padding.left || 0,
        top: options.padding.top || 0,
        right: options.padding.right || 0,
        bottom: options.padding.bottom || 0
      };
      this.border = options.border;
      if (this.border) {
        if (typeof this.border === "string") {
          this.border = { type: this.border };
        }
        this.border.type = this.border.type || "bg";
        if (this.border.type === "ascii")
          this.border.type = "line";
        this.border.ch = this.border.ch || " ";
        this.style.border = this.style.border || this.border.style;
        if (!this.style.border) {
          this.style.border = {};
          this.style.border.fg = this.border.fg;
          this.style.border.bg = this.border.bg;
        }
        if (this.border.left == null)
          this.border.left = true;
        if (this.border.top == null)
          this.border.top = true;
        if (this.border.right == null)
          this.border.right = true;
        if (this.border.bottom == null)
          this.border.bottom = true;
      }
      if (options.clickable) {
        this.screen._listenMouse(this);
      }
      if (options.input || options.keyable) {
        this.screen._listenKeys(this);
      }
      this.parseTags = options.parseTags || options.tags;
      this.setContent(options.content || "", true);
      if (options.label) {
        this.setLabel(options.label);
      }
      if (options.hoverText) {
        this.setHover(options.hoverText);
      }
      this.on("newListener", function fn(type3) {
        if (type3 === "mouse" || type3 === "click" || type3 === "mouseover" || type3 === "mouseout" || type3 === "mousedown" || type3 === "mouseup" || type3 === "mousewheel" || type3 === "wheeldown" || type3 === "wheelup" || type3 === "mousemove") {
          self.screen._listenMouse(self);
        } else if (type3 === "keypress" || type3.indexOf("key ") === 0) {
          self.screen._listenKeys(self);
        }
      });
      this.on("resize", function() {
        self.parseContent();
      });
      this.on("attach", function() {
        self.parseContent();
      });
      this.on("detach", function() {
        delete self.lpos;
      });
      if (options.hoverBg != null) {
        options.hoverEffects = options.hoverEffects || {};
        options.hoverEffects.bg = options.hoverBg;
      }
      if (this.style.hover) {
        options.hoverEffects = this.style.hover;
      }
      if (this.style.focus) {
        options.focusEffects = this.style.focus;
      }
      if (options.effects) {
        if (options.effects.hover)
          options.hoverEffects = options.effects.hover;
        if (options.effects.focus)
          options.focusEffects = options.effects.focus;
      }
      [
        ["hoverEffects", "mouseover", "mouseout", "_htemp"],
        ["focusEffects", "focus", "blur", "_ftemp"]
      ].forEach(function(props) {
        var pname = props[0], over = props[1], out = props[2], temp = props[3];
        self.screen.setEffects(self, self, over, out, self.options[pname], temp);
      });
      if (this.options.draggable) {
        this.draggable = true;
      }
      if (options.focused) {
        this.focus();
      }
    }
    Element.prototype.__proto__ = Node.prototype;
    Element.prototype.type = "element";
    Element.prototype.__defineGetter__("focused", function() {
      return this.screen.focused === this;
    });
    Element.prototype.sattr = function(style, fg, bg) {
      var bold = style.bold, underline = style.underline, blink = style.blink, inverse = style.inverse, invisible = style.invisible;
      if (fg == null && bg == null) {
        fg = style.fg;
        bg = style.bg;
      }
      if (typeof bold === "function")
        bold = bold(this);
      if (typeof underline === "function")
        underline = underline(this);
      if (typeof blink === "function")
        blink = blink(this);
      if (typeof inverse === "function")
        inverse = inverse(this);
      if (typeof invisible === "function")
        invisible = invisible(this);
      if (typeof fg === "function")
        fg = fg(this);
      if (typeof bg === "function")
        bg = bg(this);
      return (invisible ? 16 : 0) << 18 | (inverse ? 8 : 0) << 18 | (blink ? 4 : 0) << 18 | (underline ? 2 : 0) << 18 | (bold ? 1 : 0) << 18 | colors.convert(fg) << 9 | colors.convert(bg);
    };
    Element.prototype.onScreenEvent = function(type3, handler) {
      var listeners = this._slisteners = this._slisteners || [];
      listeners.push({ type: type3, handler });
      this.screen.on(type3, handler);
    };
    Element.prototype.onceScreenEvent = function(type3, handler) {
      var listeners = this._slisteners = this._slisteners || [];
      var entry = { type: type3, handler };
      listeners.push(entry);
      this.screen.once(type3, function() {
        var i = listeners.indexOf(entry);
        if (~i)
          listeners.splice(i, 1);
        return handler.apply(this, arguments);
      });
    };
    Element.prototype.removeScreenEvent = function(type3, handler) {
      var listeners = this._slisteners = this._slisteners || [];
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        if (listener.type === type3 && listener.handler === handler) {
          listeners.splice(i, 1);
          if (this._slisteners.length === 0) {
            delete this._slisteners;
          }
          break;
        }
      }
      this.screen.removeListener(type3, handler);
    };
    Element.prototype.free = function() {
      var listeners = this._slisteners = this._slisteners || [];
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        this.screen.removeListener(listener.type, listener.handler);
      }
      delete this._slisteners;
    };
    Element.prototype.hide = function() {
      if (this.hidden)
        return;
      this.clearPos();
      this.hidden = true;
      this.emit("hide");
      if (this.screen.focused === this) {
        this.screen.rewindFocus();
      }
    };
    Element.prototype.show = function() {
      if (!this.hidden)
        return;
      this.hidden = false;
      this.emit("show");
    };
    Element.prototype.toggle = function() {
      return this.hidden ? this.show() : this.hide();
    };
    Element.prototype.focus = function() {
      return this.screen.focused = this;
    };
    Element.prototype.setContent = function(content, noClear, noTags) {
      if (!noClear)
        this.clearPos();
      this.content = content || "";
      this.parseContent(noTags);
      this.emit("set content");
    };
    Element.prototype.getContent = function() {
      if (!this._clines)
        return "";
      return this._clines.fake.join("\n");
    };
    Element.prototype.setText = function(content, noClear) {
      content = content || "";
      content = content.replace(/\x1b\[[\d;]*m/g, "");
      return this.setContent(content, noClear, true);
    };
    Element.prototype.getText = function() {
      return this.getContent().replace(/\x1b\[[\d;]*m/g, "");
    };
    Element.prototype.parseContent = function(noTags) {
      if (this.detached)
        return false;
      var width = this.width - this.iwidth;
      if (this._clines == null || this._clines.width !== width || this._clines.content !== this.content) {
        var content = this.content;
        content = content.replace(/[\x00-\x08\x0b-\x0c\x0e-\x1a\x1c-\x1f\x7f]/g, "").replace(/\x1b(?!\[[\d;]*m)/g, "").replace(/\r\n|\r/g, "\n").replace(/\t/g, this.screen.tabc);
        if (this.screen.fullUnicode) {
          content = content.replace(unicode.chars.all, "$1");
          if (this.screen.program.isiTerm2) {
            content = content.replace(unicode.chars.combining, "");
          }
        } else {
          content = content.replace(unicode.chars.all, "??");
          content = content.replace(unicode.chars.combining, "");
          content = content.replace(unicode.chars.surrogate, "?");
        }
        if (!noTags) {
          content = this._parseTags(content);
        }
        this._clines = this._wrapContent(content, width);
        this._clines.width = width;
        this._clines.content = this.content;
        this._clines.attr = this._parseAttr(this._clines);
        this._clines.ci = [];
        this._clines.reduce(function(total, line) {
          this._clines.ci.push(total);
          return total + line.length + 1;
        }.bind(this), 0);
        this._pcontent = this._clines.join("\n");
        this.emit("parsed content");
        return true;
      }
      this._clines.attr = this._parseAttr(this._clines) || this._clines.attr;
      return false;
    };
    Element.prototype._parseTags = function(text) {
      if (!this.parseTags)
        return text;
      if (!/{\/?[\w\-,;!#]*}/.test(text))
        return text;
      var program = this.screen.program, out = "", state, bg = [], fg = [], flag = [], cap, slash, param, attr, esc;
      for (; ; ) {
        if (!esc && (cap = /^{escape}/.exec(text))) {
          text = text.substring(cap[0].length);
          esc = true;
          continue;
        }
        if (esc && (cap = /^([\s\S]+?){\/escape}/.exec(text))) {
          text = text.substring(cap[0].length);
          out += cap[1];
          esc = false;
          continue;
        }
        if (esc) {
          out += text;
          break;
        }
        if (cap = /^{(\/?)([\w\-,;!#]*)}/.exec(text)) {
          text = text.substring(cap[0].length);
          slash = cap[1] === "/";
          param = cap[2].replace(/-/g, " ");
          if (param === "open") {
            out += "{";
            continue;
          } else if (param === "close") {
            out += "}";
            continue;
          }
          if (param.slice(-3) === " bg")
            state = bg;
          else if (param.slice(-3) === " fg")
            state = fg;
          else
            state = flag;
          if (slash) {
            if (!param) {
              out += program._attr("normal");
              bg.length = 0;
              fg.length = 0;
              flag.length = 0;
            } else {
              attr = program._attr(param, false);
              if (attr == null) {
                out += cap[0];
              } else {
                state.pop();
                if (state.length) {
                  out += program._attr(state[state.length - 1]);
                } else {
                  out += attr;
                }
              }
            }
          } else {
            if (!param) {
              out += cap[0];
            } else {
              attr = program._attr(param);
              if (attr == null) {
                out += cap[0];
              } else {
                state.push(param);
                out += attr;
              }
            }
          }
          continue;
        }
        if (cap = /^[\s\S]+?(?={\/?[\w\-,;!#]*})/.exec(text)) {
          text = text.substring(cap[0].length);
          out += cap[0];
          continue;
        }
        out += text;
        break;
      }
      return out;
    };
    Element.prototype._parseAttr = function(lines) {
      var dattr = this.sattr(this.style), attr = dattr, attrs = [], line, i, j, c;
      if (lines[0].attr === attr) {
        return;
      }
      for (j = 0; j < lines.length; j++) {
        line = lines[j];
        attrs[j] = attr;
        for (i = 0; i < line.length; i++) {
          if (line[i] === "\x1B") {
            if (c = /^\x1b\[[\d;]*m/.exec(line.substring(i))) {
              attr = this.screen.attrCode(c[0], attr, dattr);
              i += c[0].length - 1;
            }
          }
        }
      }
      return attrs;
    };
    Element.prototype._align = function(line, width, align) {
      if (!align)
        return line;
      var cline = line.replace(/\x1b\[[\d;]*m/g, ""), len = cline.length, s = width - len;
      if (this.shrink) {
        s = 0;
      }
      if (len === 0)
        return line;
      if (s < 0)
        return line;
      if (align === "center") {
        s = Array((s / 2 | 0) + 1).join(" ");
        return s + line + s;
      } else if (align === "right") {
        s = Array(s + 1).join(" ");
        return s + line;
      } else if (this.parseTags && ~line.indexOf("{|}")) {
        var parts = line.split("{|}");
        var cparts = cline.split("{|}");
        s = Math.max(width - cparts[0].length - cparts[1].length, 0);
        s = Array(s + 1).join(" ");
        return parts[0] + s + parts[1];
      }
      return line;
    };
    Element.prototype._wrapContent = function(content, width) {
      var tags = this.parseTags, state = this.align, wrap = this.wrap, margin = 0, rtof = [], ftor = [], out = [], no = 0, line, align, cap, total, i, part, j, lines, rest;
      lines = content.split("\n");
      if (!content) {
        out.push(content);
        out.rtof = [0];
        out.ftor = [[0]];
        out.fake = lines;
        out.real = out;
        out.mwidth = 0;
        return out;
      }
      if (this.scrollbar)
        margin++;
      if (this.type === "textarea")
        margin++;
      if (width > margin)
        width -= margin;
      main:
        for (; no < lines.length; no++) {
          line = lines[no];
          align = state;
          ftor.push([]);
          if (tags) {
            if (cap = /^{(left|center|right)}/.exec(line)) {
              line = line.substring(cap[0].length);
              align = state = cap[1] !== "left" ? cap[1] : null;
            }
            if (cap = /{\/(left|center|right)}$/.exec(line)) {
              line = line.slice(0, -cap[0].length);
              state = this.align;
            }
          }
          while (line.length > width) {
            for (i = 0, total = 0; i < line.length; i++) {
              while (line[i] === "\x1B") {
                while (line[i] && line[i++] !== "m")
                  ;
              }
              if (!line[i])
                break;
              if (++total === width) {
                i++;
                if (!wrap) {
                  rest = line.substring(i).match(/\x1b\[[^m]*m/g);
                  rest = rest ? rest.join("") : "";
                  out.push(this._align(line.substring(0, i) + rest, width, align));
                  ftor[no].push(out.length - 1);
                  rtof.push(no);
                  continue main;
                }
                if (!this.screen.fullUnicode) {
                  if (i !== line.length) {
                    j = i;
                    while (j > i - 10 && j > 0 && line[--j] !== " ")
                      ;
                    if (line[j] === " ")
                      i = j + 1;
                  }
                } else {
                  if (i !== line.length) {
                    if (unicode.isSurrogate(line, i))
                      i--;
                    for (var s = 0, n = 0; n < i; n++) {
                      if (unicode.isSurrogate(line, n))
                        s++, n++;
                    }
                    i += s;
                    j = i;
                    while (j > i - 10 && j > 0) {
                      j--;
                      if (line[j] === " " || line[j] === "" || unicode.isSurrogate(line, j - 1) && line[j + 1] !== "" || unicode.isCombining(line, j)) {
                        break;
                      }
                    }
                    if (line[j] === " " || line[j] === "" || unicode.isSurrogate(line, j - 1) && line[j + 1] !== "" || unicode.isCombining(line, j)) {
                      i = j + 1;
                    }
                  }
                }
                break;
              }
            }
            part = line.substring(0, i);
            line = line.substring(i);
            out.push(this._align(part, width, align));
            ftor[no].push(out.length - 1);
            rtof.push(no);
            if (line === "")
              continue main;
            if (/^(?:\x1b[\[\d;]*m)+$/.test(line)) {
              out[out.length - 1] += line;
              continue main;
            }
          }
          out.push(this._align(line, width, align));
          ftor[no].push(out.length - 1);
          rtof.push(no);
        }
      out.rtof = rtof;
      out.ftor = ftor;
      out.fake = lines;
      out.real = out;
      out.mwidth = out.reduce(function(current, line2) {
        line2 = line2.replace(/\x1b\[[\d;]*m/g, "");
        return line2.length > current ? line2.length : current;
      }, 0);
      return out;
    };
    Element.prototype.__defineGetter__("visible", function() {
      var el = this;
      do {
        if (el.detached)
          return false;
        if (el.hidden)
          return false;
      } while (el = el.parent);
      return true;
    });
    Element.prototype.__defineGetter__("_detached", function() {
      var el = this;
      do {
        if (el.type === "screen")
          return false;
        if (!el.parent)
          return true;
      } while (el = el.parent);
      return false;
    });
    Element.prototype.enableMouse = function() {
      this.screen._listenMouse(this);
    };
    Element.prototype.enableKeys = function() {
      this.screen._listenKeys(this);
    };
    Element.prototype.enableInput = function() {
      this.screen._listenMouse(this);
      this.screen._listenKeys(this);
    };
    Element.prototype.__defineGetter__("draggable", function() {
      return this._draggable === true;
    });
    Element.prototype.__defineSetter__("draggable", function(draggable) {
      return draggable ? this.enableDrag(draggable) : this.disableDrag();
    });
    Element.prototype.enableDrag = function(verify) {
      var self = this;
      if (this._draggable)
        return true;
      if (typeof verify !== "function") {
        verify = function() {
          return true;
        };
      }
      this.enableMouse();
      this.on("mousedown", this._dragMD = function(data) {
        if (self.screen._dragging)
          return;
        if (!verify(data))
          return;
        self.screen._dragging = self;
        self._drag = {
          x: data.x - self.aleft,
          y: data.y - self.atop
        };
        self.setFront();
      });
      this.onScreenEvent("mouse", this._dragM = function(data) {
        if (self.screen._dragging !== self)
          return;
        if (data.action !== "mousedown" && data.action !== "mousemove") {
          delete self.screen._dragging;
          delete self._drag;
          return;
        }
        if (!self.parent)
          return;
        var ox = self._drag.x, oy = self._drag.y, px = self.parent.aleft, py = self.parent.atop, x = data.x - px - ox, y = data.y - py - oy;
        if (self.position.right != null) {
          if (self.position.left != null) {
            self.width = "100%-" + (self.parent.width - self.width);
          }
          self.position.right = null;
        }
        if (self.position.bottom != null) {
          if (self.position.top != null) {
            self.height = "100%-" + (self.parent.height - self.height);
          }
          self.position.bottom = null;
        }
        self.rleft = x;
        self.rtop = y;
        self.screen.render();
      });
      return this._draggable = true;
    };
    Element.prototype.disableDrag = function() {
      if (!this._draggable)
        return false;
      delete this.screen._dragging;
      delete this._drag;
      this.removeListener("mousedown", this._dragMD);
      this.removeScreenEvent("mouse", this._dragM);
      return this._draggable = false;
    };
    Element.prototype.key = function() {
      return this.screen.program.key.apply(this, arguments);
    };
    Element.prototype.onceKey = function() {
      return this.screen.program.onceKey.apply(this, arguments);
    };
    Element.prototype.unkey = Element.prototype.removeKey = function() {
      return this.screen.program.unkey.apply(this, arguments);
    };
    Element.prototype.setIndex = function(index) {
      if (!this.parent)
        return;
      if (index < 0) {
        index = this.parent.children.length + index;
      }
      index = Math.max(index, 0);
      index = Math.min(index, this.parent.children.length - 1);
      var i = this.parent.children.indexOf(this);
      if (!~i)
        return;
      var item = this.parent.children.splice(i, 1)[0];
      this.parent.children.splice(index, 0, item);
    };
    Element.prototype.setFront = function() {
      return this.setIndex(-1);
    };
    Element.prototype.setBack = function() {
      return this.setIndex(0);
    };
    Element.prototype.clearPos = function(get, override) {
      if (this.detached)
        return;
      var lpos = this._getCoords(get);
      if (!lpos)
        return;
      this.screen.clearRegion(
        lpos.xi,
        lpos.xl,
        lpos.yi,
        lpos.yl,
        override
      );
    };
    Element.prototype.setLabel = function(options) {
      var self = this;
      var Box = require_box();
      if (typeof options === "string") {
        options = { text: options };
      }
      if (this._label) {
        this._label.setContent(options.text);
        if (options.side !== "right") {
          this._label.rleft = 2 + (this.border ? -1 : 0);
          this._label.position.right = void 0;
          if (!this.screen.autoPadding) {
            this._label.rleft = 2;
          }
        } else {
          this._label.rright = 2 + (this.border ? -1 : 0);
          this._label.position.left = void 0;
          if (!this.screen.autoPadding) {
            this._label.rright = 2;
          }
        }
        return;
      }
      this._label = new Box({
        screen: this.screen,
        parent: this,
        content: options.text,
        top: -this.itop,
        tags: this.parseTags,
        shrink: true,
        style: this.style.label
      });
      if (options.side !== "right") {
        this._label.rleft = 2 - this.ileft;
      } else {
        this._label.rright = 2 - this.iright;
      }
      this._label._isLabel = true;
      if (!this.screen.autoPadding) {
        if (options.side !== "right") {
          this._label.rleft = 2;
        } else {
          this._label.rright = 2;
        }
        this._label.rtop = 0;
      }
      var reposition = function() {
        self._label.rtop = (self.childBase || 0) - self.itop;
        if (!self.screen.autoPadding) {
          self._label.rtop = self.childBase || 0;
        }
        self.screen.render();
      };
      this.on("scroll", this._labelScroll = function() {
        reposition();
      });
      this.on("resize", this._labelResize = function() {
        nextTick(function() {
          reposition();
        });
      });
    };
    Element.prototype.removeLabel = function() {
      if (!this._label)
        return;
      this.removeListener("scroll", this._labelScroll);
      this.removeListener("resize", this._labelResize);
      this._label.detach();
      delete this._labelScroll;
      delete this._labelResize;
      delete this._label;
    };
    Element.prototype.setHover = function(options) {
      if (typeof options === "string") {
        options = { text: options };
      }
      this._hoverOptions = options;
      this.enableMouse();
      this.screen._initHover();
    };
    Element.prototype.removeHover = function() {
      delete this._hoverOptions;
      if (!this.screen._hoverText || this.screen._hoverText.detached)
        return;
      this.screen._hoverText.detach();
      this.screen.render();
    };
    Element.prototype._getPos = function() {
      var pos = this.lpos;
      assert.ok(pos);
      if (pos.aleft != null)
        return pos;
      pos.aleft = pos.xi;
      pos.atop = pos.yi;
      pos.aright = this.screen.cols - pos.xl;
      pos.abottom = this.screen.rows - pos.yl;
      pos.width = pos.xl - pos.xi;
      pos.height = pos.yl - pos.yi;
      return pos;
    };
    Element.prototype._getWidth = function(get) {
      var parent = get ? this.parent._getPos() : this.parent, width = this.position.width, left, expr;
      if (typeof width === "string") {
        if (width === "half")
          width = "50%";
        expr = width.split(/(?=\+|-)/);
        width = expr[0];
        width = +width.slice(0, -1) / 100;
        width = parent.width * width | 0;
        width += +(expr[1] || 0);
        return width;
      }
      if (width == null) {
        left = this.position.left || 0;
        if (typeof left === "string") {
          if (left === "center")
            left = "50%";
          expr = left.split(/(?=\+|-)/);
          left = expr[0];
          left = +left.slice(0, -1) / 100;
          left = parent.width * left | 0;
          left += +(expr[1] || 0);
        }
        width = parent.width - (this.position.right || 0) - left;
        if (this.screen.autoPadding) {
          if ((this.position.left != null || this.position.right == null) && this.position.left !== "center") {
            width -= this.parent.ileft;
          }
          width -= this.parent.iright;
        }
      }
      return width;
    };
    Element.prototype.__defineGetter__("width", function() {
      return this._getWidth(false);
    });
    Element.prototype._getHeight = function(get) {
      var parent = get ? this.parent._getPos() : this.parent, height = this.position.height, top, expr;
      if (typeof height === "string") {
        if (height === "half")
          height = "50%";
        expr = height.split(/(?=\+|-)/);
        height = expr[0];
        height = +height.slice(0, -1) / 100;
        height = parent.height * height | 0;
        height += +(expr[1] || 0);
        return height;
      }
      if (height == null) {
        top = this.position.top || 0;
        if (typeof top === "string") {
          if (top === "center")
            top = "50%";
          expr = top.split(/(?=\+|-)/);
          top = expr[0];
          top = +top.slice(0, -1) / 100;
          top = parent.height * top | 0;
          top += +(expr[1] || 0);
        }
        height = parent.height - (this.position.bottom || 0) - top;
        if (this.screen.autoPadding) {
          if ((this.position.top != null || this.position.bottom == null) && this.position.top !== "center") {
            height -= this.parent.itop;
          }
          height -= this.parent.ibottom;
        }
      }
      return height;
    };
    Element.prototype.__defineGetter__("height", function() {
      return this._getHeight(false);
    });
    Element.prototype._getLeft = function(get) {
      var parent = get ? this.parent._getPos() : this.parent, left = this.position.left || 0, expr;
      if (typeof left === "string") {
        if (left === "center")
          left = "50%";
        expr = left.split(/(?=\+|-)/);
        left = expr[0];
        left = +left.slice(0, -1) / 100;
        left = parent.width * left | 0;
        left += +(expr[1] || 0);
        if (this.position.left === "center") {
          left -= this._getWidth(get) / 2 | 0;
        }
      }
      if (this.position.left == null && this.position.right != null) {
        return this.screen.cols - this._getWidth(get) - this._getRight(get);
      }
      if (this.screen.autoPadding) {
        if ((this.position.left != null || this.position.right == null) && this.position.left !== "center") {
          left += this.parent.ileft;
        }
      }
      return (parent.aleft || 0) + left;
    };
    Element.prototype.__defineGetter__("aleft", function() {
      return this._getLeft(false);
    });
    Element.prototype._getRight = function(get) {
      var parent = get ? this.parent._getPos() : this.parent, right;
      if (this.position.right == null && this.position.left != null) {
        right = this.screen.cols - (this._getLeft(get) + this._getWidth(get));
        if (this.screen.autoPadding) {
          right += this.parent.iright;
        }
        return right;
      }
      right = (parent.aright || 0) + (this.position.right || 0);
      if (this.screen.autoPadding) {
        right += this.parent.iright;
      }
      return right;
    };
    Element.prototype.__defineGetter__("aright", function() {
      return this._getRight(false);
    });
    Element.prototype._getTop = function(get) {
      var parent = get ? this.parent._getPos() : this.parent, top = this.position.top || 0, expr;
      if (typeof top === "string") {
        if (top === "center")
          top = "50%";
        expr = top.split(/(?=\+|-)/);
        top = expr[0];
        top = +top.slice(0, -1) / 100;
        top = parent.height * top | 0;
        top += +(expr[1] || 0);
        if (this.position.top === "center") {
          top -= this._getHeight(get) / 2 | 0;
        }
      }
      if (this.position.top == null && this.position.bottom != null) {
        return this.screen.rows - this._getHeight(get) - this._getBottom(get);
      }
      if (this.screen.autoPadding) {
        if ((this.position.top != null || this.position.bottom == null) && this.position.top !== "center") {
          top += this.parent.itop;
        }
      }
      return (parent.atop || 0) + top;
    };
    Element.prototype.__defineGetter__("atop", function() {
      return this._getTop(false);
    });
    Element.prototype._getBottom = function(get) {
      var parent = get ? this.parent._getPos() : this.parent, bottom;
      if (this.position.bottom == null && this.position.top != null) {
        bottom = this.screen.rows - (this._getTop(get) + this._getHeight(get));
        if (this.screen.autoPadding) {
          bottom += this.parent.ibottom;
        }
        return bottom;
      }
      bottom = (parent.abottom || 0) + (this.position.bottom || 0);
      if (this.screen.autoPadding) {
        bottom += this.parent.ibottom;
      }
      return bottom;
    };
    Element.prototype.__defineGetter__("abottom", function() {
      return this._getBottom(false);
    });
    Element.prototype.__defineGetter__("rleft", function() {
      return this.aleft - this.parent.aleft;
    });
    Element.prototype.__defineGetter__("rright", function() {
      return this.aright - this.parent.aright;
    });
    Element.prototype.__defineGetter__("rtop", function() {
      return this.atop - this.parent.atop;
    });
    Element.prototype.__defineGetter__("rbottom", function() {
      return this.abottom - this.parent.abottom;
    });
    Element.prototype.__defineSetter__("width", function(val) {
      if (this.position.width === val)
        return;
      if (/^\d+$/.test(val))
        val = +val;
      this.emit("resize");
      this.clearPos();
      return this.position.width = val;
    });
    Element.prototype.__defineSetter__("height", function(val) {
      if (this.position.height === val)
        return;
      if (/^\d+$/.test(val))
        val = +val;
      this.emit("resize");
      this.clearPos();
      return this.position.height = val;
    });
    Element.prototype.__defineSetter__("aleft", function(val) {
      var expr;
      if (typeof val === "string") {
        if (val === "center") {
          val = this.screen.width / 2 | 0;
          val -= this.width / 2 | 0;
        } else {
          expr = val.split(/(?=\+|-)/);
          val = expr[0];
          val = +val.slice(0, -1) / 100;
          val = this.screen.width * val | 0;
          val += +(expr[1] || 0);
        }
      }
      val -= this.parent.aleft;
      if (this.position.left === val)
        return;
      this.emit("move");
      this.clearPos();
      return this.position.left = val;
    });
    Element.prototype.__defineSetter__("aright", function(val) {
      val -= this.parent.aright;
      if (this.position.right === val)
        return;
      this.emit("move");
      this.clearPos();
      return this.position.right = val;
    });
    Element.prototype.__defineSetter__("atop", function(val) {
      var expr;
      if (typeof val === "string") {
        if (val === "center") {
          val = this.screen.height / 2 | 0;
          val -= this.height / 2 | 0;
        } else {
          expr = val.split(/(?=\+|-)/);
          val = expr[0];
          val = +val.slice(0, -1) / 100;
          val = this.screen.height * val | 0;
          val += +(expr[1] || 0);
        }
      }
      val -= this.parent.atop;
      if (this.position.top === val)
        return;
      this.emit("move");
      this.clearPos();
      return this.position.top = val;
    });
    Element.prototype.__defineSetter__("abottom", function(val) {
      val -= this.parent.abottom;
      if (this.position.bottom === val)
        return;
      this.emit("move");
      this.clearPos();
      return this.position.bottom = val;
    });
    Element.prototype.__defineSetter__("rleft", function(val) {
      if (this.position.left === val)
        return;
      if (/^\d+$/.test(val))
        val = +val;
      this.emit("move");
      this.clearPos();
      return this.position.left = val;
    });
    Element.prototype.__defineSetter__("rright", function(val) {
      if (this.position.right === val)
        return;
      this.emit("move");
      this.clearPos();
      return this.position.right = val;
    });
    Element.prototype.__defineSetter__("rtop", function(val) {
      if (this.position.top === val)
        return;
      if (/^\d+$/.test(val))
        val = +val;
      this.emit("move");
      this.clearPos();
      return this.position.top = val;
    });
    Element.prototype.__defineSetter__("rbottom", function(val) {
      if (this.position.bottom === val)
        return;
      this.emit("move");
      this.clearPos();
      return this.position.bottom = val;
    });
    Element.prototype.__defineGetter__("ileft", function() {
      return (this.border ? 1 : 0) + this.padding.left;
    });
    Element.prototype.__defineGetter__("itop", function() {
      return (this.border ? 1 : 0) + this.padding.top;
    });
    Element.prototype.__defineGetter__("iright", function() {
      return (this.border ? 1 : 0) + this.padding.right;
    });
    Element.prototype.__defineGetter__("ibottom", function() {
      return (this.border ? 1 : 0) + this.padding.bottom;
    });
    Element.prototype.__defineGetter__("iwidth", function() {
      return (this.border ? 2 : 0) + this.padding.left + this.padding.right;
    });
    Element.prototype.__defineGetter__("iheight", function() {
      return (this.border ? 2 : 0) + this.padding.top + this.padding.bottom;
    });
    Element.prototype.__defineGetter__("tpadding", function() {
      return this.padding.left + this.padding.top + this.padding.right + this.padding.bottom;
    });
    Element.prototype.__defineGetter__("left", function() {
      return this.rleft;
    });
    Element.prototype.__defineGetter__("right", function() {
      return this.rright;
    });
    Element.prototype.__defineGetter__("top", function() {
      return this.rtop;
    });
    Element.prototype.__defineGetter__("bottom", function() {
      return this.rbottom;
    });
    Element.prototype.__defineSetter__("left", function(val) {
      return this.rleft = val;
    });
    Element.prototype.__defineSetter__("right", function(val) {
      return this.rright = val;
    });
    Element.prototype.__defineSetter__("top", function(val) {
      return this.rtop = val;
    });
    Element.prototype.__defineSetter__("bottom", function(val) {
      return this.rbottom = val;
    });
    Element.prototype._getShrinkBox = function(xi, xl, yi, yl, get) {
      if (!this.children.length) {
        return { xi, xl: xi + 1, yi, yl: yi + 1 };
      }
      var i, el, ret, mxi = xi, mxl = xi + 1, myi = yi, myl = yi + 1;
      var _lpos;
      if (get) {
        _lpos = this.lpos;
        this.lpos = { xi, xl, yi, yl };
      }
      for (i = 0; i < this.children.length; i++) {
        el = this.children[i];
        ret = el._getCoords(get);
        if (!ret)
          continue;
        if (el.position.left == null && el.position.right != null) {
          ret.xl = xi + (ret.xl - ret.xi);
          ret.xi = xi;
          if (this.screen.autoPadding) {
            ret.xl += this.ileft;
            ret.xi += this.ileft;
          }
        }
        if (el.position.top == null && el.position.bottom != null) {
          ret.yl = yi + (ret.yl - ret.yi);
          ret.yi = yi;
          if (this.screen.autoPadding) {
            ret.yl += this.itop;
            ret.yi += this.itop;
          }
        }
        if (ret.xi < mxi)
          mxi = ret.xi;
        if (ret.xl > mxl)
          mxl = ret.xl;
        if (ret.yi < myi)
          myi = ret.yi;
        if (ret.yl > myl)
          myl = ret.yl;
      }
      if (get) {
        this.lpos = _lpos;
      }
      if (this.position.width == null && (this.position.left == null || this.position.right == null)) {
        if (this.position.left == null && this.position.right != null) {
          xi = xl - (mxl - mxi);
          if (!this.screen.autoPadding) {
            xi -= this.padding.left + this.padding.right;
          } else {
            xi -= this.ileft;
          }
        } else {
          xl = mxl;
          if (!this.screen.autoPadding) {
            xl += this.padding.left + this.padding.right;
            if (this.type === "list-table") {
              xl -= this.padding.left + this.padding.right;
              xl += this.iright;
            }
          } else {
            xl += this.iright;
          }
        }
      }
      if (this.position.height == null && (this.position.top == null || this.position.bottom == null) && (!this.scrollable || this._isList)) {
        if (this._isList) {
          myi = 0 - this.itop;
          myl = this.items.length + this.ibottom;
        }
        if (this.position.top == null && this.position.bottom != null) {
          yi = yl - (myl - myi);
          if (!this.screen.autoPadding) {
            yi -= this.padding.top + this.padding.bottom;
          } else {
            yi -= this.itop;
          }
        } else {
          yl = myl;
          if (!this.screen.autoPadding) {
            yl += this.padding.top + this.padding.bottom;
          } else {
            yl += this.ibottom;
          }
        }
      }
      return { xi, xl, yi, yl };
    };
    Element.prototype._getShrinkContent = function(xi, xl, yi, yl) {
      var h = this._clines.length, w = this._clines.mwidth || 1;
      if (this.position.width == null && (this.position.left == null || this.position.right == null)) {
        if (this.position.left == null && this.position.right != null) {
          xi = xl - w - this.iwidth;
        } else {
          xl = xi + w + this.iwidth;
        }
      }
      if (this.position.height == null && (this.position.top == null || this.position.bottom == null) && (!this.scrollable || this._isList)) {
        if (this.position.top == null && this.position.bottom != null) {
          yi = yl - h - this.iheight;
        } else {
          yl = yi + h + this.iheight;
        }
      }
      return { xi, xl, yi, yl };
    };
    Element.prototype._getShrink = function(xi, xl, yi, yl, get) {
      var shrinkBox = this._getShrinkBox(xi, xl, yi, yl, get), shrinkContent = this._getShrinkContent(xi, xl, yi, yl, get), xll = xl, yll = yl;
      if (shrinkBox.xl - shrinkBox.xi > shrinkContent.xl - shrinkContent.xi) {
        xi = shrinkBox.xi;
        xl = shrinkBox.xl;
      } else {
        xi = shrinkContent.xi;
        xl = shrinkContent.xl;
      }
      if (shrinkBox.yl - shrinkBox.yi > shrinkContent.yl - shrinkContent.yi) {
        yi = shrinkBox.yi;
        yl = shrinkBox.yl;
      } else {
        yi = shrinkContent.yi;
        yl = shrinkContent.yl;
      }
      if (xl < xll && this.position.left === "center") {
        xll = (xll - xl) / 2 | 0;
        xi += xll;
        xl += xll;
      }
      if (yl < yll && this.position.top === "center") {
        yll = (yll - yl) / 2 | 0;
        yi += yll;
        yl += yll;
      }
      return { xi, xl, yi, yl };
    };
    Element.prototype._getCoords = function(get, noscroll) {
      if (this.hidden)
        return;
      var xi = this._getLeft(get), xl = xi + this._getWidth(get), yi = this._getTop(get), yl = yi + this._getHeight(get), base = this.childBase || 0, el = this, fixed = this.fixed, coords, v, noleft, noright, notop, nobot, ppos, b;
      if (this.shrink) {
        coords = this._getShrink(xi, xl, yi, yl, get);
        xi = coords.xi, xl = coords.xl;
        yi = coords.yi, yl = coords.yl;
      }
      while (el = el.parent) {
        if (el.scrollable) {
          if (fixed) {
            fixed = false;
            continue;
          }
          break;
        }
      }
      var thisparent = el;
      if (el && !noscroll) {
        ppos = thisparent.lpos;
        if (!ppos)
          return;
        yi -= ppos.base;
        yl -= ppos.base;
        b = thisparent.border ? 1 : 0;
        if (this._isLabel) {
          b = 0;
        }
        if (yi < ppos.yi + b) {
          if (yl - 1 < ppos.yi + b) {
            return;
          } else {
            notop = true;
            v = ppos.yi - yi;
            if (this.border)
              v--;
            if (thisparent.border)
              v++;
            base += v;
            yi += v;
          }
        } else if (yl > ppos.yl - b) {
          if (yi > ppos.yl - 1 - b) {
            return;
          } else {
            nobot = true;
            v = yl - ppos.yl;
            if (this.border)
              v--;
            if (thisparent.border)
              v++;
            yl -= v;
          }
        }
        if (yi >= yl)
          return;
        if (xi < el.lpos.xi) {
          xi = el.lpos.xi;
          noleft = true;
          if (this.border)
            xi--;
          if (thisparent.border)
            xi++;
        }
        if (xl > el.lpos.xl) {
          xl = el.lpos.xl;
          noright = true;
          if (this.border)
            xl++;
          if (thisparent.border)
            xl--;
        }
        if (xi >= xl)
          return;
      }
      if (this.noOverflow && this.parent.lpos) {
        if (xi < this.parent.lpos.xi + this.parent.ileft) {
          xi = this.parent.lpos.xi + this.parent.ileft;
        }
        if (xl > this.parent.lpos.xl - this.parent.iright) {
          xl = this.parent.lpos.xl - this.parent.iright;
        }
        if (yi < this.parent.lpos.yi + this.parent.itop) {
          yi = this.parent.lpos.yi + this.parent.itop;
        }
        if (yl > this.parent.lpos.yl - this.parent.ibottom) {
          yl = this.parent.lpos.yl - this.parent.ibottom;
        }
      }
      return {
        xi,
        xl,
        yi,
        yl,
        base,
        noleft,
        noright,
        notop,
        nobot,
        renders: this.screen.renders
      };
    };
    Element.prototype.render = function() {
      this._emit("prerender");
      this.parseContent();
      var coords = this._getCoords(true);
      if (!coords) {
        delete this.lpos;
        return;
      }
      if (coords.xl - coords.xi <= 0) {
        coords.xl = Math.max(coords.xl, coords.xi);
        return;
      }
      if (coords.yl - coords.yi <= 0) {
        coords.yl = Math.max(coords.yl, coords.yi);
        return;
      }
      var lines = this.screen.lines, xi = coords.xi, xl = coords.xl, yi = coords.yi, yl = coords.yl, x, y, cell, attr, ch, content = this._pcontent, ci = this._clines.ci[coords.base], battr, dattr, c, visible, i, bch = this.ch;
      if (coords.base >= this._clines.ci.length) {
        ci = this._pcontent.length;
      }
      this.lpos = coords;
      if (this.border && this.border.type === "line") {
        this.screen._borderStops[coords.yi] = true;
        this.screen._borderStops[coords.yl - 1] = true;
      }
      dattr = this.sattr(this.style);
      attr = dattr;
      if (ci > 0) {
        attr = this._clines.attr[Math.min(coords.base, this._clines.length - 1)];
      }
      if (this.border)
        xi++, xl--, yi++, yl--;
      if (this.tpadding || this.valign && this.valign !== "top") {
        if (this.style.transparent) {
          for (y = Math.max(yi, 0); y < yl; y++) {
            if (!lines[y])
              break;
            for (x = Math.max(xi, 0); x < xl; x++) {
              if (!lines[y][x])
                break;
              lines[y][x][0] = colors.blend(attr, lines[y][x][0]);
              lines[y].dirty = true;
            }
          }
        } else {
          this.screen.fillRegion(dattr, bch, xi, xl, yi, yl);
        }
      }
      if (this.tpadding) {
        xi += this.padding.left, xl -= this.padding.right;
        yi += this.padding.top, yl -= this.padding.bottom;
      }
      if (this.valign === "middle" || this.valign === "bottom") {
        visible = yl - yi;
        if (this._clines.length < visible) {
          if (this.valign === "middle") {
            visible = visible / 2 | 0;
            visible -= this._clines.length / 2 | 0;
          } else if (this.valign === "bottom") {
            visible -= this._clines.length;
          }
          ci -= visible * (xl - xi);
        }
      }
      for (y = yi; y < yl; y++) {
        if (!lines[y]) {
          if (y >= this.screen.height || yl < this.ibottom) {
            break;
          } else {
            continue;
          }
        }
        for (x = xi; x < xl; x++) {
          cell = lines[y][x];
          if (!cell) {
            if (x >= this.screen.width || xl < this.iright) {
              break;
            } else {
              continue;
            }
          }
          ch = content[ci++] || bch;
          while (ch === "\x1B") {
            if (c = /^\x1b\[[\d;]*m/.exec(content.substring(ci - 1))) {
              ci += c[0].length - 1;
              attr = this.screen.attrCode(c[0], attr, dattr);
              if (this.parent._isList && this.parent.interactive && this.parent.items[this.parent.selected] === this && this.parent.options.invertSelected !== false) {
                attr = attr & ~(511 << 9) | dattr & 511 << 9;
              }
              ch = content[ci] || bch;
              ci++;
            } else {
              break;
            }
          }
          if (ch === "	")
            ch = bch;
          if (ch === "\n") {
            if (x === xi && y !== yi && content[ci - 2] !== "\n") {
              x--;
              continue;
            }
            ch = bch;
            for (; x < xl; x++) {
              cell = lines[y][x];
              if (!cell)
                break;
              if (this.style.transparent) {
                lines[y][x][0] = colors.blend(attr, lines[y][x][0]);
                if (content[ci])
                  lines[y][x][1] = ch;
                lines[y].dirty = true;
              } else {
                if (attr !== cell[0] || ch !== cell[1]) {
                  lines[y][x][0] = attr;
                  lines[y][x][1] = ch;
                  lines[y].dirty = true;
                }
              }
            }
            continue;
          }
          if (this.screen.fullUnicode && content[ci - 1]) {
            var point = unicode.codePointAt(content, ci - 1);
            if (unicode.combining[point]) {
              if (point > 65535) {
                ch = content[ci - 1] + content[ci];
                ci++;
              }
              if (x - 1 >= xi) {
                lines[y][x - 1][1] += ch;
              } else if (y - 1 >= yi) {
                lines[y - 1][xl - 1][1] += ch;
              }
              x--;
              continue;
            }
            if (point > 65535) {
              ch = content[ci - 1] + content[ci];
              ci++;
            }
          }
          if (this._noFill)
            continue;
          if (this.style.transparent) {
            lines[y][x][0] = colors.blend(attr, lines[y][x][0]);
            if (content[ci])
              lines[y][x][1] = ch;
            lines[y].dirty = true;
          } else {
            if (attr !== cell[0] || ch !== cell[1]) {
              lines[y][x][0] = attr;
              lines[y][x][1] = ch;
              lines[y].dirty = true;
            }
          }
        }
      }
      if (this.scrollbar) {
        i = Math.max(this._clines.length, this._scrollBottom());
      }
      if (coords.notop || coords.nobot)
        i = -Infinity;
      if (this.scrollbar && yl - yi < i) {
        x = xl - 1;
        if (this.scrollbar.ignoreBorder && this.border)
          x++;
        if (this.alwaysScroll) {
          y = this.childBase / (i - (yl - yi));
        } else {
          y = (this.childBase + this.childOffset) / (i - 1);
        }
        y = yi + ((yl - yi) * y | 0);
        if (y >= yl)
          y = yl - 1;
        cell = lines[y] && lines[y][x];
        if (cell) {
          if (this.track) {
            ch = this.track.ch || " ";
            attr = this.sattr(
              this.style.track,
              this.style.track.fg || this.style.fg,
              this.style.track.bg || this.style.bg
            );
            this.screen.fillRegion(attr, ch, x, x + 1, yi, yl);
          }
          ch = this.scrollbar.ch || " ";
          attr = this.sattr(
            this.style.scrollbar,
            this.style.scrollbar.fg || this.style.fg,
            this.style.scrollbar.bg || this.style.bg
          );
          if (attr !== cell[0] || ch !== cell[1]) {
            lines[y][x][0] = attr;
            lines[y][x][1] = ch;
            lines[y].dirty = true;
          }
        }
      }
      if (this.border)
        xi--, xl++, yi--, yl++;
      if (this.tpadding) {
        xi -= this.padding.left, xl += this.padding.right;
        yi -= this.padding.top, yl += this.padding.bottom;
      }
      if (this.border) {
        battr = this.sattr(this.style.border);
        y = yi;
        if (coords.notop)
          y = -1;
        for (x = xi; x < xl; x++) {
          if (!lines[y])
            break;
          if (coords.noleft && x === xi)
            continue;
          if (coords.noright && x === xl - 1)
            continue;
          cell = lines[y][x];
          if (!cell)
            continue;
          if (this.border.type === "line") {
            if (x === xi) {
              ch = "\u250C";
              if (!this.border.left) {
                if (this.border.top) {
                  ch = "\u2500";
                } else {
                  continue;
                }
              } else {
                if (!this.border.top) {
                  ch = "\u2502";
                }
              }
            } else if (x === xl - 1) {
              ch = "\u2510";
              if (!this.border.right) {
                if (this.border.top) {
                  ch = "\u2500";
                } else {
                  continue;
                }
              } else {
                if (!this.border.top) {
                  ch = "\u2502";
                }
              }
            } else {
              ch = "\u2500";
            }
          } else if (this.border.type === "bg") {
            ch = this.border.ch;
          }
          if (!this.border.top && x !== xi && x !== xl - 1) {
            ch = " ";
            if (dattr !== cell[0] || ch !== cell[1]) {
              lines[y][x][0] = dattr;
              lines[y][x][1] = ch;
              lines[y].dirty = true;
              continue;
            }
          }
          if (battr !== cell[0] || ch !== cell[1]) {
            lines[y][x][0] = battr;
            lines[y][x][1] = ch;
            lines[y].dirty = true;
          }
        }
        y = yi + 1;
        for (; y < yl - 1; y++) {
          if (!lines[y])
            continue;
          cell = lines[y][xi];
          if (cell) {
            if (this.border.left) {
              if (this.border.type === "line") {
                ch = "\u2502";
              } else if (this.border.type === "bg") {
                ch = this.border.ch;
              }
              if (!coords.noleft) {
                if (battr !== cell[0] || ch !== cell[1]) {
                  lines[y][xi][0] = battr;
                  lines[y][xi][1] = ch;
                  lines[y].dirty = true;
                }
              }
            } else {
              ch = " ";
              if (dattr !== cell[0] || ch !== cell[1]) {
                lines[y][xi][0] = dattr;
                lines[y][xi][1] = ch;
                lines[y].dirty = true;
              }
            }
          }
          cell = lines[y][xl - 1];
          if (cell) {
            if (this.border.right) {
              if (this.border.type === "line") {
                ch = "\u2502";
              } else if (this.border.type === "bg") {
                ch = this.border.ch;
              }
              if (!coords.noright) {
                if (battr !== cell[0] || ch !== cell[1]) {
                  lines[y][xl - 1][0] = battr;
                  lines[y][xl - 1][1] = ch;
                  lines[y].dirty = true;
                }
              }
            } else {
              ch = " ";
              if (dattr !== cell[0] || ch !== cell[1]) {
                lines[y][xl - 1][0] = dattr;
                lines[y][xl - 1][1] = ch;
                lines[y].dirty = true;
              }
            }
          }
        }
        y = yl - 1;
        if (coords.nobot)
          y = -1;
        for (x = xi; x < xl; x++) {
          if (!lines[y])
            break;
          if (coords.noleft && x === xi)
            continue;
          if (coords.noright && x === xl - 1)
            continue;
          cell = lines[y][x];
          if (!cell)
            continue;
          if (this.border.type === "line") {
            if (x === xi) {
              ch = "\u2514";
              if (!this.border.left) {
                if (this.border.bottom) {
                  ch = "\u2500";
                } else {
                  continue;
                }
              } else {
                if (!this.border.bottom) {
                  ch = "\u2502";
                }
              }
            } else if (x === xl - 1) {
              ch = "\u2518";
              if (!this.border.right) {
                if (this.border.bottom) {
                  ch = "\u2500";
                } else {
                  continue;
                }
              } else {
                if (!this.border.bottom) {
                  ch = "\u2502";
                }
              }
            } else {
              ch = "\u2500";
            }
          } else if (this.border.type === "bg") {
            ch = this.border.ch;
          }
          if (!this.border.bottom && x !== xi && x !== xl - 1) {
            ch = " ";
            if (dattr !== cell[0] || ch !== cell[1]) {
              lines[y][x][0] = dattr;
              lines[y][x][1] = ch;
              lines[y].dirty = true;
            }
            continue;
          }
          if (battr !== cell[0] || ch !== cell[1]) {
            lines[y][x][0] = battr;
            lines[y][x][1] = ch;
            lines[y].dirty = true;
          }
        }
      }
      if (this.shadow) {
        y = Math.max(yi + 1, 0);
        for (; y < yl + 1; y++) {
          if (!lines[y])
            break;
          x = xl;
          for (; x < xl + 2; x++) {
            if (!lines[y][x])
              break;
            lines[y][x][0] = colors.blend(lines[y][x][0]);
            lines[y].dirty = true;
          }
        }
        y = yl;
        for (; y < yl + 1; y++) {
          if (!lines[y])
            break;
          for (x = Math.max(xi + 1, 0); x < xl; x++) {
            if (!lines[y][x])
              break;
            lines[y][x][0] = colors.blend(lines[y][x][0]);
            lines[y].dirty = true;
          }
        }
      }
      this.children.forEach(function(el) {
        if (el.screen._ci !== -1) {
          el.index = el.screen._ci++;
        }
        el.render();
      });
      this._emit("render", [coords]);
      return coords;
    };
    Element.prototype._render = Element.prototype.render;
    Element.prototype.insertLine = function(i, line) {
      if (typeof line === "string")
        line = line.split("\n");
      if (i !== i || i == null) {
        i = this._clines.ftor.length;
      }
      i = Math.max(i, 0);
      while (this._clines.fake.length < i) {
        this._clines.fake.push("");
        this._clines.ftor.push([this._clines.push("") - 1]);
        this._clines.rtof(this._clines.fake.length - 1);
      }
      var start = this._clines.length, diff, real;
      if (i >= this._clines.ftor.length) {
        real = this._clines.ftor[this._clines.ftor.length - 1];
        real = real[real.length - 1] + 1;
      } else {
        real = this._clines.ftor[i][0];
      }
      for (var j = 0; j < line.length; j++) {
        this._clines.fake.splice(i + j, 0, line[j]);
      }
      this.setContent(this._clines.fake.join("\n"), true);
      diff = this._clines.length - start;
      if (diff > 0) {
        var pos = this._getCoords();
        if (!pos)
          return;
        var height = pos.yl - pos.yi - this.iheight, base = this.childBase || 0, visible = real >= base && real - base < height;
        if (pos && visible && this.screen.cleanSides(this)) {
          this.screen.insertLine(
            diff,
            pos.yi + this.itop + real - base,
            pos.yi,
            pos.yl - this.ibottom - 1
          );
        }
      }
    };
    Element.prototype.deleteLine = function(i, n) {
      n = n || 1;
      if (i !== i || i == null) {
        i = this._clines.ftor.length - 1;
      }
      i = Math.max(i, 0);
      i = Math.min(i, this._clines.ftor.length - 1);
      var start = this._clines.length, diff, real = this._clines.ftor[i][0];
      while (n--) {
        this._clines.fake.splice(i, 1);
      }
      this.setContent(this._clines.fake.join("\n"), true);
      diff = start - this._clines.length;
      var height = 0;
      if (diff > 0) {
        var pos = this._getCoords();
        if (!pos)
          return;
        height = pos.yl - pos.yi - this.iheight;
        var base = this.childBase || 0, visible = real >= base && real - base < height;
        if (pos && visible && this.screen.cleanSides(this)) {
          this.screen.deleteLine(
            diff,
            pos.yi + this.itop + real - base,
            pos.yi,
            pos.yl - this.ibottom - 1
          );
        }
      }
      if (this._clines.length < height) {
        this.clearPos();
      }
    };
    Element.prototype.insertTop = function(line) {
      var fake = this._clines.rtof[this.childBase || 0];
      return this.insertLine(fake, line);
    };
    Element.prototype.insertBottom = function(line) {
      var h = (this.childBase || 0) + this.height - this.iheight, i = Math.min(h, this._clines.length), fake = this._clines.rtof[i - 1] + 1;
      return this.insertLine(fake, line);
    };
    Element.prototype.deleteTop = function(n) {
      var fake = this._clines.rtof[this.childBase || 0];
      return this.deleteLine(fake, n);
    };
    Element.prototype.deleteBottom = function(n) {
      var h = (this.childBase || 0) + this.height - 1 - this.iheight, i = Math.min(h, this._clines.length - 1), fake = this._clines.rtof[i];
      n = n || 1;
      return this.deleteLine(fake - (n - 1), n);
    };
    Element.prototype.setLine = function(i, line) {
      i = Math.max(i, 0);
      while (this._clines.fake.length < i) {
        this._clines.fake.push("");
      }
      this._clines.fake[i] = line;
      return this.setContent(this._clines.fake.join("\n"), true);
    };
    Element.prototype.setBaseLine = function(i, line) {
      var fake = this._clines.rtof[this.childBase || 0];
      return this.setLine(fake + i, line);
    };
    Element.prototype.getLine = function(i) {
      i = Math.max(i, 0);
      i = Math.min(i, this._clines.fake.length - 1);
      return this._clines.fake[i];
    };
    Element.prototype.getBaseLine = function(i) {
      var fake = this._clines.rtof[this.childBase || 0];
      return this.getLine(fake + i);
    };
    Element.prototype.clearLine = function(i) {
      i = Math.min(i, this._clines.fake.length - 1);
      return this.setLine(i, "");
    };
    Element.prototype.clearBaseLine = function(i) {
      var fake = this._clines.rtof[this.childBase || 0];
      return this.clearLine(fake + i);
    };
    Element.prototype.unshiftLine = function(line) {
      return this.insertLine(0, line);
    };
    Element.prototype.shiftLine = function(n) {
      return this.deleteLine(0, n);
    };
    Element.prototype.pushLine = function(line) {
      if (!this.content)
        return this.setLine(0, line);
      return this.insertLine(this._clines.fake.length, line);
    };
    Element.prototype.popLine = function(n) {
      return this.deleteLine(this._clines.fake.length - 1, n);
    };
    Element.prototype.getLines = function() {
      return this._clines.fake.slice();
    };
    Element.prototype.getScreenLines = function() {
      return this._clines.slice();
    };
    Element.prototype.strWidth = function(text) {
      text = this.parseTags ? helpers.stripTags(text) : text;
      return this.screen.fullUnicode ? unicode.strWidth(text) : helpers.dropUnicode(text).length;
    };
    Element.prototype.screenshot = function(xi, xl, yi, yl) {
      xi = this.lpos.xi + this.ileft + (xi || 0);
      if (xl != null) {
        xl = this.lpos.xi + this.ileft + (xl || 0);
      } else {
        xl = this.lpos.xl - this.iright;
      }
      yi = this.lpos.yi + this.itop + (yi || 0);
      if (yl != null) {
        yl = this.lpos.yi + this.itop + (yl || 0);
      } else {
        yl = this.lpos.yl - this.ibottom;
      }
      return this.screen.screenshot(xi, xl, yi, yl);
    };
    module2.exports = Element;
  }
});

// node_modules/blessed/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/blessed/lib/helpers.js"(exports) {
    var fs = require("fs");
    var unicode = require_unicode();
    var helpers = exports;
    helpers.merge = function(a, b) {
      Object.keys(b).forEach(function(key) {
        a[key] = b[key];
      });
      return a;
    };
    helpers.asort = function(obj) {
      return obj.sort(function(a, b) {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        if (a[0] === "." && b[0] === ".") {
          a = a[1];
          b = b[1];
        } else {
          a = a[0];
          b = b[0];
        }
        return a > b ? 1 : a < b ? -1 : 0;
      });
    };
    helpers.hsort = function(obj) {
      return obj.sort(function(a, b) {
        return b.index - a.index;
      });
    };
    helpers.findFile = function(start, target) {
      return function read(dir) {
        var files, file, stat, out;
        if (dir === "/dev" || dir === "/sys" || dir === "/proc" || dir === "/net") {
          return null;
        }
        try {
          files = fs.readdirSync(dir);
        } catch (e) {
          files = [];
        }
        for (var i = 0; i < files.length; i++) {
          file = files[i];
          if (file === target) {
            return (dir === "/" ? "" : dir) + "/" + file;
          }
          try {
            stat = fs.lstatSync((dir === "/" ? "" : dir) + "/" + file);
          } catch (e) {
            stat = null;
          }
          if (stat && stat.isDirectory() && !stat.isSymbolicLink()) {
            out = read((dir === "/" ? "" : dir) + "/" + file);
            if (out)
              return out;
          }
        }
        return null;
      }(start);
    };
    helpers.escape = function(text) {
      return text.replace(/[{}]/g, function(ch) {
        return ch === "{" ? "{open}" : "{close}";
      });
    };
    helpers.parseTags = function(text, screen) {
      return helpers.Element.prototype._parseTags.call(
        { parseTags: true, screen: screen || helpers.Screen.global },
        text
      );
    };
    helpers.generateTags = function(style, text) {
      var open = "", close = "";
      Object.keys(style || {}).forEach(function(key) {
        var val = style[key];
        if (typeof val === "string") {
          val = val.replace(/^light(?!-)/, "light-");
          val = val.replace(/^bright(?!-)/, "bright-");
          open = "{" + val + "-" + key + "}" + open;
          close += "{/" + val + "-" + key + "}";
        } else {
          if (val === true) {
            open = "{" + key + "}" + open;
            close += "{/" + key + "}";
          }
        }
      });
      if (text != null) {
        return open + text + close;
      }
      return {
        open,
        close
      };
    };
    helpers.attrToBinary = function(style, element) {
      return helpers.Element.prototype.sattr.call(element || {}, style);
    };
    helpers.stripTags = function(text) {
      if (!text)
        return "";
      return text.replace(/{(\/?)([\w\-,;!#]*)}/g, "").replace(/\x1b\[[\d;]*m/g, "");
    };
    helpers.cleanTags = function(text) {
      return helpers.stripTags(text).trim();
    };
    helpers.dropUnicode = function(text) {
      if (!text)
        return "";
      return text.replace(unicode.chars.all, "??").replace(unicode.chars.combining, "").replace(unicode.chars.surrogate, "?");
    };
    helpers.__defineGetter__("Screen", function() {
      if (!helpers._screen) {
        helpers._screen = require_screen();
      }
      return helpers._screen;
    });
    helpers.__defineGetter__("Element", function() {
      if (!helpers._element) {
        helpers._element = require_element();
      }
      return helpers._element;
    });
  }
});

// node_modules/blessed/lib/widgets/scrollabletext.js
var require_scrollabletext = __commonJS({
  "node_modules/blessed/lib/widgets/scrollabletext.js"(exports, module2) {
    var Node = require_node();
    var ScrollableBox = require_scrollablebox();
    function ScrollableText(options) {
      if (!(this instanceof Node)) {
        return new ScrollableText(options);
      }
      options = options || {};
      options.alwaysScroll = true;
      ScrollableBox.call(this, options);
    }
    ScrollableText.prototype.__proto__ = ScrollableBox.prototype;
    ScrollableText.prototype.type = "scrollable-text";
    module2.exports = ScrollableText;
  }
});

// node_modules/blessed/lib/widgets/log.js
var require_log = __commonJS({
  "node_modules/blessed/lib/widgets/log.js"(exports, module2) {
    var util = require("util");
    var nextTick = global.setImmediate || process.nextTick.bind(process);
    var Node = require_node();
    var ScrollableText = require_scrollabletext();
    function Log(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Log(options);
      }
      options = options || {};
      ScrollableText.call(this, options);
      this.scrollback = options.scrollback != null ? options.scrollback : Infinity;
      this.scrollOnInput = options.scrollOnInput;
      this.on("set content", function() {
        if (!self._userScrolled || self.scrollOnInput) {
          nextTick(function() {
            self.setScrollPerc(100);
            self._userScrolled = false;
            self.screen.render();
          });
        }
      });
    }
    Log.prototype.__proto__ = ScrollableText.prototype;
    Log.prototype.type = "log";
    Log.prototype.log = Log.prototype.add = function() {
      var args = Array.prototype.slice.call(arguments);
      if (typeof args[0] === "object") {
        args[0] = util.inspect(args[0], true, 20, true);
      }
      var text = util.format.apply(util, args);
      this.emit("log", text);
      var ret = this.pushLine(text);
      if (this._clines.fake.length > this.scrollback) {
        this.shiftLine(0, this.scrollback / 3 | 0);
      }
      return ret;
    };
    Log.prototype._scroll = Log.prototype.scroll;
    Log.prototype.scroll = function(offset, always) {
      if (offset === 0)
        return this._scroll(offset, always);
      this._userScrolled = true;
      var ret = this._scroll(offset, always);
      if (this.getScrollPerc() === 100) {
        this._userScrolled = false;
      }
      return ret;
    };
    module2.exports = Log;
  }
});

// node_modules/blessed/lib/widgets/screen.js
var require_screen = __commonJS({
  "node_modules/blessed/lib/widgets/screen.js"(exports, module2) {
    var path = require("path");
    var fs = require("fs");
    var cp = require("child_process");
    var colors = require_colors();
    var program = require_program();
    var unicode = require_unicode();
    var nextTick = global.setImmediate || process.nextTick.bind(process);
    var helpers = require_helpers();
    var Node = require_node();
    var Log = require_log();
    var Element = require_element();
    var Box = require_box();
    function Screen(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Screen(options);
      }
      Screen.bind(this);
      options = options || {};
      if (options.rsety && options.listen) {
        options = { program: options };
      }
      this.program = options.program;
      if (!this.program) {
        this.program = program({
          input: options.input,
          output: options.output,
          log: options.log,
          debug: options.debug,
          dump: options.dump,
          terminal: options.terminal || options.term,
          resizeTimeout: options.resizeTimeout,
          forceUnicode: options.forceUnicode,
          tput: true,
          buffer: true,
          zero: true
        });
      } else {
        this.program.setupTput();
        this.program.useBuffer = true;
        this.program.zero = true;
        this.program.options.resizeTimeout = options.resizeTimeout;
        if (options.forceUnicode != null) {
          this.program.tput.features.unicode = options.forceUnicode;
          this.program.tput.unicode = options.forceUnicode;
        }
      }
      this.tput = this.program.tput;
      Node.call(this, options);
      this.autoPadding = options.autoPadding !== false;
      this.tabc = Array((options.tabSize || 4) + 1).join(" ");
      this.dockBorders = options.dockBorders;
      this.ignoreLocked = options.ignoreLocked || [];
      this._unicode = this.tput.unicode || this.tput.numbers.U8 === 1;
      this.fullUnicode = this.options.fullUnicode && this._unicode;
      this.dattr = 0 << 18 | 511 << 9 | 511;
      this.renders = 0;
      this.position = {
        left: this.left = this.aleft = this.rleft = 0,
        right: this.right = this.aright = this.rright = 0,
        top: this.top = this.atop = this.rtop = 0,
        bottom: this.bottom = this.abottom = this.rbottom = 0,
        get height() {
          return self.height;
        },
        get width() {
          return self.width;
        }
      };
      this.ileft = 0;
      this.itop = 0;
      this.iright = 0;
      this.ibottom = 0;
      this.iheight = 0;
      this.iwidth = 0;
      this.padding = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      this.hover = null;
      this.history = [];
      this.clickable = [];
      this.keyable = [];
      this.grabKeys = false;
      this.lockKeys = false;
      this.focused;
      this._buf = "";
      this._ci = -1;
      if (options.title) {
        this.title = options.title;
      }
      options.cursor = options.cursor || {
        artificial: options.artificialCursor,
        shape: options.cursorShape,
        blink: options.cursorBlink,
        color: options.cursorColor
      };
      this.cursor = {
        artificial: options.cursor.artificial || false,
        shape: options.cursor.shape || "block",
        blink: options.cursor.blink || false,
        color: options.cursor.color || null,
        _set: false,
        _state: 1,
        _hidden: true
      };
      this.program.on("resize", function() {
        self.alloc();
        self.render();
        (function emit(el) {
          el.emit("resize");
          el.children.forEach(emit);
        })(self);
      });
      this.program.on("focus", function() {
        self.emit("focus");
      });
      this.program.on("blur", function() {
        self.emit("blur");
      });
      this.program.on("warning", function(text) {
        self.emit("warning", text);
      });
      this.on("newListener", function fn(type3) {
        if (type3 === "keypress" || type3.indexOf("key ") === 0 || type3 === "mouse") {
          if (type3 === "keypress" || type3.indexOf("key ") === 0)
            self._listenKeys();
          if (type3 === "mouse")
            self._listenMouse();
        }
        if (type3 === "mouse" || type3 === "click" || type3 === "mouseover" || type3 === "mouseout" || type3 === "mousedown" || type3 === "mouseup" || type3 === "mousewheel" || type3 === "wheeldown" || type3 === "wheelup" || type3 === "mousemove") {
          self._listenMouse();
        }
      });
      this.setMaxListeners(Infinity);
      this.enter();
      this.postEnter();
    }
    Screen.global = null;
    Screen.total = 0;
    Screen.instances = [];
    Screen.bind = function(screen) {
      if (!Screen.global) {
        Screen.global = screen;
      }
      if (!~Screen.instances.indexOf(screen)) {
        Screen.instances.push(screen);
        screen.index = Screen.total;
        Screen.total++;
      }
      if (Screen._bound)
        return;
      Screen._bound = true;
      process.on("uncaughtException", Screen._exceptionHandler = function(err) {
        if (process.listeners("uncaughtException").length > 1) {
          return;
        }
        Screen.instances.slice().forEach(function(screen2) {
          screen2.destroy();
        });
        err = err || new Error("Uncaught Exception.");
        console.error(err.stack ? err.stack + "" : err + "");
        nextTick(function() {
          process.exit(1);
        });
      });
      ["SIGTERM", "SIGINT", "SIGQUIT"].forEach(function(signal) {
        var name = "_" + signal.toLowerCase() + "Handler";
        process.on(signal, Screen[name] = function() {
          if (process.listeners(signal).length > 1) {
            return;
          }
          nextTick(function() {
            process.exit(0);
          });
        });
      });
      process.on("exit", Screen._exitHandler = function() {
        Screen.instances.slice().forEach(function(screen2) {
          screen2.destroy();
        });
      });
    };
    Screen.prototype.__proto__ = Node.prototype;
    Screen.prototype.type = "screen";
    Screen.prototype.__defineGetter__("title", function() {
      return this.program.title;
    });
    Screen.prototype.__defineSetter__("title", function(title) {
      return this.program.title = title;
    });
    Screen.prototype.__defineGetter__("terminal", function() {
      return this.program.terminal;
    });
    Screen.prototype.__defineSetter__("terminal", function(terminal) {
      this.setTerminal(terminal);
      return this.program.terminal;
    });
    Screen.prototype.setTerminal = function(terminal) {
      var entered = !!this.program.isAlt;
      if (entered) {
        this._buf = "";
        this.program._buf = "";
        this.leave();
      }
      this.program.setTerminal(terminal);
      this.tput = this.program.tput;
      if (entered) {
        this.enter();
      }
    };
    Screen.prototype.enter = function() {
      if (this.program.isAlt)
        return;
      if (!this.cursor._set) {
        if (this.options.cursor.shape) {
          this.cursorShape(this.cursor.shape, this.cursor.blink);
        }
        if (this.options.cursor.color) {
          this.cursorColor(this.cursor.color);
        }
      }
      if (process.platform === "win32") {
        try {
          cp.execSync("cls", { stdio: "ignore", timeout: 1e3 });
        } catch (e) {
          ;
        }
      }
      this.program.alternateBuffer();
      this.program.put.keypad_xmit();
      this.program.csr(0, this.height - 1);
      this.program.hideCursor();
      this.program.cup(0, 0);
      if (this.tput.strings.ena_acs) {
        this.program._write(this.tput.enacs());
      }
      this.alloc();
    };
    Screen.prototype.leave = function() {
      if (!this.program.isAlt)
        return;
      this.program.put.keypad_local();
      if (this.program.scrollTop !== 0 || this.program.scrollBottom !== this.rows - 1) {
        this.program.csr(0, this.height - 1);
      }
      this.program.showCursor();
      this.alloc();
      if (this._listenedMouse) {
        this.program.disableMouse();
      }
      this.program.normalBuffer();
      if (this.cursor._set)
        this.cursorReset();
      this.program.flush();
      if (process.platform === "win32") {
        try {
          cp.execSync("cls", { stdio: "ignore", timeout: 1e3 });
        } catch (e) {
          ;
        }
      }
    };
    Screen.prototype.postEnter = function() {
      var self = this;
      if (this.options.debug) {
        this.debugLog = new Log({
          screen: this,
          parent: this,
          hidden: true,
          draggable: true,
          left: "center",
          top: "center",
          width: "30%",
          height: "30%",
          border: "line",
          label: " {bold}Debug Log{/bold} ",
          tags: true,
          keys: true,
          vi: true,
          mouse: true,
          scrollbar: {
            ch: " ",
            track: {
              bg: "yellow"
            },
            style: {
              inverse: true
            }
          }
        });
        this.debugLog.toggle = function() {
          if (self.debugLog.hidden) {
            self.saveFocus();
            self.debugLog.show();
            self.debugLog.setFront();
            self.debugLog.focus();
          } else {
            self.debugLog.hide();
            self.restoreFocus();
          }
          self.render();
        };
        this.debugLog.key(["q", "escape"], self.debugLog.toggle);
        this.key("f12", self.debugLog.toggle);
      }
      if (this.options.warnings) {
        this.on("warning", function(text) {
          var warning = new Box({
            screen: self,
            parent: self,
            left: "center",
            top: "center",
            width: "shrink",
            padding: 1,
            height: "shrink",
            align: "center",
            valign: "middle",
            border: "line",
            label: " {red-fg}{bold}WARNING{/} ",
            content: "{bold}" + text + "{/bold}",
            tags: true
          });
          self.render();
          var timeout = setTimeout(function() {
            warning.destroy();
            self.render();
          }, 1500);
          if (timeout.unref) {
            timeout.unref();
          }
        });
      }
    };
    Screen.prototype._destroy = Screen.prototype.destroy;
    Screen.prototype.destroy = function() {
      this.leave();
      var index = Screen.instances.indexOf(this);
      if (~index) {
        Screen.instances.splice(index, 1);
        Screen.total--;
        Screen.global = Screen.instances[0];
        if (Screen.total === 0) {
          Screen.global = null;
          process.removeListener("uncaughtException", Screen._exceptionHandler);
          process.removeListener("SIGTERM", Screen._sigtermHandler);
          process.removeListener("SIGINT", Screen._sigintHandler);
          process.removeListener("SIGQUIT", Screen._sigquitHandler);
          process.removeListener("exit", Screen._exitHandler);
          delete Screen._exceptionHandler;
          delete Screen._sigtermHandler;
          delete Screen._sigintHandler;
          delete Screen._sigquitHandler;
          delete Screen._exitHandler;
          delete Screen._bound;
        }
        this.destroyed = true;
        this.emit("destroy");
        this._destroy();
      }
      this.program.destroy();
    };
    Screen.prototype.log = function() {
      return this.program.log.apply(this.program, arguments);
    };
    Screen.prototype.debug = function() {
      if (this.debugLog) {
        this.debugLog.log.apply(this.debugLog, arguments);
      }
      return this.program.debug.apply(this.program, arguments);
    };
    Screen.prototype._listenMouse = function(el) {
      var self = this;
      if (el && !~this.clickable.indexOf(el)) {
        el.clickable = true;
        this.clickable.push(el);
      }
      if (this._listenedMouse)
        return;
      this._listenedMouse = true;
      this.program.enableMouse();
      if (this.options.sendFocus) {
        this.program.setMouse({ sendFocus: true }, true);
      }
      this.on("render", function() {
        self._needsClickableSort = true;
      });
      this.program.on("mouse", function(data) {
        if (self.lockKeys)
          return;
        if (self._needsClickableSort) {
          self.clickable = helpers.hsort(self.clickable);
          self._needsClickableSort = false;
        }
        var i = 0, el2, set, pos;
        for (; i < self.clickable.length; i++) {
          el2 = self.clickable[i];
          if (el2.detached || !el2.visible) {
            continue;
          }
          pos = el2.lpos;
          if (!pos)
            continue;
          if (data.x >= pos.xi && data.x < pos.xl && data.y >= pos.yi && data.y < pos.yl) {
            el2.emit("mouse", data);
            if (data.action === "mousedown") {
              self.mouseDown = el2;
            } else if (data.action === "mouseup") {
              (self.mouseDown || el2).emit("click", data);
              self.mouseDown = null;
            } else if (data.action === "mousemove") {
              if (self.hover && el2.index > self.hover.index) {
                set = false;
              }
              if (self.hover !== el2 && !set) {
                if (self.hover) {
                  self.hover.emit("mouseout", data);
                }
                el2.emit("mouseover", data);
                self.hover = el2;
              }
              set = true;
            }
            el2.emit(data.action, data);
            break;
          }
        }
        if ((data.action === "mousemove" || data.action === "mousedown" || data.action === "mouseup") && self.hover && !set) {
          self.hover.emit("mouseout", data);
          self.hover = null;
        }
        self.emit("mouse", data);
        self.emit(data.action, data);
      });
      this.on("element click", function(el2) {
        if (el2.clickable === true && el2.options.autoFocus !== false) {
          el2.focus();
        }
      });
    };
    Screen.prototype.enableMouse = function(el) {
      this._listenMouse(el);
    };
    Screen.prototype._listenKeys = function(el) {
      var self = this;
      if (el && !~this.keyable.indexOf(el)) {
        el.keyable = true;
        this.keyable.push(el);
      }
      if (this._listenedKeys)
        return;
      this._listenedKeys = true;
      this.program.on("keypress", function(ch, key) {
        if (self.lockKeys && !~self.ignoreLocked.indexOf(key.full)) {
          return;
        }
        var focused = self.focused, grabKeys = self.grabKeys;
        if (!grabKeys || ~self.ignoreLocked.indexOf(key.full)) {
          self.emit("keypress", ch, key);
          self.emit("key " + key.full, ch, key);
        }
        if (self.grabKeys !== grabKeys || self.lockKeys) {
          return;
        }
        if (focused && focused.keyable) {
          focused.emit("keypress", ch, key);
          focused.emit("key " + key.full, ch, key);
        }
      });
    };
    Screen.prototype.enableKeys = function(el) {
      this._listenKeys(el);
    };
    Screen.prototype.enableInput = function(el) {
      this._listenMouse(el);
      this._listenKeys(el);
    };
    Screen.prototype._initHover = function() {
      var self = this;
      if (this._hoverText) {
        return;
      }
      this._hoverText = new Box({
        screen: this,
        left: 0,
        top: 0,
        tags: false,
        height: "shrink",
        width: "shrink",
        border: "line",
        style: {
          border: {
            fg: "default"
          },
          bg: "default",
          fg: "default"
        }
      });
      this.on("mousemove", function(data) {
        if (self._hoverText.detached)
          return;
        self._hoverText.rleft = data.x + 1;
        self._hoverText.rtop = data.y;
        self.render();
      });
      this.on("element mouseover", function(el, data) {
        if (!el._hoverOptions)
          return;
        self._hoverText.parseTags = el.parseTags;
        self._hoverText.setContent(el._hoverOptions.text);
        self.append(self._hoverText);
        self._hoverText.rleft = data.x + 1;
        self._hoverText.rtop = data.y;
        self.render();
      });
      this.on("element mouseout", function() {
        if (self._hoverText.detached)
          return;
        self._hoverText.detach();
        self.render();
      });
      this.on("element mouseup", function(el) {
        if (!self._hoverText.getContent())
          return;
        if (!el._hoverOptions)
          return;
        self.append(self._hoverText);
        self.render();
      });
    };
    Screen.prototype.__defineGetter__("cols", function() {
      return this.program.cols;
    });
    Screen.prototype.__defineGetter__("rows", function() {
      return this.program.rows;
    });
    Screen.prototype.__defineGetter__("width", function() {
      return this.program.cols;
    });
    Screen.prototype.__defineGetter__("height", function() {
      return this.program.rows;
    });
    Screen.prototype.alloc = function(dirty) {
      var x, y;
      this.lines = [];
      for (y = 0; y < this.rows; y++) {
        this.lines[y] = [];
        for (x = 0; x < this.cols; x++) {
          this.lines[y][x] = [this.dattr, " "];
        }
        this.lines[y].dirty = !!dirty;
      }
      this.olines = [];
      for (y = 0; y < this.rows; y++) {
        this.olines[y] = [];
        for (x = 0; x < this.cols; x++) {
          this.olines[y][x] = [this.dattr, " "];
        }
      }
      this.program.clear();
    };
    Screen.prototype.realloc = function() {
      return this.alloc(true);
    };
    Screen.prototype.render = function() {
      var self = this;
      if (this.destroyed)
        return;
      this.emit("prerender");
      this._borderStops = {};
      this._ci = 0;
      this.children.forEach(function(el) {
        el.index = self._ci++;
        el.render();
      });
      this._ci = -1;
      if (this.screen.dockBorders) {
        this._dockBorders();
      }
      this.draw(0, this.lines.length - 1);
      if (this.focused && this.focused._updateCursor) {
        this.focused._updateCursor(true);
      }
      this.renders++;
      this.emit("render");
    };
    Screen.prototype.blankLine = function(ch, dirty) {
      var out = [];
      for (var x = 0; x < this.cols; x++) {
        out[x] = [this.dattr, ch || " "];
      }
      out.dirty = dirty;
      return out;
    };
    Screen.prototype.insertLine = function(n, y, top, bottom) {
      if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line || !this.tput.strings.insert_line)
        return;
      this._buf += this.tput.csr(top, bottom);
      this._buf += this.tput.cup(y, 0);
      this._buf += this.tput.il(n);
      this._buf += this.tput.csr(0, this.height - 1);
      var j = bottom + 1;
      while (n--) {
        this.lines.splice(y, 0, this.blankLine());
        this.lines.splice(j, 1);
        this.olines.splice(y, 0, this.blankLine());
        this.olines.splice(j, 1);
      }
    };
    Screen.prototype.deleteLine = function(n, y, top, bottom) {
      if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line || !this.tput.strings.insert_line)
        return;
      this._buf += this.tput.csr(top, bottom);
      this._buf += this.tput.cup(y, 0);
      this._buf += this.tput.dl(n);
      this._buf += this.tput.csr(0, this.height - 1);
      var j = bottom + 1;
      while (n--) {
        this.lines.splice(j, 0, this.blankLine());
        this.lines.splice(y, 1);
        this.olines.splice(j, 0, this.blankLine());
        this.olines.splice(y, 1);
      }
    };
    Screen.prototype.insertLineNC = function(n, y, top, bottom) {
      if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line)
        return;
      this._buf += this.tput.csr(top, bottom);
      this._buf += this.tput.cup(top, 0);
      this._buf += this.tput.dl(n);
      this._buf += this.tput.csr(0, this.height - 1);
      var j = bottom + 1;
      while (n--) {
        this.lines.splice(j, 0, this.blankLine());
        this.lines.splice(y, 1);
        this.olines.splice(j, 0, this.blankLine());
        this.olines.splice(y, 1);
      }
    };
    Screen.prototype.deleteLineNC = function(n, y, top, bottom) {
      if (!this.tput.strings.change_scroll_region || !this.tput.strings.delete_line)
        return;
      this._buf += this.tput.csr(top, bottom);
      this._buf += this.tput.cup(bottom, 0);
      this._buf += Array(n + 1).join("\n");
      this._buf += this.tput.csr(0, this.height - 1);
      var j = bottom + 1;
      while (n--) {
        this.lines.splice(j, 0, this.blankLine());
        this.lines.splice(y, 1);
        this.olines.splice(j, 0, this.blankLine());
        this.olines.splice(y, 1);
      }
    };
    Screen.prototype.insertBottom = function(top, bottom) {
      return this.deleteLine(1, top, top, bottom);
    };
    Screen.prototype.insertTop = function(top, bottom) {
      return this.insertLine(1, top, top, bottom);
    };
    Screen.prototype.deleteBottom = function(top, bottom) {
      return this.clearRegion(0, this.width, bottom, bottom);
    };
    Screen.prototype.deleteTop = function(top, bottom) {
      return this.deleteLine(1, top, top, bottom);
    };
    Screen.prototype.cleanSides = function(el) {
      var pos = el.lpos;
      if (!pos) {
        return false;
      }
      if (pos._cleanSides != null) {
        return pos._cleanSides;
      }
      if (pos.xi <= 0 && pos.xl >= this.width) {
        return pos._cleanSides = true;
      }
      if (this.options.fastCSR) {
        if (pos.yi < 0)
          return pos._cleanSides = false;
        if (pos.yl > this.height)
          return pos._cleanSides = false;
        if (this.width - (pos.xl - pos.xi) < 40) {
          return pos._cleanSides = true;
        }
        return pos._cleanSides = false;
      }
      if (!this.options.smartCSR) {
        return false;
      }
      var yi = pos.yi + el.itop, yl = pos.yl - el.ibottom, first, ch, x, y;
      if (pos.yi < 0)
        return pos._cleanSides = false;
      if (pos.yl > this.height)
        return pos._cleanSides = false;
      if (pos.xi - 1 < 0)
        return pos._cleanSides = true;
      if (pos.xl > this.width)
        return pos._cleanSides = true;
      for (x = pos.xi - 1; x >= 0; x--) {
        if (!this.olines[yi])
          break;
        first = this.olines[yi][x];
        for (y = yi; y < yl; y++) {
          if (!this.olines[y] || !this.olines[y][x])
            break;
          ch = this.olines[y][x];
          if (ch[0] !== first[0] || ch[1] !== first[1]) {
            return pos._cleanSides = false;
          }
        }
      }
      for (x = pos.xl; x < this.width; x++) {
        if (!this.olines[yi])
          break;
        first = this.olines[yi][x];
        for (y = yi; y < yl; y++) {
          if (!this.olines[y] || !this.olines[y][x])
            break;
          ch = this.olines[y][x];
          if (ch[0] !== first[0] || ch[1] !== first[1]) {
            return pos._cleanSides = false;
          }
        }
      }
      return pos._cleanSides = true;
    };
    Screen.prototype._dockBorders = function() {
      var lines = this.lines, stops = this._borderStops, i, y, x, ch;
      stops = Object.keys(stops).map(function(k) {
        return +k;
      }).sort(function(a, b) {
        return a - b;
      });
      for (i = 0; i < stops.length; i++) {
        y = stops[i];
        if (!lines[y])
          continue;
        for (x = 0; x < this.width; x++) {
          ch = lines[y][x][1];
          if (angles[ch]) {
            lines[y][x][1] = this._getAngle(lines, x, y);
            lines[y].dirty = true;
          }
        }
      }
    };
    Screen.prototype._getAngle = function(lines, x, y) {
      var angle = 0, attr = lines[y][x][0], ch = lines[y][x][1];
      if (lines[y][x - 1] && langles[lines[y][x - 1][1]]) {
        if (!this.options.ignoreDockContrast) {
          if (lines[y][x - 1][0] !== attr)
            return ch;
        }
        angle |= 1 << 3;
      }
      if (lines[y - 1] && uangles[lines[y - 1][x][1]]) {
        if (!this.options.ignoreDockContrast) {
          if (lines[y - 1][x][0] !== attr)
            return ch;
        }
        angle |= 1 << 2;
      }
      if (lines[y][x + 1] && rangles[lines[y][x + 1][1]]) {
        if (!this.options.ignoreDockContrast) {
          if (lines[y][x + 1][0] !== attr)
            return ch;
        }
        angle |= 1 << 1;
      }
      if (lines[y + 1] && dangles[lines[y + 1][x][1]]) {
        if (!this.options.ignoreDockContrast) {
          if (lines[y + 1][x][0] !== attr)
            return ch;
        }
        angle |= 1 << 0;
      }
      return angleTable[angle] || ch;
    };
    Screen.prototype.draw = function(start, end) {
      var x, y, line, out, ch, data, attr, fg, bg, flags;
      var main2 = "", pre, post;
      var clr, neq, xx;
      var lx = -1, ly = -1, o;
      var acs;
      if (this._buf) {
        main2 += this._buf;
        this._buf = "";
      }
      for (y = start; y <= end; y++) {
        line = this.lines[y];
        o = this.olines[y];
        if (!line.dirty && !(this.cursor.artificial && y === this.program.y)) {
          continue;
        }
        line.dirty = false;
        out = "";
        attr = this.dattr;
        for (x = 0; x < line.length; x++) {
          data = line[x][0];
          ch = line[x][1];
          if (this.cursor.artificial && !this.cursor._hidden && this.cursor._state && x === this.program.x && y === this.program.y) {
            var cattr = this._cursorAttr(this.cursor, data);
            if (cattr.ch)
              ch = cattr.ch;
            data = cattr.attr;
          }
          if (this.options.useBCE && ch === " " && (this.tput.bools.back_color_erase || (data & 511) === (this.dattr & 511)) && (data >> 18 & 8) === (this.dattr >> 18 & 8)) {
            clr = true;
            neq = false;
            for (xx = x; xx < line.length; xx++) {
              if (line[xx][0] !== data || line[xx][1] !== " ") {
                clr = false;
                break;
              }
              if (line[xx][0] !== o[xx][0] || line[xx][1] !== o[xx][1]) {
                neq = true;
              }
            }
            if (clr && neq) {
              lx = -1, ly = -1;
              if (data !== attr) {
                out += this.codeAttr(data);
                attr = data;
              }
              out += this.tput.cup(y, x);
              out += this.tput.el();
              for (xx = x; xx < line.length; xx++) {
                o[xx][0] = data;
                o[xx][1] = " ";
              }
              break;
            }
          }
          if (data === o[x][0] && ch === o[x][1]) {
            if (lx === -1) {
              lx = x;
              ly = y;
            }
            continue;
          } else if (lx !== -1) {
            if (this.tput.strings.parm_right_cursor) {
              out += y === ly ? this.tput.cuf(x - lx) : this.tput.cup(y, x);
            } else {
              out += this.tput.cup(y, x);
            }
            lx = -1, ly = -1;
          }
          o[x][0] = data;
          o[x][1] = ch;
          if (data !== attr) {
            if (attr !== this.dattr) {
              out += "\x1B[m";
            }
            if (data !== this.dattr) {
              out += "\x1B[";
              bg = data & 511;
              fg = data >> 9 & 511;
              flags = data >> 18;
              if (flags & 1) {
                out += "1;";
              }
              if (flags & 2) {
                out += "4;";
              }
              if (flags & 4) {
                out += "5;";
              }
              if (flags & 8) {
                out += "7;";
              }
              if (flags & 16) {
                out += "8;";
              }
              if (bg !== 511) {
                bg = this._reduceColor(bg);
                if (bg < 16) {
                  if (bg < 8) {
                    bg += 40;
                  } else if (bg < 16) {
                    bg -= 8;
                    bg += 100;
                  }
                  out += bg + ";";
                } else {
                  out += "48;5;" + bg + ";";
                }
              }
              if (fg !== 511) {
                fg = this._reduceColor(fg);
                if (fg < 16) {
                  if (fg < 8) {
                    fg += 30;
                  } else if (fg < 16) {
                    fg -= 8;
                    fg += 90;
                  }
                  out += fg + ";";
                } else {
                  out += "38;5;" + fg + ";";
                }
              }
              if (out[out.length - 1] === ";")
                out = out.slice(0, -1);
              out += "m";
            }
          }
          if (this.fullUnicode) {
            if (unicode.charWidth(line[x][1]) === 2) {
              if (x === line.length - 1 || angles[line[x + 1][1]]) {
                ch = " ";
                o[x][1] = "\0";
              } else {
                o[x][1] = "\0";
                o[++x][1] = "\0";
              }
            }
          }
          if (this.tput.strings.enter_alt_charset_mode && !this.tput.brokenACS && (this.tput.acscr[ch] || acs)) {
            if (this.tput.acscr[ch]) {
              if (acs) {
                ch = this.tput.acscr[ch];
              } else {
                ch = this.tput.smacs() + this.tput.acscr[ch];
                acs = true;
              }
            } else if (acs) {
              ch = this.tput.rmacs() + ch;
              acs = false;
            }
          } else {
            if (!this.tput.unicode && this.tput.numbers.U8 !== 1 && ch > "~") {
              ch = this.tput.utoa[ch] || "?";
            }
          }
          out += ch;
          attr = data;
        }
        if (attr !== this.dattr) {
          out += "\x1B[m";
        }
        if (out) {
          main2 += this.tput.cup(y, 0) + out;
        }
      }
      if (acs) {
        main2 += this.tput.rmacs();
        acs = false;
      }
      if (main2) {
        pre = "";
        post = "";
        pre += this.tput.sc();
        post += this.tput.rc();
        if (!this.program.cursorHidden) {
          pre += this.tput.civis();
          post += this.tput.cnorm();
        }
        this.program._write(pre + main2 + post);
      }
    };
    Screen.prototype._reduceColor = function(color) {
      return colors.reduce(color, this.tput.colors);
    };
    Screen.prototype.attrCode = function(code, cur, def) {
      var flags = cur >> 18 & 511, fg = cur >> 9 & 511, bg = cur & 511, c, i;
      code = code.slice(2, -1).split(";");
      if (!code[0])
        code[0] = "0";
      for (i = 0; i < code.length; i++) {
        c = +code[i] || 0;
        switch (c) {
          case 0:
            bg = def & 511;
            fg = def >> 9 & 511;
            flags = def >> 18 & 511;
            break;
          case 1:
            flags |= 1;
            break;
          case 22:
            flags = def >> 18 & 511;
            break;
          case 4:
            flags |= 2;
            break;
          case 24:
            flags = def >> 18 & 511;
            break;
          case 5:
            flags |= 4;
            break;
          case 25:
            flags = def >> 18 & 511;
            break;
          case 7:
            flags |= 8;
            break;
          case 27:
            flags = def >> 18 & 511;
            break;
          case 8:
            flags |= 16;
            break;
          case 28:
            flags = def >> 18 & 511;
            break;
          case 39:
            fg = def >> 9 & 511;
            break;
          case 49:
            bg = def & 511;
            break;
          case 100:
            fg = def >> 9 & 511;
            bg = def & 511;
            break;
          default:
            if (c === 48 && +code[i + 1] === 5) {
              i += 2;
              bg = +code[i];
              break;
            } else if (c === 48 && +code[i + 1] === 2) {
              i += 2;
              bg = colors.match(+code[i], +code[i + 1], +code[i + 2]);
              if (bg === -1)
                bg = def & 511;
              i += 2;
              break;
            } else if (c === 38 && +code[i + 1] === 5) {
              i += 2;
              fg = +code[i];
              break;
            } else if (c === 38 && +code[i + 1] === 2) {
              i += 2;
              fg = colors.match(+code[i], +code[i + 1], +code[i + 2]);
              if (fg === -1)
                fg = def >> 9 & 511;
              i += 2;
              break;
            }
            if (c >= 40 && c <= 47) {
              bg = c - 40;
            } else if (c >= 100 && c <= 107) {
              bg = c - 100;
              bg += 8;
            } else if (c === 49) {
              bg = def & 511;
            } else if (c >= 30 && c <= 37) {
              fg = c - 30;
            } else if (c >= 90 && c <= 97) {
              fg = c - 90;
              fg += 8;
            } else if (c === 39) {
              fg = def >> 9 & 511;
            } else if (c === 100) {
              fg = def >> 9 & 511;
              bg = def & 511;
            }
            break;
        }
      }
      return flags << 18 | fg << 9 | bg;
    };
    Screen.prototype.codeAttr = function(code) {
      var flags = code >> 18 & 511, fg = code >> 9 & 511, bg = code & 511, out = "";
      if (flags & 1) {
        out += "1;";
      }
      if (flags & 2) {
        out += "4;";
      }
      if (flags & 4) {
        out += "5;";
      }
      if (flags & 8) {
        out += "7;";
      }
      if (flags & 16) {
        out += "8;";
      }
      if (bg !== 511) {
        bg = this._reduceColor(bg);
        if (bg < 16) {
          if (bg < 8) {
            bg += 40;
          } else if (bg < 16) {
            bg -= 8;
            bg += 100;
          }
          out += bg + ";";
        } else {
          out += "48;5;" + bg + ";";
        }
      }
      if (fg !== 511) {
        fg = this._reduceColor(fg);
        if (fg < 16) {
          if (fg < 8) {
            fg += 30;
          } else if (fg < 16) {
            fg -= 8;
            fg += 90;
          }
          out += fg + ";";
        } else {
          out += "38;5;" + fg + ";";
        }
      }
      if (out[out.length - 1] === ";")
        out = out.slice(0, -1);
      return "\x1B[" + out + "m";
    };
    Screen.prototype.focusOffset = function(offset) {
      var shown = this.keyable.filter(function(el) {
        return !el.detached && el.visible;
      }).length;
      if (!shown || !offset) {
        return;
      }
      var i = this.keyable.indexOf(this.focused);
      if (!~i)
        return;
      if (offset > 0) {
        while (offset--) {
          if (++i > this.keyable.length - 1)
            i = 0;
          if (this.keyable[i].detached || !this.keyable[i].visible)
            offset++;
        }
      } else {
        offset = -offset;
        while (offset--) {
          if (--i < 0)
            i = this.keyable.length - 1;
          if (this.keyable[i].detached || !this.keyable[i].visible)
            offset++;
        }
      }
      return this.keyable[i].focus();
    };
    Screen.prototype.focusPrev = Screen.prototype.focusPrevious = function() {
      return this.focusOffset(-1);
    };
    Screen.prototype.focusNext = function() {
      return this.focusOffset(1);
    };
    Screen.prototype.focusPush = function(el) {
      if (!el)
        return;
      var old = this.history[this.history.length - 1];
      if (this.history.length === 10) {
        this.history.shift();
      }
      this.history.push(el);
      this._focus(el, old);
    };
    Screen.prototype.focusPop = function() {
      var old = this.history.pop();
      if (this.history.length) {
        this._focus(this.history[this.history.length - 1], old);
      }
      return old;
    };
    Screen.prototype.saveFocus = function() {
      return this._savedFocus = this.focused;
    };
    Screen.prototype.restoreFocus = function() {
      if (!this._savedFocus)
        return;
      this._savedFocus.focus();
      delete this._savedFocus;
      return this.focused;
    };
    Screen.prototype.rewindFocus = function() {
      var old = this.history.pop(), el;
      while (this.history.length) {
        el = this.history.pop();
        if (!el.detached && el.visible) {
          this.history.push(el);
          this._focus(el, old);
          return el;
        }
      }
      if (old) {
        old.emit("blur");
      }
    };
    Screen.prototype._focus = function(self, old) {
      var el = self;
      while (el = el.parent) {
        if (el.scrollable)
          break;
      }
      if (el && !el.detached) {
        var visible = self.screen.height - el.atop - el.itop - el.abottom - el.ibottom;
        if (self.rtop < el.childBase) {
          el.scrollTo(self.rtop);
          self.screen.render();
        } else if (self.rtop + self.height - self.ibottom > el.childBase + visible) {
          el.scrollTo(self.rtop - (el.height - self.height) + el.itop, true);
          self.screen.render();
        }
      }
      if (old) {
        old.emit("blur", self);
      }
      self.emit("focus", old);
    };
    Screen.prototype.__defineGetter__("focused", function() {
      return this.history[this.history.length - 1];
    });
    Screen.prototype.__defineSetter__("focused", function(el) {
      return this.focusPush(el);
    });
    Screen.prototype.clearRegion = function(xi, xl, yi, yl, override) {
      return this.fillRegion(this.dattr, " ", xi, xl, yi, yl, override);
    };
    Screen.prototype.fillRegion = function(attr, ch, xi, xl, yi, yl, override) {
      var lines = this.lines, cell, xx;
      if (xi < 0)
        xi = 0;
      if (yi < 0)
        yi = 0;
      for (; yi < yl; yi++) {
        if (!lines[yi])
          break;
        for (xx = xi; xx < xl; xx++) {
          cell = lines[yi][xx];
          if (!cell)
            break;
          if (override || attr !== cell[0] || ch !== cell[1]) {
            lines[yi][xx][0] = attr;
            lines[yi][xx][1] = ch;
            lines[yi].dirty = true;
          }
        }
      }
    };
    Screen.prototype.key = function() {
      return this.program.key.apply(this, arguments);
    };
    Screen.prototype.onceKey = function() {
      return this.program.onceKey.apply(this, arguments);
    };
    Screen.prototype.unkey = Screen.prototype.removeKey = function() {
      return this.program.unkey.apply(this, arguments);
    };
    Screen.prototype.spawn = function(file, args, options) {
      if (!Array.isArray(args)) {
        options = args;
        args = [];
      }
      var screen = this, program2 = screen.program, spawn = require("child_process").spawn, mouse = program2.mouseEnabled, ps;
      options = options || {};
      options.stdio = options.stdio || "inherit";
      program2.lsaveCursor("spawn");
      program2.normalBuffer();
      program2.showCursor();
      if (mouse)
        program2.disableMouse();
      var write = program2.output.write;
      program2.output.write = function() {
      };
      program2.input.pause();
      if (program2.input.setRawMode) {
        program2.input.setRawMode(false);
      }
      var resume = function() {
        if (resume.done)
          return;
        resume.done = true;
        if (program2.input.setRawMode) {
          program2.input.setRawMode(true);
        }
        program2.input.resume();
        program2.output.write = write;
        program2.alternateBuffer();
        if (mouse) {
          program2.enableMouse();
          if (screen.options.sendFocus) {
            screen.program.setMouse({ sendFocus: true }, true);
          }
        }
        screen.alloc();
        screen.render();
        screen.program.lrestoreCursor("spawn", true);
      };
      ps = spawn(file, args, options);
      ps.on("error", resume);
      ps.on("exit", resume);
      return ps;
    };
    Screen.prototype.exec = function(file, args, options, callback) {
      var ps = this.spawn(file, args, options);
      ps.on("error", function(err) {
        if (!callback)
          return;
        return callback(err, false);
      });
      ps.on("exit", function(code) {
        if (!callback)
          return;
        return callback(null, code === 0);
      });
      return ps;
    };
    Screen.prototype.readEditor = function(options, callback) {
      if (typeof options === "string") {
        options = { editor: options };
      }
      if (!callback) {
        callback = options;
        options = null;
      }
      if (!callback) {
        callback = function() {
        };
      }
      options = options || {};
      var self = this, editor = options.editor || process.env.EDITOR || "vi", name = options.name || process.title || "blessed", rnd = Math.random().toString(36).split(".").pop(), file = "/tmp/" + name + "." + rnd, args = [file], opt;
      opt = {
        stdio: "inherit",
        env: process.env,
        cwd: process.env.HOME
      };
      function writeFile(callback2) {
        if (!options.value)
          return callback2();
        return fs.writeFile(file, options.value, callback2);
      }
      return writeFile(function(err) {
        if (err)
          return callback(err);
        return self.exec(editor, args, opt, function(err2, success) {
          if (err2)
            return callback(err2);
          return fs.readFile(file, "utf8", function(err3, data) {
            return fs.unlink(file, function() {
              if (!success)
                return callback(new Error("Unsuccessful."));
              if (err3)
                return callback(err3);
              return callback(null, data);
            });
          });
        });
      });
    };
    Screen.prototype.displayImage = function(file, callback) {
      if (!file) {
        if (!callback)
          return;
        return callback(new Error("No image."));
      }
      file = path.resolve(process.cwd(), file);
      if (!~file.indexOf("://")) {
        file = "file://" + file;
      }
      var args = ["w3m", "-T", "text/html"];
      var input = '<title>press q to exit</title><img align="center" src="' + file + '">';
      var opt = {
        stdio: ["pipe", 1, 2],
        env: process.env,
        cwd: process.env.HOME
      };
      var ps = this.spawn(args[0], args.slice(1), opt);
      ps.on("error", function(err) {
        if (!callback)
          return;
        return callback(err);
      });
      ps.on("exit", function(code) {
        if (!callback)
          return;
        if (code !== 0)
          return callback(new Error("Exit Code: " + code));
        return callback(null, code === 0);
      });
      ps.stdin.write(input + "\n");
      ps.stdin.end();
    };
    Screen.prototype.setEffects = function(el, fel, over, out, effects, temp) {
      if (!effects)
        return;
      var tmp = {};
      if (temp)
        el[temp] = tmp;
      if (typeof el !== "function") {
        var _el = el;
        el = function() {
          return _el;
        };
      }
      fel.on(over, function() {
        var element = el();
        Object.keys(effects).forEach(function(key) {
          var val = effects[key];
          if (val !== null && typeof val === "object") {
            tmp[key] = tmp[key] || {};
            Object.keys(val).forEach(function(k) {
              var v = val[k];
              tmp[key][k] = element.style[key][k];
              element.style[key][k] = v;
            });
            return;
          }
          tmp[key] = element.style[key];
          element.style[key] = val;
        });
        element.screen.render();
      });
      fel.on(out, function() {
        var element = el();
        Object.keys(effects).forEach(function(key) {
          var val = effects[key];
          if (val !== null && typeof val === "object") {
            tmp[key] = tmp[key] || {};
            Object.keys(val).forEach(function(k) {
              if (tmp[key].hasOwnProperty(k)) {
                element.style[key][k] = tmp[key][k];
              }
            });
            return;
          }
          if (tmp.hasOwnProperty(key)) {
            element.style[key] = tmp[key];
          }
        });
        element.screen.render();
      });
    };
    Screen.prototype.sigtstp = function(callback) {
      var self = this;
      this.program.sigtstp(function() {
        self.alloc();
        self.render();
        self.program.lrestoreCursor("pause", true);
        if (callback)
          callback();
      });
    };
    Screen.prototype.copyToClipboard = function(text) {
      return this.program.copyToClipboard(text);
    };
    Screen.prototype.cursorShape = function(shape, blink) {
      var self = this;
      this.cursor.shape = shape || "block";
      this.cursor.blink = blink || false;
      this.cursor._set = true;
      if (this.cursor.artificial) {
        if (!this.program.hideCursor_old) {
          var hideCursor = this.program.hideCursor;
          this.program.hideCursor_old = this.program.hideCursor;
          this.program.hideCursor = function() {
            hideCursor.call(self.program);
            self.cursor._hidden = true;
            if (self.renders)
              self.render();
          };
        }
        if (!this.program.showCursor_old) {
          var showCursor = this.program.showCursor;
          this.program.showCursor_old = this.program.showCursor;
          this.program.showCursor = function() {
            self.cursor._hidden = false;
            if (self.program._exiting)
              showCursor.call(self.program);
            if (self.renders)
              self.render();
          };
        }
        if (!this._cursorBlink) {
          this._cursorBlink = setInterval(function() {
            if (!self.cursor.blink)
              return;
            self.cursor._state ^= 1;
            if (self.renders)
              self.render();
          }, 500);
          if (this._cursorBlink.unref) {
            this._cursorBlink.unref();
          }
        }
        return true;
      }
      return this.program.cursorShape(this.cursor.shape, this.cursor.blink);
    };
    Screen.prototype.cursorColor = function(color) {
      this.cursor.color = color != null ? colors.convert(color) : null;
      this.cursor._set = true;
      if (this.cursor.artificial) {
        return true;
      }
      return this.program.cursorColor(colors.ncolors[this.cursor.color]);
    };
    Screen.prototype.cursorReset = Screen.prototype.resetCursor = function() {
      this.cursor.shape = "block";
      this.cursor.blink = false;
      this.cursor.color = null;
      this.cursor._set = false;
      if (this.cursor.artificial) {
        this.cursor.artificial = false;
        if (this.program.hideCursor_old) {
          this.program.hideCursor = this.program.hideCursor_old;
          delete this.program.hideCursor_old;
        }
        if (this.program.showCursor_old) {
          this.program.showCursor = this.program.showCursor_old;
          delete this.program.showCursor_old;
        }
        if (this._cursorBlink) {
          clearInterval(this._cursorBlink);
          delete this._cursorBlink;
        }
        return true;
      }
      return this.program.cursorReset();
    };
    Screen.prototype._cursorAttr = function(cursor, dattr) {
      var attr = dattr || this.dattr, cattr, ch;
      if (cursor.shape === "line") {
        attr &= ~(511 << 9);
        attr |= 7 << 9;
        ch = "\u2502";
      } else if (cursor.shape === "underline") {
        attr &= ~(511 << 9);
        attr |= 7 << 9;
        attr |= 2 << 18;
      } else if (cursor.shape === "block") {
        attr &= ~(511 << 9);
        attr |= 7 << 9;
        attr |= 8 << 18;
      } else if (typeof cursor.shape === "object" && cursor.shape) {
        cattr = Element.prototype.sattr.call(cursor, cursor.shape);
        if (cursor.shape.bold || cursor.shape.underline || cursor.shape.blink || cursor.shape.inverse || cursor.shape.invisible) {
          attr &= ~(511 << 18);
          attr |= (cattr >> 18 & 511) << 18;
        }
        if (cursor.shape.fg) {
          attr &= ~(511 << 9);
          attr |= (cattr >> 9 & 511) << 9;
        }
        if (cursor.shape.bg) {
          attr &= ~(511 << 0);
          attr |= cattr & 511;
        }
        if (cursor.shape.ch) {
          ch = cursor.shape.ch;
        }
      }
      if (cursor.color != null) {
        attr &= ~(511 << 9);
        attr |= cursor.color << 9;
      }
      return {
        ch,
        attr
      };
    };
    Screen.prototype.screenshot = function(xi, xl, yi, yl, term) {
      if (xi == null)
        xi = 0;
      if (xl == null)
        xl = this.cols;
      if (yi == null)
        yi = 0;
      if (yl == null)
        yl = this.rows;
      if (xi < 0)
        xi = 0;
      if (yi < 0)
        yi = 0;
      var x, y, line, out, ch, data, attr;
      var sdattr = this.dattr;
      if (term) {
        this.dattr = term.defAttr;
      }
      var main2 = "";
      for (y = yi; y < yl; y++) {
        line = term ? term.lines[y] : this.lines[y];
        if (!line)
          break;
        out = "";
        attr = this.dattr;
        for (x = xi; x < xl; x++) {
          if (!line[x])
            break;
          data = line[x][0];
          ch = line[x][1];
          if (data !== attr) {
            if (attr !== this.dattr) {
              out += "\x1B[m";
            }
            if (data !== this.dattr) {
              var _data = data;
              if (term) {
                if ((_data >> 9 & 511) === 257)
                  _data |= 511 << 9;
                if ((_data & 511) === 256)
                  _data |= 511;
              }
              out += this.codeAttr(_data);
            }
          }
          if (this.fullUnicode) {
            if (unicode.charWidth(line[x][1]) === 2) {
              if (x === xl - 1) {
                ch = " ";
              } else {
                x++;
              }
            }
          }
          out += ch;
          attr = data;
        }
        if (attr !== this.dattr) {
          out += "\x1B[m";
        }
        if (out) {
          main2 += (y > 0 ? "\n" : "") + out;
        }
      }
      main2 = main2.replace(/(?:\s*\x1b\[40m\s*\x1b\[m\s*)*$/, "") + "\n";
      if (term) {
        this.dattr = sdattr;
      }
      return main2;
    };
    Screen.prototype._getPos = function() {
      return this;
    };
    var angles = {
      "\u2518": true,
      // '┘'
      "\u2510": true,
      // '┐'
      "\u250C": true,
      // '┌'
      "\u2514": true,
      // '└'
      "\u253C": true,
      // '┼'
      "\u251C": true,
      // '├'
      "\u2524": true,
      // '┤'
      "\u2534": true,
      // '┴'
      "\u252C": true,
      // '┬'
      "\u2502": true,
      // '│'
      "\u2500": true
      // '─'
    };
    var langles = {
      "\u250C": true,
      // '┌'
      "\u2514": true,
      // '└'
      "\u253C": true,
      // '┼'
      "\u251C": true,
      // '├'
      "\u2534": true,
      // '┴'
      "\u252C": true,
      // '┬'
      "\u2500": true
      // '─'
    };
    var uangles = {
      "\u2510": true,
      // '┐'
      "\u250C": true,
      // '┌'
      "\u253C": true,
      // '┼'
      "\u251C": true,
      // '├'
      "\u2524": true,
      // '┤'
      "\u252C": true,
      // '┬'
      "\u2502": true
      // '│'
    };
    var rangles = {
      "\u2518": true,
      // '┘'
      "\u2510": true,
      // '┐'
      "\u253C": true,
      // '┼'
      "\u2524": true,
      // '┤'
      "\u2534": true,
      // '┴'
      "\u252C": true,
      // '┬'
      "\u2500": true
      // '─'
    };
    var dangles = {
      "\u2518": true,
      // '┘'
      "\u2514": true,
      // '└'
      "\u253C": true,
      // '┼'
      "\u251C": true,
      // '├'
      "\u2524": true,
      // '┤'
      "\u2534": true,
      // '┴'
      "\u2502": true
      // '│'
    };
    var angleTable = {
      "0000": "",
      // ?
      "0001": "\u2502",
      // '│' // ?
      "0010": "\u2500",
      // '─' // ??
      "0011": "\u250C",
      // '┌'
      "0100": "\u2502",
      // '│' // ?
      "0101": "\u2502",
      // '│'
      "0110": "\u2514",
      // '└'
      "0111": "\u251C",
      // '├'
      "1000": "\u2500",
      // '─' // ??
      "1001": "\u2510",
      // '┐'
      "1010": "\u2500",
      // '─' // ??
      "1011": "\u252C",
      // '┬'
      "1100": "\u2518",
      // '┘'
      "1101": "\u2524",
      // '┤'
      "1110": "\u2534",
      // '┴'
      "1111": "\u253C"
      // '┼'
    };
    Object.keys(angleTable).forEach(function(key) {
      angleTable[parseInt(key, 2)] = angleTable[key];
      delete angleTable[key];
    });
    module2.exports = Screen;
  }
});

// node_modules/blessed/lib/widgets/node.js
var require_node = __commonJS({
  "node_modules/blessed/lib/widgets/node.js"(exports, module2) {
    var EventEmitter = require_events().EventEmitter;
    function Node(options) {
      var self = this;
      var Screen = require_screen();
      if (!(this instanceof Node)) {
        return new Node(options);
      }
      EventEmitter.call(this);
      options = options || {};
      this.options = options;
      this.screen = this.screen || options.screen;
      if (!this.screen) {
        if (this.type === "screen") {
          this.screen = this;
        } else if (Screen.total === 1) {
          this.screen = Screen.global;
        } else if (options.parent) {
          this.screen = options.parent;
          while (this.screen && this.screen.type !== "screen") {
            this.screen = this.screen.parent;
          }
        } else if (Screen.total) {
          this.screen = Screen.instances[Screen.instances.length - 1];
          process.nextTick(function() {
            if (!self.parent) {
              throw new Error("Element (" + self.type + ") was not appended synchronously after the screen's creation. Please set a `parent` or `screen` option in the element's constructor if you are going to use multiple screens and append the element later.");
            }
          });
        } else {
          throw new Error("No active screen.");
        }
      }
      this.parent = options.parent || null;
      this.children = [];
      this.$ = this._ = this.data = {};
      this.uid = Node.uid++;
      this.index = this.index != null ? this.index : -1;
      if (this.type !== "screen") {
        this.detached = true;
      }
      if (this.parent) {
        this.parent.append(this);
      }
      (options.children || []).forEach(this.append.bind(this));
    }
    Node.uid = 0;
    Node.prototype.__proto__ = EventEmitter.prototype;
    Node.prototype.type = "node";
    Node.prototype.insert = function(element, i) {
      var self = this;
      if (element.screen && element.screen !== this.screen) {
        throw new Error("Cannot switch a node's screen.");
      }
      element.detach();
      element.parent = this;
      element.screen = this.screen;
      if (i === 0) {
        this.children.unshift(element);
      } else if (i === this.children.length) {
        this.children.push(element);
      } else {
        this.children.splice(i, 0, element);
      }
      element.emit("reparent", this);
      this.emit("adopt", element);
      (function emit(el) {
        var n = el.detached !== self.detached;
        el.detached = self.detached;
        if (n)
          el.emit("attach");
        el.children.forEach(emit);
      })(element);
      if (!this.screen.focused) {
        this.screen.focused = element;
      }
    };
    Node.prototype.prepend = function(element) {
      this.insert(element, 0);
    };
    Node.prototype.append = function(element) {
      this.insert(element, this.children.length);
    };
    Node.prototype.insertBefore = function(element, other) {
      var i = this.children.indexOf(other);
      if (~i)
        this.insert(element, i);
    };
    Node.prototype.insertAfter = function(element, other) {
      var i = this.children.indexOf(other);
      if (~i)
        this.insert(element, i + 1);
    };
    Node.prototype.remove = function(element) {
      if (element.parent !== this)
        return;
      var i = this.children.indexOf(element);
      if (!~i)
        return;
      element.clearPos();
      element.parent = null;
      this.children.splice(i, 1);
      i = this.screen.clickable.indexOf(element);
      if (~i)
        this.screen.clickable.splice(i, 1);
      i = this.screen.keyable.indexOf(element);
      if (~i)
        this.screen.keyable.splice(i, 1);
      element.emit("reparent", null);
      this.emit("remove", element);
      (function emit(el) {
        var n = el.detached !== true;
        el.detached = true;
        if (n)
          el.emit("detach");
        el.children.forEach(emit);
      })(element);
      if (this.screen.focused === element) {
        this.screen.rewindFocus();
      }
    };
    Node.prototype.detach = function() {
      if (this.parent)
        this.parent.remove(this);
    };
    Node.prototype.free = function() {
      return;
    };
    Node.prototype.destroy = function() {
      this.detach();
      this.forDescendants(function(el) {
        el.free();
        el.destroyed = true;
        el.emit("destroy");
      }, this);
    };
    Node.prototype.forDescendants = function(iter, s) {
      if (s)
        iter(this);
      this.children.forEach(function emit(el) {
        iter(el);
        el.children.forEach(emit);
      });
    };
    Node.prototype.forAncestors = function(iter, s) {
      var el = this;
      if (s)
        iter(this);
      while (el = el.parent) {
        iter(el);
      }
    };
    Node.prototype.collectDescendants = function(s) {
      var out = [];
      this.forDescendants(function(el) {
        out.push(el);
      }, s);
      return out;
    };
    Node.prototype.collectAncestors = function(s) {
      var out = [];
      this.forAncestors(function(el) {
        out.push(el);
      }, s);
      return out;
    };
    Node.prototype.emitDescendants = function() {
      var args = Array.prototype.slice(arguments), iter;
      if (typeof args[args.length - 1] === "function") {
        iter = args.pop();
      }
      return this.forDescendants(function(el) {
        if (iter)
          iter(el);
        el.emit.apply(el, args);
      }, true);
    };
    Node.prototype.emitAncestors = function() {
      var args = Array.prototype.slice(arguments), iter;
      if (typeof args[args.length - 1] === "function") {
        iter = args.pop();
      }
      return this.forAncestors(function(el) {
        if (iter)
          iter(el);
        el.emit.apply(el, args);
      }, true);
    };
    Node.prototype.hasDescendant = function(target) {
      return function find(el) {
        for (var i = 0; i < el.children.length; i++) {
          if (el.children[i] === target) {
            return true;
          }
          if (find(el.children[i]) === true) {
            return true;
          }
        }
        return false;
      }(this);
    };
    Node.prototype.hasAncestor = function(target) {
      var el = this;
      while (el = el.parent) {
        if (el === target)
          return true;
      }
      return false;
    };
    Node.prototype.get = function(name, value) {
      if (this.data.hasOwnProperty(name)) {
        return this.data[name];
      }
      return value;
    };
    Node.prototype.set = function(name, value) {
      return this.data[name] = value;
    };
    module2.exports = Node;
  }
});

// node_modules/blessed/vendor/tng.js
var require_tng = __commonJS({
  "node_modules/blessed/vendor/tng.js"(exports, module2) {
    var fs = require("fs");
    var util = require("util");
    var path = require("path");
    var zlib = require("zlib");
    var assert = require("assert");
    var cp = require("child_process");
    var exec = cp.execFileSync;
    function PNG(file, options) {
      var buf, chunks, idat, pixels;
      if (!(this instanceof PNG)) {
        return new PNG(file, options);
      }
      if (!file)
        throw new Error("no file");
      this.options = options || {};
      this.colors = options.colors || require_colors();
      this.optimization = this.options.optimization || "mem";
      this.speed = this.options.speed || 1;
      if (Buffer.isBuffer(file)) {
        this.file = this.options.filename || null;
        buf = file;
      } else {
        this.options.filename = file;
        this.file = path.resolve(process.cwd(), file);
        buf = fs.readFileSync(this.file);
      }
      this.format = buf.readUInt32BE(0) === 2303741511 ? "png" : buf.slice(0, 3).toString("ascii") === "GIF" ? "gif" : buf.readUInt16BE(0) === 65496 ? "jpg" : path.extname(this.file).slice(1).toLowerCase() || "png";
      if (this.format !== "png") {
        try {
          return this.toPNG(buf);
        } catch (e) {
          throw e;
        }
      }
      chunks = this.parseRaw(buf);
      idat = this.parseChunks(chunks);
      pixels = this.parseLines(idat);
      this.bmp = this.createBitmap(pixels);
      this.cellmap = this.createCellmap(this.bmp);
      this.frames = this.compileFrames(this.frames);
    }
    PNG.prototype.parseRaw = function(buf) {
      var chunks = [], index = 0, i = 0, buf, len, type3, name, data, crc, check, critical, public_, conforming, copysafe, pos;
      this._debug(this.file);
      if (buf.readUInt32BE(0) !== 2303741511 || buf.readUInt32BE(4) !== 218765834) {
        throw new Error("bad header");
      }
      i += 8;
      while (i < buf.length) {
        try {
          len = buf.readUInt32BE(i);
          i += 4;
          pos = i;
          type3 = buf.slice(i, i + 4);
          name = type3.toString("ascii");
          i += 4;
          data = buf.slice(i, i + len);
          i += len;
          check = this.crc32(buf.slice(pos, i));
          crc = buf.readInt32BE(i);
          i += 4;
          critical = !!(~type3[0] & 32);
          public_ = !!(~type3[1] & 32);
          conforming = !!(~type3[2] & 32);
          copysafe = !!(~type3[3] & 32);
          if (crc !== check) {
            throw new Error(name + ": bad crc");
          }
        } catch (e) {
          if (this.options.debug)
            throw e;
          break;
        }
        chunks.push({
          index: index++,
          id: name.toLowerCase(),
          len,
          pos,
          end: i,
          type: type3,
          name,
          data,
          crc,
          check,
          raw: buf.slice(pos, i),
          flags: {
            critical,
            public_,
            conforming,
            copysafe
          }
        });
      }
      return chunks;
    };
    PNG.prototype.parseChunks = function(chunks) {
      var i, chunk, name, data, p, idat, info;
      for (i = 0; i < chunks.length; i++) {
        chunk = chunks[i];
        name = chunk.id;
        data = chunk.data;
        info = {};
        switch (name) {
          case "ihdr": {
            this.width = info.width = data.readUInt32BE(0);
            this.height = info.height = data.readUInt32BE(4);
            this.bitDepth = info.bitDepth = data.readUInt8(8);
            this.colorType = info.colorType = data.readUInt8(9);
            this.compression = info.compression = data.readUInt8(10);
            this.filter = info.filter = data.readUInt8(11);
            this.interlace = info.interlace = data.readUInt8(12);
            switch (this.bitDepth) {
              case 1:
              case 2:
              case 4:
              case 8:
              case 16:
              case 24:
              case 32:
                break;
              default:
                throw new Error("bad bit depth: " + this.bitDepth);
            }
            switch (this.colorType) {
              case 0:
              case 2:
              case 3:
              case 4:
              case 6:
                break;
              default:
                throw new Error("bad color: " + this.colorType);
            }
            switch (this.compression) {
              case 0:
                break;
              default:
                throw new Error("bad compression: " + this.compression);
            }
            switch (this.filter) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
                break;
              default:
                throw new Error("bad filter: " + this.filter);
            }
            switch (this.interlace) {
              case 0:
              case 1:
                break;
              default:
                throw new Error("bad interlace: " + this.interlace);
            }
            break;
          }
          case "plte": {
            this.palette = info.palette = [];
            for (p = 0; p < data.length; p += 3) {
              this.palette.push({
                r: data[p + 0],
                g: data[p + 1],
                b: data[p + 2],
                a: 255
              });
            }
            break;
          }
          case "idat": {
            this.size = this.size || 0;
            this.size += data.length;
            this.idat = this.idat || [];
            this.idat.push(data);
            info.size = data.length;
            break;
          }
          case "iend": {
            this.end = true;
            break;
          }
          case "trns": {
            this.alpha = info.alpha = Array.prototype.slice.call(data);
            if (this.palette) {
              for (p = 0; p < data.length; p++) {
                if (!this.palette[p])
                  break;
                this.palette[p].a = data[p];
              }
            }
            break;
          }
          case "actl": {
            this.actl = info = {};
            this.frames = [];
            this.actl.numFrames = data.readUInt32BE(0);
            this.actl.numPlays = data.readUInt32BE(4);
            break;
          }
          case "fctl": {
            if (!this.idat) {
              this.idat = [];
              this.frames.push({
                idat: true,
                fctl: info,
                fdat: this.idat
              });
            } else {
              this.frames.push({
                fctl: info,
                fdat: []
              });
            }
            info.sequenceNumber = data.readUInt32BE(0);
            info.width = data.readUInt32BE(4);
            info.height = data.readUInt32BE(8);
            info.xOffset = data.readUInt32BE(12);
            info.yOffset = data.readUInt32BE(16);
            info.delayNum = data.readUInt16BE(20);
            info.delayDen = data.readUInt16BE(22);
            info.disposeOp = data.readUInt8(24);
            info.blendOp = data.readUInt8(25);
            break;
          }
          case "fdat": {
            info.sequenceNumber = data.readUInt32BE(0);
            info.data = data.slice(4);
            this.frames[this.frames.length - 1].fdat.push(info.data);
            break;
          }
        }
        chunk.info = info;
      }
      this._debug(chunks);
      if (this.frames) {
        this.frames = this.frames.map(function(frame, i2) {
          frame.fdat = this.decompress(frame.fdat);
          if (!frame.fdat.length)
            throw new Error("no data");
          return frame;
        }, this);
      }
      idat = this.decompress(this.idat);
      if (!idat.length)
        throw new Error("no data");
      return idat;
    };
    PNG.prototype.parseLines = function(data) {
      var pixels = [], x, p, prior, line, filter, samples, pendingSamples, ch, shiftStart, i, toShift, sample;
      this.sampleDepth = this.colorType === 0 ? 1 : this.colorType === 2 ? 3 : this.colorType === 3 ? 1 : this.colorType === 4 ? 2 : this.colorType === 6 ? 4 : 1;
      this.bitsPerPixel = this.bitDepth * this.sampleDepth;
      this.bytesPerPixel = Math.ceil(this.bitsPerPixel / 8);
      this.wastedBits = this.width * this.bitsPerPixel / 8 - (this.width * this.bitsPerPixel / 8 | 0);
      this.byteWidth = Math.ceil(this.width * (this.bitsPerPixel / 8));
      this.shiftStart = this.bitDepth + (8 / this.bitDepth - this.bitDepth) - 1 | 0;
      this.shiftMult = this.bitDepth >= 8 ? 0 : this.bitDepth;
      this.mask = this.bitDepth === 32 ? 4294967295 : (1 << this.bitDepth) - 1;
      if (this.interlace === 1) {
        samples = this.sampleInterlacedLines(data);
        for (i = 0; i < samples.length; i += this.sampleDepth) {
          pixels.push(samples.slice(i, i + this.sampleDepth));
        }
        return pixels;
      }
      for (p = 0; p < data.length; p += this.byteWidth) {
        prior = line || [];
        filter = data[p++];
        line = data.slice(p, p + this.byteWidth);
        line = this.unfilterLine(filter, line, prior);
        samples = this.sampleLine(line);
        for (i = 0; i < samples.length; i += this.sampleDepth) {
          pixels.push(samples.slice(i, i + this.sampleDepth));
        }
      }
      return pixels;
    };
    PNG.prototype.unfilterLine = function(filter, line, prior) {
      for (var x = 0; x < line.length; x++) {
        if (filter === 0) {
          break;
        } else if (filter === 1) {
          line[x] = this.filters.sub(x, line, prior, this.bytesPerPixel);
        } else if (filter === 2) {
          line[x] = this.filters.up(x, line, prior, this.bytesPerPixel);
        } else if (filter === 3) {
          line[x] = this.filters.average(x, line, prior, this.bytesPerPixel);
        } else if (filter === 4) {
          line[x] = this.filters.paeth(x, line, prior, this.bytesPerPixel);
        }
      }
      return line;
    };
    PNG.prototype.sampleLine = function(line, width) {
      var samples = [], x = 0, pendingSamples, ch, i, sample, shiftStart, toShift;
      while (x < line.length) {
        pendingSamples = this.sampleDepth;
        while (pendingSamples--) {
          ch = line[x];
          if (this.bitDepth === 16) {
            ch = ch << 8 | line[++x];
          } else if (this.bitDepth === 24) {
            ch = ch << 16 | line[++x] << 8 | line[++x];
          } else if (this.bitDepth === 32) {
            ch = ch << 24 | line[++x] << 16 | line[++x] << 8 | line[++x];
          } else if (this.bitDepth > 32) {
            throw new Error("bitDepth " + this.bitDepth + " unsupported.");
          }
          shiftStart = this.shiftStart;
          toShift = shiftStart - (x === line.length - 1 ? this.wastedBits : 0);
          for (i = 0; i <= toShift; i++) {
            sample = ch >> this.shiftMult * shiftStart & this.mask;
            if (this.colorType !== 3) {
              if (this.bitDepth < 8) {
                sample *= 255 / this.mask;
                sample |= 0;
              } else if (this.bitDepth > 8) {
                sample = sample / this.mask * 255 | 0;
              }
            }
            samples.push(sample);
            shiftStart--;
          }
          x++;
        }
      }
      if (width != null) {
        samples = samples.slice(0, width * this.sampleDepth);
      }
      return samples;
    };
    PNG.prototype.filters = {
      sub: function Sub(x, line, prior, bpp) {
        if (x < bpp)
          return line[x];
        return (line[x] + line[x - bpp]) % 256;
      },
      up: function Up(x, line, prior, bpp) {
        return (line[x] + (prior[x] || 0)) % 256;
      },
      average: function Average(x, line, prior, bpp) {
        if (x < bpp)
          return Math.floor((prior[x] || 0) / 2);
        return (line[x] + Math.floor((line[x - bpp] + prior[x]) / 2)) % 256;
      },
      paeth: function Paeth(x, line, prior, bpp) {
        if (x < bpp)
          return prior[x] || 0;
        return (line[x] + this._predictor(
          line[x - bpp],
          prior[x] || 0,
          prior[x - bpp] || 0
        )) % 256;
      },
      _predictor: function PaethPredictor(a, b, c) {
        var p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        if (pa <= pb && pa <= pc)
          return a;
        if (pb <= pc)
          return b;
        return c;
      }
    };
    PNG.prototype.sampleInterlacedLines = function(raw) {
      var psize, vpr, samples, source_offset, i, pass, xstart, ystart, xstep, ystep, recon, ppr, row_size, y, filter_type, scanline, flat, offset, k, end_offset, skip, j, k, f;
      var adam7 = [
        [0, 0, 8, 8],
        [4, 0, 8, 8],
        [0, 4, 4, 8],
        [2, 0, 4, 4],
        [0, 2, 2, 4],
        [1, 0, 2, 2],
        [0, 1, 1, 2]
      ];
      psize = this.bitDepth / 8 * this.sampleDepth;
      vpr = this.width * this.sampleDepth;
      samples = new Buffer(vpr * this.height);
      samples.fill(0);
      source_offset = 0;
      for (i = 0; i < adam7.length; i++) {
        pass = adam7[i];
        xstart = pass[0];
        ystart = pass[1];
        xstep = pass[2];
        ystep = pass[3];
        if (xstart >= this.width)
          continue;
        recon = [];
        ppr = Math.ceil((this.width - xstart) / xstep);
        row_size = Math.ceil(psize * ppr);
        for (y = ystart; y < this.height; y += ystep) {
          filter_type = raw[source_offset];
          source_offset += 1;
          scanline = raw.slice(source_offset, source_offset + row_size);
          source_offset += row_size;
          recon = this.unfilterLine(filter_type, scanline, recon);
          flat = this.sampleLine(recon, ppr);
          if (xstep === 1) {
            assert.equal(xstart, 0);
            offset = y * vpr;
            for (k = offset, f = 0; k < offset + vpr; k++, f++) {
              samples[k] = flat[f];
            }
          } else {
            offset = y * vpr + xstart * this.sampleDepth;
            end_offset = (y + 1) * vpr;
            skip = this.sampleDepth * xstep;
            for (j = 0; j < this.sampleDepth; j++) {
              for (k = offset + j, f = j; k < end_offset; k += skip, f += this.sampleDepth) {
                samples[k] = flat[f];
              }
            }
          }
        }
      }
      return samples;
    };
    PNG.prototype.createBitmap = function(pixels) {
      var bmp = [], i;
      if (this.colorType === 0) {
        pixels = pixels.map(function(sample) {
          return { r: sample[0], g: sample[0], b: sample[0], a: 255 };
        });
      } else if (this.colorType === 2) {
        pixels = pixels.map(function(sample) {
          return { r: sample[0], g: sample[1], b: sample[2], a: 255 };
        });
      } else if (this.colorType === 3) {
        pixels = pixels.map(function(sample) {
          if (!this.palette[sample[0]])
            throw new Error("bad palette index");
          return this.palette[sample[0]];
        }, this);
      } else if (this.colorType === 4) {
        pixels = pixels.map(function(sample) {
          return { r: sample[0], g: sample[0], b: sample[0], a: sample[1] };
        });
      } else if (this.colorType === 6) {
        pixels = pixels.map(function(sample) {
          return { r: sample[0], g: sample[1], b: sample[2], a: sample[3] };
        });
      }
      for (i = 0; i < pixels.length; i += this.width) {
        bmp.push(pixels.slice(i, i + this.width));
      }
      return bmp;
    };
    PNG.prototype.createCellmap = function(bmp, options) {
      var bmp = bmp || this.bmp, options = options || this.options, cellmap = [], scale = options.scale || 0.2, height = bmp.length, width = bmp[0].length, cmwidth = options.width, cmheight = options.height, line, x, y, xx, yy, scale, xs, ys;
      if (cmwidth) {
        scale = cmwidth / width;
      } else if (cmheight) {
        scale = cmheight / height;
      }
      if (!cmheight) {
        cmheight = Math.round(height * scale);
      }
      if (!cmwidth) {
        cmwidth = Math.round(width * scale);
      }
      ys = height / cmheight;
      xs = width / cmwidth;
      for (y = 0; y < bmp.length; y += ys) {
        line = [];
        yy = Math.round(y);
        if (!bmp[yy])
          break;
        for (x = 0; x < bmp[yy].length; x += xs) {
          xx = Math.round(x);
          if (!bmp[yy][xx])
            break;
          line.push(bmp[yy][xx]);
        }
        cellmap.push(line);
      }
      return cellmap;
    };
    PNG.prototype.renderANSI = function(bmp) {
      var self = this, out = "";
      bmp.forEach(function(line, y) {
        line.forEach(function(pixel, x) {
          var outch = self.getOutch(x, y, line, pixel);
          out += self.pixelToSGR(pixel, outch);
        });
        out += "\n";
      });
      return out;
    };
    PNG.prototype.renderContent = function(bmp, el) {
      var self = this, out = "";
      bmp.forEach(function(line, y) {
        line.forEach(function(pixel, x) {
          var outch = self.getOutch(x, y, line, pixel);
          out += self.pixelToTags(pixel, outch);
        });
        out += "\n";
      });
      el.setContent(out);
      return out;
    };
    PNG.prototype.renderScreen = function(bmp, screen, xi, xl, yi, yl) {
      var self = this, lines = screen.lines, cellLines, y, yy, x, xx, alpha, attr, ch;
      cellLines = bmp.reduce(function(cellLines2, line, y2) {
        var cellLine = [];
        line.forEach(function(pixel, x2) {
          var outch = self.getOutch(x2, y2, line, pixel), cell = self.pixelToCell(pixel, outch);
          cellLine.push(cell);
        });
        cellLines2.push(cellLine);
        return cellLines2;
      }, []);
      for (y = yi; y < yl; y++) {
        yy = y - yi;
        for (x = xi; x < xl; x++) {
          xx = x - xi;
          if (lines[y] && lines[y][x] && cellLines[yy] && cellLines[yy][xx]) {
            alpha = cellLines[yy][xx].pop();
            if (alpha === 0) {
              continue;
            }
            if (alpha < 1) {
              attr = cellLines[yy][xx][0];
              ch = cellLines[yy][xx][1];
              lines[y][x][0] = this.colors.blend(lines[y][x][0], attr, alpha);
              if (ch !== " ")
                lines[y][x][1] = ch;
              lines[y].dirty = true;
              continue;
            }
            lines[y][x] = cellLines[yy][xx];
            lines[y].dirty = true;
          }
        }
      }
    };
    PNG.prototype.renderElement = function(bmp, el) {
      var xi = el.aleft + el.ileft, xl = el.aleft + el.width - el.iright, yi = el.atop + el.itop, yl = el.atop + el.height - el.ibottom;
      return this.renderScreen(bmp, el.screen, xi, xl, yi, yl);
    };
    PNG.prototype.pixelToSGR = function(pixel, ch) {
      var bga = 1, fga = 0.5, a = pixel.a / 255, bg, fg;
      bg = this.colors.match(
        pixel.r * a * bga | 0,
        pixel.g * a * bga | 0,
        pixel.b * a * bga | 0
      );
      if (ch && this.options.ascii) {
        fg = this.colors.match(
          pixel.r * a * fga | 0,
          pixel.g * a * fga | 0,
          pixel.b * a * fga | 0
        );
        if (a === 0) {
          return "\x1B[38;5;" + fg + "m" + ch + "\x1B[m";
        }
        return "\x1B[38;5;" + fg + "m\x1B[48;5;" + bg + "m" + ch + "\x1B[m";
      }
      if (a === 0)
        return " ";
      return "\x1B[48;5;" + bg + "m \x1B[m";
    };
    PNG.prototype.pixelToTags = function(pixel, ch) {
      var bga = 1, fga = 0.5, a = pixel.a / 255, bg, fg;
      bg = this.colors.RGBtoHex(
        pixel.r * a * bga | 0,
        pixel.g * a * bga | 0,
        pixel.b * a * bga | 0
      );
      if (ch && this.options.ascii) {
        fg = this.colors.RGBtoHex(
          pixel.r * a * fga | 0,
          pixel.g * a * fga | 0,
          pixel.b * a * fga | 0
        );
        if (a === 0) {
          return "{" + fg + "-fg}" + ch + "{/}";
        }
        return "{" + fg + "-fg}{" + bg + "-bg}" + ch + "{/}";
      }
      if (a === 0)
        return " ";
      return "{" + bg + "-bg} {/" + bg + "-bg}";
    };
    PNG.prototype.pixelToCell = function(pixel, ch) {
      var bga = 1, fga = 0.5, a = pixel.a / 255, bg, fg;
      bg = this.colors.match(
        pixel.r * bga | 0,
        pixel.g * bga | 0,
        pixel.b * bga | 0
      );
      if (ch && this.options.ascii) {
        fg = this.colors.match(
          pixel.r * fga | 0,
          pixel.g * fga | 0,
          pixel.b * fga | 0
        );
      } else {
        fg = 511;
        ch = null;
      }
      return [0 << 18 | fg << 9 | bg << 0, ch || " ", a];
    };
    PNG.prototype.getOutch = function() {
      var dchars = "????8@8@#8@8##8#MKXWwz$&%x><\\/xo;+=|^-:i'.`,  `.        ";
      var luminance = function(pixel) {
        var a = pixel.a / 255, r = pixel.r * a, g = pixel.g * a, b = pixel.b * a, l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return l / 255;
      };
      return function(x, y, line, pixel) {
        var lumi = luminance(pixel), outch = dchars[lumi * (dchars.length - 1) | 0];
        return outch;
      };
    }();
    PNG.prototype.compileFrames = function(frames) {
      return this.optimization === "mem" ? this.compileFrames_lomem(frames) : this.compileFrames_locpu(frames);
    };
    PNG.prototype.compileFrames_lomem = function(frames) {
      if (!this.actl)
        return;
      return frames.map(function(frame, i) {
        this.width = frame.fctl.width;
        this.height = frame.fctl.height;
        var pixels = frame._pixels || this.parseLines(frame.fdat), bmp = frame._bmp || this.createBitmap(pixels), fc = frame.fctl;
        return {
          actl: this.actl,
          fctl: frame.fctl,
          delay: fc.delayNum / (fc.delayDen || 100) * 1e3 | 0,
          bmp
        };
      }, this);
    };
    PNG.prototype.compileFrames_locpu = function(frames) {
      if (!this.actl)
        return;
      this._curBmp = null;
      this._lastBmp = null;
      return frames.map(function(frame, i) {
        this.width = frame.fctl.width;
        this.height = frame.fctl.height;
        var pixels = frame._pixels || this.parseLines(frame.fdat), bmp = frame._bmp || this.createBitmap(pixels), renderBmp = this.renderFrame(bmp, frame, i), cellmap = this.createCellmap(renderBmp), fc = frame.fctl;
        return {
          actl: this.actl,
          fctl: frame.fctl,
          delay: fc.delayNum / (fc.delayDen || 100) * 1e3 | 0,
          bmp: renderBmp,
          cellmap
        };
      }, this);
    };
    PNG.prototype.renderFrame = function(bmp, frame, i) {
      var first = this.frames[0], last = this.frames[i - 1], fc = frame.fctl, xo = fc.xOffset, yo = fc.yOffset, lxo, lyo, x, y, line, p;
      if (!this._curBmp) {
        this._curBmp = [];
        for (y = 0; y < first.fctl.height; y++) {
          line = [];
          for (x = 0; x < first.fctl.width; x++) {
            p = bmp[y][x];
            line.push({ r: p.r, g: p.g, b: p.b, a: p.a });
          }
          this._curBmp.push(line);
        }
      }
      if (last && last.fctl.disposeOp !== 0) {
        lxo = last.fctl.xOffset;
        lyo = last.fctl.yOffset;
        for (y = 0; y < last.fctl.height; y++) {
          for (x = 0; x < last.fctl.width; x++) {
            if (last.fctl.disposeOp === 0) {
            } else if (last.fctl.disposeOp === 1) {
              this._curBmp[lyo + y][lxo + x] = { r: 0, g: 0, b: 0, a: 0 };
            } else if (last.fctl.disposeOp === 2) {
              p = this._lastBmp[y][x];
              this._curBmp[lyo + y][lxo + x] = { r: p.r, g: p.g, b: p.b, a: p.a };
            }
          }
        }
      }
      if (frame.fctl.disposeOp === 2) {
        this._lastBmp = [];
        for (y = 0; y < frame.fctl.height; y++) {
          line = [];
          for (x = 0; x < frame.fctl.width; x++) {
            p = this._curBmp[yo + y][xo + x];
            line.push({ r: p.r, g: p.g, b: p.b, a: p.a });
          }
          this._lastBmp.push(line);
        }
      } else {
        this._lastBmp = null;
      }
      for (y = 0; y < frame.fctl.height; y++) {
        for (x = 0; x < frame.fctl.width; x++) {
          p = bmp[y][x];
          if (fc.blendOp === 0) {
            this._curBmp[yo + y][xo + x] = { r: p.r, g: p.g, b: p.b, a: p.a };
          } else if (fc.blendOp === 1) {
            if (p.a !== 0) {
              this._curBmp[yo + y][xo + x] = { r: p.r, g: p.g, b: p.b, a: p.a };
            }
          }
        }
      }
      return this._curBmp;
    };
    PNG.prototype._animate = function(callback) {
      if (!this.frames) {
        return callback(this.bmp, this.cellmap);
      }
      var self = this, numPlays = this.actl.numPlays || Infinity, running = 0, i = -1;
      this._curBmp = null;
      this._lastBmp = null;
      var next_lomem = function() {
        if (!running)
          return;
        var frame = self.frames[++i];
        if (!frame) {
          if (!--numPlays)
            return callback();
          i = -1;
          self._curBmp = null;
          self._lastBmp = null;
          return setImmediate(next);
        }
        var bmp = frame.bmp, renderBmp = self.renderFrame(bmp, frame, i), cellmap = self.createCellmap(renderBmp);
        callback(renderBmp, cellmap);
        return setTimeout(next, frame.delay / self.speed | 0);
      };
      var next_locpu = function() {
        if (!running)
          return;
        var frame = self.frames[++i];
        if (!frame) {
          if (!--numPlays)
            return callback();
          i = -1;
          return setImmediate(next);
        }
        callback(frame.bmp, frame.cellmap);
        return setTimeout(next, frame.delay / self.speed | 0);
      };
      var next = this.optimization === "mem" ? next_lomem : next_locpu;
      this._control = function(state) {
        if (state === -1) {
          i = -1;
          self._curBmp = null;
          self._lastBmp = null;
          running = 0;
          callback(
            self.frames[0].bmp,
            self.frames[0].cellmap || self.createCellmap(self.frames[0].bmp)
          );
          return;
        }
        if (state === running)
          return;
        running = state;
        return next();
      };
      this._control(1);
    };
    PNG.prototype.play = function(callback) {
      if (!this._control || callback) {
        this.stop();
        return this._animate(callback);
      }
      this._control(1);
    };
    PNG.prototype.pause = function() {
      if (!this._control)
        return;
      this._control(0);
    };
    PNG.prototype.stop = function() {
      if (!this._control)
        return;
      this._control(-1);
    };
    PNG.prototype.toPNG = function(input) {
      var options = this.options, file = this.file, format = this.format, buf, img, gif, i, control, disposeOp;
      if (format !== "gif") {
        buf = exec(
          "convert",
          [format + ":-", "png:-"],
          { stdio: ["pipe", "pipe", "ignore"], input }
        );
        img = PNG(buf, options);
        img.file = file;
        return img;
      }
      gif = GIF(input, options);
      this.width = gif.width;
      this.height = gif.height;
      this.frames = [];
      for (i = 0; i < gif.images.length; i++) {
        img = gif.images[i];
        control = img.control || gif;
        disposeOp = Math.max(0, (control.disposeMethod || 0) - 1);
        if (disposeOp > 2)
          disposeOp = 0;
        this.frames.push({
          fctl: {
            sequenceNumber: i,
            width: img.width,
            height: img.height,
            xOffset: img.left,
            yOffset: img.top,
            delayNum: control.delay,
            delayDen: 100,
            disposeOp,
            blendOp: 1
          },
          fdat: [],
          _pixels: [],
          _bmp: img.bmp
        });
      }
      this.bmp = this.frames[0]._bmp;
      this.cellmap = this.createCellmap(this.bmp);
      if (this.frames.length > 1) {
        this.actl = { numFrames: gif.images.length, numPlays: gif.numPlays || 0 };
        this.frames = this.compileFrames(this.frames);
      } else {
        this.frames = void 0;
      }
      return this;
    };
    PNG.prototype.gifMagick = function(input) {
      var options = this.options, file = this.file, format = this.format, buf, fmt, img, frames, frame, width, height, iwidth, twidth, i, lines, line, x, y;
      buf = exec(
        "convert",
        [format + ":-", "-coalesce", "+append", "png:-"],
        { stdio: ["pipe", "pipe", "ignore"], input }
      );
      fmt = '{"W":%W,"H":%H,"w":%w,"h":%h,"d":%T,"x":"%X","y":"%Y"},';
      frames = exec(
        "identify",
        ["-format", fmt, format + ":-"],
        { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"], input }
      );
      frames = JSON.parse("[" + frames.trim().slice(0, -1) + "]");
      img = PNG(buf, options);
      img.file = file;
      Object.keys(img).forEach(function(key) {
        this[key] = img[key];
      }, this);
      width = frames[0].W;
      height = frames[0].H;
      iwidth = 0;
      twidth = 0;
      this.width = width;
      this.height = height;
      this.frames = [];
      for (i = 0; i < frames.length; i++) {
        frame = frames[i];
        frame.x = +frame.x;
        frame.y = +frame.y;
        iwidth = twidth;
        twidth += width;
        lines = [];
        for (y = frame.y; y < height; y++) {
          line = [];
          for (x = iwidth + frame.x; x < twidth; x++) {
            line.push(img.bmp[y][x]);
          }
          lines.push(line);
        }
        this.frames.push({
          fctl: {
            sequenceNumber: i,
            width: frame.w,
            height: frame.h,
            xOffset: frame.x,
            yOffset: frame.y,
            delayNum: frame.d,
            delayDen: 100,
            disposeOp: 0,
            blendOp: 0
          },
          fdat: [],
          _pixels: [],
          _bmp: lines
        });
      }
      this.bmp = this.frames[0]._bmp;
      this.cellmap = this.createCellmap(this.bmp);
      if (this.frames.length > 1) {
        this.actl = { numFrames: frames.length, numPlays: 0 };
        this.frames = this.compileFrames(this.frames);
      } else {
        this.frames = void 0;
      }
      return this;
    };
    PNG.prototype.decompress = function(buffers) {
      return zlib.inflateSync(new Buffer(buffers.reduce(function(out, data) {
        return out.concat(Array.prototype.slice.call(data));
      }, [])));
    };
    PNG.prototype.crc32 = function() {
      var crcTable = [
        0,
        1996959894,
        3993919788,
        2567524794,
        124634137,
        1886057615,
        3915621685,
        2657392035,
        249268274,
        2044508324,
        3772115230,
        2547177864,
        162941995,
        2125561021,
        3887607047,
        2428444049,
        498536548,
        1789927666,
        4089016648,
        2227061214,
        450548861,
        1843258603,
        4107580753,
        2211677639,
        325883990,
        1684777152,
        4251122042,
        2321926636,
        335633487,
        1661365465,
        4195302755,
        2366115317,
        997073096,
        1281953886,
        3579855332,
        2724688242,
        1006888145,
        1258607687,
        3524101629,
        2768942443,
        901097722,
        1119000684,
        3686517206,
        2898065728,
        853044451,
        1172266101,
        3705015759,
        2882616665,
        651767980,
        1373503546,
        3369554304,
        3218104598,
        565507253,
        1454621731,
        3485111705,
        3099436303,
        671266974,
        1594198024,
        3322730930,
        2970347812,
        795835527,
        1483230225,
        3244367275,
        3060149565,
        1994146192,
        31158534,
        2563907772,
        4023717930,
        1907459465,
        112637215,
        2680153253,
        3904427059,
        2013776290,
        251722036,
        2517215374,
        3775830040,
        2137656763,
        141376813,
        2439277719,
        3865271297,
        1802195444,
        476864866,
        2238001368,
        4066508878,
        1812370925,
        453092731,
        2181625025,
        4111451223,
        1706088902,
        314042704,
        2344532202,
        4240017532,
        1658658271,
        366619977,
        2362670323,
        4224994405,
        1303535960,
        984961486,
        2747007092,
        3569037538,
        1256170817,
        1037604311,
        2765210733,
        3554079995,
        1131014506,
        879679996,
        2909243462,
        3663771856,
        1141124467,
        855842277,
        2852801631,
        3708648649,
        1342533948,
        654459306,
        3188396048,
        3373015174,
        1466479909,
        544179635,
        3110523913,
        3462522015,
        1591671054,
        702138776,
        2966460450,
        3352799412,
        1504918807,
        783551873,
        3082640443,
        3233442989,
        3988292384,
        2596254646,
        62317068,
        1957810842,
        3939845945,
        2647816111,
        81470997,
        1943803523,
        3814918930,
        2489596804,
        225274430,
        2053790376,
        3826175755,
        2466906013,
        167816743,
        2097651377,
        4027552580,
        2265490386,
        503444072,
        1762050814,
        4150417245,
        2154129355,
        426522225,
        1852507879,
        4275313526,
        2312317920,
        282753626,
        1742555852,
        4189708143,
        2394877945,
        397917763,
        1622183637,
        3604390888,
        2714866558,
        953729732,
        1340076626,
        3518719985,
        2797360999,
        1068828381,
        1219638859,
        3624741850,
        2936675148,
        906185462,
        1090812512,
        3747672003,
        2825379669,
        829329135,
        1181335161,
        3412177804,
        3160834842,
        628085408,
        1382605366,
        3423369109,
        3138078467,
        570562233,
        1426400815,
        3317316542,
        2998733608,
        733239954,
        1555261956,
        3268935591,
        3050360625,
        752459403,
        1541320221,
        2607071920,
        3965973030,
        1969922972,
        40735498,
        2617837225,
        3943577151,
        1913087877,
        83908371,
        2512341634,
        3803740692,
        2075208622,
        213261112,
        2463272603,
        3855990285,
        2094854071,
        198958881,
        2262029012,
        4057260610,
        1759359992,
        534414190,
        2176718541,
        4139329115,
        1873836001,
        414664567,
        2282248934,
        4279200368,
        1711684554,
        285281116,
        2405801727,
        4167216745,
        1634467795,
        376229701,
        2685067896,
        3608007406,
        1308918612,
        956543938,
        2808555105,
        3495958263,
        1231636301,
        1047427035,
        2932959818,
        3654703836,
        1088359270,
        936918e3,
        2847714899,
        3736837829,
        1202900863,
        817233897,
        3183342108,
        3401237130,
        1404277552,
        615818150,
        3134207493,
        3453421203,
        1423857449,
        601450431,
        3009837614,
        3294710456,
        1567103746,
        711928724,
        3020668471,
        3272380065,
        1510334235,
        755167117
      ];
      return function crc32(buf) {
        var crc = -1;
        for (var i = 0, len = buf.length; i < len; i++) {
          crc = crcTable[(crc ^ buf[i]) & 255] ^ crc >>> 8;
        }
        return crc ^ -1;
      };
    }();
    PNG.prototype._debug = function() {
      if (!this.options.log)
        return;
      return this.options.log.apply(null, arguments);
    };
    function GIF(file, options) {
      var self = this;
      if (!(this instanceof GIF)) {
        return new GIF(file, options);
      }
      var info = {}, p = 0, buf, i, total, sig, desc, img, ext, label, size;
      if (!file)
        throw new Error("no file");
      options = options || {};
      this.options = options;
      this.pixelLimit = this.options.pixelLimit || 7622550;
      this.totalPixels = 0;
      if (Buffer.isBuffer(file)) {
        buf = file;
        file = null;
      } else {
        file = path.resolve(process.cwd(), file);
        buf = fs.readFileSync(file);
      }
      sig = buf.slice(0, 6).toString("ascii");
      if (sig !== "GIF87a" && sig !== "GIF89a") {
        throw new Error("bad header: " + sig);
      }
      this.width = buf.readUInt16LE(6);
      this.height = buf.readUInt16LE(8);
      this.flags = buf.readUInt8(10);
      this.gct = !!(this.flags & 128);
      this.gctsize = (this.flags & 7) + 1;
      this.bgIndex = buf.readUInt8(11);
      this.aspect = buf.readUInt8(12);
      p += 13;
      if (this.gct) {
        this.colors = [];
        total = 1 << this.gctsize;
        for (i = 0; i < total; i++, p += 3) {
          this.colors.push([buf[p], buf[p + 1], buf[p + 2], 255]);
        }
      }
      this.images = [];
      this.extensions = [];
      try {
        while (p < buf.length) {
          desc = buf.readUInt8(p);
          p += 1;
          if (desc === 44) {
            img = {};
            img.left = buf.readUInt16LE(p);
            p += 2;
            img.top = buf.readUInt16LE(p);
            p += 2;
            img.width = buf.readUInt16LE(p);
            p += 2;
            img.height = buf.readUInt16LE(p);
            p += 2;
            img.flags = buf.readUInt8(p);
            p += 1;
            img.lct = !!(img.flags & 128);
            img.ilace = !!(img.flags & 64);
            img.lctsize = (img.flags & 7) + 1;
            if (img.lct) {
              img.lcolors = [];
              total = 1 << img.lctsize;
              for (i = 0; i < total; i++, p += 3) {
                img.lcolors.push([buf[p], buf[p + 1], buf[p + 2], 255]);
              }
            }
            img.codeSize = buf.readUInt8(p);
            p += 1;
            img.size = buf.readUInt8(p);
            p += 1;
            img.lzw = [buf.slice(p, p + img.size)];
            p += img.size;
            while (buf[p] !== 0) {
              if (buf[p] === 59 && p === buf.length - 1) {
                p--;
                break;
              }
              size = buf.readUInt8(p);
              p += 1;
              img.lzw.push(buf.slice(p, p + size));
              p += size;
            }
            assert.equal(buf.readUInt8(p), 0);
            p += 1;
            if (ext && ext.label === 249) {
              img.control = ext;
            }
            this.totalPixels += img.width * img.height;
            this.images.push(img);
            if (this.totalPixels >= this.pixelLimit) {
              break;
            }
          } else if (desc === 33) {
            ext = {};
            label = buf.readUInt8(p);
            p += 1;
            ext.label = label;
            if (label === 249) {
              size = buf.readUInt8(p);
              assert.equal(size, 4);
              p += 1;
              ext.fields = buf.readUInt8(p);
              ext.disposeMethod = ext.fields >> 2 & 7;
              ext.useTransparent = !!(ext.fields & 1);
              p += 1;
              ext.delay = buf.readUInt16LE(p);
              p += 2;
              ext.transparentColor = buf.readUInt8(p);
              p += 1;
              while (buf[p] !== 0) {
                size = buf.readUInt8(p);
                p += 1;
                p += size;
              }
              assert.equal(buf.readUInt8(p), 0);
              p += 1;
              this.delay = ext.delay;
              this.transparentColor = ext.transparentColor;
              this.disposeMethod = ext.disposeMethod;
              this.useTransparent = ext.useTransparent;
            } else if (label === 255) {
              size = buf.readUInt8(p);
              p += 1;
              ext.id = buf.slice(p, p + 8).toString("ascii");
              p += 8;
              ext.auth = buf.slice(p, p + 3).toString("ascii");
              p += 3;
              ext.data = [];
              while (buf[p] !== 0) {
                size = buf.readUInt8(p);
                p += 1;
                ext.data.push(buf.slice(p, p + size));
                p += size;
              }
              ext.data = new Buffer(ext.data.reduce(function(out, data) {
                return out.concat(Array.prototype.slice.call(data));
              }, []));
              if (ext.id === "ANIMEXTS" && ext.auth === "1.0") {
                ext.id = "NETSCAPE";
                ext.auth = "2.0";
                ext.animexts = true;
              }
              if (ext.id === "NETSCAPE" && ext.auth === "2.0") {
                if (ext.data.readUInt8(0) === 1) {
                  ext.numPlays = ext.data.readUInt16LE(1);
                  this.numPlays = ext.numPlays;
                } else if (ext.data.readUInt8(0) === 2) {
                  this.minBuffer = ext.data;
                }
              }
              if (ext.id === "XMP Data" && ext.auth === "XMP") {
                ext.xmp = ext.data.toString("utf8");
                this.xmp = ext.xmp;
              }
              if (ext.id === "ICCRGBG1" && ext.auth === "012") {
                this.icc = ext.data;
              }
              if (ext.id === "fractint" && /^00[1-7]$/.test(ext.auth)) {
                this.fractint = ext.data;
              }
              assert.equal(buf.readUInt8(p), 0);
              p += 1;
            } else {
              ext.data = [];
              while (buf[p] !== 0) {
                size = buf.readUInt8(p);
                p += 1;
                ext.data.push(buf.slice(p, p + size));
                p += size;
              }
              assert.equal(buf.readUInt8(p), 0);
              p += 1;
            }
            this.extensions.push(ext);
          } else if (desc === 59) {
            break;
          } else if (p === buf.length - 1) {
            break;
          } else {
            throw new Error("unknown block");
          }
        }
      } catch (e) {
        if (options.debug) {
          throw e;
        }
      }
      this.images = this.images.map(function(img2, imageIndex) {
        var control = img2.control || this;
        img2.lzw = new Buffer(img2.lzw.reduce(function(out, data) {
          return out.concat(Array.prototype.slice.call(data));
        }, []));
        try {
          img2.data = this.decompress(img2.lzw, img2.codeSize);
        } catch (e) {
          if (options.debug)
            throw e;
          return;
        }
        var interlacing = [
          [0, 8],
          [4, 8],
          [2, 4],
          [1, 2],
          [0, 0]
        ];
        var table = img2.lcolors || this.colors, row = 0, col = 0, ilp = 0, p2 = 0, b, idx, i2, y, x, line, pixel;
        img2.samples = [];
        for (; ; ) {
          b = img2.data[p2++];
          if (b == null)
            break;
          idx = (row * img2.width + col) * 4;
          if (!table[b]) {
            if (options.debug)
              throw new Error("bad samples");
            table[b] = [0, 0, 0, 0];
          }
          img2.samples[idx] = table[b][0];
          img2.samples[idx + 1] = table[b][1];
          img2.samples[idx + 2] = table[b][2];
          img2.samples[idx + 3] = table[b][3];
          if (control.useTransparent && b === control.transparentColor) {
            img2.samples[idx + 3] = 0;
          }
          if (++col >= img2.width) {
            col = 0;
            if (img2.ilace) {
              row += interlacing[ilp][1];
              if (row >= img2.height) {
                row = interlacing[++ilp][0];
              }
            } else {
              row++;
            }
          }
        }
        img2.pixels = [];
        for (i2 = 0; i2 < img2.samples.length; i2 += 4) {
          img2.pixels.push(img2.samples.slice(i2, i2 + 4));
        }
        img2.bmp = [];
        for (y = 0, p2 = 0; y < img2.height; y++) {
          line = [];
          for (x = 0; x < img2.width; x++) {
            pixel = img2.pixels[p2++];
            if (!pixel) {
              if (options.debug)
                throw new Error("no pixel");
              line.push({ r: 0, g: 0, b: 0, a: 0 });
              continue;
            }
            line.push({ r: pixel[0], g: pixel[1], b: pixel[2], a: pixel[3] });
          }
          img2.bmp.push(line);
        }
        return img2;
      }, this).filter(Boolean);
      if (!this.images.length) {
        throw new Error("no image data or bad decompress");
      }
    }
    GIF.prototype.decompress = function(input, codeSize) {
      var bitDepth = codeSize + 1, CC = 1 << codeSize, EOI = CC + 1, stack = [], table = [], ntable = 0, oldCode = null, buffer = 0, nbuffer = 0, p = 0, buf = [], bits, read, ans, n, code, i, K, b, maxElem;
      for (; ; ) {
        if (stack.length === 0) {
          bits = bitDepth;
          read = 0;
          ans = 0;
          while (read < bits) {
            if (nbuffer === 0) {
              if (p >= input.length)
                return buf;
              buffer = input[p++];
              nbuffer = 8;
            }
            n = Math.min(bits - read, nbuffer);
            ans |= (buffer & (1 << n) - 1) << read;
            read += n;
            nbuffer -= n;
            buffer >>= n;
          }
          code = ans;
          if (code === EOI) {
            break;
          }
          if (code === CC) {
            table = [];
            for (i = 0; i < CC; ++i) {
              table[i] = [i, -1, i];
            }
            bitDepth = codeSize + 1;
            maxElem = 1 << bitDepth;
            ntable = CC + 2;
            oldCode = null;
            continue;
          }
          if (oldCode === null) {
            oldCode = code;
            buf.push(table[code][0]);
            continue;
          }
          if (code < ntable) {
            for (i = code; i >= 0; i = table[i][1]) {
              stack.push(table[i][0]);
            }
            table[ntable++] = [
              table[code][2],
              oldCode,
              table[oldCode][2]
            ];
          } else {
            K = table[oldCode][2];
            table[ntable++] = [K, oldCode, K];
            for (i = code; i >= 0; i = table[i][1]) {
              stack.push(table[i][0]);
            }
          }
          oldCode = code;
          if (ntable === maxElem) {
            maxElem = 1 << ++bitDepth;
            if (bitDepth > 12)
              bitDepth = 12;
          }
        }
        b = stack.pop();
        if (b == null)
          break;
        buf.push(b);
      }
      return buf;
    };
    exports = PNG;
    exports.png = PNG;
    exports.gif = GIF;
    module2.exports = exports;
  }
});

// node_modules/blessed/lib/widgets/ansiimage.js
var require_ansiimage = __commonJS({
  "node_modules/blessed/lib/widgets/ansiimage.js"(exports, module2) {
    var cp = require("child_process");
    var colors = require_colors();
    var Node = require_node();
    var Box = require_box();
    var tng = require_tng();
    function ANSIImage(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new ANSIImage(options);
      }
      options = options || {};
      options.shrink = true;
      Box.call(this, options);
      this.scale = this.options.scale || 1;
      this.options.animate = this.options.animate !== false;
      this._noFill = true;
      if (this.options.file) {
        this.setImage(this.options.file);
      }
      this.screen.on("prerender", function() {
        var lpos = self.lpos;
        if (!lpos)
          return;
        self.screen.clearRegion(lpos.xi, lpos.xl, lpos.yi, lpos.yl);
      });
      this.on("destroy", function() {
        self.stop();
      });
    }
    ANSIImage.prototype.__proto__ = Box.prototype;
    ANSIImage.prototype.type = "ansiimage";
    ANSIImage.curl = function(url) {
      try {
        return cp.execFileSync(
          "curl",
          ["-s", "-A", "", url],
          { stdio: ["ignore", "pipe", "ignore"] }
        );
      } catch (e) {
        ;
      }
      try {
        return cp.execFileSync(
          "wget",
          ["-U", "", "-O", "-", url],
          { stdio: ["ignore", "pipe", "ignore"] }
        );
      } catch (e) {
        ;
      }
      throw new Error("curl or wget failed.");
    };
    ANSIImage.prototype.setImage = function(file) {
      this.file = typeof file === "string" ? file : null;
      if (/^https?:/.test(file)) {
        file = ANSIImage.curl(file);
      }
      var width = this.position.width;
      var height = this.position.height;
      if (width != null) {
        width = this.width;
      }
      if (height != null) {
        height = this.height;
      }
      try {
        this.setContent("");
        this.img = tng(file, {
          colors,
          width,
          height,
          scale: this.scale,
          ascii: this.options.ascii,
          speed: this.options.speed,
          filename: this.file
        });
        if (width == null || height == null) {
          this.width = this.img.cellmap[0].length;
          this.height = this.img.cellmap.length;
        }
        if (this.img.frames && this.options.animate) {
          this.play();
        } else {
          this.cellmap = this.img.cellmap;
        }
      } catch (e) {
        this.setContent("Image Error: " + e.message);
        this.img = null;
        this.cellmap = null;
      }
    };
    ANSIImage.prototype.play = function() {
      var self = this;
      if (!this.img)
        return;
      return this.img.play(function(bmp, cellmap) {
        self.cellmap = cellmap;
        self.screen.render();
      });
    };
    ANSIImage.prototype.pause = function() {
      if (!this.img)
        return;
      return this.img.pause();
    };
    ANSIImage.prototype.stop = function() {
      if (!this.img)
        return;
      return this.img.stop();
    };
    ANSIImage.prototype.clearImage = function() {
      this.stop();
      this.setContent("");
      this.img = null;
      this.cellmap = null;
    };
    ANSIImage.prototype.render = function() {
      var coords = this._render();
      if (!coords)
        return;
      if (this.img && this.cellmap) {
        this.img.renderElement(this.cellmap, this);
      }
      return coords;
    };
    module2.exports = ANSIImage;
  }
});

// node_modules/blessed/lib/widgets/bigtext.js
var require_bigtext = __commonJS({
  "node_modules/blessed/lib/widgets/bigtext.js"(exports, module2) {
    var fs = require("fs");
    var Node = require_node();
    var Box = require_box();
    function BigText(options) {
      if (!(this instanceof Node)) {
        return new BigText(options);
      }
      options = options || {};
      options.font = options.font || __dirname + "/../../usr/fonts/ter-u14n.json";
      options.fontBold = options.font || __dirname + "/../../usr/fonts/ter-u14b.json";
      this.fch = options.fch;
      this.ratio = {};
      this.font = this.loadFont(options.font);
      this.fontBold = this.loadFont(options.font);
      Box.call(this, options);
      if (this.style.bold) {
        this.font = this.fontBold;
      }
    }
    BigText.prototype.__proto__ = Box.prototype;
    BigText.prototype.type = "bigtext";
    BigText.prototype.loadFont = function(filename) {
      var self = this, data, font;
      data = JSON.parse(fs.readFileSync(filename, "utf8"));
      this.ratio.width = data.width;
      this.ratio.height = data.height;
      function convertLetter(ch, lines) {
        var line, i;
        while (lines.length > self.ratio.height) {
          lines.shift();
          lines.pop();
        }
        lines = lines.map(function(line2) {
          var chs = line2.split("");
          chs = chs.map(function(ch2) {
            return ch2 === " " ? 0 : 1;
          });
          while (chs.length < self.ratio.width) {
            chs.push(0);
          }
          return chs;
        });
        while (lines.length < self.ratio.height) {
          line = [];
          for (i = 0; i < self.ratio.width; i++) {
            line.push(0);
          }
          lines.push(line);
        }
        return lines;
      }
      font = Object.keys(data.glyphs).reduce(function(out, ch) {
        var lines = data.glyphs[ch].map;
        out[ch] = convertLetter(ch, lines);
        return out;
      }, {});
      delete font[" "];
      return font;
    };
    BigText.prototype.setContent = function(content) {
      this.content = "";
      this.text = content || "";
    };
    BigText.prototype.render = function() {
      if (this.position.width == null || this._shrinkWidth) {
        this.position.width = this.ratio.width * this.text.length + 1;
        this._shrinkWidth = true;
      }
      if (this.position.height == null || this._shrinkHeight) {
        this.position.height = this.ratio.height + 0;
        this._shrinkHeight = true;
      }
      var coords = this._render();
      if (!coords)
        return;
      var lines = this.screen.lines, left = coords.xi + this.ileft, top = coords.yi + this.itop, right = coords.xl - this.iright, bottom = coords.yl - this.ibottom;
      var dattr = this.sattr(this.style), bg = dattr & 511, fg = dattr >> 9 & 511, flags = dattr >> 18 & 511, attr = flags << 18 | bg << 9 | fg;
      for (var x = left, i = 0; x < right; x += this.ratio.width, i++) {
        var ch = this.text[i];
        if (!ch)
          break;
        var map3 = this.font[ch];
        if (!map3)
          continue;
        for (var y = top; y < Math.min(bottom, top + this.ratio.height); y++) {
          if (!lines[y])
            continue;
          var mline = map3[y - top];
          if (!mline)
            continue;
          for (var mx = 0; mx < this.ratio.width; mx++) {
            var mcell = mline[mx];
            if (mcell == null)
              break;
            if (this.fch && this.fch !== " ") {
              lines[y][x + mx][0] = dattr;
              lines[y][x + mx][1] = mcell === 1 ? this.fch : this.ch;
            } else {
              lines[y][x + mx][0] = mcell === 1 ? attr : dattr;
              lines[y][x + mx][1] = mcell === 1 ? " " : this.ch;
            }
          }
          lines[y].dirty = true;
        }
      }
      return coords;
    };
    module2.exports = BigText;
  }
});

// node_modules/blessed/lib/widgets/input.js
var require_input = __commonJS({
  "node_modules/blessed/lib/widgets/input.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function Input(options) {
      if (!(this instanceof Node)) {
        return new Input(options);
      }
      options = options || {};
      Box.call(this, options);
    }
    Input.prototype.__proto__ = Box.prototype;
    Input.prototype.type = "input";
    module2.exports = Input;
  }
});

// node_modules/blessed/lib/widgets/button.js
var require_button = __commonJS({
  "node_modules/blessed/lib/widgets/button.js"(exports, module2) {
    var Node = require_node();
    var Input = require_input();
    function Button(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Button(options);
      }
      options = options || {};
      if (options.autoFocus == null) {
        options.autoFocus = false;
      }
      Input.call(this, options);
      this.on("keypress", function(ch, key) {
        if (key.name === "enter" || key.name === "space") {
          return self.press();
        }
      });
      if (this.options.mouse) {
        this.on("click", function() {
          return self.press();
        });
      }
    }
    Button.prototype.__proto__ = Input.prototype;
    Button.prototype.type = "button";
    Button.prototype.press = function() {
      this.focus();
      this.value = true;
      var result = this.emit("press");
      delete this.value;
      return result;
    };
    module2.exports = Button;
  }
});

// node_modules/blessed/lib/widgets/checkbox.js
var require_checkbox = __commonJS({
  "node_modules/blessed/lib/widgets/checkbox.js"(exports, module2) {
    var Node = require_node();
    var Input = require_input();
    function Checkbox(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Checkbox(options);
      }
      options = options || {};
      Input.call(this, options);
      this.text = options.content || options.text || "";
      this.checked = this.value = options.checked || false;
      this.on("keypress", function(ch, key) {
        if (key.name === "enter" || key.name === "space") {
          self.toggle();
          self.screen.render();
        }
      });
      if (options.mouse) {
        this.on("click", function() {
          self.toggle();
          self.screen.render();
        });
      }
      this.on("focus", function() {
        var lpos = self.lpos;
        if (!lpos)
          return;
        self.screen.program.lsaveCursor("checkbox");
        self.screen.program.cup(lpos.yi, lpos.xi + 1);
        self.screen.program.showCursor();
      });
      this.on("blur", function() {
        self.screen.program.lrestoreCursor("checkbox", true);
      });
    }
    Checkbox.prototype.__proto__ = Input.prototype;
    Checkbox.prototype.type = "checkbox";
    Checkbox.prototype.render = function() {
      this.clearPos(true);
      this.setContent("[" + (this.checked ? "x" : " ") + "] " + this.text, true);
      return this._render();
    };
    Checkbox.prototype.check = function() {
      if (this.checked)
        return;
      this.checked = this.value = true;
      this.emit("check");
    };
    Checkbox.prototype.uncheck = function() {
      if (!this.checked)
        return;
      this.checked = this.value = false;
      this.emit("uncheck");
    };
    Checkbox.prototype.toggle = function() {
      return this.checked ? this.uncheck() : this.check();
    };
    module2.exports = Checkbox;
  }
});

// node_modules/blessed/lib/widgets/list.js
var require_list = __commonJS({
  "node_modules/blessed/lib/widgets/list.js"(exports, module2) {
    var helpers = require_helpers();
    var Node = require_node();
    var Box = require_box();
    function List(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new List(options);
      }
      options = options || {};
      options.ignoreKeys = true;
      options.scrollable = true;
      Box.call(this, options);
      this.value = "";
      this.items = [];
      this.ritems = [];
      this.selected = 0;
      this._isList = true;
      if (!this.style.selected) {
        this.style.selected = {};
        this.style.selected.bg = options.selectedBg;
        this.style.selected.fg = options.selectedFg;
        this.style.selected.bold = options.selectedBold;
        this.style.selected.underline = options.selectedUnderline;
        this.style.selected.blink = options.selectedBlink;
        this.style.selected.inverse = options.selectedInverse;
        this.style.selected.invisible = options.selectedInvisible;
      }
      if (!this.style.item) {
        this.style.item = {};
        this.style.item.bg = options.itemBg;
        this.style.item.fg = options.itemFg;
        this.style.item.bold = options.itemBold;
        this.style.item.underline = options.itemUnderline;
        this.style.item.blink = options.itemBlink;
        this.style.item.inverse = options.itemInverse;
        this.style.item.invisible = options.itemInvisible;
      }
      [
        "bg",
        "fg",
        "bold",
        "underline",
        "blink",
        "inverse",
        "invisible"
      ].forEach(function(name) {
        if (self.style[name] != null && self.style.item[name] == null) {
          self.style.item[name] = self.style[name];
        }
      });
      if (this.options.itemHoverBg) {
        this.options.itemHoverEffects = { bg: this.options.itemHoverBg };
      }
      if (this.options.itemHoverEffects) {
        this.style.item.hover = this.options.itemHoverEffects;
      }
      if (this.options.itemFocusEffects) {
        this.style.item.focus = this.options.itemFocusEffects;
      }
      this.interactive = options.interactive !== false;
      this.mouse = options.mouse || false;
      if (options.items) {
        this.ritems = options.items;
        options.items.forEach(this.add.bind(this));
      }
      this.select(0);
      if (options.mouse) {
        this.screen._listenMouse(this);
        this.on("element wheeldown", function() {
          self.select(self.selected + 2);
          self.screen.render();
        });
        this.on("element wheelup", function() {
          self.select(self.selected - 2);
          self.screen.render();
        });
      }
      if (options.keys) {
        this.on("keypress", function(ch, key) {
          if (key.name === "up" || options.vi && key.name === "k") {
            self.up();
            self.screen.render();
            return;
          }
          if (key.name === "down" || options.vi && key.name === "j") {
            self.down();
            self.screen.render();
            return;
          }
          if (key.name === "enter" || options.vi && key.name === "l" && !key.shift) {
            self.enterSelected();
            return;
          }
          if (key.name === "escape" || options.vi && key.name === "q") {
            self.cancelSelected();
            return;
          }
          if (options.vi && key.name === "u" && key.ctrl) {
            self.move(-((self.height - self.iheight) / 2) | 0);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "d" && key.ctrl) {
            self.move((self.height - self.iheight) / 2 | 0);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "b" && key.ctrl) {
            self.move(-(self.height - self.iheight));
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "f" && key.ctrl) {
            self.move(self.height - self.iheight);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "h" && key.shift) {
            self.move(self.childBase - self.selected);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "m" && key.shift) {
            var visible = Math.min(
              self.height - self.iheight,
              self.items.length
            ) / 2 | 0;
            self.move(self.childBase + visible - self.selected);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "l" && key.shift) {
            self.down(self.childBase + Math.min(self.height - self.iheight, self.items.length) - self.selected);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "g" && !key.shift) {
            self.select(0);
            self.screen.render();
            return;
          }
          if (options.vi && key.name === "g" && key.shift) {
            self.select(self.items.length - 1);
            self.screen.render();
            return;
          }
          if (options.vi && (key.ch === "/" || key.ch === "?")) {
            if (typeof self.options.search !== "function") {
              return;
            }
            return self.options.search(function(err, value) {
              if (typeof err === "string" || typeof err === "function" || typeof err === "number" || err && err.test) {
                value = err;
                err = null;
              }
              if (err || !value)
                return self.screen.render();
              self.select(self.fuzzyFind(value, key.ch === "?"));
              self.screen.render();
            });
          }
        });
      }
      this.on("resize", function() {
        var visible = self.height - self.iheight;
        if (visible >= self.selected + 1) {
          self.childBase = 0;
          self.childOffset = self.selected;
        } else {
          self.childBase = self.selected - visible + 1;
          self.childOffset = visible - 1;
        }
      });
      this.on("adopt", function(el) {
        if (!~self.items.indexOf(el)) {
          el.fixed = true;
        }
      });
      this.on("remove", function(el) {
        self.removeItem(el);
      });
    }
    List.prototype.__proto__ = Box.prototype;
    List.prototype.type = "list";
    List.prototype.createItem = function(content) {
      var self = this;
      var options = {
        screen: this.screen,
        content,
        align: this.align || "left",
        top: 0,
        left: 0,
        right: this.scrollbar ? 1 : 0,
        tags: this.parseTags,
        height: 1,
        hoverEffects: this.mouse ? this.style.item.hover : null,
        focusEffects: this.mouse ? this.style.item.focus : null,
        autoFocus: false
      };
      if (!this.screen.autoPadding) {
        options.top = 1;
        options.left = this.ileft;
        options.right = this.iright + (this.scrollbar ? 1 : 0);
      }
      if (this.shrink && this.options.normalShrink) {
        delete options.right;
        options.width = "shrink";
      }
      [
        "bg",
        "fg",
        "bold",
        "underline",
        "blink",
        "inverse",
        "invisible"
      ].forEach(function(name) {
        options[name] = function() {
          var attr = self.items[self.selected] === item && self.interactive ? self.style.selected[name] : self.style.item[name];
          if (typeof attr === "function")
            attr = attr(item);
          return attr;
        };
      });
      if (this.style.transparent) {
        options.transparent = true;
      }
      var item = new Box(options);
      if (this.mouse) {
        item.on("click", function() {
          self.focus();
          if (self.items[self.selected] === item) {
            self.emit("action", item, self.selected);
            self.emit("select", item, self.selected);
            return;
          }
          self.select(item);
          self.screen.render();
        });
      }
      this.emit("create item");
      return item;
    };
    List.prototype.add = List.prototype.addItem = List.prototype.appendItem = function(content) {
      content = typeof content === "string" ? content : content.getContent();
      var item = this.createItem(content);
      item.position.top = this.items.length;
      if (!this.screen.autoPadding) {
        item.position.top = this.itop + this.items.length;
      }
      this.ritems.push(content);
      this.items.push(item);
      this.append(item);
      if (this.items.length === 1) {
        this.select(0);
      }
      this.emit("add item");
      return item;
    };
    List.prototype.removeItem = function(child) {
      var i = this.getItemIndex(child);
      if (~i && this.items[i]) {
        child = this.items.splice(i, 1)[0];
        this.ritems.splice(i, 1);
        this.remove(child);
        for (var j = i; j < this.items.length; j++) {
          this.items[j].position.top--;
        }
        if (i === this.selected) {
          this.select(i - 1);
        }
      }
      this.emit("remove item");
      return child;
    };
    List.prototype.insertItem = function(child, content) {
      content = typeof content === "string" ? content : content.getContent();
      var i = this.getItemIndex(child);
      if (!~i)
        return;
      if (i >= this.items.length)
        return this.appendItem(content);
      var item = this.createItem(content);
      for (var j = i; j < this.items.length; j++) {
        this.items[j].position.top++;
      }
      item.position.top = i + (!this.screen.autoPadding ? 1 : 0);
      this.ritems.splice(i, 0, content);
      this.items.splice(i, 0, item);
      this.append(item);
      if (i === this.selected) {
        this.select(i + 1);
      }
      this.emit("insert item");
    };
    List.prototype.getItem = function(child) {
      return this.items[this.getItemIndex(child)];
    };
    List.prototype.setItem = function(child, content) {
      content = typeof content === "string" ? content : content.getContent();
      var i = this.getItemIndex(child);
      if (!~i)
        return;
      this.items[i].setContent(content);
      this.ritems[i] = content;
    };
    List.prototype.clearItems = function() {
      return this.setItems([]);
    };
    List.prototype.setItems = function(items) {
      var original = this.items.slice(), selected = this.selected, sel = this.ritems[this.selected], i = 0;
      items = items.slice();
      this.select(0);
      for (; i < items.length; i++) {
        if (this.items[i]) {
          this.items[i].setContent(items[i]);
        } else {
          this.add(items[i]);
        }
      }
      for (; i < original.length; i++) {
        this.remove(original[i]);
      }
      this.ritems = items;
      sel = items.indexOf(sel);
      if (~sel) {
        this.select(sel);
      } else if (items.length === original.length) {
        this.select(selected);
      } else {
        this.select(Math.min(selected, items.length - 1));
      }
      this.emit("set items");
    };
    List.prototype.pushItem = function(content) {
      this.appendItem(content);
      return this.items.length;
    };
    List.prototype.popItem = function() {
      return this.removeItem(this.items.length - 1);
    };
    List.prototype.unshiftItem = function(content) {
      this.insertItem(0, content);
      return this.items.length;
    };
    List.prototype.shiftItem = function() {
      return this.removeItem(0);
    };
    List.prototype.spliceItem = function(child, n) {
      var self = this;
      var i = this.getItemIndex(child);
      if (!~i)
        return;
      var items = Array.prototype.slice.call(arguments, 2);
      var removed = [];
      while (n--) {
        removed.push(this.removeItem(i));
      }
      items.forEach(function(item) {
        self.insertItem(i++, item);
      });
      return removed;
    };
    List.prototype.find = List.prototype.fuzzyFind = function(search, back) {
      var start = this.selected + (back ? -1 : 1), i;
      if (typeof search === "number")
        search += "";
      if (search && search[0] === "/" && search[search.length - 1] === "/") {
        try {
          search = new RegExp(search.slice(1, -1));
        } catch (e) {
          ;
        }
      }
      var test = typeof search === "string" ? function(item) {
        return !!~item.indexOf(search);
      } : search.test ? search.test.bind(search) : search;
      if (typeof test !== "function") {
        if (this.screen.options.debug) {
          throw new Error("fuzzyFind(): `test` is not a function.");
        }
        return this.selected;
      }
      if (!back) {
        for (i = start; i < this.ritems.length; i++) {
          if (test(helpers.cleanTags(this.ritems[i])))
            return i;
        }
        for (i = 0; i < start; i++) {
          if (test(helpers.cleanTags(this.ritems[i])))
            return i;
        }
      } else {
        for (i = start; i >= 0; i--) {
          if (test(helpers.cleanTags(this.ritems[i])))
            return i;
        }
        for (i = this.ritems.length - 1; i > start; i--) {
          if (test(helpers.cleanTags(this.ritems[i])))
            return i;
        }
      }
      return this.selected;
    };
    List.prototype.getItemIndex = function(child) {
      if (typeof child === "number") {
        return child;
      } else if (typeof child === "string") {
        var i = this.ritems.indexOf(child);
        if (~i)
          return i;
        for (i = 0; i < this.ritems.length; i++) {
          if (helpers.cleanTags(this.ritems[i]) === child) {
            return i;
          }
        }
        return -1;
      } else {
        return this.items.indexOf(child);
      }
    };
    List.prototype.select = function(index) {
      if (!this.interactive) {
        return;
      }
      if (!this.items.length) {
        this.selected = 0;
        this.value = "";
        this.scrollTo(0);
        return;
      }
      if (typeof index === "object") {
        index = this.items.indexOf(index);
      }
      if (index < 0) {
        index = 0;
      } else if (index >= this.items.length) {
        index = this.items.length - 1;
      }
      if (this.selected === index && this._listInitialized)
        return;
      this._listInitialized = true;
      this.selected = index;
      this.value = helpers.cleanTags(this.ritems[this.selected]);
      if (!this.parent)
        return;
      this.scrollTo(this.selected);
      this.emit("select item", this.items[this.selected], this.selected);
    };
    List.prototype.move = function(offset) {
      this.select(this.selected + offset);
    };
    List.prototype.up = function(offset) {
      this.move(-(offset || 1));
    };
    List.prototype.down = function(offset) {
      this.move(offset || 1);
    };
    List.prototype.pick = function(label, callback) {
      if (!callback) {
        callback = label;
        label = null;
      }
      if (!this.interactive) {
        return callback();
      }
      var self = this;
      var focused = this.screen.focused;
      if (focused && focused._done)
        focused._done("stop");
      this.screen.saveFocus();
      this.focus();
      this.show();
      this.select(0);
      if (label)
        this.setLabel(label);
      this.screen.render();
      this.once("action", function(el, selected) {
        if (label)
          self.removeLabel();
        self.screen.restoreFocus();
        self.hide();
        self.screen.render();
        if (!el)
          return callback();
        return callback(null, helpers.cleanTags(self.ritems[selected]));
      });
    };
    List.prototype.enterSelected = function(i) {
      if (i != null)
        this.select(i);
      this.emit("action", this.items[this.selected], this.selected);
      this.emit("select", this.items[this.selected], this.selected);
    };
    List.prototype.cancelSelected = function(i) {
      if (i != null)
        this.select(i);
      this.emit("action");
      this.emit("cancel");
    };
    module2.exports = List;
  }
});

// node_modules/blessed/lib/widgets/filemanager.js
var require_filemanager = __commonJS({
  "node_modules/blessed/lib/widgets/filemanager.js"(exports, module2) {
    var path = require("path");
    var fs = require("fs");
    var helpers = require_helpers();
    var Node = require_node();
    var List = require_list();
    function FileManager(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new FileManager(options);
      }
      options = options || {};
      options.parseTags = true;
      List.call(this, options);
      this.cwd = options.cwd || process.cwd();
      this.file = this.cwd;
      this.value = this.cwd;
      if (options.label && ~options.label.indexOf("%path")) {
        this._label.setContent(options.label.replace("%path", this.cwd));
      }
      this.on("select", function(item) {
        var value = item.content.replace(/\{[^{}]+\}/g, "").replace(/@$/, ""), file = path.resolve(self.cwd, value);
        return fs.stat(file, function(err, stat) {
          if (err) {
            return self.emit("error", err, file);
          }
          self.file = file;
          self.value = file;
          if (stat.isDirectory()) {
            self.emit("cd", file, self.cwd);
            self.cwd = file;
            if (options.label && ~options.label.indexOf("%path")) {
              self._label.setContent(options.label.replace("%path", file));
            }
            self.refresh();
          } else {
            self.emit("file", file);
          }
        });
      });
    }
    FileManager.prototype.__proto__ = List.prototype;
    FileManager.prototype.type = "file-manager";
    FileManager.prototype.refresh = function(cwd, callback) {
      if (!callback) {
        callback = cwd;
        cwd = null;
      }
      var self = this;
      if (cwd)
        this.cwd = cwd;
      else
        cwd = this.cwd;
      return fs.readdir(cwd, function(err, list) {
        if (err && err.code === "ENOENT") {
          self.cwd = cwd !== process.env.HOME ? process.env.HOME : "/";
          return self.refresh(callback);
        }
        if (err) {
          if (callback)
            return callback(err);
          return self.emit("error", err, cwd);
        }
        var dirs = [], files = [];
        list.unshift("..");
        list.forEach(function(name) {
          var f = path.resolve(cwd, name), stat;
          try {
            stat = fs.lstatSync(f);
          } catch (e) {
            ;
          }
          if (stat && stat.isDirectory() || name === "..") {
            dirs.push({
              name,
              text: "{light-blue-fg}" + name + "{/light-blue-fg}/",
              dir: true
            });
          } else if (stat && stat.isSymbolicLink()) {
            files.push({
              name,
              text: "{light-cyan-fg}" + name + "{/light-cyan-fg}@",
              dir: false
            });
          } else {
            files.push({
              name,
              text: name,
              dir: false
            });
          }
        });
        dirs = helpers.asort(dirs);
        files = helpers.asort(files);
        list = dirs.concat(files).map(function(data) {
          return data.text;
        });
        self.setItems(list);
        self.select(0);
        self.screen.render();
        self.emit("refresh");
        if (callback)
          callback();
      });
    };
    FileManager.prototype.pick = function(cwd, callback) {
      if (!callback) {
        callback = cwd;
        cwd = null;
      }
      var self = this, focused = this.screen.focused === this, hidden = this.hidden, onfile, oncancel;
      function resume() {
        self.removeListener("file", onfile);
        self.removeListener("cancel", oncancel);
        if (hidden) {
          self.hide();
        }
        if (!focused) {
          self.screen.restoreFocus();
        }
        self.screen.render();
      }
      this.on("file", onfile = function(file) {
        resume();
        return callback(null, file);
      });
      this.on("cancel", oncancel = function() {
        resume();
        return callback();
      });
      this.refresh(cwd, function(err) {
        if (err)
          return callback(err);
        if (hidden) {
          self.show();
        }
        if (!focused) {
          self.screen.saveFocus();
          self.focus();
        }
        self.screen.render();
      });
    };
    FileManager.prototype.reset = function(cwd, callback) {
      if (!callback) {
        callback = cwd;
        cwd = null;
      }
      this.cwd = cwd || this.options.cwd;
      this.refresh(callback);
    };
    module2.exports = FileManager;
  }
});

// node_modules/blessed/lib/widgets/form.js
var require_form = __commonJS({
  "node_modules/blessed/lib/widgets/form.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function Form(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Form(options);
      }
      options = options || {};
      options.ignoreKeys = true;
      Box.call(this, options);
      if (options.keys) {
        this.screen._listenKeys(this);
        this.on("element keypress", function(el, ch, key) {
          if (key.name === "tab" && !key.shift || el.type === "textbox" && options.autoNext && key.name === "enter" || key.name === "down" || options.vi && key.name === "j") {
            if (el.type === "textbox" || el.type === "textarea") {
              if (key.name === "j")
                return;
              if (key.name === "tab") {
                el.emit("keypress", null, { name: "backspace" });
              }
              el.emit("keypress", "\x1B", { name: "escape" });
            }
            self.focusNext();
            return;
          }
          if (key.name === "tab" && key.shift || key.name === "up" || options.vi && key.name === "k") {
            if (el.type === "textbox" || el.type === "textarea") {
              if (key.name === "k")
                return;
              el.emit("keypress", "\x1B", { name: "escape" });
            }
            self.focusPrevious();
            return;
          }
          if (key.name === "escape") {
            self.focus();
            return;
          }
        });
      }
    }
    Form.prototype.__proto__ = Box.prototype;
    Form.prototype.type = "form";
    Form.prototype._refresh = function() {
      if (!this._children) {
        var out = [];
        this.children.forEach(function fn(el) {
          if (el.keyable)
            out.push(el);
          el.children.forEach(fn);
        });
        this._children = out;
      }
    };
    Form.prototype._visible = function() {
      return !!this._children.filter(function(el) {
        return el.visible;
      }).length;
    };
    Form.prototype.next = function() {
      this._refresh();
      if (!this._visible())
        return;
      if (!this._selected) {
        this._selected = this._children[0];
        if (!this._selected.visible)
          return this.next();
        if (this.screen.focused !== this._selected)
          return this._selected;
      }
      var i = this._children.indexOf(this._selected);
      if (!~i || !this._children[i + 1]) {
        this._selected = this._children[0];
        if (!this._selected.visible)
          return this.next();
        return this._selected;
      }
      this._selected = this._children[i + 1];
      if (!this._selected.visible)
        return this.next();
      return this._selected;
    };
    Form.prototype.previous = function() {
      this._refresh();
      if (!this._visible())
        return;
      if (!this._selected) {
        this._selected = this._children[this._children.length - 1];
        if (!this._selected.visible)
          return this.previous();
        if (this.screen.focused !== this._selected)
          return this._selected;
      }
      var i = this._children.indexOf(this._selected);
      if (!~i || !this._children[i - 1]) {
        this._selected = this._children[this._children.length - 1];
        if (!this._selected.visible)
          return this.previous();
        return this._selected;
      }
      this._selected = this._children[i - 1];
      if (!this._selected.visible)
        return this.previous();
      return this._selected;
    };
    Form.prototype.focusNext = function() {
      var next = this.next();
      if (next)
        next.focus();
    };
    Form.prototype.focusPrevious = function() {
      var previous = this.previous();
      if (previous)
        previous.focus();
    };
    Form.prototype.resetSelected = function() {
      this._selected = null;
    };
    Form.prototype.focusFirst = function() {
      this.resetSelected();
      this.focusNext();
    };
    Form.prototype.focusLast = function() {
      this.resetSelected();
      this.focusPrevious();
    };
    Form.prototype.submit = function() {
      var out = {};
      this.children.forEach(function fn(el) {
        if (el.value != null) {
          var name = el.name || el.type;
          if (Array.isArray(out[name])) {
            out[name].push(el.value);
          } else if (out[name]) {
            out[name] = [out[name], el.value];
          } else {
            out[name] = el.value;
          }
        }
        el.children.forEach(fn);
      });
      this.emit("submit", out);
      return this.submission = out;
    };
    Form.prototype.cancel = function() {
      this.emit("cancel");
    };
    Form.prototype.reset = function() {
      this.children.forEach(function fn(el) {
        switch (el.type) {
          case "screen":
            break;
          case "box":
            break;
          case "text":
            break;
          case "line":
            break;
          case "scrollable-box":
            break;
          case "list":
            el.select(0);
            return;
          case "form":
            break;
          case "input":
            break;
          case "textbox":
            el.clearInput();
            return;
          case "textarea":
            el.clearInput();
            return;
          case "button":
            delete el.value;
            break;
          case "progress-bar":
            el.setProgress(0);
            break;
          case "file-manager":
            el.refresh(el.options.cwd);
            return;
          case "checkbox":
            el.uncheck();
            return;
          case "radio-set":
            break;
          case "radio-button":
            el.uncheck();
            return;
          case "prompt":
            break;
          case "question":
            break;
          case "message":
            break;
          case "info":
            break;
          case "loading":
            break;
          case "list-bar":
            break;
          case "dir-manager":
            el.refresh(el.options.cwd);
            return;
          case "terminal":
            el.write("");
            return;
          case "image":
            return;
        }
        el.children.forEach(fn);
      });
      this.emit("reset");
    };
    module2.exports = Form;
  }
});

// node_modules/blessed/lib/widgets/overlayimage.js
var require_overlayimage = __commonJS({
  "node_modules/blessed/lib/widgets/overlayimage.js"(exports, module2) {
    var fs = require("fs");
    var cp = require("child_process");
    var helpers = require_helpers();
    var Node = require_node();
    var Box = require_box();
    function OverlayImage(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new OverlayImage(options);
      }
      options = options || {};
      Box.call(this, options);
      if (options.w3m) {
        OverlayImage.w3mdisplay = options.w3m;
      }
      if (OverlayImage.hasW3MDisplay == null) {
        if (fs.existsSync(OverlayImage.w3mdisplay)) {
          OverlayImage.hasW3MDisplay = true;
        } else if (options.search !== false) {
          var file = helpers.findFile("/usr", "w3mimgdisplay") || helpers.findFile("/lib", "w3mimgdisplay") || helpers.findFile("/bin", "w3mimgdisplay");
          if (file) {
            OverlayImage.hasW3MDisplay = true;
            OverlayImage.w3mdisplay = file;
          } else {
            OverlayImage.hasW3MDisplay = false;
          }
        }
      }
      this.on("hide", function() {
        self._lastFile = self.file;
        self.clearImage();
      });
      this.on("show", function() {
        if (!self._lastFile)
          return;
        self.setImage(self._lastFile);
      });
      this.on("detach", function() {
        self._lastFile = self.file;
        self.clearImage();
      });
      this.on("attach", function() {
        if (!self._lastFile)
          return;
        self.setImage(self._lastFile);
      });
      this.onScreenEvent("resize", function() {
        self._needsRatio = true;
      });
      this.onScreenEvent("render", function() {
        self.screen.program.flush();
        if (!self._noImage) {
          self.setImage(self.file);
        }
      });
      if (this.options.file || this.options.img) {
        this.setImage(this.options.file || this.options.img);
      }
    }
    OverlayImage.prototype.__proto__ = Box.prototype;
    OverlayImage.prototype.type = "overlayimage";
    OverlayImage.w3mdisplay = "/usr/lib/w3m/w3mimgdisplay";
    OverlayImage.prototype.spawn = function(file, args, opt, callback) {
      var spawn = require("child_process").spawn, ps;
      opt = opt || {};
      ps = spawn(file, args, opt);
      ps.on("error", function(err) {
        if (!callback)
          return;
        return callback(err);
      });
      ps.on("exit", function(code) {
        if (!callback)
          return;
        if (code !== 0)
          return callback(new Error("Exit Code: " + code));
        return callback(null, code === 0);
      });
      return ps;
    };
    OverlayImage.prototype.setImage = function(img, callback) {
      var self = this;
      if (this._settingImage) {
        this._queue = this._queue || [];
        this._queue.push([img, callback]);
        return;
      }
      this._settingImage = true;
      var reset = function() {
        self._settingImage = false;
        self._queue = self._queue || [];
        var item = self._queue.shift();
        if (item) {
          self.setImage(item[0], item[1]);
        }
      };
      if (OverlayImage.hasW3MDisplay === false) {
        reset();
        if (!callback)
          return;
        return callback(new Error("W3M Image Display not available."));
      }
      if (!img) {
        reset();
        if (!callback)
          return;
        return callback(new Error("No image."));
      }
      this.file = img;
      return this.getPixelRatio(function(err, ratio) {
        if (err) {
          reset();
          if (!callback)
            return;
          return callback(err);
        }
        return self.renderImage(img, ratio, function(err2, success) {
          if (err2) {
            reset();
            if (!callback)
              return;
            return callback(err2);
          }
          if (self.shrink || self.options.autofit) {
            delete self.shrink;
            delete self.options.shrink;
            self.options.autofit = true;
            return self.imageSize(function(err3, size) {
              if (err3) {
                reset();
                if (!callback)
                  return;
                return callback(err3);
              }
              if (self._lastSize && ratio.tw === self._lastSize.tw && ratio.th === self._lastSize.th && size.width === self._lastSize.width && size.height === self._lastSize.height && self.aleft === self._lastSize.aleft && self.atop === self._lastSize.atop) {
                reset();
                if (!callback)
                  return;
                return callback(null, success);
              }
              self._lastSize = {
                tw: ratio.tw,
                th: ratio.th,
                width: size.width,
                height: size.height,
                aleft: self.aleft,
                atop: self.atop
              };
              self.position.width = size.width / ratio.tw | 0;
              self.position.height = size.height / ratio.th | 0;
              self._noImage = true;
              self.screen.render();
              self._noImage = false;
              reset();
              return self.renderImage(img, ratio, callback);
            });
          }
          reset();
          if (!callback)
            return;
          return callback(null, success);
        });
      });
    };
    OverlayImage.prototype.renderImage = function(img, ratio, callback) {
      var self = this;
      if (cp.execSync) {
        callback = callback || function(err, result) {
          return result;
        };
        try {
          return callback(null, this.renderImageSync(img, ratio));
        } catch (e) {
          return callback(e);
        }
      }
      if (OverlayImage.hasW3MDisplay === false) {
        if (!callback)
          return;
        return callback(new Error("W3M Image Display not available."));
      }
      if (!ratio) {
        if (!callback)
          return;
        return callback(new Error("No ratio."));
      }
      var _file = self.file;
      var _lastSize = self._lastSize;
      return self.clearImage(function(err) {
        if (err)
          return callback(err);
        self.file = _file;
        self._lastSize = _lastSize;
        var opt = {
          stdio: "pipe",
          env: process.env,
          cwd: process.env.HOME
        };
        var ps = self.spawn(OverlayImage.w3mdisplay, [], opt, function(err2, success) {
          if (!callback)
            return;
          return err2 ? callback(err2) : callback(null, success);
        });
        var width = self.width * ratio.tw | 0, height = self.height * ratio.th | 0, aleft = self.aleft * ratio.tw | 0, atop = self.atop * ratio.th | 0;
        var input = "0;1;" + aleft + ";" + atop + ";" + width + ";" + height + ";;;;;" + img + "\n4;\n3;\n";
        self._props = {
          aleft,
          atop,
          width,
          height
        };
        ps.stdin.write(input);
        ps.stdin.end();
      });
    };
    OverlayImage.prototype.clearImage = function(callback) {
      if (cp.execSync) {
        callback = callback || function(err, result) {
          return result;
        };
        try {
          return callback(null, this.clearImageSync());
        } catch (e) {
          return callback(e);
        }
      }
      if (OverlayImage.hasW3MDisplay === false) {
        if (!callback)
          return;
        return callback(new Error("W3M Image Display not available."));
      }
      if (!this._props) {
        if (!callback)
          return;
        return callback(null);
      }
      var opt = {
        stdio: "pipe",
        env: process.env,
        cwd: process.env.HOME
      };
      var ps = this.spawn(OverlayImage.w3mdisplay, [], opt, function(err, success) {
        if (!callback)
          return;
        return err ? callback(err) : callback(null, success);
      });
      var width = this._props.width + 2, height = this._props.height + 2, aleft = this._props.aleft, atop = this._props.atop;
      if (this._drag) {
        aleft -= 10;
        atop -= 10;
        width += 10;
        height += 10;
      }
      var input = "6;" + aleft + ";" + atop + ";" + width + ";" + height + "\n4;\n3;\n";
      delete this.file;
      delete this._props;
      delete this._lastSize;
      ps.stdin.write(input);
      ps.stdin.end();
    };
    OverlayImage.prototype.imageSize = function(callback) {
      var img = this.file;
      if (cp.execSync) {
        callback = callback || function(err, result) {
          return result;
        };
        try {
          return callback(null, this.imageSizeSync());
        } catch (e) {
          return callback(e);
        }
      }
      if (OverlayImage.hasW3MDisplay === false) {
        if (!callback)
          return;
        return callback(new Error("W3M Image Display not available."));
      }
      if (!img) {
        if (!callback)
          return;
        return callback(new Error("No image."));
      }
      var opt = {
        stdio: "pipe",
        env: process.env,
        cwd: process.env.HOME
      };
      var ps = this.spawn(OverlayImage.w3mdisplay, [], opt);
      var buf = "";
      ps.stdout.setEncoding("utf8");
      ps.stdout.on("data", function(data) {
        buf += data;
      });
      ps.on("error", function(err) {
        if (!callback)
          return;
        return callback(err);
      });
      ps.on("exit", function() {
        if (!callback)
          return;
        var size = buf.trim().split(/\s+/);
        return callback(null, {
          raw: buf.trim(),
          width: +size[0],
          height: +size[1]
        });
      });
      var input = "5;" + img + "\n";
      ps.stdin.write(input);
      ps.stdin.end();
    };
    OverlayImage.prototype.termSize = function(callback) {
      var self = this;
      if (cp.execSync) {
        callback = callback || function(err, result) {
          return result;
        };
        try {
          return callback(null, this.termSizeSync());
        } catch (e) {
          return callback(e);
        }
      }
      if (OverlayImage.hasW3MDisplay === false) {
        if (!callback)
          return;
        return callback(new Error("W3M Image Display not available."));
      }
      var opt = {
        stdio: "pipe",
        env: process.env,
        cwd: process.env.HOME
      };
      var ps = this.spawn(OverlayImage.w3mdisplay, ["-test"], opt);
      var buf = "";
      ps.stdout.setEncoding("utf8");
      ps.stdout.on("data", function(data) {
        buf += data;
      });
      ps.on("error", function(err) {
        if (!callback)
          return;
        return callback(err);
      });
      ps.on("exit", function() {
        if (!callback)
          return;
        if (!buf.trim()) {
          return self.termSize(callback);
        }
        var size = buf.trim().split(/\s+/);
        return callback(null, {
          raw: buf.trim(),
          width: +size[0],
          height: +size[1]
        });
      });
      ps.stdin.end();
    };
    OverlayImage.prototype.getPixelRatio = function(callback) {
      var self = this;
      if (cp.execSync) {
        callback = callback || function(err, result) {
          return result;
        };
        try {
          return callback(null, this.getPixelRatioSync());
        } catch (e) {
          return callback(e);
        }
      }
      if (this._ratio && !this._needsRatio) {
        return callback(null, this._ratio);
      }
      return this.termSize(function(err, dimensions) {
        if (err)
          return callback(err);
        self._ratio = {
          tw: dimensions.width / self.screen.width,
          th: dimensions.height / self.screen.height
        };
        self._needsRatio = false;
        return callback(null, self._ratio);
      });
    };
    OverlayImage.prototype.renderImageSync = function(img, ratio) {
      if (OverlayImage.hasW3MDisplay === false) {
        throw new Error("W3M Image Display not available.");
      }
      if (!ratio) {
        throw new Error("No ratio.");
      }
      var _file = this.file;
      var _lastSize = this._lastSize;
      this.clearImageSync();
      this.file = _file;
      this._lastSize = _lastSize;
      var width = this.width * ratio.tw | 0, height = this.height * ratio.th | 0, aleft = this.aleft * ratio.tw | 0, atop = this.atop * ratio.th | 0;
      var input = "0;1;" + aleft + ";" + atop + ";" + width + ";" + height + ";;;;;" + img + "\n4;\n3;\n";
      this._props = {
        aleft,
        atop,
        width,
        height
      };
      try {
        cp.execFileSync(OverlayImage.w3mdisplay, [], {
          env: process.env,
          encoding: "utf8",
          input,
          timeout: 1e3
        });
      } catch (e) {
        ;
      }
      return true;
    };
    OverlayImage.prototype.clearImageSync = function() {
      if (OverlayImage.hasW3MDisplay === false) {
        throw new Error("W3M Image Display not available.");
      }
      if (!this._props) {
        return false;
      }
      var width = this._props.width + 2, height = this._props.height + 2, aleft = this._props.aleft, atop = this._props.atop;
      if (this._drag) {
        aleft -= 10;
        atop -= 10;
        width += 10;
        height += 10;
      }
      var input = "6;" + aleft + ";" + atop + ";" + width + ";" + height + "\n4;\n3;\n";
      delete this.file;
      delete this._props;
      delete this._lastSize;
      try {
        cp.execFileSync(OverlayImage.w3mdisplay, [], {
          env: process.env,
          encoding: "utf8",
          input,
          timeout: 1e3
        });
      } catch (e) {
        ;
      }
      return true;
    };
    OverlayImage.prototype.imageSizeSync = function() {
      var img = this.file;
      if (OverlayImage.hasW3MDisplay === false) {
        throw new Error("W3M Image Display not available.");
      }
      if (!img) {
        throw new Error("No image.");
      }
      var buf = "";
      var input = "5;" + img + "\n";
      try {
        buf = cp.execFileSync(OverlayImage.w3mdisplay, [], {
          env: process.env,
          encoding: "utf8",
          input,
          timeout: 1e3
        });
      } catch (e) {
        ;
      }
      var size = buf.trim().split(/\s+/);
      return {
        raw: buf.trim(),
        width: +size[0],
        height: +size[1]
      };
    };
    OverlayImage.prototype.termSizeSync = function(_, recurse) {
      if (OverlayImage.hasW3MDisplay === false) {
        throw new Error("W3M Image Display not available.");
      }
      var buf = "";
      try {
        buf = cp.execFileSync(OverlayImage.w3mdisplay, ["-test"], {
          env: process.env,
          encoding: "utf8",
          timeout: 1e3
        });
      } catch (e) {
        ;
      }
      if (!buf.trim()) {
        recurse = recurse || 0;
        if (++recurse === 5) {
          throw new Error("Term size not determined.");
        }
        return this.termSizeSync(_, recurse);
      }
      var size = buf.trim().split(/\s+/);
      return {
        raw: buf.trim(),
        width: +size[0],
        height: +size[1]
      };
    };
    OverlayImage.prototype.getPixelRatioSync = function() {
      if (this._ratio && !this._needsRatio) {
        return this._ratio;
      }
      this._needsRatio = false;
      var dimensions = this.termSizeSync();
      this._ratio = {
        tw: dimensions.width / this.screen.width,
        th: dimensions.height / this.screen.height
      };
      return this._ratio;
    };
    OverlayImage.prototype.displayImage = function(callback) {
      return this.screen.displayImage(this.file, callback);
    };
    module2.exports = OverlayImage;
  }
});

// node_modules/blessed/lib/widgets/image.js
var require_image = __commonJS({
  "node_modules/blessed/lib/widgets/image.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function Image(options) {
      if (!(this instanceof Node)) {
        return new Image(options);
      }
      options = options || {};
      options.type = options.itype || options.type || "ansi";
      Box.call(this, options);
      if (options.type === "ansi" && this.type !== "ansiimage") {
        var ANSIImage = require_ansiimage();
        Object.getOwnPropertyNames(ANSIImage.prototype).forEach(function(key) {
          if (key === "type")
            return;
          Object.defineProperty(
            this,
            key,
            Object.getOwnPropertyDescriptor(ANSIImage.prototype, key)
          );
        }, this);
        ANSIImage.call(this, options);
        return this;
      }
      if (options.type === "overlay" && this.type !== "overlayimage") {
        var OverlayImage = require_overlayimage();
        Object.getOwnPropertyNames(OverlayImage.prototype).forEach(function(key) {
          if (key === "type")
            return;
          Object.defineProperty(
            this,
            key,
            Object.getOwnPropertyDescriptor(OverlayImage.prototype, key)
          );
        }, this);
        OverlayImage.call(this, options);
        return this;
      }
      throw new Error("`type` must either be `ansi` or `overlay`.");
    }
    Image.prototype.__proto__ = Box.prototype;
    Image.prototype.type = "image";
    module2.exports = Image;
  }
});

// node_modules/blessed/lib/widgets/layout.js
var require_layout = __commonJS({
  "node_modules/blessed/lib/widgets/layout.js"(exports, module2) {
    var Node = require_node();
    var Element = require_element();
    function Layout(options) {
      if (!(this instanceof Node)) {
        return new Layout(options);
      }
      options = options || {};
      if (options.width == null && (options.left == null && options.right == null) || options.height == null && (options.top == null && options.bottom == null)) {
        throw new Error("`Layout` must have a width and height!");
      }
      options.layout = options.layout || "inline";
      Element.call(this, options);
      if (options.renderer) {
        this.renderer = options.renderer;
      }
    }
    Layout.prototype.__proto__ = Element.prototype;
    Layout.prototype.type = "layout";
    Layout.prototype.isRendered = function(el) {
      if (!el.lpos)
        return false;
      return el.lpos.xl - el.lpos.xi > 0 && el.lpos.yl - el.lpos.yi > 0;
    };
    Layout.prototype.getLast = function(i) {
      while (this.children[--i]) {
        var el = this.children[i];
        if (this.isRendered(el))
          return el;
      }
    };
    Layout.prototype.getLastCoords = function(i) {
      var last = this.getLast(i);
      if (last)
        return last.lpos;
    };
    Layout.prototype._renderCoords = function() {
      var coords = this._getCoords(true);
      var children = this.children;
      this.children = [];
      this._render();
      this.children = children;
      return coords;
    };
    Layout.prototype.renderer = function(coords) {
      var self = this;
      var width = coords.xl - coords.xi, height = coords.yl - coords.yi, xi = coords.xi, yi = coords.yi;
      var rowOffset = 0;
      var rowIndex = 0;
      var lastRowIndex = 0;
      if (this.options.layout === "grid") {
        var highWidth = this.children.reduce(function(out, el) {
          out = Math.max(out, el.width);
          return out;
        }, 0);
      }
      return function iterator(el, i) {
        el.shrink = true;
        var last = self.getLast(i);
        if (!last) {
          el.position.left = 0;
          el.position.top = 0;
        } else {
          el.position.left = last.lpos.xl - xi;
          if (self.options.layout === "grid") {
            el.position.left += highWidth - (last.lpos.xl - last.lpos.xi);
          }
          if (el.position.left + el.width <= width) {
            el.position.top = rowOffset;
          } else {
            rowOffset += self.children.slice(rowIndex, i).reduce(function(out, el2) {
              if (!self.isRendered(el2))
                return out;
              out = Math.max(out, el2.lpos.yl - el2.lpos.yi);
              return out;
            }, 0);
            lastRowIndex = rowIndex;
            rowIndex = i;
            el.position.left = 0;
            el.position.top = rowOffset;
          }
        }
        if (self.options.layout === "inline") {
          var above = null;
          var abovea = Infinity;
          for (var j = lastRowIndex; j < rowIndex; j++) {
            var l = self.children[j];
            if (!self.isRendered(l))
              continue;
            var abs = Math.abs(el.position.left - (l.lpos.xi - xi));
            if (abs < abovea) {
              above = l;
              abovea = abs;
            }
          }
          if (above) {
            el.position.top = above.lpos.yl - yi;
          }
        }
        if (el.position.top + el.height > height) {
        }
      };
    };
    Layout.prototype.render = function() {
      this._emit("prerender");
      var coords = this._renderCoords();
      if (!coords) {
        delete this.lpos;
        return;
      }
      if (coords.xl - coords.xi <= 0) {
        coords.xl = Math.max(coords.xl, coords.xi);
        return;
      }
      if (coords.yl - coords.yi <= 0) {
        coords.yl = Math.max(coords.yl, coords.yi);
        return;
      }
      this.lpos = coords;
      if (this.border)
        coords.xi++, coords.xl--, coords.yi++, coords.yl--;
      if (this.tpadding) {
        coords.xi += this.padding.left, coords.xl -= this.padding.right;
        coords.yi += this.padding.top, coords.yl -= this.padding.bottom;
      }
      var iterator = this.renderer(coords);
      if (this.border)
        coords.xi--, coords.xl++, coords.yi--, coords.yl++;
      if (this.tpadding) {
        coords.xi -= this.padding.left, coords.xl += this.padding.right;
        coords.yi -= this.padding.top, coords.yl += this.padding.bottom;
      }
      this.children.forEach(function(el, i) {
        if (el.screen._ci !== -1) {
          el.index = el.screen._ci++;
        }
        var rendered = iterator(el, i);
        if (rendered === false) {
          delete el.lpos;
          return;
        }
        el.render();
      });
      this._emit("render", [coords]);
      return coords;
    };
    module2.exports = Layout;
  }
});

// node_modules/blessed/lib/widgets/line.js
var require_line = __commonJS({
  "node_modules/blessed/lib/widgets/line.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function Line(options) {
      if (!(this instanceof Node)) {
        return new Line(options);
      }
      options = options || {};
      var orientation = options.orientation || "vertical";
      delete options.orientation;
      if (orientation === "vertical") {
        options.width = 1;
      } else {
        options.height = 1;
      }
      Box.call(this, options);
      this.ch = !options.type || options.type === "line" ? orientation === "horizontal" ? "\u2500" : "\u2502" : options.ch || " ";
      this.border = {
        type: "bg",
        __proto__: this
      };
      this.style.border = this.style;
    }
    Line.prototype.__proto__ = Box.prototype;
    Line.prototype.type = "line";
    module2.exports = Line;
  }
});

// node_modules/blessed/lib/widgets/listbar.js
var require_listbar = __commonJS({
  "node_modules/blessed/lib/widgets/listbar.js"(exports, module2) {
    var helpers = require_helpers();
    var Node = require_node();
    var Box = require_box();
    function Listbar(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Listbar(options);
      }
      options = options || {};
      this.items = [];
      this.ritems = [];
      this.commands = [];
      this.leftBase = 0;
      this.leftOffset = 0;
      this.mouse = options.mouse || false;
      Box.call(this, options);
      if (!this.style.selected) {
        this.style.selected = {};
      }
      if (!this.style.item) {
        this.style.item = {};
      }
      if (options.commands || options.items) {
        this.setItems(options.commands || options.items);
      }
      if (options.keys) {
        this.on("keypress", function(ch, key) {
          if (key.name === "left" || options.vi && key.name === "h" || key.shift && key.name === "tab") {
            self.moveLeft();
            self.screen.render();
            if (key.name === "tab")
              return false;
            return;
          }
          if (key.name === "right" || options.vi && key.name === "l" || key.name === "tab") {
            self.moveRight();
            self.screen.render();
            if (key.name === "tab")
              return false;
            return;
          }
          if (key.name === "enter" || options.vi && key.name === "k" && !key.shift) {
            self.emit("action", self.items[self.selected], self.selected);
            self.emit("select", self.items[self.selected], self.selected);
            var item = self.items[self.selected];
            if (item._.cmd.callback) {
              item._.cmd.callback();
            }
            self.screen.render();
            return;
          }
          if (key.name === "escape" || options.vi && key.name === "q") {
            self.emit("action");
            self.emit("cancel");
            return;
          }
        });
      }
      if (options.autoCommandKeys) {
        this.onScreenEvent("keypress", function(ch) {
          if (/^[0-9]$/.test(ch)) {
            var i = +ch - 1;
            if (!~i)
              i = 9;
            return self.selectTab(i);
          }
        });
      }
      this.on("focus", function() {
        self.select(self.selected);
      });
    }
    Listbar.prototype.__proto__ = Box.prototype;
    Listbar.prototype.type = "listbar";
    Listbar.prototype.__defineGetter__("selected", function() {
      return this.leftBase + this.leftOffset;
    });
    Listbar.prototype.setItems = function(commands) {
      var self = this;
      if (!Array.isArray(commands)) {
        commands = Object.keys(commands).reduce(function(obj, key, i) {
          var cmd = commands[key], cb;
          if (typeof cmd === "function") {
            cb = cmd;
            cmd = { callback: cb };
          }
          if (cmd.text == null)
            cmd.text = key;
          if (cmd.prefix == null)
            cmd.prefix = ++i + "";
          if (cmd.text == null && cmd.callback) {
            cmd.text = cmd.callback.name;
          }
          obj.push(cmd);
          return obj;
        }, []);
      }
      this.items.forEach(function(el) {
        el.detach();
      });
      this.items = [];
      this.ritems = [];
      this.commands = [];
      commands.forEach(function(cmd) {
        self.add(cmd);
      });
      this.emit("set items");
    };
    Listbar.prototype.add = Listbar.prototype.addItem = Listbar.prototype.appendItem = function(item, callback) {
      var self = this, prev = this.items[this.items.length - 1], drawn, cmd, title, len;
      if (!this.parent) {
        drawn = 0;
      } else {
        drawn = prev ? prev.aleft + prev.width : 0;
        if (!this.screen.autoPadding) {
          drawn += this.ileft;
        }
      }
      if (typeof item === "object") {
        cmd = item;
        if (cmd.prefix == null)
          cmd.prefix = this.items.length + 1 + "";
      }
      if (typeof item === "string") {
        cmd = {
          prefix: this.items.length + 1 + "",
          text: item,
          callback
        };
      }
      if (typeof item === "function") {
        cmd = {
          prefix: this.items.length + 1 + "",
          text: item.name,
          callback: item
        };
      }
      if (cmd.keys && cmd.keys[0]) {
        cmd.prefix = cmd.keys[0];
      }
      var t = helpers.generateTags(this.style.prefix || { fg: "lightblack" });
      title = (cmd.prefix != null ? t.open + cmd.prefix + t.close + ":" : "") + cmd.text;
      len = ((cmd.prefix != null ? cmd.prefix + ":" : "") + cmd.text).length;
      var options = {
        screen: this.screen,
        top: 0,
        left: drawn + 1,
        height: 1,
        content: title,
        width: len + 2,
        align: "center",
        autoFocus: false,
        tags: true,
        mouse: true,
        style: helpers.merge({}, this.style.item),
        noOverflow: true
      };
      if (!this.screen.autoPadding) {
        options.top += this.itop;
        options.left += this.ileft;
      }
      [
        "bg",
        "fg",
        "bold",
        "underline",
        "blink",
        "inverse",
        "invisible"
      ].forEach(function(name) {
        options.style[name] = function() {
          var attr = self.items[self.selected] === el ? self.style.selected[name] : self.style.item[name];
          if (typeof attr === "function")
            attr = attr(el);
          return attr;
        };
      });
      var el = new Box(options);
      this._[cmd.text] = el;
      cmd.element = el;
      el._.cmd = cmd;
      this.ritems.push(cmd.text);
      this.items.push(el);
      this.commands.push(cmd);
      this.append(el);
      if (cmd.callback) {
        if (cmd.keys) {
          this.screen.key(cmd.keys, function() {
            self.emit("action", el, self.selected);
            self.emit("select", el, self.selected);
            if (el._.cmd.callback) {
              el._.cmd.callback();
            }
            self.select(el);
            self.screen.render();
          });
        }
      }
      if (this.items.length === 1) {
        this.select(0);
      }
      if (this.mouse) {
        el.on("click", function() {
          self.emit("action", el, self.selected);
          self.emit("select", el, self.selected);
          if (el._.cmd.callback) {
            el._.cmd.callback();
          }
          self.select(el);
          self.screen.render();
        });
      }
      this.emit("add item");
    };
    Listbar.prototype.render = function() {
      var self = this, drawn = 0;
      if (!this.screen.autoPadding) {
        drawn += this.ileft;
      }
      this.items.forEach(function(el, i) {
        if (i < self.leftBase) {
          el.hide();
        } else {
          el.rleft = drawn + 1;
          drawn += el.width + 2;
          el.show();
        }
      });
      return this._render();
    };
    Listbar.prototype.select = function(offset) {
      if (typeof offset !== "number") {
        offset = this.items.indexOf(offset);
      }
      if (offset < 0) {
        offset = 0;
      } else if (offset >= this.items.length) {
        offset = this.items.length - 1;
      }
      if (!this.parent) {
        this.emit("select item", this.items[offset], offset);
        return;
      }
      var lpos = this._getCoords();
      if (!lpos)
        return;
      var self = this, width = lpos.xl - lpos.xi - this.iwidth, drawn = 0, visible = 0, el;
      el = this.items[offset];
      if (!el)
        return;
      this.items.forEach(function(el2, i) {
        if (i < self.leftBase)
          return;
        var lpos2 = el2._getCoords();
        if (!lpos2)
          return;
        if (lpos2.xl - lpos2.xi <= 0)
          return;
        drawn += lpos2.xl - lpos2.xi + 2;
        if (drawn <= width)
          visible++;
      });
      var diff = offset - (this.leftBase + this.leftOffset);
      if (offset > this.leftBase + this.leftOffset) {
        if (offset > this.leftBase + visible - 1) {
          this.leftOffset = 0;
          this.leftBase = offset;
        } else {
          this.leftOffset += diff;
        }
      } else if (offset < this.leftBase + this.leftOffset) {
        diff = -diff;
        if (offset < this.leftBase) {
          this.leftOffset = 0;
          this.leftBase = offset;
        } else {
          this.leftOffset -= diff;
        }
      }
      this.emit("select item", el, offset);
    };
    Listbar.prototype.removeItem = function(child) {
      var i = typeof child !== "number" ? this.items.indexOf(child) : child;
      if (~i && this.items[i]) {
        child = this.items.splice(i, 1)[0];
        this.ritems.splice(i, 1);
        this.commands.splice(i, 1);
        this.remove(child);
        if (i === this.selected) {
          this.select(i - 1);
        }
      }
      this.emit("remove item");
    };
    Listbar.prototype.move = function(offset) {
      this.select(this.selected + offset);
    };
    Listbar.prototype.moveLeft = function(offset) {
      this.move(-(offset || 1));
    };
    Listbar.prototype.moveRight = function(offset) {
      this.move(offset || 1);
    };
    Listbar.prototype.selectTab = function(index) {
      var item = this.items[index];
      if (item) {
        if (item._.cmd.callback) {
          item._.cmd.callback();
        }
        this.select(index);
        this.screen.render();
      }
      this.emit("select tab", item, index);
    };
    module2.exports = Listbar;
  }
});

// node_modules/blessed/lib/widgets/table.js
var require_table = __commonJS({
  "node_modules/blessed/lib/widgets/table.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function Table(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Table(options);
      }
      options = options || {};
      options.shrink = true;
      options.style = options.style || {};
      options.style.border = options.style.border || {};
      options.style.header = options.style.header || {};
      options.style.cell = options.style.cell || {};
      options.align = options.align || "center";
      delete options.height;
      Box.call(this, options);
      this.pad = options.pad != null ? options.pad : 2;
      this.setData(options.rows || options.data);
      this.on("attach", function() {
        self.setContent("");
        self.setData(self.rows);
      });
      this.on("resize", function() {
        self.setContent("");
        self.setData(self.rows);
        self.screen.render();
      });
    }
    Table.prototype.__proto__ = Box.prototype;
    Table.prototype.type = "table";
    Table.prototype._calculateMaxes = function() {
      var self = this;
      var maxes = [];
      if (this.detached)
        return;
      this.rows = this.rows || [];
      this.rows.forEach(function(row) {
        row.forEach(function(cell, i) {
          var clen = self.strWidth(cell);
          if (!maxes[i] || maxes[i] < clen) {
            maxes[i] = clen;
          }
        });
      });
      var total = maxes.reduce(function(total2, max) {
        return total2 + max;
      }, 0);
      total += maxes.length + 1;
      if (this.width < total) {
        delete this.position.width;
      }
      if (this.position.width != null) {
        var missing = this.width - total;
        var w = missing / maxes.length | 0;
        var wr = missing % maxes.length;
        maxes = maxes.map(function(max, i) {
          if (i === maxes.length - 1) {
            return max + w + wr;
          }
          return max + w;
        });
      } else {
        maxes = maxes.map(function(max) {
          return max + self.pad;
        });
      }
      return this._maxes = maxes;
    };
    Table.prototype.setRows = Table.prototype.setData = function(rows) {
      var self = this, text = "", align = this.align;
      this.rows = rows || [];
      this._calculateMaxes();
      if (!this._maxes)
        return;
      this.rows.forEach(function(row, i) {
        var isFooter = i === self.rows.length - 1;
        row.forEach(function(cell, i2) {
          var width = self._maxes[i2];
          var clen = self.strWidth(cell);
          if (i2 !== 0) {
            text += " ";
          }
          while (clen < width) {
            if (align === "center") {
              cell = " " + cell + " ";
              clen += 2;
            } else if (align === "left") {
              cell = cell + " ";
              clen += 1;
            } else if (align === "right") {
              cell = " " + cell;
              clen += 1;
            }
          }
          if (clen > width) {
            if (align === "center") {
              cell = cell.substring(1);
              clen--;
            } else if (align === "left") {
              cell = cell.slice(0, -1);
              clen--;
            } else if (align === "right") {
              cell = cell.substring(1);
              clen--;
            }
          }
          text += cell;
        });
        if (!isFooter) {
          text += "\n\n";
        }
      });
      delete this.align;
      this.setContent(text);
      this.align = align;
    };
    Table.prototype.render = function() {
      var self = this;
      var coords = this._render();
      if (!coords)
        return;
      this._calculateMaxes();
      if (!this._maxes)
        return coords;
      var lines = this.screen.lines, xi = coords.xi, yi = coords.yi, rx, ry, i;
      var dattr = this.sattr(this.style), hattr = this.sattr(this.style.header), cattr = this.sattr(this.style.cell), battr = this.sattr(this.style.border);
      var width = coords.xl - coords.xi - this.iright, height = coords.yl - coords.yi - this.ibottom;
      for (var y = this.itop; y < height; y++) {
        if (!lines[yi + y])
          break;
        for (var x = this.ileft; x < width; x++) {
          if (!lines[yi + y][xi + x])
            break;
          if (lines[yi + y][xi + x][0] !== dattr)
            continue;
          if (y === this.itop) {
            lines[yi + y][xi + x][0] = hattr;
          } else {
            lines[yi + y][xi + x][0] = cattr;
          }
          lines[yi + y].dirty = true;
        }
      }
      if (!this.border || this.options.noCellBorders)
        return coords;
      ry = 0;
      for (i = 0; i < self.rows.length + 1; i++) {
        if (!lines[yi + ry])
          break;
        rx = 0;
        self._maxes.forEach(function(max, i2) {
          rx += max;
          if (i2 === 0) {
            if (!lines[yi + ry][xi + 0])
              return;
            if (ry === 0) {
              lines[yi + ry][xi + 0][0] = battr;
            } else if (ry / 2 === self.rows.length) {
              lines[yi + ry][xi + 0][0] = battr;
            } else {
              lines[yi + ry][xi + 0][0] = battr;
              lines[yi + ry][xi + 0][1] = "\u251C";
              if (!self.border.left) {
                lines[yi + ry][xi + 0][1] = "\u2500";
              }
            }
            lines[yi + ry].dirty = true;
          } else if (i2 === self._maxes.length - 1) {
            if (!lines[yi + ry][xi + rx + 1])
              return;
            if (ry === 0) {
              rx++;
              lines[yi + ry][xi + rx][0] = battr;
            } else if (ry / 2 === self.rows.length) {
              rx++;
              lines[yi + ry][xi + rx][0] = battr;
            } else {
              rx++;
              lines[yi + ry][xi + rx][0] = battr;
              lines[yi + ry][xi + rx][1] = "\u2524";
              if (!self.border.right) {
                lines[yi + ry][xi + rx][1] = "\u2500";
              }
            }
            lines[yi + ry].dirty = true;
            return;
          }
          if (!lines[yi + ry][xi + rx + 1])
            return;
          if (ry === 0) {
            rx++;
            lines[yi + ry][xi + rx][0] = battr;
            lines[yi + ry][xi + rx][1] = "\u252C";
            if (!self.border.top) {
              lines[yi + ry][xi + rx][1] = "\u2502";
            }
          } else if (ry / 2 === self.rows.length) {
            rx++;
            lines[yi + ry][xi + rx][0] = battr;
            lines[yi + ry][xi + rx][1] = "\u2534";
            if (!self.border.bottom) {
              lines[yi + ry][xi + rx][1] = "\u2502";
            }
          } else {
            if (self.options.fillCellBorders) {
              var lbg = (ry <= 2 ? hattr : cattr) & 511;
              rx++;
              lines[yi + ry][xi + rx][0] = battr & ~511 | lbg;
            } else {
              rx++;
              lines[yi + ry][xi + rx][0] = battr;
            }
            lines[yi + ry][xi + rx][1] = "\u253C";
          }
          lines[yi + ry].dirty = true;
        });
        ry += 2;
      }
      for (ry = 1; ry < self.rows.length * 2; ry++) {
        if (!lines[yi + ry])
          break;
        rx = 0;
        self._maxes.slice(0, -1).forEach(function(max) {
          rx += max;
          if (!lines[yi + ry][xi + rx + 1])
            return;
          if (ry % 2 !== 0) {
            if (self.options.fillCellBorders) {
              var lbg = (ry <= 2 ? hattr : cattr) & 511;
              rx++;
              lines[yi + ry][xi + rx][0] = battr & ~511 | lbg;
            } else {
              rx++;
              lines[yi + ry][xi + rx][0] = battr;
            }
            lines[yi + ry][xi + rx][1] = "\u2502";
            lines[yi + ry].dirty = true;
          } else {
            rx++;
          }
        });
        rx = 1;
        self._maxes.forEach(function(max) {
          while (max--) {
            if (ry % 2 === 0) {
              if (!lines[yi + ry])
                break;
              if (!lines[yi + ry][xi + rx + 1])
                break;
              if (self.options.fillCellBorders) {
                var lbg = (ry <= 2 ? hattr : cattr) & 511;
                lines[yi + ry][xi + rx][0] = battr & ~511 | lbg;
              } else {
                lines[yi + ry][xi + rx][0] = battr;
              }
              lines[yi + ry][xi + rx][1] = "\u2500";
              lines[yi + ry].dirty = true;
            }
            rx++;
          }
          rx++;
        });
      }
      return coords;
    };
    module2.exports = Table;
  }
});

// node_modules/blessed/lib/widgets/listtable.js
var require_listtable = __commonJS({
  "node_modules/blessed/lib/widgets/listtable.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    var List = require_list();
    var Table = require_table();
    function ListTable(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new ListTable(options);
      }
      options = options || {};
      options.shrink = true;
      options.normalShrink = true;
      options.style = options.style || {};
      options.style.border = options.style.border || {};
      options.style.header = options.style.header || {};
      options.style.cell = options.style.cell || {};
      this.__align = options.align || "center";
      delete options.align;
      options.style.selected = options.style.cell.selected;
      options.style.item = options.style.cell;
      List.call(this, options);
      this._header = new Box({
        parent: this,
        left: this.screen.autoPadding ? 0 : this.ileft,
        top: 0,
        width: "shrink",
        height: 1,
        style: options.style.header,
        tags: options.parseTags || options.tags
      });
      this.on("scroll", function() {
        self._header.setFront();
        self._header.rtop = self.childBase;
        if (!self.screen.autoPadding) {
          self._header.rtop = self.childBase + (self.border ? 1 : 0);
        }
      });
      this.pad = options.pad != null ? options.pad : 2;
      this.setData(options.rows || options.data);
      this.on("attach", function() {
        self.setData(self.rows);
      });
      this.on("resize", function() {
        var selected = self.selected;
        self.setData(self.rows);
        self.select(selected);
        self.screen.render();
      });
    }
    ListTable.prototype.__proto__ = List.prototype;
    ListTable.prototype.type = "list-table";
    ListTable.prototype._calculateMaxes = Table.prototype._calculateMaxes;
    ListTable.prototype.setRows = ListTable.prototype.setData = function(rows) {
      var self = this, align = this.__align;
      if (this.visible && this.lpos) {
        this.clearPos();
      }
      this.clearItems();
      this.rows = rows || [];
      this._calculateMaxes();
      if (!this._maxes)
        return;
      this.addItem("");
      this.rows.forEach(function(row, i) {
        var isHeader = i === 0;
        var text = "";
        row.forEach(function(cell, i2) {
          var width = self._maxes[i2];
          var clen = self.strWidth(cell);
          if (i2 !== 0) {
            text += " ";
          }
          while (clen < width) {
            if (align === "center") {
              cell = " " + cell + " ";
              clen += 2;
            } else if (align === "left") {
              cell = cell + " ";
              clen += 1;
            } else if (align === "right") {
              cell = " " + cell;
              clen += 1;
            }
          }
          if (clen > width) {
            if (align === "center") {
              cell = cell.substring(1);
              clen--;
            } else if (align === "left") {
              cell = cell.slice(0, -1);
              clen--;
            } else if (align === "right") {
              cell = cell.substring(1);
              clen--;
            }
          }
          text += cell;
        });
        if (isHeader) {
          self._header.setContent(text);
        } else {
          self.addItem(text);
        }
      });
      this._header.setFront();
      this.select(0);
    };
    ListTable.prototype._select = ListTable.prototype.select;
    ListTable.prototype.select = function(i) {
      if (i === 0) {
        i = 1;
      }
      if (i <= this.childBase) {
        this.setScroll(this.childBase - 1);
      }
      return this._select(i);
    };
    ListTable.prototype.render = function() {
      var self = this;
      var coords = this._render();
      if (!coords)
        return;
      this._calculateMaxes();
      if (!this._maxes)
        return coords;
      var lines = this.screen.lines, xi = coords.xi, yi = coords.yi, rx, ry, i;
      var battr = this.sattr(this.style.border);
      var height = coords.yl - coords.yi - this.ibottom;
      if (!this.border || this.options.noCellBorders)
        return coords;
      ry = 0;
      for (i = 0; i < height + 1; i++) {
        if (!lines[yi + ry])
          break;
        rx = 0;
        self._maxes.slice(0, -1).forEach(function(max) {
          rx += max;
          if (!lines[yi + ry][xi + rx + 1])
            return;
          if (ry === 0) {
            rx++;
            lines[yi + ry][xi + rx][0] = battr;
            lines[yi + ry][xi + rx][1] = "\u252C";
            if (!self.border.top) {
              lines[yi + ry][xi + rx][1] = "\u2502";
            }
            lines[yi + ry].dirty = true;
          } else if (ry === height) {
            rx++;
            lines[yi + ry][xi + rx][0] = battr;
            lines[yi + ry][xi + rx][1] = "\u2534";
            if (!self.border.bottom) {
              lines[yi + ry][xi + rx][1] = "\u2502";
            }
            lines[yi + ry].dirty = true;
          } else {
            rx++;
          }
        });
        ry += 1;
      }
      for (ry = 1; ry < height; ry++) {
        if (!lines[yi + ry])
          break;
        rx = 0;
        self._maxes.slice(0, -1).forEach(function(max) {
          rx += max;
          if (!lines[yi + ry][xi + rx + 1])
            return;
          if (self.options.fillCellBorders !== false) {
            var lbg = lines[yi + ry][xi + rx][0] & 511;
            rx++;
            lines[yi + ry][xi + rx][0] = battr & ~511 | lbg;
          } else {
            rx++;
            lines[yi + ry][xi + rx][0] = battr;
          }
          lines[yi + ry][xi + rx][1] = "\u2502";
          lines[yi + ry].dirty = true;
        });
      }
      return coords;
    };
    module2.exports = ListTable;
  }
});

// node_modules/blessed/lib/widgets/text.js
var require_text = __commonJS({
  "node_modules/blessed/lib/widgets/text.js"(exports, module2) {
    var Node = require_node();
    var Element = require_element();
    function Text(options) {
      if (!(this instanceof Node)) {
        return new Text(options);
      }
      options = options || {};
      options.shrink = true;
      Element.call(this, options);
    }
    Text.prototype.__proto__ = Element.prototype;
    Text.prototype.type = "text";
    module2.exports = Text;
  }
});

// node_modules/blessed/lib/widgets/loading.js
var require_loading = __commonJS({
  "node_modules/blessed/lib/widgets/loading.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    var Text = require_text();
    function Loading(options) {
      if (!(this instanceof Node)) {
        return new Loading(options);
      }
      options = options || {};
      Box.call(this, options);
      this._.icon = new Text({
        parent: this,
        align: "center",
        top: 2,
        left: 1,
        right: 1,
        height: 1,
        content: "|"
      });
    }
    Loading.prototype.__proto__ = Box.prototype;
    Loading.prototype.type = "loading";
    Loading.prototype.load = function(text) {
      var self = this;
      this.show();
      this.setContent(text);
      if (this._.timer) {
        this.stop();
      }
      this.screen.lockKeys = true;
      this._.timer = setInterval(function() {
        if (self._.icon.content === "|") {
          self._.icon.setContent("/");
        } else if (self._.icon.content === "/") {
          self._.icon.setContent("-");
        } else if (self._.icon.content === "-") {
          self._.icon.setContent("\\");
        } else if (self._.icon.content === "\\") {
          self._.icon.setContent("|");
        }
        self.screen.render();
      }, 200);
    };
    Loading.prototype.stop = function() {
      this.screen.lockKeys = false;
      this.hide();
      if (this._.timer) {
        clearInterval(this._.timer);
        delete this._.timer;
      }
      this.screen.render();
    };
    module2.exports = Loading;
  }
});

// node_modules/blessed/lib/widgets/message.js
var require_message = __commonJS({
  "node_modules/blessed/lib/widgets/message.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function Message(options) {
      if (!(this instanceof Node)) {
        return new Message(options);
      }
      options = options || {};
      options.tags = true;
      Box.call(this, options);
    }
    Message.prototype.__proto__ = Box.prototype;
    Message.prototype.type = "message";
    Message.prototype.log = Message.prototype.display = function(text, time, callback) {
      var self = this;
      if (typeof time === "function") {
        callback = time;
        time = null;
      }
      if (time == null)
        time = 3;
      if (this.scrollable) {
        this.screen.saveFocus();
        this.focus();
        this.scrollTo(0);
      }
      this.show();
      this.setContent(text);
      this.screen.render();
      if (time === Infinity || time === -1 || time === 0) {
        var end = function() {
          if (end.done)
            return;
          end.done = true;
          if (self.scrollable) {
            try {
              self.screen.restoreFocus();
            } catch (e) {
              ;
            }
          }
          self.hide();
          self.screen.render();
          if (callback)
            callback();
        };
        setTimeout(function() {
          self.onScreenEvent("keypress", function fn(ch, key) {
            if (key.name === "mouse")
              return;
            if (self.scrollable) {
              if (key.name === "up" || self.options.vi && key.name === "k" || (key.name === "down" || self.options.vi && key.name === "j") || self.options.vi && key.name === "u" && key.ctrl || self.options.vi && key.name === "d" && key.ctrl || self.options.vi && key.name === "b" && key.ctrl || self.options.vi && key.name === "f" && key.ctrl || self.options.vi && key.name === "g" && !key.shift || self.options.vi && key.name === "g" && key.shift) {
                return;
              }
            }
            if (self.options.ignoreKeys && ~self.options.ignoreKeys.indexOf(key.name)) {
              return;
            }
            self.removeScreenEvent("keypress", fn);
            end();
          });
          if (!self.options.mouse)
            return;
          self.onScreenEvent("mouse", function fn(data) {
            if (data.action === "mousemove")
              return;
            self.removeScreenEvent("mouse", fn);
            end();
          });
        }, 10);
        return;
      }
      setTimeout(function() {
        self.hide();
        self.screen.render();
        if (callback)
          callback();
      }, time * 1e3);
    };
    Message.prototype.error = function(text, time, callback) {
      return this.display("{red-fg}Error: " + text + "{/red-fg}", time, callback);
    };
    module2.exports = Message;
  }
});

// node_modules/blessed/lib/widgets/progressbar.js
var require_progressbar = __commonJS({
  "node_modules/blessed/lib/widgets/progressbar.js"(exports, module2) {
    var Node = require_node();
    var Input = require_input();
    function ProgressBar(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new ProgressBar(options);
      }
      options = options || {};
      Input.call(this, options);
      this.filled = options.filled || 0;
      if (typeof this.filled === "string") {
        this.filled = +this.filled.slice(0, -1);
      }
      this.value = this.filled;
      this.pch = options.pch || " ";
      if (options.ch) {
        this.pch = options.ch;
        this.ch = " ";
      }
      if (options.bch) {
        this.ch = options.bch;
      }
      if (!this.style.bar) {
        this.style.bar = {};
        this.style.bar.fg = options.barFg;
        this.style.bar.bg = options.barBg;
      }
      this.orientation = options.orientation || "horizontal";
      if (options.keys) {
        this.on("keypress", function(ch, key) {
          var back, forward;
          if (self.orientation === "horizontal") {
            back = ["left", "h"];
            forward = ["right", "l"];
          } else if (self.orientation === "vertical") {
            back = ["down", "j"];
            forward = ["up", "k"];
          }
          if (key.name === back[0] || options.vi && key.name === back[1]) {
            self.progress(-5);
            self.screen.render();
            return;
          }
          if (key.name === forward[0] || options.vi && key.name === forward[1]) {
            self.progress(5);
            self.screen.render();
            return;
          }
        });
      }
      if (options.mouse) {
        this.on("click", function(data) {
          var x, y, m, p;
          if (!self.lpos)
            return;
          if (self.orientation === "horizontal") {
            x = data.x - self.lpos.xi;
            m = self.lpos.xl - self.lpos.xi - self.iwidth;
            p = x / m * 100 | 0;
          } else if (self.orientation === "vertical") {
            y = data.y - self.lpos.yi;
            m = self.lpos.yl - self.lpos.yi - self.iheight;
            p = y / m * 100 | 0;
          }
          self.setProgress(p);
        });
      }
    }
    ProgressBar.prototype.__proto__ = Input.prototype;
    ProgressBar.prototype.type = "progress-bar";
    ProgressBar.prototype.render = function() {
      var ret = this._render();
      if (!ret)
        return;
      var xi = ret.xi, xl = ret.xl, yi = ret.yi, yl = ret.yl, dattr;
      if (this.border)
        xi++, yi++, xl--, yl--;
      if (this.orientation === "horizontal") {
        xl = xi + (xl - xi) * (this.filled / 100) | 0;
      } else if (this.orientation === "vertical") {
        yi = yi + (yl - yi - ((yl - yi) * (this.filled / 100) | 0));
      }
      dattr = this.sattr(this.style.bar);
      this.screen.fillRegion(dattr, this.pch, xi, xl, yi, yl);
      if (this.content) {
        var line = this.screen.lines[yi];
        for (var i = 0; i < this.content.length; i++) {
          line[xi + i][1] = this.content[i];
        }
        line.dirty = true;
      }
      return ret;
    };
    ProgressBar.prototype.progress = function(filled) {
      this.filled += filled;
      if (this.filled < 0)
        this.filled = 0;
      else if (this.filled > 100)
        this.filled = 100;
      if (this.filled === 100) {
        this.emit("complete");
      }
      this.value = this.filled;
    };
    ProgressBar.prototype.setProgress = function(filled) {
      this.filled = 0;
      this.progress(filled);
    };
    ProgressBar.prototype.reset = function() {
      this.emit("reset");
      this.filled = 0;
      this.value = this.filled;
    };
    module2.exports = ProgressBar;
  }
});

// node_modules/blessed/lib/widgets/textarea.js
var require_textarea = __commonJS({
  "node_modules/blessed/lib/widgets/textarea.js"(exports, module2) {
    var unicode = require_unicode();
    var nextTick = global.setImmediate || process.nextTick.bind(process);
    var Node = require_node();
    var Input = require_input();
    function Textarea(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new Textarea(options);
      }
      options = options || {};
      options.scrollable = options.scrollable !== false;
      Input.call(this, options);
      this.screen._listenKeys(this);
      this.value = options.value || "";
      this.__updateCursor = this._updateCursor.bind(this);
      this.on("resize", this.__updateCursor);
      this.on("move", this.__updateCursor);
      if (options.inputOnFocus) {
        this.on("focus", this.readInput.bind(this, null));
      }
      if (!options.inputOnFocus && options.keys) {
        this.on("keypress", function(ch, key) {
          if (self._reading)
            return;
          if (key.name === "enter" || options.vi && key.name === "i") {
            return self.readInput();
          }
          if (key.name === "e") {
            return self.readEditor();
          }
        });
      }
      if (options.mouse) {
        this.on("click", function(data) {
          if (self._reading)
            return;
          if (data.button !== "right")
            return;
          self.readEditor();
        });
      }
    }
    Textarea.prototype.__proto__ = Input.prototype;
    Textarea.prototype.type = "textarea";
    Textarea.prototype._updateCursor = function(get) {
      if (this.screen.focused !== this) {
        return;
      }
      var lpos = get ? this.lpos : this._getCoords();
      if (!lpos)
        return;
      var last = this._clines[this._clines.length - 1], program = this.screen.program, line, cx, cy;
      if (last === "" && this.value[this.value.length - 1] !== "\n") {
        last = this._clines[this._clines.length - 2] || "";
      }
      line = Math.min(
        this._clines.length - 1 - (this.childBase || 0),
        lpos.yl - lpos.yi - this.iheight - 1
      );
      line = Math.max(0, line);
      cy = lpos.yi + this.itop + line;
      cx = lpos.xi + this.ileft + this.strWidth(last);
      if (cy === program.y && cx === program.x) {
        return;
      }
      if (cy === program.y) {
        if (cx > program.x) {
          program.cuf(cx - program.x);
        } else if (cx < program.x) {
          program.cub(program.x - cx);
        }
      } else if (cx === program.x) {
        if (cy > program.y) {
          program.cud(cy - program.y);
        } else if (cy < program.y) {
          program.cuu(program.y - cy);
        }
      } else {
        program.cup(cy, cx);
      }
    };
    Textarea.prototype.input = Textarea.prototype.setInput = Textarea.prototype.readInput = function(callback) {
      var self = this, focused = this.screen.focused === this;
      if (this._reading)
        return;
      this._reading = true;
      this._callback = callback;
      if (!focused) {
        this.screen.saveFocus();
        this.focus();
      }
      this.screen.grabKeys = true;
      this._updateCursor();
      this.screen.program.showCursor();
      this._done = function fn(err, value) {
        if (!self._reading)
          return;
        if (fn.done)
          return;
        fn.done = true;
        self._reading = false;
        delete self._callback;
        delete self._done;
        self.removeListener("keypress", self.__listener);
        delete self.__listener;
        self.removeListener("blur", self.__done);
        delete self.__done;
        self.screen.program.hideCursor();
        self.screen.grabKeys = false;
        if (!focused) {
          self.screen.restoreFocus();
        }
        if (self.options.inputOnFocus) {
          self.screen.rewindFocus();
        }
        if (err === "stop")
          return;
        if (err) {
          self.emit("error", err);
        } else if (value != null) {
          self.emit("submit", value);
        } else {
          self.emit("cancel", value);
        }
        self.emit("action", value);
        if (!callback)
          return;
        return err ? callback(err) : callback(null, value);
      };
      nextTick(function() {
        self.__listener = self._listener.bind(self);
        self.on("keypress", self.__listener);
      });
      this.__done = this._done.bind(this, null, null);
      this.on("blur", this.__done);
    };
    Textarea.prototype._listener = function(ch, key) {
      var done = this._done, value = this.value;
      if (key.name === "return")
        return;
      if (key.name === "enter") {
        ch = "\n";
      }
      if (key.name === "left" || key.name === "right" || key.name === "up" || key.name === "down") {
        ;
      }
      if (this.options.keys && key.ctrl && key.name === "e") {
        return this.readEditor();
      }
      if (key.name === "escape") {
        done(null, null);
      } else if (key.name === "backspace") {
        if (this.value.length) {
          if (this.screen.fullUnicode) {
            if (unicode.isSurrogate(this.value, this.value.length - 2)) {
              this.value = this.value.slice(0, -2);
            } else {
              this.value = this.value.slice(0, -1);
            }
          } else {
            this.value = this.value.slice(0, -1);
          }
        }
      } else if (ch) {
        if (!/^[\x00-\x08\x0b-\x0c\x0e-\x1f\x7f]$/.test(ch)) {
          this.value += ch;
        }
      }
      if (this.value !== value) {
        this.screen.render();
      }
    };
    Textarea.prototype._typeScroll = function() {
      var height = this.height - this.iheight;
      if (this._clines.length - this.childBase > height) {
        this.scroll(this._clines.length);
      }
    };
    Textarea.prototype.getValue = function() {
      return this.value;
    };
    Textarea.prototype.setValue = function(value) {
      if (value == null) {
        value = this.value;
      }
      if (this._value !== value) {
        this.value = value;
        this._value = value;
        this.setContent(this.value);
        this._typeScroll();
        this._updateCursor();
      }
    };
    Textarea.prototype.clearInput = Textarea.prototype.clearValue = function() {
      return this.setValue("");
    };
    Textarea.prototype.submit = function() {
      if (!this.__listener)
        return;
      return this.__listener("\x1B", { name: "escape" });
    };
    Textarea.prototype.cancel = function() {
      if (!this.__listener)
        return;
      return this.__listener("\x1B", { name: "escape" });
    };
    Textarea.prototype.render = function() {
      this.setValue();
      return this._render();
    };
    Textarea.prototype.editor = Textarea.prototype.setEditor = Textarea.prototype.readEditor = function(callback) {
      var self = this;
      if (this._reading) {
        var _cb = this._callback, cb = callback;
        this._done("stop");
        callback = function(err, value) {
          if (_cb)
            _cb(err, value);
          if (cb)
            cb(err, value);
        };
      }
      if (!callback) {
        callback = function() {
        };
      }
      return this.screen.readEditor({ value: this.value }, function(err, value) {
        if (err) {
          if (err.message === "Unsuccessful.") {
            self.screen.render();
            return self.readInput(callback);
          }
          self.screen.render();
          self.readInput(callback);
          return callback(err);
        }
        self.setValue(value);
        self.screen.render();
        return self.readInput(callback);
      });
    };
    module2.exports = Textarea;
  }
});

// node_modules/blessed/lib/widgets/textbox.js
var require_textbox = __commonJS({
  "node_modules/blessed/lib/widgets/textbox.js"(exports, module2) {
    var Node = require_node();
    var Textarea = require_textarea();
    function Textbox(options) {
      if (!(this instanceof Node)) {
        return new Textbox(options);
      }
      options = options || {};
      options.scrollable = false;
      Textarea.call(this, options);
      this.secret = options.secret;
      this.censor = options.censor;
    }
    Textbox.prototype.__proto__ = Textarea.prototype;
    Textbox.prototype.type = "textbox";
    Textbox.prototype.__olistener = Textbox.prototype._listener;
    Textbox.prototype._listener = function(ch, key) {
      if (key.name === "enter") {
        this._done(null, this.value);
        return;
      }
      return this.__olistener(ch, key);
    };
    Textbox.prototype.setValue = function(value) {
      var visible, val;
      if (value == null) {
        value = this.value;
      }
      if (this._value !== value) {
        value = value.replace(/\n/g, "");
        this.value = value;
        this._value = value;
        if (this.secret) {
          this.setContent("");
        } else if (this.censor) {
          this.setContent(Array(this.value.length + 1).join("*"));
        } else {
          visible = -(this.width - this.iwidth - 1);
          val = this.value.replace(/\t/g, this.screen.tabc);
          this.setContent(val.slice(visible));
        }
        this._updateCursor();
      }
    };
    Textbox.prototype.submit = function() {
      if (!this.__listener)
        return;
      return this.__listener("\r", { name: "enter" });
    };
    module2.exports = Textbox;
  }
});

// node_modules/blessed/lib/widgets/prompt.js
var require_prompt = __commonJS({
  "node_modules/blessed/lib/widgets/prompt.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    var Button = require_button();
    var Textbox = require_textbox();
    function Prompt(options) {
      if (!(this instanceof Node)) {
        return new Prompt(options);
      }
      options = options || {};
      options.hidden = true;
      Box.call(this, options);
      this._.input = new Textbox({
        parent: this,
        top: 3,
        height: 1,
        left: 2,
        right: 2,
        bg: "black"
      });
      this._.okay = new Button({
        parent: this,
        top: 5,
        height: 1,
        left: 2,
        width: 6,
        content: "Okay",
        align: "center",
        bg: "black",
        hoverBg: "blue",
        autoFocus: false,
        mouse: true
      });
      this._.cancel = new Button({
        parent: this,
        top: 5,
        height: 1,
        shrink: true,
        left: 10,
        width: 8,
        content: "Cancel",
        align: "center",
        bg: "black",
        hoverBg: "blue",
        autoFocus: false,
        mouse: true
      });
    }
    Prompt.prototype.__proto__ = Box.prototype;
    Prompt.prototype.type = "prompt";
    Prompt.prototype.input = Prompt.prototype.setInput = Prompt.prototype.readInput = function(text, value, callback) {
      var self = this;
      var okay, cancel;
      if (!callback) {
        callback = value;
        value = "";
      }
      this.show();
      this.setContent(" " + text);
      this._.input.value = value;
      this.screen.saveFocus();
      this._.okay.on("press", okay = function() {
        self._.input.submit();
      });
      this._.cancel.on("press", cancel = function() {
        self._.input.cancel();
      });
      this._.input.readInput(function(err, data) {
        self.hide();
        self.screen.restoreFocus();
        self._.okay.removeListener("press", okay);
        self._.cancel.removeListener("press", cancel);
        return callback(err, data);
      });
      this.screen.render();
    };
    module2.exports = Prompt;
  }
});

// node_modules/blessed/lib/widgets/question.js
var require_question = __commonJS({
  "node_modules/blessed/lib/widgets/question.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    var Button = require_button();
    function Question(options) {
      if (!(this instanceof Node)) {
        return new Question(options);
      }
      options = options || {};
      options.hidden = true;
      Box.call(this, options);
      this._.okay = new Button({
        screen: this.screen,
        parent: this,
        top: 2,
        height: 1,
        left: 2,
        width: 6,
        content: "Okay",
        align: "center",
        bg: "black",
        hoverBg: "blue",
        autoFocus: false,
        mouse: true
      });
      this._.cancel = new Button({
        screen: this.screen,
        parent: this,
        top: 2,
        height: 1,
        shrink: true,
        left: 10,
        width: 8,
        content: "Cancel",
        align: "center",
        bg: "black",
        hoverBg: "blue",
        autoFocus: false,
        mouse: true
      });
    }
    Question.prototype.__proto__ = Box.prototype;
    Question.prototype.type = "question";
    Question.prototype.ask = function(text, callback) {
      var self = this;
      var press, okay, cancel;
      this.show();
      this.setContent(" " + text);
      this.onScreenEvent("keypress", press = function(ch, key) {
        if (key.name === "mouse")
          return;
        if (key.name !== "enter" && key.name !== "escape" && key.name !== "q" && key.name !== "y" && key.name !== "n") {
          return;
        }
        done(null, key.name === "enter" || key.name === "y");
      });
      this._.okay.on("press", okay = function() {
        done(null, true);
      });
      this._.cancel.on("press", cancel = function() {
        done(null, false);
      });
      this.screen.saveFocus();
      this.focus();
      function done(err, data) {
        self.hide();
        self.screen.restoreFocus();
        self.removeScreenEvent("keypress", press);
        self._.okay.removeListener("press", okay);
        self._.cancel.removeListener("press", cancel);
        return callback(err, data);
      }
      this.screen.render();
    };
    module2.exports = Question;
  }
});

// node_modules/blessed/lib/widgets/radiobutton.js
var require_radiobutton = __commonJS({
  "node_modules/blessed/lib/widgets/radiobutton.js"(exports, module2) {
    var Node = require_node();
    var Checkbox = require_checkbox();
    function RadioButton(options) {
      var self = this;
      if (!(this instanceof Node)) {
        return new RadioButton(options);
      }
      options = options || {};
      Checkbox.call(this, options);
      this.on("check", function() {
        var el = self;
        while (el = el.parent) {
          if (el.type === "radio-set" || el.type === "form")
            break;
        }
        el = el || self.parent;
        el.forDescendants(function(el2) {
          if (el2.type !== "radio-button" || el2 === self) {
            return;
          }
          el2.uncheck();
        });
      });
    }
    RadioButton.prototype.__proto__ = Checkbox.prototype;
    RadioButton.prototype.type = "radio-button";
    RadioButton.prototype.render = function() {
      this.clearPos(true);
      this.setContent("(" + (this.checked ? "*" : " ") + ") " + this.text, true);
      return this._render();
    };
    RadioButton.prototype.toggle = RadioButton.prototype.check;
    module2.exports = RadioButton;
  }
});

// node_modules/blessed/lib/widgets/radioset.js
var require_radioset = __commonJS({
  "node_modules/blessed/lib/widgets/radioset.js"(exports, module2) {
    var Node = require_node();
    var Box = require_box();
    function RadioSet(options) {
      if (!(this instanceof Node)) {
        return new RadioSet(options);
      }
      options = options || {};
      Box.call(this, options);
    }
    RadioSet.prototype.__proto__ = Box.prototype;
    RadioSet.prototype.type = "radio-set";
    module2.exports = RadioSet;
  }
});

// node_modules/term.js/src/term.js
var require_term = __commonJS({
  "node_modules/term.js/src/term.js"(exports, module2) {
    (function() {
      "use strict";
      var window2 = this, document = this.document;
      function EventEmitter() {
        this._events = this._events || {};
      }
      EventEmitter.prototype.addListener = function(type3, listener) {
        this._events[type3] = this._events[type3] || [];
        this._events[type3].push(listener);
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.removeListener = function(type3, listener) {
        if (!this._events[type3])
          return;
        var obj = this._events[type3], i = obj.length;
        while (i--) {
          if (obj[i] === listener || obj[i].listener === listener) {
            obj.splice(i, 1);
            return;
          }
        }
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = function(type3) {
        if (this._events[type3])
          delete this._events[type3];
      };
      EventEmitter.prototype.once = function(type3, listener) {
        function on2() {
          var args = Array.prototype.slice.call(arguments);
          this.removeListener(type3, on2);
          return listener.apply(this, args);
        }
        on2.listener = listener;
        return this.on(type3, on2);
      };
      EventEmitter.prototype.emit = function(type3) {
        if (!this._events[type3])
          return;
        var args = Array.prototype.slice.call(arguments, 1), obj = this._events[type3], l = obj.length, i = 0;
        for (; i < l; i++) {
          obj[i].apply(this, args);
        }
      };
      EventEmitter.prototype.listeners = function(type3) {
        return this._events[type3] = this._events[type3] || [];
      };
      function Stream() {
        EventEmitter.call(this);
      }
      inherits(Stream, EventEmitter);
      Stream.prototype.pipe = function(dest, options) {
        var src = this, ondata, onerror, onend;
        function unbind() {
          src.removeListener("data", ondata);
          src.removeListener("error", onerror);
          src.removeListener("end", onend);
          dest.removeListener("error", onerror);
          dest.removeListener("close", unbind);
        }
        src.on("data", ondata = function(data) {
          dest.write(data);
        });
        src.on("error", onerror = function(err) {
          unbind();
          if (!this.listeners("error").length) {
            throw err;
          }
        });
        src.on("end", onend = function() {
          dest.end();
          unbind();
        });
        dest.on("error", onerror);
        dest.on("close", unbind);
        dest.emit("pipe", src);
        return dest;
      };
      var normal = 0, escaped = 1, csi = 2, osc = 3, charset = 4, dcs = 5, ignore = 6, UDK = { type: "udk" };
      function Terminal(options) {
        var self = this;
        if (!(this instanceof Terminal)) {
          return new Terminal(arguments[0], arguments[1], arguments[2]);
        }
        Stream.call(this);
        if (typeof options === "number") {
          options = {
            cols: arguments[0],
            rows: arguments[1],
            handler: arguments[2]
          };
        }
        options = options || {};
        each(keys4(Terminal.defaults), function(key) {
          if (options[key] == null) {
            options[key] = Terminal.options[key];
            if (Terminal[key] !== Terminal.defaults[key]) {
              options[key] = Terminal[key];
            }
          }
          self[key] = options[key];
        });
        if (options.colors.length === 8) {
          options.colors = options.colors.concat(Terminal._colors.slice(8));
        } else if (options.colors.length === 16) {
          options.colors = options.colors.concat(Terminal._colors.slice(16));
        } else if (options.colors.length === 10) {
          options.colors = options.colors.slice(0, -2).concat(
            Terminal._colors.slice(8, -2),
            options.colors.slice(-2)
          );
        } else if (options.colors.length === 18) {
          options.colors = options.colors.slice(0, -2).concat(
            Terminal._colors.slice(16, -2),
            options.colors.slice(-2)
          );
        }
        this.colors = options.colors;
        this.options = options;
        this.parent = options.body || options.parent || (document ? document.getElementsByTagName("body")[0] : null);
        this.cols = options.cols || options.geometry[0];
        this.rows = options.rows || options.geometry[1];
        this.setRawMode;
        this.isTTY = true;
        this.isRaw = true;
        this.columns = this.cols;
        this.rows = this.rows;
        if (options.handler) {
          this.on("data", options.handler);
        }
        this.ybase = 0;
        this.ydisp = 0;
        this.x = 0;
        this.y = 0;
        this.cursorState = 0;
        this.cursorHidden = false;
        this.convertEol;
        this.state = 0;
        this.queue = "";
        this.scrollTop = 0;
        this.scrollBottom = this.rows - 1;
        this.applicationKeypad = false;
        this.applicationCursor = false;
        this.originMode = false;
        this.insertMode = false;
        this.wraparoundMode = false;
        this.normal = null;
        this.prefixMode = false;
        this.selectMode = false;
        this.visualMode = false;
        this.searchMode = false;
        this.searchDown;
        this.entry = "";
        this.entryPrefix = "Search: ";
        this._real;
        this._selected;
        this._textarea;
        this.charset = null;
        this.gcharset = null;
        this.glevel = 0;
        this.charsets = [null];
        this.decLocator;
        this.x10Mouse;
        this.vt200Mouse;
        this.vt300Mouse;
        this.normalMouse;
        this.mouseEvents;
        this.sendFocus;
        this.utfMouse;
        this.sgrMouse;
        this.urxvtMouse;
        this.element;
        this.children;
        this.refreshStart;
        this.refreshEnd;
        this.savedX;
        this.savedY;
        this.savedCols;
        this.readable = true;
        this.writable = true;
        this.defAttr = 0 << 18 | 257 << 9 | 256 << 0;
        this.curAttr = this.defAttr;
        this.params = [];
        this.currentParam = 0;
        this.prefix = "";
        this.postfix = "";
        this.lines = [];
        var i = this.rows;
        while (i--) {
          this.lines.push(this.blankLine());
        }
        this.tabs;
        this.setupStops();
      }
      inherits(Terminal, Stream);
      Terminal.tangoColors = [
        // dark:
        "#2e3436",
        "#cc0000",
        "#4e9a06",
        "#c4a000",
        "#3465a4",
        "#75507b",
        "#06989a",
        "#d3d7cf",
        // bright:
        "#555753",
        "#ef2929",
        "#8ae234",
        "#fce94f",
        "#729fcf",
        "#ad7fa8",
        "#34e2e2",
        "#eeeeec"
      ];
      Terminal.xtermColors = [
        // dark:
        "#000000",
        // black
        "#cd0000",
        // red3
        "#00cd00",
        // green3
        "#cdcd00",
        // yellow3
        "#0000ee",
        // blue2
        "#cd00cd",
        // magenta3
        "#00cdcd",
        // cyan3
        "#e5e5e5",
        // gray90
        // bright:
        "#7f7f7f",
        // gray50
        "#ff0000",
        // red
        "#00ff00",
        // green
        "#ffff00",
        // yellow
        "#5c5cff",
        // rgb:5c/5c/ff
        "#ff00ff",
        // magenta
        "#00ffff",
        // cyan
        "#ffffff"
        // white
      ];
      Terminal.colors = function() {
        var colors = Terminal.tangoColors.slice(), r = [0, 95, 135, 175, 215, 255], i;
        i = 0;
        for (; i < 216; i++) {
          out(r[i / 36 % 6 | 0], r[i / 6 % 6 | 0], r[i % 6]);
        }
        i = 0;
        for (; i < 24; i++) {
          r = 8 + i * 10;
          out(r, r, r);
        }
        function out(r2, g, b) {
          colors.push("#" + hex(r2) + hex(g) + hex(b));
        }
        function hex(c) {
          c = c.toString(16);
          return c.length < 2 ? "0" + c : c;
        }
        return colors;
      }();
      Terminal.colors[256] = "#000000";
      Terminal.colors[257] = "#f0f0f0";
      Terminal._colors = Terminal.colors.slice();
      Terminal.vcolors = function() {
        var out = [], colors = Terminal.colors, i = 0, color;
        for (; i < 256; i++) {
          color = parseInt(colors[i].substring(1), 16);
          out.push([
            color >> 16 & 255,
            color >> 8 & 255,
            color & 255
          ]);
        }
        return out;
      }();
      Terminal.defaults = {
        colors: Terminal.colors,
        convertEol: false,
        termName: "xterm",
        geometry: [80, 24],
        cursorBlink: true,
        visualBell: false,
        popOnBell: false,
        scrollback: 1e3,
        screenKeys: false,
        debug: false,
        useStyle: false
        // programFeatures: false,
        // focusKeys: false,
      };
      Terminal.options = {};
      each(keys4(Terminal.defaults), function(key) {
        Terminal[key] = Terminal.defaults[key];
        Terminal.options[key] = Terminal.defaults[key];
      });
      Terminal.focus = null;
      Terminal.prototype.focus = function() {
        if (Terminal.focus === this)
          return;
        if (Terminal.focus) {
          Terminal.focus.blur();
        }
        if (this.sendFocus)
          this.send("\x1B[I");
        this.showCursor();
        Terminal.focus = this;
      };
      Terminal.prototype.blur = function() {
        if (Terminal.focus !== this)
          return;
        this.cursorState = 0;
        this.refresh(this.y, this.y);
        if (this.sendFocus)
          this.send("\x1B[O");
        Terminal.focus = null;
      };
      Terminal.prototype.initGlobal = function() {
        var document2 = this.document;
        Terminal._boundDocs = Terminal._boundDocs || [];
        if (~indexOf(Terminal._boundDocs, document2)) {
          return;
        }
        Terminal._boundDocs.push(document2);
        Terminal.bindPaste(document2);
        Terminal.bindKeys(document2);
        Terminal.bindCopy(document2);
        if (this.isMobile) {
          this.fixMobile(document2);
        }
        if (this.useStyle) {
          Terminal.insertStyle(document2, this.colors[256], this.colors[257]);
        }
      };
      Terminal.bindPaste = function(document2) {
        var window3 = document2.defaultView;
        on(window3, "paste", function(ev) {
          var term = Terminal.focus;
          if (!term)
            return;
          if (ev.clipboardData) {
            term.send(ev.clipboardData.getData("text/plain"));
          } else if (term.context.clipboardData) {
            term.send(term.context.clipboardData.getData("Text"));
          }
          term.element.contentEditable = "inherit";
          return cancel(ev);
        });
      };
      Terminal.bindKeys = function(document2) {
        on(document2, "keydown", function(ev) {
          if (!Terminal.focus)
            return;
          var target = ev.target || ev.srcElement;
          if (!target)
            return;
          if (target === Terminal.focus.element || target === Terminal.focus.context || target === Terminal.focus.document || target === Terminal.focus.body || target === Terminal._textarea || target === Terminal.focus.parent) {
            return Terminal.focus.keyDown(ev);
          }
        }, true);
        on(document2, "keypress", function(ev) {
          if (!Terminal.focus)
            return;
          var target = ev.target || ev.srcElement;
          if (!target)
            return;
          if (target === Terminal.focus.element || target === Terminal.focus.context || target === Terminal.focus.document || target === Terminal.focus.body || target === Terminal._textarea || target === Terminal.focus.parent) {
            return Terminal.focus.keyPress(ev);
          }
        }, true);
        on(document2, "mousedown", function(ev) {
          if (!Terminal.focus)
            return;
          var el = ev.target || ev.srcElement;
          if (!el)
            return;
          do {
            if (el === Terminal.focus.element)
              return;
          } while (el = el.parentNode);
          Terminal.focus.blur();
        });
      };
      Terminal.bindCopy = function(document2) {
        var window3 = document2.defaultView;
        on(window3, "copy", function(ev) {
          var term = Terminal.focus;
          if (!term)
            return;
          if (!term._selected)
            return;
          var textarea = term.getCopyTextarea();
          var text = term.grabText(
            term._selected.x1,
            term._selected.x2,
            term._selected.y1,
            term._selected.y2
          );
          term.emit("copy", text);
          textarea.focus();
          textarea.textContent = text;
          textarea.value = text;
          textarea.setSelectionRange(0, text.length);
          setTimeout2(function() {
            term.element.focus();
            term.focus();
          }, 1);
        });
      };
      Terminal.prototype.fixMobile = function(document2) {
        var self = this;
        var textarea = document2.createElement("textarea");
        textarea.style.position = "absolute";
        textarea.style.left = "-32000px";
        textarea.style.top = "-32000px";
        textarea.style.width = "0px";
        textarea.style.height = "0px";
        textarea.style.opacity = "0";
        textarea.style.backgroundColor = "transparent";
        textarea.style.borderStyle = "none";
        textarea.style.outlineStyle = "none";
        textarea.autocapitalize = "none";
        textarea.autocorrect = "off";
        document2.getElementsByTagName("body")[0].appendChild(textarea);
        Terminal._textarea = textarea;
        setTimeout2(function() {
          textarea.focus();
        }, 1e3);
        if (this.isAndroid) {
          on(textarea, "change", function() {
            var value = textarea.textContent || textarea.value;
            textarea.value = "";
            textarea.textContent = "";
            self.send(value + "\r");
          });
        }
      };
      Terminal.insertStyle = function(document2, bg, fg) {
        var style = document2.getElementById("term-style");
        if (style)
          return;
        var head = document2.getElementsByTagName("head")[0];
        if (!head)
          return;
        var style = document2.createElement("style");
        style.id = "term-style";
        style.innerHTML = ".terminal {\n  float: left;\n  border: " + bg + ' solid 5px;\n  font-family: "DejaVu Sans Mono", "Liberation Mono", monospace;\n  font-size: 11px;\n  color: ' + fg + ";\n  background: " + bg + ";\n}\n\n.terminal-cursor {\n  color: " + bg + ";\n  background: " + fg + ";\n}\n";
        head.insertBefore(style, head.firstChild);
      };
      Terminal.prototype.open = function(parent) {
        var self = this, i = 0, div;
        this.parent = parent || this.parent;
        if (!this.parent) {
          throw new Error("Terminal requires a parent element.");
        }
        this.context = this.parent.ownerDocument.defaultView;
        this.document = this.parent.ownerDocument;
        this.body = this.document.getElementsByTagName("body")[0];
        if (this.context.navigator && this.context.navigator.userAgent) {
          this.isMac = !!~this.context.navigator.userAgent.indexOf("Mac");
          this.isIpad = !!~this.context.navigator.userAgent.indexOf("iPad");
          this.isIphone = !!~this.context.navigator.userAgent.indexOf("iPhone");
          this.isAndroid = !!~this.context.navigator.userAgent.indexOf("Android");
          this.isMobile = this.isIpad || this.isIphone || this.isAndroid;
          this.isMSIE = !!~this.context.navigator.userAgent.indexOf("MSIE");
        }
        this.element = this.document.createElement("div");
        this.element.className = "terminal";
        this.element.style.outline = "none";
        this.element.setAttribute("tabindex", 0);
        this.element.setAttribute("spellcheck", "false");
        this.element.style.backgroundColor = this.colors[256];
        this.element.style.color = this.colors[257];
        this.children = [];
        for (; i < this.rows; i++) {
          div = this.document.createElement("div");
          this.element.appendChild(div);
          this.children.push(div);
        }
        this.parent.appendChild(this.element);
        this.refresh(0, this.rows - 1);
        if (!("useEvents" in this.options) || this.options.useEvents) {
          this.initGlobal();
        }
        if (!("useFocus" in this.options) || this.options.useFocus) {
          this.focus();
          this.startBlink();
          on(this.element, "focus", function() {
            self.focus();
            if (self.isMobile) {
              Terminal._textarea.focus();
            }
          });
          on(this.element, "mousedown", function() {
            self.focus();
          });
          on(this.element, "mousedown", function(ev) {
            var button = ev.button != null ? +ev.button : ev.which != null ? ev.which - 1 : null;
            if (self.isMSIE) {
              button = button === 1 ? 0 : button === 4 ? 1 : button;
            }
            if (button !== 2)
              return;
            self.element.contentEditable = "true";
            setTimeout2(function() {
              self.element.contentEditable = "inherit";
            }, 1);
          }, true);
        }
        if (!("useMouse" in this.options) || this.options.useMouse) {
          this.bindMouse();
        }
        if (!("useFocus" in this.options) || this.options.useFocus) {
          setTimeout2(function() {
            self.element.focus();
          }, 100);
        }
        if (Terminal.brokenBold == null) {
          Terminal.brokenBold = isBoldBroken(this.document);
        }
        this.emit("open");
      };
      Terminal.prototype.setRawMode = function(value) {
        this.isRaw = !!value;
      };
      Terminal.prototype.bindMouse = function() {
        var el = this.element, self = this, pressed = 32;
        var wheelEvent = "onmousewheel" in this.context ? "mousewheel" : "DOMMouseScroll";
        function sendButton(ev) {
          var button, pos;
          button = getButton(ev);
          pos = getCoords(ev);
          if (!pos)
            return;
          sendEvent(button, pos);
          switch (ev.type) {
            case "mousedown":
              pressed = button;
              break;
            case "mouseup":
              pressed = 32;
              break;
            case wheelEvent:
              break;
          }
        }
        function sendMove(ev) {
          var button = pressed, pos;
          pos = getCoords(ev);
          if (!pos)
            return;
          button += 32;
          sendEvent(button, pos);
        }
        function encode(data, ch) {
          if (!self.utfMouse) {
            if (ch === 255)
              return data.push(0);
            if (ch > 127)
              ch = 127;
            data.push(ch);
          } else {
            if (ch === 2047)
              return data.push(0);
            if (ch < 127) {
              data.push(ch);
            } else {
              if (ch > 2047)
                ch = 2047;
              data.push(192 | ch >> 6);
              data.push(128 | ch & 63);
            }
          }
        }
        function sendEvent(button, pos) {
          if (self.vt300Mouse) {
            button &= 3;
            pos.x -= 32;
            pos.y -= 32;
            var data = "\x1B[24";
            if (button === 0)
              data += "1";
            else if (button === 1)
              data += "3";
            else if (button === 2)
              data += "5";
            else if (button === 3)
              return;
            else
              data += "0";
            data += "~[" + pos.x + "," + pos.y + "]\r";
            self.send(data);
            return;
          }
          if (self.decLocator) {
            button &= 3;
            pos.x -= 32;
            pos.y -= 32;
            if (button === 0)
              button = 2;
            else if (button === 1)
              button = 4;
            else if (button === 2)
              button = 6;
            else if (button === 3)
              button = 3;
            self.send("\x1B[" + button + ";" + (button === 3 ? 4 : 0) + ";" + pos.y + ";" + pos.x + ";" + (pos.page || 0) + "&w");
            return;
          }
          if (self.urxvtMouse) {
            pos.x -= 32;
            pos.y -= 32;
            pos.x++;
            pos.y++;
            self.send("\x1B[" + button + ";" + pos.x + ";" + pos.y + "M");
            return;
          }
          if (self.sgrMouse) {
            pos.x -= 32;
            pos.y -= 32;
            self.send("\x1B[<" + ((button & 3) === 3 ? button & ~3 : button) + ";" + pos.x + ";" + pos.y + ((button & 3) === 3 ? "m" : "M"));
            return;
          }
          var data = [];
          encode(data, button);
          encode(data, pos.x);
          encode(data, pos.y);
          self.send("\x1B[M" + String2.fromCharCode.apply(String2, data));
        }
        function getButton(ev) {
          var button, shift, meta, ctrl, mod;
          switch (ev.type) {
            case "mousedown":
              button = ev.button != null ? +ev.button : ev.which != null ? ev.which - 1 : null;
              if (self.isMSIE) {
                button = button === 1 ? 0 : button === 4 ? 1 : button;
              }
              break;
            case "mouseup":
              button = 3;
              break;
            case "DOMMouseScroll":
              button = ev.detail < 0 ? 64 : 65;
              break;
            case "mousewheel":
              button = ev.wheelDeltaY > 0 ? 64 : 65;
              break;
          }
          shift = ev.shiftKey ? 4 : 0;
          meta = ev.metaKey ? 8 : 0;
          ctrl = ev.ctrlKey ? 16 : 0;
          mod = shift | meta | ctrl;
          if (self.vt200Mouse) {
            mod &= ctrl;
          } else if (!self.normalMouse) {
            mod = 0;
          }
          button = 32 + (mod << 2) + button;
          return button;
        }
        function getCoords(ev) {
          var x, y, w, h, el2;
          if (ev.pageX == null)
            return;
          x = ev.pageX;
          y = ev.pageY;
          el2 = self.element;
          while (el2 && el2 !== self.document.documentElement) {
            x -= el2.offsetLeft;
            y -= el2.offsetTop;
            el2 = "offsetParent" in el2 ? el2.offsetParent : el2.parentNode;
          }
          w = self.element.clientWidth;
          h = self.element.clientHeight;
          x = Math.round(x / w * self.cols);
          y = Math.round(y / h * self.rows);
          if (x < 0)
            x = 0;
          if (x > self.cols)
            x = self.cols;
          if (y < 0)
            y = 0;
          if (y > self.rows)
            y = self.rows;
          x += 32;
          y += 32;
          return {
            x,
            y,
            type: ev.type === wheelEvent ? "mousewheel" : ev.type
          };
        }
        on(el, "mousedown", function(ev) {
          if (!self.mouseEvents)
            return;
          sendButton(ev);
          self.focus();
          if (self.normalMouse)
            on(self.document, "mousemove", sendMove);
          if (!self.x10Mouse) {
            on(self.document, "mouseup", function up(ev2) {
              sendButton(ev2);
              if (self.normalMouse)
                off(self.document, "mousemove", sendMove);
              off(self.document, "mouseup", up);
              return cancel(ev2);
            });
          }
          return cancel(ev);
        });
        on(el, wheelEvent, function(ev) {
          if (!self.mouseEvents)
            return;
          if (self.x10Mouse || self.vt300Mouse || self.decLocator)
            return;
          sendButton(ev);
          return cancel(ev);
        });
        on(el, wheelEvent, function(ev) {
          if (self.mouseEvents)
            return;
          if (self.applicationKeypad)
            return;
          if (ev.type === "DOMMouseScroll") {
            self.scrollDisp(ev.detail < 0 ? -5 : 5);
          } else {
            self.scrollDisp(ev.wheelDeltaY > 0 ? -5 : 5);
          }
          return cancel(ev);
        });
      };
      Terminal.prototype.close = Terminal.prototype.destroySoon = Terminal.prototype.destroy = function() {
        if (this.destroyed) {
          return;
        }
        if (this._blink) {
          clearInterval(this._blink);
          delete this._blink;
        }
        this.readable = false;
        this.writable = false;
        this.destroyed = true;
        this._events = {};
        this.handler = function() {
        };
        this.write = function() {
        };
        this.end = function() {
        };
        if (this.element.parentNode) {
          this.element.parentNode.removeChild(this.element);
        }
        this.emit("end");
        this.emit("close");
        this.emit("finish");
        this.emit("destroy");
      };
      Terminal.prototype.refresh = function(start, end) {
        var x, y, i, line, out, ch, width, data, attr, bg, fg, flags, row, parent;
        if (end - start >= this.rows / 2) {
          parent = this.element.parentNode;
          if (parent)
            parent.removeChild(this.element);
        }
        width = this.cols;
        y = start;
        if (end >= this.lines.length) {
          this.log("`end` is too large. Most likely a bad CSR.");
          end = this.lines.length - 1;
        }
        for (; y <= end; y++) {
          row = y + this.ydisp;
          line = this.lines[row];
          out = "";
          if (y === this.y && this.cursorState && (this.ydisp === this.ybase || this.selectMode) && !this.cursorHidden) {
            x = this.x;
          } else {
            x = -1;
          }
          attr = this.defAttr;
          i = 0;
          for (; i < width; i++) {
            data = line[i][0];
            ch = line[i][1];
            if (i === x)
              data = -1;
            if (data !== attr) {
              if (attr !== this.defAttr) {
                out += "</span>";
              }
              if (data !== this.defAttr) {
                if (data === -1) {
                  out += '<span class="reverse-video terminal-cursor">';
                } else {
                  out += '<span style="';
                  bg = data & 511;
                  fg = data >> 9 & 511;
                  flags = data >> 18;
                  if (flags & 1) {
                    if (!Terminal.brokenBold) {
                      out += "font-weight:bold;";
                    }
                    if (fg < 8)
                      fg += 8;
                  }
                  if (flags & 2) {
                    out += "text-decoration:underline;";
                  }
                  if (flags & 4) {
                    if (flags & 2) {
                      out = out.slice(0, -1);
                      out += " blink;";
                    } else {
                      out += "text-decoration:blink;";
                    }
                  }
                  if (flags & 8) {
                    bg = data >> 9 & 511;
                    fg = data & 511;
                    if (flags & 1 && fg < 8)
                      fg += 8;
                  }
                  if (flags & 16) {
                    out += "visibility:hidden;";
                  }
                  if (bg !== 256) {
                    out += "background-color:" + this.colors[bg] + ";";
                  }
                  if (fg !== 257) {
                    out += "color:" + this.colors[fg] + ";";
                  }
                  out += '">';
                }
              }
            }
            switch (ch) {
              case "&":
                out += "&amp;";
                break;
              case "<":
                out += "&lt;";
                break;
              case ">":
                out += "&gt;";
                break;
              default:
                if (ch <= " ") {
                  out += "&nbsp;";
                } else {
                  if (isWide(ch))
                    i++;
                  out += ch;
                }
                break;
            }
            attr = data;
          }
          if (attr !== this.defAttr) {
            out += "</span>";
          }
          this.children[y].innerHTML = out;
        }
        if (parent)
          parent.appendChild(this.element);
      };
      Terminal.prototype._cursorBlink = function() {
        if (Terminal.focus !== this)
          return;
        this.cursorState ^= 1;
        this.refresh(this.y, this.y);
      };
      Terminal.prototype.showCursor = function() {
        if (!this.cursorState) {
          this.cursorState = 1;
          this.refresh(this.y, this.y);
        } else {
        }
      };
      Terminal.prototype.startBlink = function() {
        if (!this.cursorBlink)
          return;
        var self = this;
        this._blinker = function() {
          self._cursorBlink();
        };
        this._blink = setInterval2(this._blinker, 500);
      };
      Terminal.prototype.refreshBlink = function() {
        if (!this.cursorBlink || !this._blink)
          return;
        clearInterval(this._blink);
        this._blink = setInterval2(this._blinker, 500);
      };
      Terminal.prototype.scroll = function() {
        var row;
        if (++this.ybase === this.scrollback) {
          this.ybase = this.ybase / 2 | 0;
          this.lines = this.lines.slice(-(this.ybase + this.rows) + 1);
        }
        this.ydisp = this.ybase;
        row = this.ybase + this.rows - 1;
        row -= this.rows - 1 - this.scrollBottom;
        if (row === this.lines.length) {
          this.lines.push(this.blankLine());
        } else {
          this.lines.splice(row, 0, this.blankLine());
        }
        if (this.scrollTop !== 0) {
          if (this.ybase !== 0) {
            this.ybase--;
            this.ydisp = this.ybase;
          }
          this.lines.splice(this.ybase + this.scrollTop, 1);
        }
        this.updateRange(this.scrollTop);
        this.updateRange(this.scrollBottom);
      };
      Terminal.prototype.scrollDisp = function(disp) {
        this.ydisp += disp;
        if (this.ydisp > this.ybase) {
          this.ydisp = this.ybase;
        } else if (this.ydisp < 0) {
          this.ydisp = 0;
        }
        this.refresh(0, this.rows - 1);
      };
      Terminal.prototype.write = function(data) {
        var l = data.length, i = 0, j, cs, ch;
        this.refreshStart = this.y;
        this.refreshEnd = this.y;
        if (this.ybase !== this.ydisp) {
          this.ydisp = this.ybase;
          this.maxRange();
        }
        for (; i < l; i++, this.lch = ch) {
          ch = data[i];
          switch (this.state) {
            case normal:
              switch (ch) {
                case "\x07":
                  this.bell();
                  break;
                case "\n":
                case "\v":
                case "\f":
                  if (this.convertEol) {
                    this.x = 0;
                  }
                  this.y++;
                  if (this.y > this.scrollBottom) {
                    this.y--;
                    this.scroll();
                  }
                  break;
                case "\r":
                  this.x = 0;
                  break;
                case "\b":
                  if (this.x > 0) {
                    this.x--;
                  }
                  break;
                case "	":
                  this.x = this.nextStop();
                  break;
                case "":
                  this.setgLevel(1);
                  break;
                case "":
                  this.setgLevel(0);
                  break;
                case "\x1B":
                  this.state = escaped;
                  break;
                default:
                  if (ch >= " ") {
                    if (this.charset && this.charset[ch]) {
                      ch = this.charset[ch];
                    }
                    if (this.x >= this.cols) {
                      this.x = 0;
                      this.y++;
                      if (this.y > this.scrollBottom) {
                        this.y--;
                        this.scroll();
                      }
                    }
                    this.lines[this.y + this.ybase][this.x] = [this.curAttr, ch];
                    this.x++;
                    this.updateRange(this.y);
                    if (isWide(ch)) {
                      j = this.y + this.ybase;
                      if (this.cols < 2 || this.x >= this.cols) {
                        this.lines[j][this.x - 1] = [this.curAttr, " "];
                        break;
                      }
                      this.lines[j][this.x] = [this.curAttr, " "];
                      this.x++;
                    }
                  }
                  break;
              }
              break;
            case escaped:
              switch (ch) {
                case "[":
                  this.params = [];
                  this.currentParam = 0;
                  this.state = csi;
                  break;
                case "]":
                  this.params = [];
                  this.currentParam = 0;
                  this.state = osc;
                  break;
                case "P":
                  this.params = [];
                  this.prefix = "";
                  this.currentParam = "";
                  this.state = dcs;
                  break;
                case "_":
                  this.state = ignore;
                  break;
                case "^":
                  this.state = ignore;
                  break;
                case "c":
                  this.reset();
                  break;
                case "E":
                  this.x = 0;
                  ;
                case "D":
                  this.index();
                  break;
                case "M":
                  this.reverseIndex();
                  break;
                case "%":
                  this.setgLevel(0);
                  this.setgCharset(0, Terminal.charsets.US);
                  this.state = normal;
                  i++;
                  break;
                case "(":
                case ")":
                case "*":
                case "+":
                case "-":
                case ".":
                  switch (ch) {
                    case "(":
                      this.gcharset = 0;
                      break;
                    case ")":
                      this.gcharset = 1;
                      break;
                    case "*":
                      this.gcharset = 2;
                      break;
                    case "+":
                      this.gcharset = 3;
                      break;
                    case "-":
                      this.gcharset = 1;
                      break;
                    case ".":
                      this.gcharset = 2;
                      break;
                  }
                  this.state = charset;
                  break;
                case "/":
                  this.gcharset = 3;
                  this.state = charset;
                  i--;
                  break;
                case "N":
                  break;
                case "O":
                  break;
                case "n":
                  this.setgLevel(2);
                  break;
                case "o":
                  this.setgLevel(3);
                  break;
                case "|":
                  this.setgLevel(3);
                  break;
                case "}":
                  this.setgLevel(2);
                  break;
                case "~":
                  this.setgLevel(1);
                  break;
                case "7":
                  this.saveCursor();
                  this.state = normal;
                  break;
                case "8":
                  this.restoreCursor();
                  this.state = normal;
                  break;
                case "#":
                  this.state = normal;
                  i++;
                  break;
                case "H":
                  this.tabSet();
                  break;
                case "=":
                  this.log("Serial port requested application keypad.");
                  this.applicationKeypad = true;
                  this.state = normal;
                  break;
                case ">":
                  this.log("Switching back to normal keypad.");
                  this.applicationKeypad = false;
                  this.state = normal;
                  break;
                default:
                  this.state = normal;
                  this.error("Unknown ESC control: %s.", ch);
                  break;
              }
              break;
            case charset:
              switch (ch) {
                case "0":
                  cs = Terminal.charsets.SCLD;
                  break;
                case "A":
                  cs = Terminal.charsets.UK;
                  break;
                case "B":
                  cs = Terminal.charsets.US;
                  break;
                case "4":
                  cs = Terminal.charsets.Dutch;
                  break;
                case "C":
                case "5":
                  cs = Terminal.charsets.Finnish;
                  break;
                case "R":
                  cs = Terminal.charsets.French;
                  break;
                case "Q":
                  cs = Terminal.charsets.FrenchCanadian;
                  break;
                case "K":
                  cs = Terminal.charsets.German;
                  break;
                case "Y":
                  cs = Terminal.charsets.Italian;
                  break;
                case "E":
                case "6":
                  cs = Terminal.charsets.NorwegianDanish;
                  break;
                case "Z":
                  cs = Terminal.charsets.Spanish;
                  break;
                case "H":
                case "7":
                  cs = Terminal.charsets.Swedish;
                  break;
                case "=":
                  cs = Terminal.charsets.Swiss;
                  break;
                case "/":
                  cs = Terminal.charsets.ISOLatin;
                  i++;
                  break;
                default:
                  cs = Terminal.charsets.US;
                  break;
              }
              this.setgCharset(this.gcharset, cs);
              this.gcharset = null;
              this.state = normal;
              break;
            case osc:
              if (this.lch === "\x1B" && ch === "\\" || ch === "\x07") {
                if (this.lch === "\x1B") {
                  if (typeof this.currentParam === "string") {
                    this.currentParam = this.currentParam.slice(0, -1);
                  } else if (typeof this.currentParam == "number") {
                    this.currentParam = (this.currentParam - ("\x1B".charCodeAt(0) - 48)) / 10;
                  }
                }
                this.params.push(this.currentParam);
                switch (this.params[0]) {
                  case 0:
                  case 1:
                  case 2:
                    if (this.params[1]) {
                      this.title = this.params[1];
                      this.handleTitle(this.title);
                    }
                    break;
                  case 3:
                    break;
                  case 4:
                  case 5:
                    break;
                  case 10:
                  case 11:
                  case 12:
                  case 13:
                  case 14:
                  case 15:
                  case 16:
                  case 17:
                  case 18:
                  case 19:
                    break;
                  case 46:
                    break;
                  case 50:
                    break;
                  case 51:
                    break;
                  case 52:
                    break;
                  case 104:
                  case 105:
                  case 110:
                  case 111:
                  case 112:
                  case 113:
                  case 114:
                  case 115:
                  case 116:
                  case 117:
                  case 118:
                    break;
                }
                this.params = [];
                this.currentParam = 0;
                this.state = normal;
              } else {
                if (!this.params.length) {
                  if (ch >= "0" && ch <= "9") {
                    this.currentParam = this.currentParam * 10 + ch.charCodeAt(0) - 48;
                  } else if (ch === ";") {
                    this.params.push(this.currentParam);
                    this.currentParam = "";
                  }
                } else {
                  this.currentParam += ch;
                }
              }
              break;
            case csi:
              if (ch === "?" || ch === ">" || ch === "!") {
                this.prefix = ch;
                break;
              }
              if (ch >= "0" && ch <= "9") {
                this.currentParam = this.currentParam * 10 + ch.charCodeAt(0) - 48;
                break;
              }
              if (ch === "$" || ch === '"' || ch === " " || ch === "'") {
                this.postfix = ch;
                break;
              }
              this.params.push(this.currentParam);
              this.currentParam = 0;
              if (ch === ";")
                break;
              this.state = normal;
              switch (ch) {
                case "A":
                  this.cursorUp(this.params);
                  break;
                case "B":
                  this.cursorDown(this.params);
                  break;
                case "C":
                  this.cursorForward(this.params);
                  break;
                case "D":
                  this.cursorBackward(this.params);
                  break;
                case "H":
                  this.cursorPos(this.params);
                  break;
                case "J":
                  this.eraseInDisplay(this.params);
                  break;
                case "K":
                  this.eraseInLine(this.params);
                  break;
                case "m":
                  if (!this.prefix) {
                    this.charAttributes(this.params);
                  }
                  break;
                case "n":
                  if (!this.prefix) {
                    this.deviceStatus(this.params);
                  }
                  break;
                case "@":
                  this.insertChars(this.params);
                  break;
                case "E":
                  this.cursorNextLine(this.params);
                  break;
                case "F":
                  this.cursorPrecedingLine(this.params);
                  break;
                case "G":
                  this.cursorCharAbsolute(this.params);
                  break;
                case "L":
                  this.insertLines(this.params);
                  break;
                case "M":
                  this.deleteLines(this.params);
                  break;
                case "P":
                  this.deleteChars(this.params);
                  break;
                case "X":
                  this.eraseChars(this.params);
                  break;
                case "`":
                  this.charPosAbsolute(this.params);
                  break;
                case "a":
                  this.HPositionRelative(this.params);
                  break;
                case "c":
                  this.sendDeviceAttributes(this.params);
                  break;
                case "d":
                  this.linePosAbsolute(this.params);
                  break;
                case "e":
                  this.VPositionRelative(this.params);
                  break;
                case "f":
                  this.HVPosition(this.params);
                  break;
                case "h":
                  this.setMode(this.params);
                  break;
                case "l":
                  this.resetMode(this.params);
                  break;
                case "r":
                  this.setScrollRegion(this.params);
                  break;
                case "s":
                  this.saveCursor(this.params);
                  break;
                case "u":
                  this.restoreCursor(this.params);
                  break;
                case "I":
                  this.cursorForwardTab(this.params);
                  break;
                case "S":
                  this.scrollUp(this.params);
                  break;
                case "T":
                  if (this.params.length < 2 && !this.prefix) {
                    this.scrollDown(this.params);
                  }
                  break;
                case "Z":
                  this.cursorBackwardTab(this.params);
                  break;
                case "b":
                  this.repeatPrecedingCharacter(this.params);
                  break;
                case "g":
                  this.tabClear(this.params);
                  break;
                case "p":
                  switch (this.prefix) {
                    case "!":
                      this.softReset(this.params);
                      break;
                  }
                  break;
                default:
                  this.error("Unknown CSI code: %s.", ch);
                  break;
              }
              this.prefix = "";
              this.postfix = "";
              break;
            case dcs:
              if (this.lch === "\x1B" && ch === "\\" || ch === "\x07") {
                if (this.prefix === "tmux;\x1B") {
                  if (ch === "\x07") {
                    this.currentParam += ch;
                    continue;
                  }
                }
                if (this.lch === "\x1B") {
                  if (typeof this.currentParam === "string") {
                    this.currentParam = this.currentParam.slice(0, -1);
                  } else if (typeof this.currentParam == "number") {
                    this.currentParam = (this.currentParam - ("\x1B".charCodeAt(0) - 48)) / 10;
                  }
                }
                this.params.push(this.currentParam);
                var pt = this.params[this.params.length - 1];
                switch (this.prefix) {
                  case UDK:
                    this.emit("udk", {
                      clearAll: this.params[0] === 0,
                      eraseBelow: this.params[0] === 1,
                      lockKeys: this.params[1] === 0,
                      dontLockKeys: this.params[1] === 1,
                      keyList: (this.params[2] + "").split(";").map(function(part) {
                        part = part.split("/");
                        return {
                          keyCode: part[0],
                          hexKeyValue: part[1]
                        };
                      })
                    });
                    break;
                  case "$q":
                    var valid = 0;
                    switch (pt) {
                      case '"q':
                        pt = '0"q';
                        valid = 1;
                        break;
                      case '"p':
                        pt = '61;0"p';
                        valid = 1;
                        break;
                      case "r":
                        pt = "" + (this.scrollTop + 1) + ";" + (this.scrollBottom + 1) + "r";
                        valid = 1;
                        break;
                      case "m":
                        valid = 0;
                        break;
                      default:
                        this.error("Unknown DCS Pt: %s.", pt);
                        valid = 0;
                        break;
                    }
                    this.send("\x1BP" + valid + "$r" + pt + "\x1B\\");
                    break;
                  case "+p":
                    this.emit("set terminfo", {
                      name: this.params[0]
                    });
                    break;
                  case "+q":
                    var valid = false;
                    this.send("\x1BP" + +valid + "+r" + pt + "\x1B\\");
                    break;
                  case "tmux;\x1B":
                    this.emit("passthrough", pt);
                    break;
                  default:
                    this.error("Unknown DCS prefix: %s.", pt);
                    break;
                }
                this.currentParam = 0;
                this.prefix = "";
                this.state = normal;
              } else {
                this.currentParam += ch;
                if (!this.prefix) {
                  if (/^\d*;\d*\|/.test(this.currentParam)) {
                    this.prefix = UDK;
                    this.params = this.currentParam.split(/[;|]/).map(function(n) {
                      if (!n.length)
                        return 0;
                      return +n;
                    }).slice(0, -1);
                    this.currentParam = "";
                  } else if (/^[$+][a-zA-Z]/.test(this.currentParam) || /^\w+;\x1b/.test(this.currentParam)) {
                    this.prefix = this.currentParam;
                    this.currentParam = "";
                  }
                }
              }
              break;
            case ignore:
              if (this.lch === "\x1B" && ch === "\\" || ch === "\x07") {
                this.state = normal;
              }
              break;
          }
        }
        this.updateRange(this.y);
        this.refresh(this.refreshStart, this.refreshEnd);
        return true;
      };
      Terminal.prototype.writeln = function(data) {
        return this.write(data + "\r\n");
      };
      Terminal.prototype.end = function(data) {
        var ret = true;
        if (data) {
          ret = this.write(data);
        }
        this.destroySoon();
        return ret;
      };
      Terminal.prototype.resume = function() {
        ;
      };
      Terminal.prototype.pause = function() {
        ;
      };
      Terminal.prototype.keyDown = function(ev) {
        var self = this, key;
        switch (ev.keyCode) {
          case 8:
            if (ev.altKey) {
              key = "";
              break;
            }
            if (ev.shiftKey) {
              key = "\b";
              break;
            }
            key = "\x7F";
            break;
          case 9:
            if (ev.shiftKey) {
              key = "\x1B[Z";
              break;
            }
            key = "	";
            break;
          case 13:
            key = "\r";
            break;
          case 27:
            key = "\x1B";
            break;
          case 37:
            if (this.applicationCursor) {
              key = "\x1BOD";
              break;
            }
            if (ev.ctrlKey) {
              key = "\x1B[5D";
              break;
            }
            key = "\x1B[D";
            break;
          case 39:
            if (this.applicationCursor) {
              key = "\x1BOC";
              break;
            }
            if (ev.ctrlKey) {
              key = "\x1B[5C";
              break;
            }
            key = "\x1B[C";
            break;
          case 38:
            if (this.applicationCursor) {
              key = "\x1BOA";
              break;
            }
            if (ev.ctrlKey) {
              this.scrollDisp(-1);
              return cancel(ev);
            } else {
              key = "\x1B[A";
            }
            break;
          case 40:
            if (this.applicationCursor) {
              key = "\x1BOB";
              break;
            }
            if (ev.ctrlKey) {
              this.scrollDisp(1);
              return cancel(ev);
            } else {
              key = "\x1B[B";
            }
            break;
          case 46:
            key = "\x1B[3~";
            break;
          case 45:
            key = "\x1B[2~";
            break;
          case 36:
            if (this.applicationKeypad) {
              key = "\x1BOH";
              break;
            }
            key = "\x1BOH";
            break;
          case 35:
            if (this.applicationKeypad) {
              key = "\x1BOF";
              break;
            }
            key = "\x1BOF";
            break;
          case 33:
            if (ev.shiftKey) {
              this.scrollDisp(-(this.rows - 1));
              return cancel(ev);
            } else {
              key = "\x1B[5~";
            }
            break;
          case 34:
            if (ev.shiftKey) {
              this.scrollDisp(this.rows - 1);
              return cancel(ev);
            } else {
              key = "\x1B[6~";
            }
            break;
          case 112:
            key = "\x1BOP";
            break;
          case 113:
            key = "\x1BOQ";
            break;
          case 114:
            key = "\x1BOR";
            break;
          case 115:
            key = "\x1BOS";
            break;
          case 116:
            key = "\x1B[15~";
            break;
          case 117:
            key = "\x1B[17~";
            break;
          case 118:
            key = "\x1B[18~";
            break;
          case 119:
            key = "\x1B[19~";
            break;
          case 120:
            key = "\x1B[20~";
            break;
          case 121:
            key = "\x1B[21~";
            break;
          case 122:
            key = "\x1B[23~";
            break;
          case 123:
            key = "\x1B[24~";
            break;
          default:
            if (ev.ctrlKey) {
              if (ev.keyCode >= 65 && ev.keyCode <= 90) {
                if (this.screenKeys) {
                  if (!this.prefixMode && !this.selectMode && ev.keyCode === 65) {
                    this.enterPrefix();
                    return cancel(ev);
                  }
                }
                if (this.prefixMode && ev.keyCode === 86) {
                  this.leavePrefix();
                  return;
                }
                if ((this.prefixMode || this.selectMode) && ev.keyCode === 67) {
                  if (this.visualMode) {
                    setTimeout2(function() {
                      self.leaveVisual();
                    }, 1);
                  }
                  return;
                }
                key = String2.fromCharCode(ev.keyCode - 64);
              } else if (ev.keyCode === 32) {
                key = String2.fromCharCode(0);
              } else if (ev.keyCode >= 51 && ev.keyCode <= 55) {
                key = String2.fromCharCode(ev.keyCode - 51 + 27);
              } else if (ev.keyCode === 56) {
                key = String2.fromCharCode(127);
              } else if (ev.keyCode === 219) {
                key = String2.fromCharCode(27);
              } else if (ev.keyCode === 221) {
                key = String2.fromCharCode(29);
              }
            } else if (ev.altKey) {
              if (ev.keyCode >= 65 && ev.keyCode <= 90) {
                key = "\x1B" + String2.fromCharCode(ev.keyCode + 32);
              } else if (ev.keyCode === 192) {
                key = "\x1B`";
              } else if (ev.keyCode >= 48 && ev.keyCode <= 57) {
                key = "\x1B" + (ev.keyCode - 48);
              }
            }
            break;
        }
        if (!key)
          return true;
        if (this.prefixMode) {
          this.leavePrefix();
          return cancel(ev);
        }
        if (this.selectMode) {
          this.keySelect(ev, key);
          return cancel(ev);
        }
        this.emit("keydown", ev);
        this.emit("key", key, ev);
        this.showCursor();
        this.handler(key);
        return cancel(ev);
      };
      Terminal.prototype.setgLevel = function(g) {
        this.glevel = g;
        this.charset = this.charsets[g];
      };
      Terminal.prototype.setgCharset = function(g, charset2) {
        this.charsets[g] = charset2;
        if (this.glevel === g) {
          this.charset = charset2;
        }
      };
      Terminal.prototype.keyPress = function(ev) {
        var key;
        cancel(ev);
        if (ev.charCode) {
          key = ev.charCode;
        } else if (ev.which == null) {
          key = ev.keyCode;
        } else if (ev.which !== 0 && ev.charCode !== 0) {
          key = ev.which;
        } else {
          return false;
        }
        if (!key || ev.ctrlKey || ev.altKey || ev.metaKey)
          return false;
        key = String2.fromCharCode(key);
        if (this.prefixMode) {
          this.leavePrefix();
          this.keyPrefix(ev, key);
          return false;
        }
        if (this.selectMode) {
          this.keySelect(ev, key);
          return false;
        }
        this.emit("keypress", key, ev);
        this.emit("key", key, ev);
        this.showCursor();
        this.handler(key);
        return false;
      };
      Terminal.prototype.send = function(data) {
        var self = this;
        if (!this.queue) {
          setTimeout2(function() {
            self.handler(self.queue);
            self.queue = "";
          }, 1);
        }
        this.queue += data;
      };
      Terminal.prototype.bell = function() {
        this.emit("bell");
        if (!this.visualBell)
          return;
        var self = this;
        this.element.style.borderColor = "white";
        setTimeout2(function() {
          self.element.style.borderColor = "";
        }, 10);
        if (this.popOnBell)
          this.focus();
      };
      Terminal.prototype.log = function() {
        if (!this.debug)
          return;
        if (!this.context.console || !this.context.console.log)
          return;
        var args = Array.prototype.slice.call(arguments);
        this.context.console.log.apply(this.context.console, args);
      };
      Terminal.prototype.error = function() {
        if (!this.debug)
          return;
        if (!this.context.console || !this.context.console.error)
          return;
        var args = Array.prototype.slice.call(arguments);
        this.context.console.error.apply(this.context.console, args);
      };
      Terminal.prototype.resize = function(x, y) {
        var line, el, i, j, ch;
        if (x < 1)
          x = 1;
        if (y < 1)
          y = 1;
        j = this.cols;
        if (j < x) {
          ch = [this.defAttr, " "];
          i = this.lines.length;
          while (i--) {
            while (this.lines[i].length < x) {
              this.lines[i].push(ch);
            }
          }
        } else if (j > x) {
          i = this.lines.length;
          while (i--) {
            while (this.lines[i].length > x) {
              this.lines[i].pop();
            }
          }
        }
        this.setupStops(j);
        this.cols = x;
        this.columns = x;
        j = this.rows;
        if (j < y) {
          el = this.element;
          while (j++ < y) {
            if (this.lines.length < y + this.ybase) {
              this.lines.push(this.blankLine());
            }
            if (this.children.length < y) {
              line = this.document.createElement("div");
              el.appendChild(line);
              this.children.push(line);
            }
          }
        } else if (j > y) {
          while (j-- > y) {
            if (this.lines.length > y + this.ybase) {
              this.lines.pop();
            }
            if (this.children.length > y) {
              el = this.children.pop();
              if (!el)
                continue;
              el.parentNode.removeChild(el);
            }
          }
        }
        this.rows = y;
        if (this.y >= y)
          this.y = y - 1;
        if (this.x >= x)
          this.x = x - 1;
        this.scrollTop = 0;
        this.scrollBottom = y - 1;
        this.refresh(0, this.rows - 1);
        this.normal = null;
        this.emit("resize");
      };
      Terminal.prototype.updateRange = function(y) {
        if (y < this.refreshStart)
          this.refreshStart = y;
        if (y > this.refreshEnd)
          this.refreshEnd = y;
      };
      Terminal.prototype.maxRange = function() {
        this.refreshStart = 0;
        this.refreshEnd = this.rows - 1;
      };
      Terminal.prototype.setupStops = function(i) {
        if (i != null) {
          if (!this.tabs[i]) {
            i = this.prevStop(i);
          }
        } else {
          this.tabs = {};
          i = 0;
        }
        for (; i < this.cols; i += 8) {
          this.tabs[i] = true;
        }
      };
      Terminal.prototype.prevStop = function(x) {
        if (x == null)
          x = this.x;
        while (!this.tabs[--x] && x > 0)
          ;
        return x >= this.cols ? this.cols - 1 : x < 0 ? 0 : x;
      };
      Terminal.prototype.nextStop = function(x) {
        if (x == null)
          x = this.x;
        while (!this.tabs[++x] && x < this.cols)
          ;
        return x >= this.cols ? this.cols - 1 : x < 0 ? 0 : x;
      };
      Terminal.prototype.eraseAttr = function() {
        return this.defAttr & ~511 | this.curAttr & 511;
      };
      Terminal.prototype.eraseRight = function(x, y) {
        var line = this.lines[this.ybase + y], ch = [this.eraseAttr(), " "];
        for (; x < this.cols; x++) {
          line[x] = ch;
        }
        this.updateRange(y);
      };
      Terminal.prototype.eraseLeft = function(x, y) {
        var line = this.lines[this.ybase + y], ch = [this.eraseAttr(), " "];
        x++;
        while (x--)
          line[x] = ch;
        this.updateRange(y);
      };
      Terminal.prototype.eraseLine = function(y) {
        this.eraseRight(0, y);
      };
      Terminal.prototype.blankLine = function(cur) {
        var attr = cur ? this.eraseAttr() : this.defAttr;
        var ch = [attr, " "], line = [], i = 0;
        for (; i < this.cols; i++) {
          line[i] = ch;
        }
        return line;
      };
      Terminal.prototype.ch = function(cur) {
        return cur ? [this.eraseAttr(), " "] : [this.defAttr, " "];
      };
      Terminal.prototype.is = function(term) {
        var name = this.termName;
        return (name + "").indexOf(term) === 0;
      };
      Terminal.prototype.handler = function(data) {
        this.emit("data", data);
      };
      Terminal.prototype.handleTitle = function(title) {
        this.emit("title", title);
      };
      Terminal.prototype.index = function() {
        this.y++;
        if (this.y > this.scrollBottom) {
          this.y--;
          this.scroll();
        }
        this.state = normal;
      };
      Terminal.prototype.reverseIndex = function() {
        var j;
        this.y--;
        if (this.y < this.scrollTop) {
          this.y++;
          this.lines.splice(this.y + this.ybase, 0, this.blankLine(true));
          j = this.rows - 1 - this.scrollBottom;
          this.lines.splice(this.rows - 1 + this.ybase - j + 1, 1);
          this.updateRange(this.scrollTop);
          this.updateRange(this.scrollBottom);
        }
        this.state = normal;
      };
      Terminal.prototype.reset = function() {
        this.options.rows = this.rows;
        this.options.cols = this.cols;
        Terminal.call(this, this.options);
        this.refresh(0, this.rows - 1);
      };
      Terminal.prototype.tabSet = function() {
        this.tabs[this.x] = true;
        this.state = normal;
      };
      Terminal.prototype.cursorUp = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.y -= param;
        if (this.y < 0)
          this.y = 0;
      };
      Terminal.prototype.cursorDown = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.y += param;
        if (this.y >= this.rows) {
          this.y = this.rows - 1;
        }
      };
      Terminal.prototype.cursorForward = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.x += param;
        if (this.x >= this.cols) {
          this.x = this.cols - 1;
        }
      };
      Terminal.prototype.cursorBackward = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.x -= param;
        if (this.x < 0)
          this.x = 0;
      };
      Terminal.prototype.cursorPos = function(params2) {
        var row, col;
        row = params2[0] - 1;
        if (params2.length >= 2) {
          col = params2[1] - 1;
        } else {
          col = 0;
        }
        if (row < 0) {
          row = 0;
        } else if (row >= this.rows) {
          row = this.rows - 1;
        }
        if (col < 0) {
          col = 0;
        } else if (col >= this.cols) {
          col = this.cols - 1;
        }
        this.x = col;
        this.y = row;
      };
      Terminal.prototype.eraseInDisplay = function(params2) {
        var j;
        switch (params2[0]) {
          case 0:
            this.eraseRight(this.x, this.y);
            j = this.y + 1;
            for (; j < this.rows; j++) {
              this.eraseLine(j);
            }
            break;
          case 1:
            this.eraseLeft(this.x, this.y);
            j = this.y;
            while (j--) {
              this.eraseLine(j);
            }
            break;
          case 2:
            j = this.rows;
            while (j--)
              this.eraseLine(j);
            break;
          case 3:
            ;
            break;
        }
      };
      Terminal.prototype.eraseInLine = function(params2) {
        switch (params2[0]) {
          case 0:
            this.eraseRight(this.x, this.y);
            break;
          case 1:
            this.eraseLeft(this.x, this.y);
            break;
          case 2:
            this.eraseLine(this.y);
            break;
        }
      };
      Terminal.prototype.charAttributes = function(params2) {
        if (params2.length === 1 && params2[0] === 0) {
          this.curAttr = this.defAttr;
          return;
        }
        var l = params2.length, i = 0, flags = this.curAttr >> 18, fg = this.curAttr >> 9 & 511, bg = this.curAttr & 511, p;
        for (; i < l; i++) {
          p = params2[i];
          if (p >= 30 && p <= 37) {
            fg = p - 30;
          } else if (p >= 40 && p <= 47) {
            bg = p - 40;
          } else if (p >= 90 && p <= 97) {
            p += 8;
            fg = p - 90;
          } else if (p >= 100 && p <= 107) {
            p += 8;
            bg = p - 100;
          } else if (p === 0) {
            flags = this.defAttr >> 18;
            fg = this.defAttr >> 9 & 511;
            bg = this.defAttr & 511;
          } else if (p === 1) {
            flags |= 1;
          } else if (p === 4) {
            flags |= 2;
          } else if (p === 5) {
            flags |= 4;
          } else if (p === 7) {
            flags |= 8;
          } else if (p === 8) {
            flags |= 16;
          } else if (p === 22) {
            flags &= ~1;
          } else if (p === 24) {
            flags &= ~2;
          } else if (p === 25) {
            flags &= ~4;
          } else if (p === 27) {
            flags &= ~8;
          } else if (p === 28) {
            flags &= ~16;
          } else if (p === 39) {
            fg = this.defAttr >> 9 & 511;
          } else if (p === 49) {
            bg = this.defAttr & 511;
          } else if (p === 38) {
            if (params2[i + 1] === 2) {
              i += 2;
              fg = matchColor(
                params2[i] & 255,
                params2[i + 1] & 255,
                params2[i + 2] & 255
              );
              if (fg === -1)
                fg = 511;
              i += 2;
            } else if (params2[i + 1] === 5) {
              i += 2;
              p = params2[i] & 255;
              fg = p;
            }
          } else if (p === 48) {
            if (params2[i + 1] === 2) {
              i += 2;
              bg = matchColor(
                params2[i] & 255,
                params2[i + 1] & 255,
                params2[i + 2] & 255
              );
              if (bg === -1)
                bg = 511;
              i += 2;
            } else if (params2[i + 1] === 5) {
              i += 2;
              p = params2[i] & 255;
              bg = p;
            }
          } else if (p === 100) {
            fg = this.defAttr >> 9 & 511;
            bg = this.defAttr & 511;
          } else {
            this.error("Unknown SGR attribute: %d.", p);
          }
        }
        this.curAttr = flags << 18 | fg << 9 | bg;
      };
      Terminal.prototype.deviceStatus = function(params2) {
        if (!this.prefix) {
          switch (params2[0]) {
            case 5:
              this.send("\x1B[0n");
              break;
            case 6:
              this.send("\x1B[" + (this.y + 1) + ";" + (this.x + 1) + "R");
              break;
          }
        } else if (this.prefix === "?") {
          switch (params2[0]) {
            case 6:
              this.send("\x1B[?" + (this.y + 1) + ";" + (this.x + 1) + "R");
              break;
            case 15:
              break;
            case 25:
              break;
            case 26:
              break;
            case 53:
              break;
          }
        }
      };
      Terminal.prototype.insertChars = function(params2) {
        var param, row, j, ch;
        param = params2[0];
        if (param < 1)
          param = 1;
        row = this.y + this.ybase;
        j = this.x;
        ch = [this.eraseAttr(), " "];
        while (param-- && j < this.cols) {
          this.lines[row].splice(j++, 0, ch);
          this.lines[row].pop();
        }
      };
      Terminal.prototype.cursorNextLine = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.y += param;
        if (this.y >= this.rows) {
          this.y = this.rows - 1;
        }
        this.x = 0;
      };
      Terminal.prototype.cursorPrecedingLine = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.y -= param;
        if (this.y < 0)
          this.y = 0;
        this.x = 0;
      };
      Terminal.prototype.cursorCharAbsolute = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.x = param - 1;
      };
      Terminal.prototype.insertLines = function(params2) {
        var param, row, j;
        param = params2[0];
        if (param < 1)
          param = 1;
        row = this.y + this.ybase;
        j = this.rows - 1 - this.scrollBottom;
        j = this.rows - 1 + this.ybase - j + 1;
        while (param--) {
          this.lines.splice(row, 0, this.blankLine(true));
          this.lines.splice(j, 1);
        }
        this.updateRange(this.y);
        this.updateRange(this.scrollBottom);
      };
      Terminal.prototype.deleteLines = function(params2) {
        var param, row, j;
        param = params2[0];
        if (param < 1)
          param = 1;
        row = this.y + this.ybase;
        j = this.rows - 1 - this.scrollBottom;
        j = this.rows - 1 + this.ybase - j;
        while (param--) {
          this.lines.splice(j + 1, 0, this.blankLine(true));
          this.lines.splice(row, 1);
        }
        this.updateRange(this.y);
        this.updateRange(this.scrollBottom);
      };
      Terminal.prototype.deleteChars = function(params2) {
        var param, row, ch;
        param = params2[0];
        if (param < 1)
          param = 1;
        row = this.y + this.ybase;
        ch = [this.eraseAttr(), " "];
        while (param--) {
          this.lines[row].splice(this.x, 1);
          this.lines[row].push(ch);
        }
      };
      Terminal.prototype.eraseChars = function(params2) {
        var param, row, j, ch;
        param = params2[0];
        if (param < 1)
          param = 1;
        row = this.y + this.ybase;
        j = this.x;
        ch = [this.eraseAttr(), " "];
        while (param-- && j < this.cols) {
          this.lines[row][j++] = ch;
        }
      };
      Terminal.prototype.charPosAbsolute = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.x = param - 1;
        if (this.x >= this.cols) {
          this.x = this.cols - 1;
        }
      };
      Terminal.prototype.HPositionRelative = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.x += param;
        if (this.x >= this.cols) {
          this.x = this.cols - 1;
        }
      };
      Terminal.prototype.sendDeviceAttributes = function(params2) {
        if (params2[0] > 0)
          return;
        if (!this.prefix) {
          if (this.is("xterm") || this.is("rxvt-unicode") || this.is("screen")) {
            this.send("\x1B[?1;2c");
          } else if (this.is("linux")) {
            this.send("\x1B[?6c");
          }
        } else if (this.prefix === ">") {
          if (this.is("xterm")) {
            this.send("\x1B[>0;276;0c");
          } else if (this.is("rxvt-unicode")) {
            this.send("\x1B[>85;95;0c");
          } else if (this.is("linux")) {
            this.send(params2[0] + "c");
          } else if (this.is("screen")) {
            this.send("\x1B[>83;40003;0c");
          }
        }
      };
      Terminal.prototype.linePosAbsolute = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.y = param - 1;
        if (this.y >= this.rows) {
          this.y = this.rows - 1;
        }
      };
      Terminal.prototype.VPositionRelative = function(params2) {
        var param = params2[0];
        if (param < 1)
          param = 1;
        this.y += param;
        if (this.y >= this.rows) {
          this.y = this.rows - 1;
        }
      };
      Terminal.prototype.HVPosition = function(params2) {
        if (params2[0] < 1)
          params2[0] = 1;
        if (params2[1] < 1)
          params2[1] = 1;
        this.y = params2[0] - 1;
        if (this.y >= this.rows) {
          this.y = this.rows - 1;
        }
        this.x = params2[1] - 1;
        if (this.x >= this.cols) {
          this.x = this.cols - 1;
        }
      };
      Terminal.prototype.setMode = function(params2) {
        if (typeof params2 === "object") {
          var l = params2.length, i = 0;
          for (; i < l; i++) {
            this.setMode(params2[i]);
          }
          return;
        }
        if (!this.prefix) {
          switch (params2) {
            case 4:
              this.insertMode = true;
              break;
            case 20:
              break;
          }
        } else if (this.prefix === "?") {
          switch (params2) {
            case 1:
              this.applicationCursor = true;
              break;
            case 2:
              this.setgCharset(0, Terminal.charsets.US);
              this.setgCharset(1, Terminal.charsets.US);
              this.setgCharset(2, Terminal.charsets.US);
              this.setgCharset(3, Terminal.charsets.US);
              break;
            case 3:
              this.savedCols = this.cols;
              this.resize(132, this.rows);
              break;
            case 6:
              this.originMode = true;
              break;
            case 7:
              this.wraparoundMode = true;
              break;
            case 12:
              break;
            case 66:
              this.log("Serial port requested application keypad.");
              this.applicationKeypad = true;
              break;
            case 9:
            case 1e3:
            case 1002:
            case 1003:
              this.x10Mouse = params2 === 9;
              this.vt200Mouse = params2 === 1e3;
              this.normalMouse = params2 > 1e3;
              this.mouseEvents = true;
              this.element.style.cursor = "default";
              this.log("Binding to mouse events.");
              break;
            case 1004:
              this.sendFocus = true;
              break;
            case 1005:
              this.utfMouse = true;
              break;
            case 1006:
              this.sgrMouse = true;
              break;
            case 1015:
              this.urxvtMouse = true;
              break;
            case 25:
              this.cursorHidden = false;
              break;
            case 1049:
              ;
            case 47:
            case 1047:
              if (!this.normal) {
                var normal2 = {
                  lines: this.lines,
                  ybase: this.ybase,
                  ydisp: this.ydisp,
                  x: this.x,
                  y: this.y,
                  scrollTop: this.scrollTop,
                  scrollBottom: this.scrollBottom,
                  tabs: this.tabs
                  // XXX save charset(s) here?
                  // charset: this.charset,
                  // glevel: this.glevel,
                  // charsets: this.charsets
                };
                this.reset();
                this.normal = normal2;
                this.showCursor();
              }
              break;
          }
        }
      };
      Terminal.prototype.resetMode = function(params2) {
        if (typeof params2 === "object") {
          var l = params2.length, i = 0;
          for (; i < l; i++) {
            this.resetMode(params2[i]);
          }
          return;
        }
        if (!this.prefix) {
          switch (params2) {
            case 4:
              this.insertMode = false;
              break;
            case 20:
              break;
          }
        } else if (this.prefix === "?") {
          switch (params2) {
            case 1:
              this.applicationCursor = false;
              break;
            case 3:
              if (this.cols === 132 && this.savedCols) {
                this.resize(this.savedCols, this.rows);
              }
              delete this.savedCols;
              break;
            case 6:
              this.originMode = false;
              break;
            case 7:
              this.wraparoundMode = false;
              break;
            case 12:
              break;
            case 66:
              this.log("Switching back to normal keypad.");
              this.applicationKeypad = false;
              break;
            case 9:
            case 1e3:
            case 1002:
            case 1003:
              this.x10Mouse = false;
              this.vt200Mouse = false;
              this.normalMouse = false;
              this.mouseEvents = false;
              this.element.style.cursor = "";
              break;
            case 1004:
              this.sendFocus = false;
              break;
            case 1005:
              this.utfMouse = false;
              break;
            case 1006:
              this.sgrMouse = false;
              break;
            case 1015:
              this.urxvtMouse = false;
              break;
            case 25:
              this.cursorHidden = true;
              break;
            case 1049:
              ;
            case 47:
            case 1047:
              if (this.normal) {
                this.lines = this.normal.lines;
                this.ybase = this.normal.ybase;
                this.ydisp = this.normal.ydisp;
                this.x = this.normal.x;
                this.y = this.normal.y;
                this.scrollTop = this.normal.scrollTop;
                this.scrollBottom = this.normal.scrollBottom;
                this.tabs = this.normal.tabs;
                this.normal = null;
                this.refresh(0, this.rows - 1);
                this.showCursor();
              }
              break;
          }
        }
      };
      Terminal.prototype.setScrollRegion = function(params2) {
        if (this.prefix)
          return;
        this.scrollTop = (params2[0] || 1) - 1;
        this.scrollBottom = (params2[1] || this.rows) - 1;
        this.x = 0;
        this.y = 0;
      };
      Terminal.prototype.saveCursor = function(params2) {
        this.savedX = this.x;
        this.savedY = this.y;
      };
      Terminal.prototype.restoreCursor = function(params2) {
        this.x = this.savedX || 0;
        this.y = this.savedY || 0;
      };
      Terminal.prototype.cursorForwardTab = function(params2) {
        var param = params2[0] || 1;
        while (param--) {
          this.x = this.nextStop();
        }
      };
      Terminal.prototype.scrollUp = function(params2) {
        var param = params2[0] || 1;
        while (param--) {
          this.lines.splice(this.ybase + this.scrollTop, 1);
          this.lines.splice(this.ybase + this.scrollBottom, 0, this.blankLine());
        }
        this.updateRange(this.scrollTop);
        this.updateRange(this.scrollBottom);
      };
      Terminal.prototype.scrollDown = function(params2) {
        var param = params2[0] || 1;
        while (param--) {
          this.lines.splice(this.ybase + this.scrollBottom, 1);
          this.lines.splice(this.ybase + this.scrollTop, 0, this.blankLine());
        }
        this.updateRange(this.scrollTop);
        this.updateRange(this.scrollBottom);
      };
      Terminal.prototype.initMouseTracking = function(params2) {
      };
      Terminal.prototype.resetTitleModes = function(params2) {
        ;
      };
      Terminal.prototype.cursorBackwardTab = function(params2) {
        var param = params2[0] || 1;
        while (param--) {
          this.x = this.prevStop();
        }
      };
      Terminal.prototype.repeatPrecedingCharacter = function(params2) {
        var param = params2[0] || 1, line = this.lines[this.ybase + this.y], ch = line[this.x - 1] || [this.defAttr, " "];
        while (param--)
          line[this.x++] = ch;
      };
      Terminal.prototype.tabClear = function(params2) {
        var param = params2[0];
        if (param <= 0) {
          delete this.tabs[this.x];
        } else if (param === 3) {
          this.tabs = {};
        }
      };
      Terminal.prototype.mediaCopy = function(params2) {
        ;
      };
      Terminal.prototype.setResources = function(params2) {
        ;
      };
      Terminal.prototype.disableModifiers = function(params2) {
        ;
      };
      Terminal.prototype.setPointerMode = function(params2) {
        ;
      };
      Terminal.prototype.softReset = function(params2) {
        this.cursorHidden = false;
        this.insertMode = false;
        this.originMode = false;
        this.wraparoundMode = false;
        this.applicationKeypad = false;
        this.applicationCursor = false;
        this.scrollTop = 0;
        this.scrollBottom = this.rows - 1;
        this.curAttr = this.defAttr;
        this.x = this.y = 0;
        this.charset = null;
        this.glevel = 0;
        this.charsets = [null];
      };
      Terminal.prototype.requestAnsiMode = function(params2) {
        ;
      };
      Terminal.prototype.requestPrivateMode = function(params2) {
        ;
      };
      Terminal.prototype.setConformanceLevel = function(params2) {
        ;
      };
      Terminal.prototype.loadLEDs = function(params2) {
        ;
      };
      Terminal.prototype.setCursorStyle = function(params2) {
        ;
      };
      Terminal.prototype.setCharProtectionAttr = function(params2) {
        ;
      };
      Terminal.prototype.restorePrivateValues = function(params2) {
        ;
      };
      Terminal.prototype.setAttrInRectangle = function(params2) {
        var t = params2[0], l = params2[1], b = params2[2], r = params2[3], attr = params2[4];
        var line, i;
        for (; t < b + 1; t++) {
          line = this.lines[this.ybase + t];
          for (i = l; i < r; i++) {
            line[i] = [attr, line[i][1]];
          }
        }
        this.updateRange(params2[0]);
        this.updateRange(params2[2]);
      };
      Terminal.prototype.savePrivateValues = function(params2) {
        ;
      };
      Terminal.prototype.manipulateWindow = function(params2) {
        ;
      };
      Terminal.prototype.reverseAttrInRectangle = function(params2) {
        ;
      };
      Terminal.prototype.setTitleModeFeature = function(params2) {
        ;
      };
      Terminal.prototype.setWarningBellVolume = function(params2) {
        ;
      };
      Terminal.prototype.setMarginBellVolume = function(params2) {
        ;
      };
      Terminal.prototype.copyRectangle = function(params2) {
        ;
      };
      Terminal.prototype.enableFilterRectangle = function(params2) {
        ;
      };
      Terminal.prototype.requestParameters = function(params2) {
        ;
      };
      Terminal.prototype.selectChangeExtent = function(params2) {
        ;
      };
      Terminal.prototype.fillRectangle = function(params2) {
        var ch = params2[0], t = params2[1], l = params2[2], b = params2[3], r = params2[4];
        var line, i;
        for (; t < b + 1; t++) {
          line = this.lines[this.ybase + t];
          for (i = l; i < r; i++) {
            line[i] = [line[i][0], String2.fromCharCode(ch)];
          }
        }
        this.updateRange(params2[1]);
        this.updateRange(params2[3]);
      };
      Terminal.prototype.enableLocatorReporting = function(params2) {
        var val = params2[0] > 0;
      };
      Terminal.prototype.eraseRectangle = function(params2) {
        var t = params2[0], l = params2[1], b = params2[2], r = params2[3];
        var line, i, ch;
        ch = [this.eraseAttr(), " "];
        for (; t < b + 1; t++) {
          line = this.lines[this.ybase + t];
          for (i = l; i < r; i++) {
            line[i] = ch;
          }
        }
        this.updateRange(params2[0]);
        this.updateRange(params2[2]);
      };
      Terminal.prototype.setLocatorEvents = function(params2) {
        ;
      };
      Terminal.prototype.selectiveEraseRectangle = function(params2) {
        ;
      };
      Terminal.prototype.requestLocatorPosition = function(params2) {
        ;
      };
      Terminal.prototype.insertColumns = function() {
        var param = params[0], l = this.ybase + this.rows, ch = [this.eraseAttr(), " "], i;
        while (param--) {
          for (i = this.ybase; i < l; i++) {
            this.lines[i].splice(this.x + 1, 0, ch);
            this.lines[i].pop();
          }
        }
        this.maxRange();
      };
      Terminal.prototype.deleteColumns = function() {
        var param = params[0], l = this.ybase + this.rows, ch = [this.eraseAttr(), " "], i;
        while (param--) {
          for (i = this.ybase; i < l; i++) {
            this.lines[i].splice(this.x, 1);
            this.lines[i].push(ch);
          }
        }
        this.maxRange();
      };
      Terminal.prototype.enterPrefix = function() {
        this.prefixMode = true;
      };
      Terminal.prototype.leavePrefix = function() {
        this.prefixMode = false;
      };
      Terminal.prototype.enterSelect = function() {
        this._real = {
          x: this.x,
          y: this.y,
          ydisp: this.ydisp,
          ybase: this.ybase,
          cursorHidden: this.cursorHidden,
          lines: this.copyBuffer(this.lines),
          write: this.write
        };
        this.write = function() {
        };
        this.selectMode = true;
        this.visualMode = false;
        this.cursorHidden = false;
        this.refresh(this.y, this.y);
      };
      Terminal.prototype.leaveSelect = function() {
        this.x = this._real.x;
        this.y = this._real.y;
        this.ydisp = this._real.ydisp;
        this.ybase = this._real.ybase;
        this.cursorHidden = this._real.cursorHidden;
        this.lines = this._real.lines;
        this.write = this._real.write;
        delete this._real;
        this.selectMode = false;
        this.visualMode = false;
        this.refresh(0, this.rows - 1);
      };
      Terminal.prototype.enterVisual = function() {
        this._real.preVisual = this.copyBuffer(this.lines);
        this.selectText(this.x, this.x, this.ydisp + this.y, this.ydisp + this.y);
        this.visualMode = true;
      };
      Terminal.prototype.leaveVisual = function() {
        this.lines = this._real.preVisual;
        delete this._real.preVisual;
        delete this._selected;
        this.visualMode = false;
        this.refresh(0, this.rows - 1);
      };
      Terminal.prototype.enterSearch = function(down) {
        this.entry = "";
        this.searchMode = true;
        this.searchDown = down;
        this._real.preSearch = this.copyBuffer(this.lines);
        this._real.preSearchX = this.x;
        this._real.preSearchY = this.y;
        var bottom = this.ydisp + this.rows - 1;
        for (var i = 0; i < this.entryPrefix.length; i++) {
          this.lines[bottom][i] = [
            this.defAttr & ~511 | 4,
            this.entryPrefix[i]
          ];
        }
        this.y = this.rows - 1;
        this.x = this.entryPrefix.length;
        this.refresh(this.rows - 1, this.rows - 1);
      };
      Terminal.prototype.leaveSearch = function() {
        this.searchMode = false;
        if (this._real.preSearch) {
          this.lines = this._real.preSearch;
          this.x = this._real.preSearchX;
          this.y = this._real.preSearchY;
          delete this._real.preSearch;
          delete this._real.preSearchX;
          delete this._real.preSearchY;
        }
        this.refresh(this.rows - 1, this.rows - 1);
      };
      Terminal.prototype.copyBuffer = function(lines) {
        var lines = lines || this.lines, out = [];
        for (var y = 0; y < lines.length; y++) {
          out[y] = [];
          for (var x = 0; x < lines[y].length; x++) {
            out[y][x] = [lines[y][x][0], lines[y][x][1]];
          }
        }
        return out;
      };
      Terminal.prototype.getCopyTextarea = function(text) {
        var textarea = this._copyTextarea, document2 = this.document;
        if (!textarea) {
          textarea = document2.createElement("textarea");
          textarea.style.position = "absolute";
          textarea.style.left = "-32000px";
          textarea.style.top = "-32000px";
          textarea.style.width = "0px";
          textarea.style.height = "0px";
          textarea.style.opacity = "0";
          textarea.style.backgroundColor = "transparent";
          textarea.style.borderStyle = "none";
          textarea.style.outlineStyle = "none";
          document2.getElementsByTagName("body")[0].appendChild(textarea);
          this._copyTextarea = textarea;
        }
        return textarea;
      };
      Terminal.prototype.copyText = function(text) {
        var self = this, textarea = this.getCopyTextarea();
        this.emit("copy", text);
        textarea.focus();
        textarea.textContent = text;
        textarea.value = text;
        textarea.setSelectionRange(0, text.length);
        setTimeout2(function() {
          self.element.focus();
          self.focus();
        }, 1);
      };
      Terminal.prototype.selectText = function(x1, x2, y1, y2) {
        var ox1, ox2, oy1, oy2, tmp, x, y, xl, attr;
        if (this._selected) {
          ox1 = this._selected.x1;
          ox2 = this._selected.x2;
          oy1 = this._selected.y1;
          oy2 = this._selected.y2;
          if (oy2 < oy1) {
            tmp = ox2;
            ox2 = ox1;
            ox1 = tmp;
            tmp = oy2;
            oy2 = oy1;
            oy1 = tmp;
          }
          if (ox2 < ox1 && oy1 === oy2) {
            tmp = ox2;
            ox2 = ox1;
            ox1 = tmp;
          }
          for (y = oy1; y <= oy2; y++) {
            x = 0;
            xl = this.cols - 1;
            if (y === oy1) {
              x = ox1;
            }
            if (y === oy2) {
              xl = ox2;
            }
            for (; x <= xl; x++) {
              if (this.lines[y][x].old != null) {
                attr = this.lines[y][x].old;
                delete this.lines[y][x].old;
                this.lines[y][x] = [attr, this.lines[y][x][1]];
              }
            }
          }
          y1 = this._selected.y1;
          x1 = this._selected.x1;
        }
        y1 = Math.max(y1, 0);
        y1 = Math.min(y1, this.ydisp + this.rows - 1);
        y2 = Math.max(y2, 0);
        y2 = Math.min(y2, this.ydisp + this.rows - 1);
        this._selected = { x1, x2, y1, y2 };
        if (y2 < y1) {
          tmp = x2;
          x2 = x1;
          x1 = tmp;
          tmp = y2;
          y2 = y1;
          y1 = tmp;
        }
        if (x2 < x1 && y1 === y2) {
          tmp = x2;
          x2 = x1;
          x1 = tmp;
        }
        for (y = y1; y <= y2; y++) {
          x = 0;
          xl = this.cols - 1;
          if (y === y1) {
            x = x1;
          }
          if (y === y2) {
            xl = x2;
          }
          for (; x <= xl; x++) {
            attr = this.lines[y][x][0];
            this.lines[y][x] = [
              attr & ~511 | (511 << 9 | 4),
              this.lines[y][x][1]
            ];
            this.lines[y][x].old = attr;
          }
        }
        y1 = y1 - this.ydisp;
        y2 = y2 - this.ydisp;
        y1 = Math.max(y1, 0);
        y1 = Math.min(y1, this.rows - 1);
        y2 = Math.max(y2, 0);
        y2 = Math.min(y2, this.rows - 1);
        this.refresh(0, this.rows - 1);
      };
      Terminal.prototype.grabText = function(x1, x2, y1, y2) {
        var out = "", buf = "", ch, x, y, xl, tmp;
        if (y2 < y1) {
          tmp = x2;
          x2 = x1;
          x1 = tmp;
          tmp = y2;
          y2 = y1;
          y1 = tmp;
        }
        if (x2 < x1 && y1 === y2) {
          tmp = x2;
          x2 = x1;
          x1 = tmp;
        }
        for (y = y1; y <= y2; y++) {
          x = 0;
          xl = this.cols - 1;
          if (y === y1) {
            x = x1;
          }
          if (y === y2) {
            xl = x2;
          }
          for (; x <= xl; x++) {
            ch = this.lines[y][x][1];
            if (ch === " ") {
              buf += ch;
              continue;
            }
            if (buf) {
              out += buf;
              buf = "";
            }
            out += ch;
            if (isWide(ch))
              x++;
          }
          buf = "";
          out += "\n";
        }
        for (x = x2, y = y2; x < this.cols; x++) {
          if (this.lines[y][x][1] !== " ") {
            out = out.slice(0, -1);
            break;
          }
        }
        return out;
      };
      Terminal.prototype.keyPrefix = function(ev, key) {
        if (key === "k" || key === "&") {
          this.destroy();
        } else if (key === "p" || key === "]") {
          this.emit("request paste");
        } else if (key === "c") {
          this.emit("request create");
        } else if (key >= "0" && key <= "9") {
          key = +key - 1;
          if (!~key)
            key = 9;
          this.emit("request term", key);
        } else if (key === "n") {
          this.emit("request term next");
        } else if (key === "P") {
          this.emit("request term previous");
        } else if (key === ":") {
          this.emit("request command mode");
        } else if (key === "[") {
          this.enterSelect();
        }
      };
      Terminal.prototype.keySelect = function(ev, key) {
        this.showCursor();
        if (this.searchMode || key === "n" || key === "N") {
          return this.keySearch(ev, key);
        }
        if (key === "") {
          var y = this.ydisp + this.y;
          if (this.ydisp === this.ybase) {
            this.y = Math.min(this.y + (this.rows - 1) / 2 | 0, this.rows - 1);
            this.refresh(0, this.rows - 1);
          } else {
            this.scrollDisp((this.rows - 1) / 2 | 0);
          }
          if (this.visualMode) {
            this.selectText(this.x, this.x, y, this.ydisp + this.y);
          }
          return;
        }
        if (key === "") {
          var y = this.ydisp + this.y;
          if (this.ydisp === 0) {
            this.y = Math.max(this.y - (this.rows - 1) / 2 | 0, 0);
            this.refresh(0, this.rows - 1);
          } else {
            this.scrollDisp(-(this.rows - 1) / 2 | 0);
          }
          if (this.visualMode) {
            this.selectText(this.x, this.x, y, this.ydisp + this.y);
          }
          return;
        }
        if (key === "") {
          var y = this.ydisp + this.y;
          this.scrollDisp(this.rows - 1);
          if (this.visualMode) {
            this.selectText(this.x, this.x, y, this.ydisp + this.y);
          }
          return;
        }
        if (key === "") {
          var y = this.ydisp + this.y;
          this.scrollDisp(-(this.rows - 1));
          if (this.visualMode) {
            this.selectText(this.x, this.x, y, this.ydisp + this.y);
          }
          return;
        }
        if (key === "k" || key === "\x1B[A") {
          var y = this.ydisp + this.y;
          this.y--;
          if (this.y < 0) {
            this.y = 0;
            this.scrollDisp(-1);
          }
          if (this.visualMode) {
            this.selectText(this.x, this.x, y, this.ydisp + this.y);
          } else {
            this.refresh(this.y, this.y + 1);
          }
          return;
        }
        if (key === "j" || key === "\x1B[B") {
          var y = this.ydisp + this.y;
          this.y++;
          if (this.y >= this.rows) {
            this.y = this.rows - 1;
            this.scrollDisp(1);
          }
          if (this.visualMode) {
            this.selectText(this.x, this.x, y, this.ydisp + this.y);
          } else {
            this.refresh(this.y - 1, this.y);
          }
          return;
        }
        if (key === "h" || key === "\x1B[D") {
          var x = this.x;
          this.x--;
          if (this.x < 0) {
            this.x = 0;
          }
          if (this.visualMode) {
            this.selectText(x, this.x, this.ydisp + this.y, this.ydisp + this.y);
          } else {
            this.refresh(this.y, this.y);
          }
          return;
        }
        if (key === "l" || key === "\x1B[C") {
          var x = this.x;
          this.x++;
          if (this.x >= this.cols) {
            this.x = this.cols - 1;
          }
          if (this.visualMode) {
            this.selectText(x, this.x, this.ydisp + this.y, this.ydisp + this.y);
          } else {
            this.refresh(this.y, this.y);
          }
          return;
        }
        if (key === "v" || key === " ") {
          if (!this.visualMode) {
            this.enterVisual();
          } else {
            this.leaveVisual();
          }
          return;
        }
        if (key === "y") {
          if (this.visualMode) {
            var text = this.grabText(
              this._selected.x1,
              this._selected.x2,
              this._selected.y1,
              this._selected.y2
            );
            this.copyText(text);
            this.leaveVisual();
          }
          return;
        }
        if (key === "q" || key === "\x1B") {
          if (this.visualMode) {
            this.leaveVisual();
          } else {
            this.leaveSelect();
          }
          return;
        }
        if (key === "w" || key === "W") {
          var ox = this.x;
          var oy = this.y;
          var oyd = this.ydisp;
          var x = this.x;
          var y = this.y;
          var yb = this.ydisp;
          var saw_space = false;
          for (; ; ) {
            var line = this.lines[yb + y];
            while (x < this.cols) {
              if (line[x][1] <= " ") {
                saw_space = true;
              } else if (saw_space) {
                break;
              }
              x++;
            }
            if (x >= this.cols)
              x = this.cols - 1;
            if (x === this.cols - 1 && line[x][1] <= " ") {
              x = 0;
              if (++y >= this.rows) {
                y--;
                if (++yb > this.ybase) {
                  yb = this.ybase;
                  x = this.x;
                  break;
                }
              }
              continue;
            }
            break;
          }
          this.x = x, this.y = y;
          this.scrollDisp(-this.ydisp + yb);
          if (this.visualMode) {
            this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
          }
          return;
        }
        if (key === "b" || key === "B") {
          var ox = this.x;
          var oy = this.y;
          var oyd = this.ydisp;
          var x = this.x;
          var y = this.y;
          var yb = this.ydisp;
          for (; ; ) {
            var line = this.lines[yb + y];
            var saw_space = x > 0 && line[x][1] > " " && line[x - 1][1] > " ";
            while (x >= 0) {
              if (line[x][1] <= " ") {
                if (saw_space && (x + 1 < this.cols && line[x + 1][1] > " ")) {
                  x++;
                  break;
                } else {
                  saw_space = true;
                }
              }
              x--;
            }
            if (x < 0)
              x = 0;
            if (x === 0 && (line[x][1] <= " " || !saw_space)) {
              x = this.cols - 1;
              if (--y < 0) {
                y++;
                if (--yb < 0) {
                  yb++;
                  x = 0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          this.x = x, this.y = y;
          this.scrollDisp(-this.ydisp + yb);
          if (this.visualMode) {
            this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
          }
          return;
        }
        if (key === "e" || key === "E") {
          var x = this.x + 1;
          var y = this.y;
          var yb = this.ydisp;
          if (x >= this.cols)
            x--;
          for (; ; ) {
            var line = this.lines[yb + y];
            while (x < this.cols) {
              if (line[x][1] <= " ") {
                x++;
              } else {
                break;
              }
            }
            while (x < this.cols) {
              if (line[x][1] <= " ") {
                if (x - 1 >= 0 && line[x - 1][1] > " ") {
                  x--;
                  break;
                }
              }
              x++;
            }
            if (x >= this.cols)
              x = this.cols - 1;
            if (x === this.cols - 1 && line[x][1] <= " ") {
              x = 0;
              if (++y >= this.rows) {
                y--;
                if (++yb > this.ybase) {
                  yb = this.ybase;
                  break;
                }
              }
              continue;
            }
            break;
          }
          this.x = x, this.y = y;
          this.scrollDisp(-this.ydisp + yb);
          if (this.visualMode) {
            this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
          }
          return;
        }
        if (key === "^" || key === "0") {
          var ox = this.x;
          if (key === "0") {
            this.x = 0;
          } else if (key === "^") {
            var line = this.lines[this.ydisp + this.y];
            var x = 0;
            while (x < this.cols) {
              if (line[x][1] > " ") {
                break;
              }
              x++;
            }
            if (x >= this.cols)
              x = this.cols - 1;
            this.x = x;
          }
          if (this.visualMode) {
            this.selectText(ox, this.x, this.ydisp + this.y, this.ydisp + this.y);
          } else {
            this.refresh(this.y, this.y);
          }
          return;
        }
        if (key === "$") {
          var ox = this.x;
          var line = this.lines[this.ydisp + this.y];
          var x = this.cols - 1;
          while (x >= 0) {
            if (line[x][1] > " ") {
              if (this.visualMode && x < this.cols - 1)
                x++;
              break;
            }
            x--;
          }
          if (x < 0)
            x = 0;
          this.x = x;
          if (this.visualMode) {
            this.selectText(ox, this.x, this.ydisp + this.y, this.ydisp + this.y);
          } else {
            this.refresh(this.y, this.y);
          }
          return;
        }
        if (key === "g" || key === "G") {
          var ox = this.x;
          var oy = this.y;
          var oyd = this.ydisp;
          if (key === "g") {
            this.x = 0, this.y = 0;
            this.scrollDisp(-this.ydisp);
          } else if (key === "G") {
            this.x = 0, this.y = this.rows - 1;
            this.scrollDisp(this.ybase);
          }
          if (this.visualMode) {
            this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
          }
          return;
        }
        if (key === "H" || key === "M" || key === "L") {
          var ox = this.x;
          var oy = this.y;
          if (key === "H") {
            this.x = 0, this.y = 0;
          } else if (key === "M") {
            this.x = 0, this.y = this.rows / 2 | 0;
          } else if (key === "L") {
            this.x = 0, this.y = this.rows - 1;
          }
          if (this.visualMode) {
            this.selectText(ox, this.x, this.ydisp + oy, this.ydisp + this.y);
          } else {
            this.refresh(oy, oy);
            this.refresh(this.y, this.y);
          }
          return;
        }
        if (key === "{" || key === "}") {
          var ox = this.x;
          var oy = this.y;
          var oyd = this.ydisp;
          var line;
          var saw_full = false;
          var found = false;
          var first_is_space = -1;
          var y = this.y + (key === "{" ? -1 : 1);
          var yb = this.ydisp;
          var i;
          if (key === "{") {
            if (y < 0) {
              y++;
              if (yb > 0)
                yb--;
            }
          } else if (key === "}") {
            if (y >= this.rows) {
              y--;
              if (yb < this.ybase)
                yb++;
            }
          }
          for (; ; ) {
            line = this.lines[yb + y];
            for (i = 0; i < this.cols; i++) {
              if (line[i][1] > " ") {
                if (first_is_space === -1) {
                  first_is_space = 0;
                }
                saw_full = true;
                break;
              } else if (i === this.cols - 1) {
                if (first_is_space === -1) {
                  first_is_space = 1;
                } else if (first_is_space === 0) {
                  found = true;
                } else if (first_is_space === 1) {
                  if (saw_full)
                    found = true;
                }
                break;
              }
            }
            if (found)
              break;
            if (key === "{") {
              y--;
              if (y < 0) {
                y++;
                if (yb > 0)
                  yb--;
                else
                  break;
              }
            } else if (key === "}") {
              y++;
              if (y >= this.rows) {
                y--;
                if (yb < this.ybase)
                  yb++;
                else
                  break;
              }
            }
          }
          if (!found) {
            if (key === "{") {
              y = 0;
              yb = 0;
            } else if (key === "}") {
              y = this.rows - 1;
              yb = this.ybase;
            }
          }
          this.x = 0, this.y = y;
          this.scrollDisp(-this.ydisp + yb);
          if (this.visualMode) {
            this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
          }
          return;
        }
        if (key === "/" || key === "?") {
          if (!this.visualMode) {
            this.enterSearch(key === "/");
          }
          return;
        }
        return false;
      };
      Terminal.prototype.keySearch = function(ev, key) {
        if (key === "\x1B") {
          this.leaveSearch();
          return;
        }
        if (key === "\r" || !this.searchMode && (key === "n" || key === "N")) {
          this.leaveSearch();
          var entry = this.entry;
          if (!entry) {
            this.refresh(0, this.rows - 1);
            return;
          }
          var ox = this.x;
          var oy = this.y;
          var oyd = this.ydisp;
          var line;
          var found = false;
          var wrapped = false;
          var x = this.x + 1;
          var y = this.ydisp + this.y;
          var yb, i;
          var up = key === "N" ? this.searchDown : !this.searchDown;
          for (; ; ) {
            line = this.lines[y];
            while (x < this.cols) {
              for (i = 0; i < entry.length; i++) {
                if (x + i >= this.cols)
                  break;
                if (line[x + i][1] !== entry[i]) {
                  break;
                } else if (line[x + i][1] === entry[i] && i === entry.length - 1) {
                  found = true;
                  break;
                }
              }
              if (found)
                break;
              x += i + 1;
            }
            if (found)
              break;
            x = 0;
            if (!up) {
              y++;
              if (y > this.ybase + this.rows - 1) {
                if (wrapped)
                  break;
                wrapped = true;
                y = 0;
              }
            } else {
              y--;
              if (y < 0) {
                if (wrapped)
                  break;
                wrapped = true;
                y = this.ybase + this.rows - 1;
              }
            }
          }
          if (found) {
            if (y - this.ybase < 0) {
              yb = y;
              y = 0;
              if (yb > this.ybase) {
                y = yb - this.ybase;
                yb = this.ybase;
              }
            } else {
              yb = this.ybase;
              y -= this.ybase;
            }
            this.x = x, this.y = y;
            this.scrollDisp(-this.ydisp + yb);
            if (this.visualMode) {
              this.selectText(ox, this.x, oy + oyd, this.ydisp + this.y);
            }
            return;
          }
          this.refresh(0, this.rows - 1);
          return;
        }
        if (key === "\b" || key === "\x7F") {
          if (this.entry.length === 0)
            return;
          var bottom = this.ydisp + this.rows - 1;
          this.entry = this.entry.slice(0, -1);
          var i = this.entryPrefix.length + this.entry.length;
          this.lines[bottom][i] = [
            this.lines[bottom][i][0],
            " "
          ];
          this.x--;
          this.refresh(this.rows - 1, this.rows - 1);
          this.refresh(this.y, this.y);
          return;
        }
        if (key.length === 1 && key >= " " && key <= "~") {
          var bottom = this.ydisp + this.rows - 1;
          this.entry += key;
          var i = this.entryPrefix.length + this.entry.length - 1;
          this.lines[bottom][i] = [
            this.defAttr & ~511 | 4,
            key
          ];
          this.x++;
          this.refresh(this.rows - 1, this.rows - 1);
          this.refresh(this.y, this.y);
          return;
        }
        return false;
      };
      Terminal.charsets = {};
      Terminal.charsets.SCLD = {
        // (0
        "`": "\u25C6",
        // '◆'
        "a": "\u2592",
        // '▒'
        "b": "	",
        // '\t'
        "c": "\f",
        // '\f'
        "d": "\r",
        // '\r'
        "e": "\n",
        // '\n'
        "f": "\xB0",
        // '°'
        "g": "\xB1",
        // '±'
        "h": "\u2424",
        // '\u2424' (NL)
        "i": "\v",
        // '\v'
        "j": "\u2518",
        // '┘'
        "k": "\u2510",
        // '┐'
        "l": "\u250C",
        // '┌'
        "m": "\u2514",
        // '└'
        "n": "\u253C",
        // '┼'
        "o": "\u23BA",
        // '⎺'
        "p": "\u23BB",
        // '⎻'
        "q": "\u2500",
        // '─'
        "r": "\u23BC",
        // '⎼'
        "s": "\u23BD",
        // '⎽'
        "t": "\u251C",
        // '├'
        "u": "\u2524",
        // '┤'
        "v": "\u2534",
        // '┴'
        "w": "\u252C",
        // '┬'
        "x": "\u2502",
        // '│'
        "y": "\u2264",
        // '≤'
        "z": "\u2265",
        // '≥'
        "{": "\u03C0",
        // 'π'
        "|": "\u2260",
        // '≠'
        "}": "\xA3",
        // '£'
        "~": "\xB7"
        // '·'
      };
      Terminal.charsets.UK = null;
      Terminal.charsets.US = null;
      Terminal.charsets.Dutch = null;
      Terminal.charsets.Finnish = null;
      Terminal.charsets.French = null;
      Terminal.charsets.FrenchCanadian = null;
      Terminal.charsets.German = null;
      Terminal.charsets.Italian = null;
      Terminal.charsets.NorwegianDanish = null;
      Terminal.charsets.Spanish = null;
      Terminal.charsets.Swedish = null;
      Terminal.charsets.Swiss = null;
      Terminal.charsets.ISOLatin = null;
      function on(el, type3, handler, capture) {
        el.addEventListener(type3, handler, capture || false);
      }
      function off(el, type3, handler, capture) {
        el.removeEventListener(type3, handler, capture || false);
      }
      function cancel(ev) {
        if (ev.preventDefault)
          ev.preventDefault();
        ev.returnValue = false;
        if (ev.stopPropagation)
          ev.stopPropagation();
        ev.cancelBubble = true;
        return false;
      }
      function inherits(child, parent) {
        function f() {
          this.constructor = child;
        }
        f.prototype = parent.prototype;
        child.prototype = new f();
      }
      function isBoldBroken(document2) {
        var body = document2.getElementsByTagName("body")[0];
        var terminal = document2.createElement("div");
        terminal.className = "terminal";
        var line = document2.createElement("div");
        var el = document2.createElement("span");
        el.innerHTML = "hello world";
        line.appendChild(el);
        terminal.appendChild(line);
        body.appendChild(terminal);
        var w1 = el.scrollWidth;
        el.style.fontWeight = "bold";
        var w2 = el.scrollWidth;
        body.removeChild(terminal);
        return w1 !== w2;
      }
      var String2 = this.String;
      var setTimeout2 = this.setTimeout;
      var setInterval2 = this.setInterval;
      function indexOf(obj, el) {
        var i = obj.length;
        while (i--) {
          if (obj[i] === el)
            return i;
        }
        return -1;
      }
      function isWide(ch) {
        if (ch <= "\uFF00")
          return false;
        return ch >= "\uFF01" && ch <= "\uFFBE" || ch >= "\uFFC2" && ch <= "\uFFC7" || ch >= "\uFFCA" && ch <= "\uFFCF" || ch >= "\uFFD2" && ch <= "\uFFD7" || ch >= "\uFFDA" && ch <= "\uFFDC" || ch >= "\uFFE0" && ch <= "\uFFE6" || ch >= "\uFFE8" && ch <= "\uFFEE";
      }
      function matchColor(r1, g1, b1) {
        var hash = r1 << 16 | g1 << 8 | b1;
        if (matchColor._cache[hash] != null) {
          return matchColor._cache[hash];
        }
        var ldiff = Infinity, li = -1, i = 0, c, r2, g2, b2, diff;
        for (; i < Terminal.vcolors.length; i++) {
          c = Terminal.vcolors[i];
          r2 = c[0];
          g2 = c[1];
          b2 = c[2];
          diff = matchColor.distance(r1, g1, b1, r2, g2, b2);
          if (diff === 0) {
            li = i;
            break;
          }
          if (diff < ldiff) {
            ldiff = diff;
            li = i;
          }
        }
        return matchColor._cache[hash] = li;
      }
      matchColor._cache = {};
      matchColor.distance = function(r1, g1, b1, r2, g2, b2) {
        return Math.pow(30 * (r1 - r2), 2) + Math.pow(59 * (g1 - g2), 2) + Math.pow(11 * (b1 - b2), 2);
      };
      function each(obj, iter, con) {
        if (obj.forEach)
          return obj.forEach(iter, con);
        for (var i = 0; i < obj.length; i++) {
          iter.call(con, obj[i], i, obj);
        }
      }
      function keys4(obj) {
        if (Object.keys)
          return Object.keys(obj);
        var key, keys5 = [];
        for (key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keys5.push(key);
          }
        }
        return keys5;
      }
      Terminal.EventEmitter = EventEmitter;
      Terminal.Stream = Stream;
      Terminal.inherits = inherits;
      Terminal.on = on;
      Terminal.off = off;
      Terminal.cancel = cancel;
      if (typeof module2 !== "undefined") {
        module2.exports = Terminal;
      } else {
        this.Terminal = Terminal;
      }
    }).call(function() {
      return this || (typeof window !== "undefined" ? window : global);
    }());
  }
});

// node_modules/term.js/lib/index.js
var require_lib = __commonJS({
  "node_modules/term.js/lib/index.js"(exports, module2) {
    function term(options) {
      return new term.Terminal(options);
    }
    term.middleware = function(options) {
      var url = require("url");
      options = options || {};
      options.path = options.path || "/term.js";
      return function(req, res, next) {
        if (url.parse(req.url).pathname !== options.path) {
          return next();
        }
        if (+new Date(req.headers["if-modified-since"]) === term.last) {
          res.statusCode = 304;
          res.end();
          return;
        }
        res.writeHead(200, {
          "Content-Type": "application/javascript; charset=utf-8",
          "Content-Length": Buffer.byteLength(term.script),
          "Last-Modified": term.last
        });
        res.end(term.script);
      };
    };
    term.path = __dirname + "/../src/term.js";
    term.__defineGetter__("script", function() {
      if (term._script)
        return term._script;
      term.last = +/* @__PURE__ */ new Date();
      return term._script = require("fs").readFileSync(term.path, "utf8");
    });
    term.__defineGetter__("Terminal", function() {
      if (term._Terminal)
        return term._Terminal;
      return term._Terminal = require_term();
    });
    module2.exports = term;
  }
});

// node_modules/term.js/index.js
var require_term2 = __commonJS({
  "node_modules/term.js/index.js"(exports, module2) {
    module2.exports = require_lib();
  }
});

// node_modules/blessed/lib/widgets/terminal.js
var require_terminal = __commonJS({
  "node_modules/blessed/lib/widgets/terminal.js"(exports, module2) {
    var nextTick = global.setImmediate || process.nextTick.bind(process);
    var Node = require_node();
    var Box = require_box();
    function Terminal(options) {
      if (!(this instanceof Node)) {
        return new Terminal(options);
      }
      options = options || {};
      options.scrollable = false;
      Box.call(this, options);
      if (this.screen.program.tmux && this.screen.program.tmuxVersion >= 2) {
        this.screen.program.enableMouse();
      }
      this.handler = options.handler;
      this.shell = options.shell || process.env.SHELL || "sh";
      this.args = options.args || [];
      this.cursor = this.options.cursor;
      this.cursorBlink = this.options.cursorBlink;
      this.screenKeys = this.options.screenKeys;
      this.style = this.style || {};
      this.style.bg = this.style.bg || "default";
      this.style.fg = this.style.fg || "default";
      this.termName = options.terminal || options.term || process.env.TERM || "xterm";
      this.bootstrap();
    }
    Terminal.prototype.__proto__ = Box.prototype;
    Terminal.prototype.type = "terminal";
    Terminal.prototype.bootstrap = function() {
      var self = this;
      var element = {
        // window
        get document() {
          return element;
        },
        navigator: { userAgent: "node.js" },
        // document
        get defaultView() {
          return element;
        },
        get documentElement() {
          return element;
        },
        createElement: function() {
          return element;
        },
        // element
        get ownerDocument() {
          return element;
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        },
        getElementsByTagName: function() {
          return [element];
        },
        getElementById: function() {
          return element;
        },
        parentNode: null,
        offsetParent: null,
        appendChild: function() {
        },
        removeChild: function() {
        },
        setAttribute: function() {
        },
        getAttribute: function() {
        },
        style: {},
        focus: function() {
        },
        blur: function() {
        },
        console
      };
      element.parentNode = element;
      element.offsetParent = element;
      this.term = require_term2()({
        termName: this.termName,
        cols: this.width - this.iwidth,
        rows: this.height - this.iheight,
        context: element,
        document: element,
        body: element,
        parent: element,
        cursorBlink: this.cursorBlink,
        screenKeys: this.screenKeys
      });
      this.term.refresh = function() {
        self.screen.render();
      };
      this.term.keyDown = function() {
      };
      this.term.keyPress = function() {
      };
      this.term.open(element);
      this.screen.program.input.on("data", this._onData = function(data) {
        if (self.screen.focused === self && !self._isMouse(data)) {
          self.handler(data);
        }
      });
      this.onScreenEvent("mouse", function(data) {
        if (self.screen.focused !== self)
          return;
        if (data.x < self.aleft + self.ileft)
          return;
        if (data.y < self.atop + self.itop)
          return;
        if (data.x > self.aleft - self.ileft + self.width)
          return;
        if (data.y > self.atop - self.itop + self.height)
          return;
        if (self.term.x10Mouse || self.term.vt200Mouse || self.term.normalMouse || self.term.mouseEvents || self.term.utfMouse || self.term.sgrMouse || self.term.urxvtMouse) {
          ;
        } else {
          return;
        }
        var b = data.raw[0], x = data.x - self.aleft, y = data.y - self.atop, s;
        if (self.term.urxvtMouse) {
          if (self.screen.program.sgrMouse) {
            b += 32;
          }
          s = "\x1B[" + b + ";" + (x + 32) + ";" + (y + 32) + "M";
        } else if (self.term.sgrMouse) {
          if (!self.screen.program.sgrMouse) {
            b -= 32;
          }
          s = "\x1B[<" + b + ";" + x + ";" + y + (data.action === "mousedown" ? "M" : "m");
        } else {
          if (self.screen.program.sgrMouse) {
            b += 32;
          }
          s = "\x1B[M" + String.fromCharCode(b) + String.fromCharCode(x + 32) + String.fromCharCode(y + 32);
        }
        self.handler(s);
      });
      this.on("focus", function() {
        self.term.focus();
      });
      this.on("blur", function() {
        self.term.blur();
      });
      this.term.on("title", function(title) {
        self.title = title;
        self.emit("title", title);
      });
      this.term.on("passthrough", function(data) {
        self.screen.program.flush();
        self.screen.program._owrite(data);
      });
      this.on("resize", function() {
        nextTick(function() {
          self.term.resize(self.width - self.iwidth, self.height - self.iheight);
        });
      });
      this.once("render", function() {
        self.term.resize(self.width - self.iwidth, self.height - self.iheight);
      });
      this.on("destroy", function() {
        self.kill();
        self.screen.program.input.removeListener("data", self._onData);
      });
      if (this.handler) {
        return;
      }
      this.pty = require("pty.js").fork(this.shell, this.args, {
        name: this.termName,
        cols: this.width - this.iwidth,
        rows: this.height - this.iheight,
        cwd: process.env.HOME,
        env: this.options.env || process.env
      });
      this.on("resize", function() {
        nextTick(function() {
          try {
            self.pty.resize(self.width - self.iwidth, self.height - self.iheight);
          } catch (e) {
            ;
          }
        });
      });
      this.handler = function(data) {
        self.pty.write(data);
        self.screen.render();
      };
      this.pty.on("data", function(data) {
        self.write(data);
        self.screen.render();
      });
      this.pty.on("exit", function(code) {
        self.emit("exit", code || null);
      });
      this.onScreenEvent("keypress", function() {
        self.screen.render();
      });
      this.screen._listenKeys(this);
    };
    Terminal.prototype.write = function(data) {
      return this.term.write(data);
    };
    Terminal.prototype.render = function() {
      var ret = this._render();
      if (!ret)
        return;
      this.dattr = this.sattr(this.style);
      var xi = ret.xi + this.ileft, xl = ret.xl - this.iright, yi = ret.yi + this.itop, yl = ret.yl - this.ibottom, cursor;
      var scrollback = this.term.lines.length - (yl - yi);
      for (var y = Math.max(yi, 0); y < yl; y++) {
        var line = this.screen.lines[y];
        if (!line || !this.term.lines[scrollback + y - yi])
          break;
        if (y === yi + this.term.y && this.term.cursorState && this.screen.focused === this && (this.term.ydisp === this.term.ybase || this.term.selectMode) && !this.term.cursorHidden) {
          cursor = xi + this.term.x;
        } else {
          cursor = -1;
        }
        for (var x = Math.max(xi, 0); x < xl; x++) {
          if (!line[x] || !this.term.lines[scrollback + y - yi][x - xi])
            break;
          line[x][0] = this.term.lines[scrollback + y - yi][x - xi][0];
          if (x === cursor) {
            if (this.cursor === "line") {
              line[x][0] = this.dattr;
              line[x][1] = "\u2502";
              continue;
            } else if (this.cursor === "underline") {
              line[x][0] = this.dattr | 2 << 18;
            } else if (this.cursor === "block" || !this.cursor) {
              line[x][0] = this.dattr | 8 << 18;
            }
          }
          line[x][1] = this.term.lines[scrollback + y - yi][x - xi][1];
          if ((line[x][0] >> 9 & 511) === 257) {
            line[x][0] &= ~(511 << 9);
            line[x][0] |= (this.dattr >> 9 & 511) << 9;
          }
          if ((line[x][0] & 511) === 256) {
            line[x][0] &= ~511;
            line[x][0] |= this.dattr & 511;
          }
        }
        line.dirty = true;
      }
      return ret;
    };
    Terminal.prototype._isMouse = function(buf) {
      var s = buf;
      if (Buffer.isBuffer(s)) {
        if (s[0] > 127 && s[1] === void 0) {
          s[0] -= 128;
          s = "\x1B" + s.toString("utf-8");
        } else {
          s = s.toString("utf-8");
        }
      }
      return buf[0] === 27 && buf[1] === 91 && buf[2] === 77 || /^\x1b\[M([\x00\u0020-\uffff]{3})/.test(s) || /^\x1b\[(\d+;\d+;\d+)M/.test(s) || /^\x1b\[<(\d+;\d+;\d+)([mM])/.test(s) || /^\x1b\[<(\d+;\d+;\d+;\d+)&w/.test(s) || /^\x1b\[24([0135])~\[(\d+),(\d+)\]\r/.test(s) || /^\x1b\[(O|I)/.test(s);
    };
    Terminal.prototype.setScroll = Terminal.prototype.scrollTo = function(offset) {
      this.term.ydisp = offset;
      return this.emit("scroll");
    };
    Terminal.prototype.getScroll = function() {
      return this.term.ydisp;
    };
    Terminal.prototype.scroll = function(offset) {
      this.term.scrollDisp(offset);
      return this.emit("scroll");
    };
    Terminal.prototype.resetScroll = function() {
      this.term.ydisp = 0;
      this.term.ybase = 0;
      return this.emit("scroll");
    };
    Terminal.prototype.getScrollHeight = function() {
      return this.term.rows - 1;
    };
    Terminal.prototype.getScrollPerc = function() {
      return this.term.ydisp / this.term.ybase * 100;
    };
    Terminal.prototype.setScrollPerc = function(i) {
      return this.setScroll(i / 100 * this.term.ybase | 0);
    };
    Terminal.prototype.screenshot = function(xi, xl, yi, yl) {
      xi = 0 + (xi || 0);
      if (xl != null) {
        xl = 0 + (xl || 0);
      } else {
        xl = this.term.lines[0].length;
      }
      yi = 0 + (yi || 0);
      if (yl != null) {
        yl = 0 + (yl || 0);
      } else {
        yl = this.term.lines.length;
      }
      return this.screen.screenshot(xi, xl, yi, yl, this.term);
    };
    Terminal.prototype.kill = function() {
      if (this.pty) {
        this.pty.destroy();
        this.pty.kill();
      }
      this.term.refresh = function() {
      };
      this.term.write("\x1B[H\x1B[J");
      if (this.term._blink) {
        clearInterval(this.term._blink);
      }
      this.term.destroy();
    };
    module2.exports = Terminal;
  }
});

// node_modules/blessed/lib/widgets/video.js
var require_video = __commonJS({
  "node_modules/blessed/lib/widgets/video.js"(exports, module2) {
    var cp = require("child_process");
    var Node = require_node();
    var Box = require_box();
    var Terminal = require_terminal();
    function Video(options) {
      var self = this, shell, args;
      if (!(this instanceof Node)) {
        return new Video(options);
      }
      options = options || {};
      Box.call(this, options);
      if (this.exists("mplayer")) {
        shell = "mplayer";
        args = ["-vo", "caca", "-quiet", options.file];
      } else if (this.exists("mpv")) {
        shell = "mpv";
        args = ["--vo", "caca", "--really-quiet", options.file];
      } else {
        this.parseTags = true;
        this.setContent("{red-fg}{bold}Error:{/bold} mplayer or mpv not installed.{/red-fg}");
        return this;
      }
      var opts = {
        parent: this,
        left: 0,
        top: 0,
        width: this.width - this.iwidth,
        height: this.height - this.iheight,
        shell,
        args: args.slice()
      };
      this.now = Date.now() / 1e3 | 0;
      this.start = opts.start || 0;
      if (this.start) {
        if (shell === "mplayer") {
          opts.args.unshift("-ss", this.start + "");
        } else if (shell === "mpv") {
          opts.args.unshift("--start", this.start + "");
        }
      }
      var DISPLAY = process.env.DISPLAY;
      delete process.env.DISPLAY;
      this.tty = new Terminal(opts);
      process.env.DISPLAY = DISPLAY;
      this.on("click", function() {
        self.tty.pty.write("p");
      });
      this.on("resize", function() {
        self.tty.destroy();
        var opts2 = {
          parent: self,
          left: 0,
          top: 0,
          width: self.width - self.iwidth,
          height: self.height - self.iheight,
          shell,
          args: args.slice()
        };
        var watched = (Date.now() / 1e3 | 0) - self.now;
        self.now = Date.now() / 1e3 | 0;
        self.start += watched;
        if (shell === "mplayer") {
          opts2.args.unshift("-ss", self.start + "");
        } else if (shell === "mpv") {
          opts2.args.unshift("--start", self.start + "");
        }
        var DISPLAY2 = process.env.DISPLAY;
        delete process.env.DISPLAY;
        self.tty = new Terminal(opts2);
        process.env.DISPLAY = DISPLAY2;
        self.screen.render();
      });
    }
    Video.prototype.__proto__ = Box.prototype;
    Video.prototype.type = "video";
    Video.prototype.exists = function(program) {
      try {
        return !!+cp.execSync("type " + program + " > /dev/null 2> /dev/null && echo 1", { encoding: "utf8" }).trim();
      } catch (e) {
        return false;
      }
    };
    module2.exports = Video;
  }
});

// require("./widgets/**/*") in node_modules/blessed/lib/widget.js
var globRequire_widgets;
var init_ = __esm({
  'require("./widgets/**/*") in node_modules/blessed/lib/widget.js'() {
    globRequire_widgets = __glob({
      "./widgets/ansiimage.js": () => require_ansiimage(),
      "./widgets/bigtext.js": () => require_bigtext(),
      "./widgets/box.js": () => require_box(),
      "./widgets/button.js": () => require_button(),
      "./widgets/checkbox.js": () => require_checkbox(),
      "./widgets/element.js": () => require_element(),
      "./widgets/filemanager.js": () => require_filemanager(),
      "./widgets/form.js": () => require_form(),
      "./widgets/image.js": () => require_image(),
      "./widgets/input.js": () => require_input(),
      "./widgets/layout.js": () => require_layout(),
      "./widgets/line.js": () => require_line(),
      "./widgets/list.js": () => require_list(),
      "./widgets/listbar.js": () => require_listbar(),
      "./widgets/listtable.js": () => require_listtable(),
      "./widgets/loading.js": () => require_loading(),
      "./widgets/log.js": () => require_log(),
      "./widgets/message.js": () => require_message(),
      "./widgets/node.js": () => require_node(),
      "./widgets/overlayimage.js": () => require_overlayimage(),
      "./widgets/progressbar.js": () => require_progressbar(),
      "./widgets/prompt.js": () => require_prompt(),
      "./widgets/question.js": () => require_question(),
      "./widgets/radiobutton.js": () => require_radiobutton(),
      "./widgets/radioset.js": () => require_radioset(),
      "./widgets/screen.js": () => require_screen(),
      "./widgets/scrollablebox.js": () => require_scrollablebox(),
      "./widgets/scrollabletext.js": () => require_scrollabletext(),
      "./widgets/table.js": () => require_table(),
      "./widgets/terminal.js": () => require_terminal(),
      "./widgets/text.js": () => require_text(),
      "./widgets/textarea.js": () => require_textarea(),
      "./widgets/textbox.js": () => require_textbox(),
      "./widgets/video.js": () => require_video()
    });
  }
});

// node_modules/blessed/lib/widget.js
var require_widget = __commonJS({
  "node_modules/blessed/lib/widget.js"(exports) {
    init_();
    var widget = exports;
    widget.classes = [
      "Node",
      "Screen",
      "Element",
      "Box",
      "Text",
      "Line",
      "ScrollableBox",
      "ScrollableText",
      "BigText",
      "List",
      "Form",
      "Input",
      "Textarea",
      "Textbox",
      "Button",
      "ProgressBar",
      "FileManager",
      "Checkbox",
      "RadioSet",
      "RadioButton",
      "Prompt",
      "Question",
      "Message",
      "Loading",
      "Listbar",
      "Log",
      "Table",
      "ListTable",
      "Terminal",
      "Image",
      "ANSIImage",
      "OverlayImage",
      "Video",
      "Layout"
    ];
    widget.classes.forEach(function(name) {
      var file = name.toLowerCase();
      widget[name] = widget[file] = globRequire_widgets("./widgets/" + file);
    });
    widget.aliases = {
      "ListBar": "Listbar",
      "PNG": "ANSIImage"
    };
    Object.keys(widget.aliases).forEach(function(key) {
      var name = widget.aliases[key];
      widget[key] = widget[name];
      widget[key.toLowerCase()] = widget[name];
    });
  }
});

// node_modules/blessed/lib/blessed.js
var require_blessed = __commonJS({
  "node_modules/blessed/lib/blessed.js"(exports, module2) {
    function blessed3() {
      return blessed3.program.apply(null, arguments);
    }
    blessed3.program = blessed3.Program = require_program();
    blessed3.tput = blessed3.Tput = require_tput();
    blessed3.widget = require_widget();
    blessed3.colors = require_colors();
    blessed3.unicode = require_unicode();
    blessed3.helpers = require_helpers();
    blessed3.helpers.sprintf = blessed3.tput.sprintf;
    blessed3.helpers.tryRead = blessed3.tput.tryRead;
    blessed3.helpers.merge(blessed3, blessed3.helpers);
    blessed3.helpers.merge(blessed3, blessed3.widget);
    module2.exports = blessed3;
  }
});

// src/core/spawn-screen.ts
var import_blessed = __toESM(require_blessed());

// src/input/bind-exit-input.ts
function bindExitInput(screen) {
  screen.key(["C-c", "q", "escape"], () => {
    process.exit(0);
  });
}

// src/core/spawn-screen.ts
function spawnScreen(opts = {}) {
  const { bindExit = true } = opts;
  const screen = import_blessed.default.screen({ smartCSR: true, ...opts });
  if (bindExit)
    bindExitInput(screen);
  return screen;
}

// node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

// node_modules/ramda/es/internal/_curry1.js
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// node_modules/ramda/es/internal/_curry2.js
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

// node_modules/ramda/es/internal/_arity.js
function _arity(n, fn) {
  switch (n) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}

// node_modules/ramda/es/internal/_curryN.js
function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    var hasPlaceholder = false;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      } else {
        hasPlaceholder = true;
      }
      combinedIdx += 1;
    }
    return !hasPlaceholder && left <= 0 ? fn.apply(this, combined) : _arity(Math.max(0, left), _curryN(length, combined, fn));
  };
}

// node_modules/ramda/es/curryN.js
var curryN = /* @__PURE__ */ _curry2(function curryN2(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});
var curryN_default = curryN;

// node_modules/ramda/es/internal/_isArray.js
var isArray_default = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};

// node_modules/ramda/es/internal/_isTransformer.js
function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}

// node_modules/ramda/es/internal/_dispatchable.js
function _dispatchable(methodNames, transducerCreator, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!isArray_default(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

// node_modules/ramda/es/internal/_xfBase.js
var xfBase_default = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(result) {
    return this.xf["@@transducer/result"](result);
  }
};

// node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

// node_modules/ramda/es/internal/_includesWith.js
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

// node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  var match = String(f).match(/^function (\w*)/);
  return match == null ? "" : match[1];
}

// node_modules/ramda/es/internal/_has.js
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// node_modules/ramda/es/internal/_objectIs.js
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

// node_modules/ramda/es/internal/_isArguments.js
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ function() {
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
    return toString.call(x) === "[object Arguments]";
  } : function _isArguments2(x) {
    return _has("callee", x);
  };
}();
var isArguments_default = _isArguments;

// node_modules/ramda/es/keys.js
var hasEnumBug = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = /* @__PURE__ */ function() {
  "use strict";
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /* @__PURE__ */ _curry1(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var keys_default = keys;

// node_modules/ramda/es/type.js
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
var type_default = type;

// node_modules/ramda/es/internal/_equals.js
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(function(b2, aItem) {
    return !_includesWith(eq, aItem, b2);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if (objectIs_default(a, b)) {
    return true;
  }
  var typeA = type_default(a);
  if (typeA !== type_default(b)) {
    return false;
  }
  if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
    return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && objectIs_default(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!objectIs_default(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys_default(a);
  if (keysA.length !== keys_default(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

// node_modules/ramda/es/equals.js
var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
  return _equals(a, b, [], []);
});
var equals_default = equals;

// node_modules/ramda/es/internal/_map.js
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

// node_modules/ramda/es/internal/_arrayReduce.js
function _arrayReduce(reducer, acc, list) {
  var index = 0;
  var length = list.length;
  while (index < length) {
    acc = reducer(acc, list[index]);
    index += 1;
  }
  return acc;
}

// node_modules/ramda/es/internal/_isObject.js
function _isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}

// node_modules/ramda/es/internal/_xmap.js
var XMap = /* @__PURE__ */ function() {
  function XMap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap2.prototype["@@transducer/init"] = xfBase_default.init;
  XMap2.prototype["@@transducer/result"] = xfBase_default.result;
  XMap2.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap2;
}();
var _xmap = function _xmap2(f) {
  return function(xf) {
    return new XMap(f, xf);
  };
};
var xmap_default = _xmap;

// node_modules/ramda/es/map.js
var map = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], xmap_default, function map2(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case "[object Function]":
        return curryN_default(functor.length, function() {
          return fn.call(this, functor.apply(this, arguments));
        });
      case "[object Object]":
        return _arrayReduce(function(acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys_default(functor));
      default:
        return _map(fn, functor);
    }
  })
);
var map_default = map;

// node_modules/ramda/es/internal/_isString.js
function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}

// node_modules/ramda/es/internal/_isTypedArray.js
function _isTypedArray(val) {
  var type3 = Object.prototype.toString.call(val);
  return type3 === "[object Uint8ClampedArray]" || type3 === "[object Int8Array]" || type3 === "[object Uint8Array]" || type3 === "[object Int16Array]" || type3 === "[object Uint16Array]" || type3 === "[object Int32Array]" || type3 === "[object Uint32Array]" || type3 === "[object Float32Array]" || type3 === "[object Float64Array]" || type3 === "[object BigInt64Array]" || type3 === "[object BigUint64Array]";
}

// node_modules/ramda/es/empty.js
var empty = /* @__PURE__ */ _curry1(function empty2(x) {
  return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : isArray_default(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : isArguments_default(x) ? function() {
    return arguments;
  }() : _isTypedArray(x) ? x.constructor.from("") : void 0;
});
var empty_default = empty;

// node_modules/ramda/es/isEmpty.js
var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
  return x != null && equals_default(x, empty_default(x));
});
var isEmpty_default = isEmpty;

// src/ui/tabs-navigation.ts
var import_blessed2 = __toESM(require_blessed());
var convertTabToOption = (tab) => ({
  key: tab.key,
  // XXX: Invalid types in the external library.
  // @ts-ignore
  text: tab.name,
  callback() {
  }
});
var TabsNavigation = class {
  listbar;
  tabs;
  constructor(tabs) {
    this.tabs = tabs;
    this.listbar = this.init();
  }
  init() {
    const listbar = import_blessed2.default.listbar({
      commands: [],
      items: [],
      autoCommandKeys: true,
      mouse: true,
      keys: true,
      width: "100%",
      height: 3,
      tags: true,
      border: {
        type: "line"
      },
      style: {
        bg: "red"
      }
    });
    return listbar;
  }
  appendTab(tab) {
    this.tabs.push(tab);
  }
  prependTab(tab) {
    this.tabs.unshift(tab);
  }
  render() {
    const hasTabs = !isEmpty_default(this.tabs);
    const tabs = hasTabs ? this.tabs : [{ name: "No tabs", key: "__noitems" }];
    this.listbar.setItems(map_default(convertTabToOption, tabs));
    this.listbar.style = {
      selected: { bg: "red" }
    };
    return this.listbar;
  }
};

// index.ts
function main() {
  const screen = spawnScreen();
  const nav = new TabsNavigation([
    //{ key: 'a', name: 'webapp' },
    //{ key: 'b', name: 'mt-mediaplanning-ui' },
  ]);
  screen.append(nav.render());
  screen.render();
}
try {
  main();
} catch (e) {
  console.log(e);
  console.log("Crashed.");
  process.exit(1);
}
//# sourceMappingURL=index.js.map
