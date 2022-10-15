;(function (t) {
  function e(e) {
    for (
      var n, o, c = e[0], s = e[1], l = e[2], d = 0, f = [];
      d < c.length;
      d++
    )
      (o = c[d]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]),
        (r[o] = 0)
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
    p && p(e)
    while (f.length) f.shift()()
    return i.push.apply(i, l || []), a()
  }

  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
        var s = a[o]
        0 !== r[s] && (n = !1)
      }
      n && (i.splice(e--, 1), (t = c((c.s = a[0]))))
    }
    return t
  }
  var n = {},
    r = {
      app: 0,
    },
    i = []

  function o(t) {
    return (
      c.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-2d222037": "c9b4acc4",
      }[t] +
      ".js"
    )
  }

  function c(e) {
    if (n[e]) return n[e].exports
    var a = (n[e] = {
      i: e,
      l: !1,
      exports: {},
    })
    return t[e].call(a.exports, a, a.exports, c), (a.l = !0), a.exports
  }
  ;(c.e = function (t) {
    var e = [],
      a = r[t]
    if (0 !== a)
      if (a) e.push(a[2])
      else {
        var n = new Promise(function (e, n) {
          a = r[t] = [e, n]
        })
        e.push((a[2] = n))
        var i,
          s = document.createElement("script")
        ;(s.charset = "utf-8"),
          (s.timeout = 120),
          c.nc && s.setAttribute("nonce", c.nc),
          (s.src = o(t))
        var l = new Error()
        i = function (e) {
          ;(s.onerror = s.onload = null), clearTimeout(d)
          var a = r[t]
          if (0 !== a) {
            if (a) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src
              ;(l.message =
                "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = n),
                (l.request = i),
                a[1](l)
            }
            r[t] = void 0
          }
        }
        var d = setTimeout(function () {
          i({
            type: "timeout",
            target: s,
          })
        }, 12e4)
        ;(s.onerror = s.onload = i), document.head.appendChild(s)
      }
    return Promise.all(e)
  }),
    (c.m = t),
    (c.c = n),
    (c.d = function (t, e, a) {
      c.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: a,
        })
    }),
    (c.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        })
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t
      if (4 & e && "object" === typeof t && t && t.__esModule) return t
      var a = Object.create(null)
      if (
        (c.r(a),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          c.d(
            a,
            n,
            function (e) {
              return t[e]
            }.bind(null, n)
          )
      return a
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"]
            }
          : function () {
              return t
            }
      return c.d(e, "a", e), e
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (c.p = ""),
    (c.oe = function (t) {
      throw (console.error(t), t)
    })
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s)
  ;(s.push = e), (s = s.slice())
  for (var d = 0; d < s.length; d++) e(s[d])
  var p = l
  i.push([0, "chunk-vendors"]), a()
})({
  0: function (t, e, a) {
    t.exports = a("56d7")
  },
  "10ae": function (t, e, a) {},
  "56d7": function (t, e, a) {
    "use strict"
    a.r(e)
    var n = a("2b0e"),
      r = function () {
        var t = this,
          e = t._self._c
        return e(
          "div",
          {
            staticStyle: {
              height: "100%",
            },
            attrs: {
              id: "app",
            },
          },
          [
            e(
              "el-row",
              {
                staticStyle: {
                  height: "100%",
                },
                attrs: {
                  gutter: 8,
                },
              },
              [
                e(
                  "el-col",
                  {
                    attrs: {
                      span: 8,
                    },
                  },
                  [
                    e("h3", [
                      t._v("DTCG卡表工具 "),
                      e(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "10px",
                            color: "red",
                          },
                        },
                        [t._v("alpha")]
                      ),
                    ]),
                    e(
                      "el-card",
                      {
                        staticStyle: {
                          "margin-top": "10px",
                        },
                        attrs: {
                          shadow: "always",
                        },
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "clearfix",
                            attrs: {
                              slot: "header",
                            },
                            slot: "header",
                          },
                          [e("span", [t._v("卡组")])]
                        ),
                        e("el-input", {
                          attrs: {
                            type: "textarea",
                            rows: 3,
                            placeholder: "请输入卡组文本",
                          },
                          model: {
                            value: t.deckTxt,
                            callback: function (e) {
                              t.deckTxt = e
                            },
                            expression: "deckTxt",
                          },
                        }),
                        e(
                          "p",
                          {
                            staticStyle: {
                              "margin-top": "8px",
                              "font-size": "12px",
                            },
                          },
                          [
                            t._v(" 支持格式参见"),
                            e(
                              "a",
                              {
                                attrs: {
                                  href: "http://digimon.card.moe/page/deck_import",
                                  target: "_blank",
                                },
                              },
                              [t._v("卡组导入功能介绍")]
                            ),
                            t._v("。"),
                            e("br"),
                            t._v(" 请自行确保输入的是简中卡池的卡组 "),
                          ]
                        ),
                      ],
                      1
                    ),
                    e(
                      "el-card",
                      {
                        staticStyle: {
                          "margin-top": "10px",
                        },
                        attrs: {
                          shadow: "always",
                        },
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "clearfix",
                            attrs: {
                              slot: "header",
                            },
                            slot: "header",
                          },
                          [
                            e("span", [
                              t.basePdf
                                ? e("i", {
                                    staticClass: "el-icon-success",
                                    staticStyle: {
                                      color: "#67C23A",
                                    },
                                  })
                                : e("i", {
                                    staticClass: "el-icon-question",
                                    staticStyle: {
                                      color: "#909399",
                                    },
                                  }),
                              t._v(" 选择卡表PDF "),
                              e(
                                "a",
                                {
                                  staticClass: "download",
                                  attrs: {
                                    download: "卡表.pdf",
                                    href: "https://digimoncard-1258002530.file.myqcloud.com/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%8D%A1%E7%89%8C%E5%AF%B9%E6%88%98%E4%B8%93%E7%94%A8%E5%8D%A1%E8%A1%A8.pdf",
                                    target: "_blank",
                                  },
                                },
                                [t._v("下载")]
                              ),
                            ]),
                          ]
                        ),
                        e("input", {
                          ref: "input",
                          attrs: {
                            accept: "application/pdf",
                            type: "file",
                            id: "uploader",
                          },
                          on: {
                            change: t.handlePdf,
                          },
                        }),
                      ]
                    ),
                    e(
                      "el-card",
                      {
                        staticStyle: {
                          "margin-top": "10px",
                        },
                        attrs: {
                          shadow: "always",
                        },
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "clearfix",
                            attrs: {
                              slot: "header",
                            },
                            slot: "header",
                          },
                          [
                            e("span", [
                              t.font
                                ? e("i", {
                                    staticClass: "el-icon-success",
                                    staticStyle: {
                                      color: "#67C23A",
                                    },
                                  })
                                : e("i", {
                                    staticClass: "el-icon-question",
                                    staticStyle: {
                                      color: "#909399",
                                    },
                                  }),
                              t._v(" 选择中文字体 "),
                              e(
                                "a",
                                {
                                  staticClass: "download",
                                  attrs: {
                                    href: "https://alibabafont.taobao.com/wow/alibabafont/act/alifont",
                                    target: "_blank",
                                  },
                                },
                                [t._v("下载")]
                              ),
                            ]),
                          ]
                        ),
                        e("input", {
                          ref: "input2",
                          attrs: {
                            accept: ".ttf",
                            type: "file",
                            id: "uploader2",
                          },
                          on: {
                            change: t.handleFont,
                          },
                        }),
                        e(
                          "div",
                          {
                            staticStyle: {
                              "margin-top": "8px",
                              "font-size": "12px",
                            },
                          },
                          [t._v("* 请正确选择字体文件以保证生成文字无误")]
                        ),
                      ]
                    ),
                    e(
                      "div",
                      {
                        staticStyle: {
                          "margin-top": "10px",
                          "text-align": "center",
                        },
                      },
                      [
                        e(
                          "el-button",
                          {
                            on: {
                              click: t.doBuild,
                            },
                          },
                          [t._v("生成")]
                        ),
                        e(
                          "el-button",
                          {
                            on: {
                              click: t.doDownload,
                            },
                          },
                          [t._v("下载")]
                        ),
                      ],
                      1
                    ),
                    e(
                      "p",
                      {
                        staticStyle: {
                          "margin-top": "16px",
                          "font-size": "14px",
                        },
                      },
                      [
                        t._v(
                          "卡表工具使用的是数据库中的卡名，虽然我们尽力保证收录简中部分卡名与官方文本的一致性，但任可能存在未及时更新的情况，建议您生成后核对后使用。"
                        ),
                        e("br"),
                        t._v(" 如有疑问，可联系："),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://weibo.com/smdcn",
                              target: "_blank",
                            },
                          },
                          [t._v("@smdcn")]
                        ),
                      ]
                    ),
                    e(
                      "p",
                      {
                        staticStyle: {
                          "margin-top": "16px",
                          "font-size": "14px",
                        },
                      },
                      [
                        t._v("PowerBy "),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://digimon.card.moe",
                            },
                          },
                          [t._v("数码兽卡片游戏数据库")]
                        ),
                        t._v("。"),
                      ]
                    ),
                  ],
                  1
                ),
                e(
                  "el-col",
                  {
                    staticStyle: {
                      height: "100%",
                    },
                    attrs: {
                      span: 16,
                    },
                  },
                  [
                    t.pdfSrc
                      ? e("iframe", {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                          },
                          attrs: {
                            src: t.pdfSrc,
                          },
                        })
                      : t._e(),
                  ]
                ),
                e("p"),
              ],
              1
            ),
          ],
          1
        )
      },
      i = [],
      o = (a("0fb7"), a("450d"), a("f529")),
      c = a.n(o),
      s = (a("1951"), a("eedf")),
      l = a.n(s),
      d = (a("10cb"), a("f3ad")),
      p = a.n(d),
      f = (a("b8e0"), a("a4c4")),
      h = a.n(f),
      u = (a("f4f9"), a("c2cc")),
      g = a.n(u),
      m = (a("7a0f"), a("0f6c")),
      y = a.n(m)
    a("907a"), a("986a"), a("1d02"), a("3c5d"), a("14d9")
    let _ = {
      count_m: {
        type: "text",
        position: {
          x: 45,
          y: 257,
        },
        width: 11,
        height: 5,
        alignment: "center",
        fontSize: 10,
        characterSpacing: 0,
        lineHeight: 1,
      },
      count_t: {
        type: "text",
        position: {
          x: 88,
          y: 257,
        },
        width: 11,
        height: 5,
        alignment: "center",
        fontSize: 10,
        characterSpacing: 0,
        lineHeight: 1,
      },
      count_e: {
        type: "text",
        position: {
          x: 45,
          y: 262.6,
        },
        width: 11,
        height: 5,
        alignment: "center",
        fontSize: 10,
        characterSpacing: 0,
        lineHeight: 1,
      },
      count_a: {
        type: "text",
        position: {
          x: 88,
          y: 262.6,
        },
        width: 11,
        height: 5,
        alignment: "center",
        fontSize: 10,
        characterSpacing: 0,
        lineHeight: 1,
      },
      count_o: {
        type: "text",
        position: {
          x: 45,
          y: 268,
        },
        width: 11,
        height: 5,
        alignment: "center",
        fontSize: 10,
        characterSpacing: 0,
        lineHeight: 1,
      },
    }
    for (let z = 0; z < 25; z++)
      (_["m_s_" + z] = {
        type: "text",
        position: {
          x: 21.9,
          y: 64.6 + 5.68 * z,
        },
        width: 30.76,
        height: 4.36,
        alignment: "center",
        fontSize: 10,
        characterSpacing: 0,
        lineHeight: 1,
      }),
        (_["m_n_" + z] = {
          type: "text",
          position: {
            x: 56.3,
            y: 65 + 5.68 * z,
          },
          width: 36,
          height: 4.36,
          alignment: "left",
          fontSize: 7,
          characterSpacing: 0,
          lineHeight: 1,
        }),
        (_["m_c_" + z] = {
          type: "text",
          position: {
            x: 92.55,
            y: 64.6 + 5.68 * z,
          },
          width: 9.06,
          height: 4.36,
          alignment: "center",
          fontSize: 10,
          characterSpacing: 0,
          lineHeight: 1,
        }),
        (_["m_s_" + (z + 25)] = {
          type: "text",
          position: {
            x: 114.9,
            y: 64.6 + 5.68 * z,
          },
          width: 30.76,
          height: 4.36,
          alignment: "center",
          fontSize: 10,
          characterSpacing: 0,
          lineHeight: 1,
        }),
        (_["m_n_" + (z + 25)] = {
          type: "text",
          position: {
            x: 150.3,
            y: 65 + 5.68 * z,
          },
          width: 36,
          height: 4.36,
          alignment: "left",
          fontSize: 7,
          characterSpacing: 0,
          lineHeight: 1,
        }),
        (_["m_c_" + (z + 25)] = {
          type: "text",
          position: {
            x: 188.05,
            y: 64.6 + 5.68 * z,
          },
          width: 9.06,
          height: 4.36,
          alignment: "center",
          fontSize: 10,
          characterSpacing: 0,
          lineHeight: 1,
        })
    for (let z = 0; z < 5; z++)
      (_["e_s_" + z] = {
        type: "text",
        position: {
          x: 22.4,
          y: 224 + 5.68 * z,
        },
        width: 30.76,
        height: 4.36,
        alignment: "center",
        fontSize: 10,
        characterSpacing: 0,
        lineHeight: 1,
      }),
        (_["e_n_" + z] = {
          type: "text",
          position: {
            x: 57,
            y: 224.5 + 5.68 * z,
          },
          width: 36,
          height: 4.36,
          alignment: "left",
          fontSize: 7,
          characterSpacing: 0,
          lineHeight: 1,
        }),
        (_["e_c_" + z] = {
          type: "text",
          position: {
            x: 93,
            y: 224 + 5.68 * z,
          },
          width: 9.06,
          height: 4.36,
          alignment: "center",
          fontSize: 10,
          characterSpacing: 0,
          lineHeight: 1,
        })
    var b = _,
      S = a("bc3a"),
      x = a.n(S)
    const v = a("1fb5")
    n["default"].use(y.a),
      n["default"].use(g.a),
      n["default"].use(h.a),
      n["default"].use(p.a),
      n["default"].use(l.a)
    var w = {
        name: "App",
        data() {
          return {
            deckTxt: "",
            basePdf: null,
            font: null,
            decks: null,
            pdfSrc: "",
            generate: null,
          }
        },
        async mounted() {
          let { generate: t } = await a
            .e("chunk-2d222037")
            .then(a.t.bind(null, "cd99", 7))
          ;(this.generate = t), this.loadLocal()
        },
        methods: {
          loadLocal() {
            let t = localStorage.getItem("D#basePdf")
            if (t)
              try {
                this.basePdf = v.toByteArray(t).buffer
              } catch (e) {}
          },
          handlePdf(t) {
            let e = this,
              a = t.target.files,
              n = new FileReader()
            ;(n.onload = function () {
              e.basePdf = this.result
            }),
              n.readAsArrayBuffer(a[0])
          },
          handleFont(t) {
            let e = this,
              a = t.target.files,
              n = new FileReader()
            ;(n.onload = function () {
              e.font = this.result
            }),
              n.readAsArrayBuffer(a[0])
          },
          async doBuild() {
            if (!this.generate) return c.a.info("生成器未就绪，请稍等")
            let t = await this.doImport(this.deckTxt)
            if (!t) return
            this.pdfSrc &&
              (URL.revokeObjectURL(this.pdfSrc), (this.pdfSrc = ""))
            let e = this
            if (!this.basePdf) return c.a.info("请先选择卡表文件")
            if (!this.font) return c.a.info("请选择中文字体")
            let a = {},
              n = 0,
              r = {
                all: 0,
              }
            t.main.forEach((t) => {
              ;(a["m_s_" + n] = t.card.serial),
                (a["m_n_" + n] = t.card.scName),
                (a["m_c_" + n] = "" + t.number),
                n++,
                t.card.type in r
                  ? (r[t.card.type] += t.number)
                  : (r[t.card.type] = t.number),
                (r["all"] += t.number)
            }),
              (n = 0),
              t.eggs.forEach((t) => {
                ;(a["e_s_" + n] = t.card.serial),
                  (a["e_n_" + n] = t.card.scName),
                  (a["e_c_" + n] = "" + t.number),
                  n++,
                  t.card.type in r
                    ? (r[t.card.type] += t.number)
                    : (r[t.card.type] = t.number),
                  (r["all"] += t.number)
              }),
              (a["count_m"] = "数码兽卡" in r ? "" + r["数码兽卡"] : "0"),
              (a["count_t"] = "驯兽师卡" in r ? "" + r["驯兽师卡"] : "0"),
              (a["count_o"] = "选项卡" in r ? "" + r["选项卡"] : "0"),
              (a["count_e"] = "数码蛋卡" in r ? "" + r["数码蛋卡"] : "0"),
              (a["count_a"] = "" + r["all"]),
              this.generate({
                template: {
                  basePdf: this.basePdf,
                  schemas: [b],
                },
                inputs: [a],
                options: {
                  font: {
                    custom: {
                      data: this.font,
                      fallback: !0,
                    },
                  },
                },
              })
                .then((t) => {
                  const a = new Blob([t.buffer], {
                    type: "application/pdf",
                  })
                  ;(e.pdfSrc = URL.createObjectURL(a)),
                    localStorage.setItem(
                      "D#basePdf",
                      v.fromByteArray(new Uint8Array(this.basePdf))
                    )
                })
                .catch((t) => {
                  console.log(t), c.a.error("生成中遇到错误")
                })
          },
          doDownload() {
            if (!this.pdfSrc) return c.a.info("请先生成")
            let t = document.createElement("a")
            ;(t.href = this.pdfSrc),
              (t.download = "卡表.pdf"),
              (t.target = "_blank"),
              console.log(t),
              t.click()
          },
          parseEVOText(t) {
            if (t.length >= 6)
              switch (t[0]) {
                case "0":
                  return (
                    "BT" +
                    parseInt(t.substr(1, 2)) +
                    "-" +
                    ("" + parseInt(t.substr(3, 3))).padStart(3, "0")
                  )
                case "1":
                  return (
                    "ST" +
                    parseInt(t.substr(1, 2)) +
                    "-" +
                    ("" + parseInt(t.substr(3, 3))).padStart(2, "0")
                  )
                case "2":
                  return "P-" + ("" + parseInt(t.substr(3, 3))).padStart(3, "0")
                case "3":
                  return (
                    "EX" +
                    parseInt(t.substr(1, 2)) +
                    "-" +
                    ("" + parseInt(t.substr(3, 3))).padStart(3, "0")
                  )
                default:
                  return ""
              }
            return ""
          },
          simpleDeckText(t) {
            let e = t.split("\n")
            if (e.length < 3) return t
            let a = []
            return (
              e.forEach((t) => {
                let e = "",
                  n = "",
                  r = 1
                if (
                  (t.includes(" ")
                    ? (([n, r] = t.split(" ")), (r = Number(r)))
                    : (n = t),
                  r > 0 &&
                    ((e = n.includes("-") ? n : this.parseEVOText(n)), e))
                )
                  for (let i = 0; i < r; i++) a.push(e)
              }),
              a.length >= 0 ? JSON.stringify(a) : void 0
            )
          },
          async doOnlineImport(t) {
            t = this.simpleDeckText(t)
            try {
              this.deckLoading = !0
              const e = await x.a.post(
                "https://dtcg-api.moecard.cn/api/community/decks/convert",
                {
                  deck: t,
                  envir: "chs",
                }
              )
              if (e && e.data && e.data.data && e.data.data.deck_info)
                return e.data.data.deck_info
            } catch (e) {
              let t =
                e.response.data && e.response.data.message
                  ? e.response.data.message
                  : "导入失败"
              return c.a.error(t), void (this.decks = null)
            }
          },
          async doImport(t) {
            if (!t.startsWith("DDSQC")) return this.doOnlineImport(t)
            let e,
              a = "RENHRFYx" + t.substr(5)
            try {
              e = v.toByteArray(a)
            } catch (i) {
              return c.a.info("解析卡组失败")
            }
            let n = new Blob([e], {
                type: "application/x-dcg-deck",
              }),
              r = new FormData()
            r.append("deck", n)
            try {
              this.deckLoading = !0
              const t = await x.a.post(
                "https://dtcg-api.moecard.cn/api/community/decks/load",
                r
              )
              if (t && t.data && t.data.data && t.data.data.deck_info)
                return t.data.data.deck_info
            } catch (i) {
              let t =
                i.response.data && i.response.data.message
                  ? i.response.data.message
                  : "加载失败"
              return c.a.error(t), void (this.decks = null)
            }
          },
        },
      },
      k = w,
      E = (a("5f16"), a("2877")),
      P = Object(E["a"])(k, r, i, !1, null, null, null),
      A = P.exports
    ;(n["default"].config.productionTip = !1),
      new n["default"]({
        render: (t) => t(A),
      }).$mount("#app")
  },
  "5f16": function (t, e, a) {
    "use strict"
    a("10ae")
  },
})
