import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Mic, Volume2, Settings, Shield, Smartphone, ExternalLink, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="KUROKO PLUS Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-slate-900">KUROKO PLUS</span>
          </div>
          <Button variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full" asChild>
            <a href="https://kuroko-plus.becreative.co.jp/" target="_blank" rel="noopener noreferrer">
              無料で試す
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_table_smartphone.png" 
            alt="Meeting room table with smartphone" 
            className="h-full w-full object-cover opacity-40 hidden md:block"
          />
          <img 
            src="/images/hero_table_smartphone_mobile.png" 
            alt="Meeting room table with smartphone" 
            className="h-full w-full object-cover opacity-40 md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 text-center md:text-left">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white border-none px-3 py-1 text-sm">
              New Release
            </Badge>
            <h1 className="mb-6 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl whitespace-pre-line">
              スマホが会話をキャッチ。<br />
              調べてそっと教えてくれる。
            </h1>
            <p className="mb-8 text-lg font-medium text-slate-200 md:text-xl lg:text-2xl">
              操作不要なのに会話に困らない！<br />
              あなたの専属「黒子」が、<br className="md:hidden" />リアルタイムでサポートします。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-orange-500/20 w-full sm:w-auto" asChild>
                <a href="https://kuroko-plus.becreative.co.jp/" target="_blank" rel="noopener noreferrer">
                  無料で試してみる
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm w-full sm:w-auto" asChild>
                <a href="#features">
                  機能を見る
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-slate-800">
            こんな<span className="text-orange-500">「困った」</span>ありませんか？
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { title: "専門用語がわからない", desc: "会議中、知らない単語が出てきて話の内容が入ってこない...", icon: "🤔" },
              { title: "知ったかぶりしてしまう", desc: "今さら聞けない雰囲気で、つい知っているフリをしてしまう...", icon: "😓" },
              { title: "議事録に必死", desc: "メモを取るのに精一杯で、発言するタイミングを逃してしまう...", icon: "📝" },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg bg-slate-50 hover:bg-orange-50 transition-colors duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-orange-500 text-orange-600 px-4 py-1">Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              <span className="text-orange-500">KUROKO PLUS</span> が解決します
            </h2>
            <p className="mt-4 text-slate-600">机の上にスマホを置くだけ。あとはAIにお任せください。</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              { 
                icon: <Mic className="h-8 w-8 text-orange-500" />, 
                title: "リアルタイム文字起こし", 
                desc: "会話を自動でテキスト化。聞き逃しを防ぎ、後から振り返ることも可能です。" 
              },
              { 
                icon: <Volume2 className="h-8 w-8 text-orange-500" />, 
                title: "ボーカル・フリーケンシー・フィルター", 
                desc: "人の声の周波数だけをクリアに抽出。雑音の中でも大切な発言を逃しません。" 
              },
              { 
                icon: <Settings className="h-8 w-8 text-orange-500" />, 
                title: "オート・マイク・キャリブレーション", 
                desc: "お使いの機種に合わせてマイク感度を自動最適化。面倒な設定は不要です。" 
              },
              { 
                icon: <Shield className="h-8 w-8 text-orange-500" />, 
                title: "知識レベル別解説", 
                desc: "あなたのレベルに合わせて専門用語を解説。小学生から専門家レベルまで対応。" 
              },
            ].map((feature, i) => (
              <Card key={i} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                実際の画面イメージ
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                会話の流れを邪魔することなく、必要な情報だけをピンポイントで提供します。<br />
                まるで、あなただけの優秀な「黒子」が隣にいるかのように。
              </p>
              <ul className="space-y-4 text-left inline-block">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0"><Check className="h-4 w-4" /></div>
                  <span className="text-slate-700">会話をリアルタイムで表示</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0"><Check className="h-4 w-4" /></div>
                  <span className="text-slate-700">知らない単語を自動でピックアップ</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0"><Check className="h-4 w-4" /></div>
                  <span className="text-slate-700">タップ一つで詳細解説</span>
                </li>
              </ul>
            </div>
            
            {/* Phone Mockup */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-8 bg-slate-900 flex justify-between items-center px-6 z-20">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
                    <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="w-full h-full bg-slate-50 pt-8 pb-4 flex flex-col font-sans text-sm">
                  {/* App Header */}
                  <div className="px-4 py-2 bg-slate-800 text-white flex items-center justify-between shadow-md z-10">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-yellow-400">KUROKO+</span>
                      <span className="text-xs opacity-70">🎨 abc |||||</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-slate-600 text-white text-[10px] h-5 px-1">📚高校生</Badge>
                      <Badge className="bg-yellow-400 text-slate-900 text-[10px] h-5 px-1">9474 pt 有料 M</Badge>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex justify-center gap-2 py-2 bg-slate-100 border-b border-slate-200">
                    <button className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">📝 プチ記憶</button>
                    <button className="bg-slate-300 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">📚 フル記憶</button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50">
                    
                    {/* Conversation Block */}
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                      <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <MessageCircle className="h-3 w-3" /> 会話
                      </div>
                      <div className="space-y-3 pl-2 border-l-2 border-slate-200">
                        <p className="text-slate-800 text-xs leading-relaxed">
                          当時はですね、企業アカウントがSNSをやるっていう時代ではまだなかった
                        </p>
                        <p className="text-slate-800 text-xs leading-relaxed">
                          一番最初はインスタグラムから始めております。私たちがインスタグラムを始めたのが2018年12月。
                        </p>
                        <p className="text-slate-800 text-xs leading-relaxed">
                          作り直しているという感じですね。最初からこの体制でインスタ、ツイッターってこと？
                        </p>
                      </div>
                    </div>

                    {/* Topic Block */}
                    <div className="bg-blue-50 rounded-xl p-3 shadow-sm border border-blue-100">
                      <div className="flex items-center gap-2 mb-1 text-blue-600 text-xs font-bold">
                        💼 SNSコンテンツ戦略の初期
                      </div>
                      <div className="bg-white rounded-lg p-2 text-xs font-bold text-slate-700 shadow-sm">
                        SNSコンテンツ戦略
                      </div>
                    </div>

                    {/* Dictionary Block */}
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                      <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        🔍 調べた単語
                      </div>
                      
                      {/* Word 1 */}
                      <div className="mb-4 pb-3 border-b border-slate-100 last:border-0 last:pb-0 last:mb-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-bold text-sm text-slate-900">SNS <span className="text-xs font-normal text-slate-500 ml-1">サービス名</span></h4>
                          <span className="text-[10px] text-slate-400">90%</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-2">
                          インターネット上で人々が交流し、情報共有を行うためのプラットフォームの総称。インスタグラム、Twitterなどが含まれる。
                        </p>
                        <div className="bg-pink-50 text-pink-600 text-[10px] px-2 py-1 rounded inline-block mb-2">🔗 参考リンク</div>
                        <div className="bg-yellow-50 p-2 rounded text-[10px] text-slate-600">
                          <span className="block font-bold text-yellow-600 mb-0.5">💡 他の可能性:</span>
                          特定のSNSプラットフォームの総称 (70%)<br/>
                          文脈から、インスタグラムやTwitterなどの複数のSNSプラットフォームをまとめて指している可能性。
                        </div>
                      </div>

                      {/* Word 2 */}
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-bold text-sm text-slate-900">クエンティバル <span className="text-xs font-normal text-slate-500 ml-1">専門用語</span></h4>
                          <div className="flex gap-1">
                            <span className="bg-orange-100 text-orange-600 text-[10px] px-1 rounded">候補</span>
                            <span className="bg-red-100 text-red-600 text-[10px] px-1 rounded">要確認</span>
                            <span className="text-[10px] text-slate-400">60%</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-2">
                          コンテンツが持つ価値、魅力、訴求力のこと。ユーザーにとって有益で、興味深く、共有したくなるような要素を指す。SNS運用において重要。
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Bar */}
                  <div className="px-4 py-3 bg-white border-t border-slate-200 flex justify-between items-center gap-2">
                    <button className="flex-1 bg-slate-800 text-white py-2 rounded-full text-xs font-bold shadow-lg flex items-center justify-center gap-1">
                      <Mic className="h-3 w-3" /> 開始
                    </button>
                    <button className="flex-1 bg-white border border-slate-200 text-slate-600 py-2 rounded-full text-xs font-bold shadow-sm">
                      🗑️ リセット
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-full text-xs font-bold shadow-lg flex items-center justify-center gap-1">
                      📊 Excel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">料金プラン</h2>
            <p className="text-slate-600">必要な分だけ、ポイントチャージ。無駄なく使えます。</p>
            <div className="mt-6 inline-block bg-white border border-orange-200 rounded-xl p-4 shadow-sm">
              <p className="text-orange-600 font-bold text-lg">
                💡 500pt（500円）で、約2時間の会議をフルサポート
              </p>
              <p className="text-xs text-slate-400 mt-1">※1分あたり約4pt消費（音声認識＋AI解説の平均的な利用頻度で算出）</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              { name: "お試し", price: "100", pt: "100", bonus: null, color: "bg-slate-100", btn: "secondary" },
              { name: "スタンダード", price: "500", pt: "550", bonus: "+10%", color: "bg-white border-orange-200 shadow-md relative overflow-hidden", btn: "default", popular: true },
              { name: "バリュー", price: "1,000", pt: "1,200", bonus: "+20%", color: "bg-slate-100", btn: "secondary" },
              { name: "プロ", price: "3,000", pt: "4,000", bonus: "+33%", color: "bg-slate-100", btn: "secondary" },
            ].map((plan, i) => (
              <Card key={i} className={`border ${plan.popular ? 'border-orange-400 ring-2 ring-orange-100' : 'border-slate-200'} ${plan.color} flex flex-col`}>
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-xs font-bold text-center py-1 absolute top-0 w-full left-0">
                    一番人気
                  </div>
                )}
                <CardHeader className={`${plan.popular ? 'pt-8' : ''} text-center pb-2`}>
                  <h3 className="font-bold text-slate-600">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className="text-3xl font-extrabold text-slate-900">¥{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{plan.pt} pt</div>
                    {plan.bonus && (
                      <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                        {plan.bonus} お得！
                      </Badge>
                    )}
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2 mb-6 text-left px-4">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Stripe決済対応</li>
                    {i > 0 && <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Excel出力機能付き</li>}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : ''}`} variant={plan.btn as "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"}>
                    選択する
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-sm text-slate-500 mb-4">
               有料会員特典：会話ログと単語帳の<span className="font-bold text-slate-700">Excel出力機能</span>が利用可能になります。
             </p>
             <div className="flex justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
               {/* Payment Logos Placeholder */}
               <div className="h-8 w-12 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">VISA</div>
               <div className="h-8 w-12 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">Master</div>
               <div className="h-8 w-12 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">JCB</div>
               <div className="h-8 w-12 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">Amex</div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="KUROKO PLUS Logo" className="h-8 w-8 object-contain brightness-0 invert" />
                <span className="text-xl font-bold text-white">KUROKO PLUS</span>
              </div>
              <p className="text-sm leading-relaxed max-w-md mb-6">
                会話の空気を壊さず、こっそり賢くサポート。<br />
                あなたのビジネスとコミュニケーションを加速させるAIアシスタント。
              </p>
              <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white font-bold border-none" asChild>
                <a href="https://lin.ee/hcW3NZy" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> LINEでお問い合わせ
                </a>
              </Button>
            </div>
            <div className="md:text-right space-y-2 text-sm">
              <p><span className="font-bold text-white">販売:</span> 株式会社バンテックス</p>
              <p><span className="font-bold text-white">企画開発:</span> 株式会社ビークリエイティブ</p>
              <p><span className="font-bold text-white">住所:</span> 愛知県名古屋市天白区原3丁目304番1号</p>
              <p><span className="font-bold text-white">Email:</span> kuroko@becreative.co.jp</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            <p>&copy; 2026 KUROKO PLUS All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
