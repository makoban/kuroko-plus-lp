import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Search, MessageSquare, FileText, Shield, Users, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-rounded text-primary">KUROKO PLUS</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">機能</a>
            <a href="#scenes" className="text-foreground/80 hover:text-primary transition-colors">利用シーン</a>
            <a href="#future" className="text-foreground/80 hover:text-primary transition-colors">将来展望</a>
          </div>
          <Button className="rounded-full shadow-neumorph hover:shadow-neumorph-inset transition-all duration-300 bg-primary text-primary-foreground border-none">
            アプリを試す
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/50 to-transparent -z-10 rounded-bl-[100px]" />
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full shadow-neumorph border-none text-secondary-foreground bg-secondary">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              会話をもっと楽しく、もっと便利に
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-rounded leading-tight text-foreground">
              まわりの会話を<br />
              <span className="text-primary">そっと聞いて</span>、<br />
              あなただけに情報を。
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              KUROKO PLUSは、会話の空気を壊さずそっと寄り添う会話支援AIです。<br />
              専門用語の解説から会話の要約まで、あなたのコミュニケーションをステルスにサポートします。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 shadow-neumorph hover:shadow-neumorph-inset transition-all duration-300 bg-primary text-primary-foreground border-none">
                無料で始める <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 neumorph hover:shadow-neumorph-inset border-none bg-background text-foreground">
                デモを見る
              </Button>
            </div>
          </div>
          <div className="relative animate-in slide-in-from-right duration-700 delay-200">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-neumorph p-2 bg-background/50">
              <img 
                src="/images/hero_bg.png" 
                alt="KUROKO PLUS Hero" 
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -bottom-8 -left-8 z-20 glass p-4 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className="font-bold text-sm">聞き取り中...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-rounded mb-4 text-foreground">7つの主要機能</h2>
            <p className="text-muted-foreground text-lg">
              すべての会話をより豊かにする機能たち。あなたの「知りたい」を先回りしてサポートします。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="neumorph border-none hover:shadow-neumorph-inset transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <CardTitle className="font-rounded text-xl">都度要約機能</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">会話の流れをつかみやすく自動で要約。長い会議でもポイントを逃しません。</p>
                <img src="/images/feature_summary.png" alt="Summary Feature" className="mt-6 rounded-xl w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="neumorph border-none hover:shadow-neumorph-inset transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <CardTitle className="font-rounded text-xl">瞬間用語解説機能</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">難しい用語を一言で分かりやすく説明。「あの言葉なんだっけ？」を解消します。</p>
                <img src="/images/feature_terms.png" alt="Terms Feature" className="mt-6 rounded-xl w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="neumorph border-none hover:shadow-neumorph-inset transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
                <CardTitle className="font-rounded text-xl">ネット検索連携機能</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">会話内容に関連する情報を自動検索して表示。話題の幅が自然と広がります。</p>
                <img src="/images/feature_search.png" alt="Search Feature" className="mt-6 rounded-xl w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="neumorph border-none hover:shadow-neumorph-inset transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <CardTitle className="font-rounded text-xl">ベスト質問＆回答提示</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">適切な質問や回答例をリアルタイムで提案。会話に詰まった時の強い味方です。</p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="neumorph border-none hover:shadow-neumorph-inset transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                  <Mic className="w-6 h-6" />
                </div>
                <CardTitle className="font-rounded text-xl">声色分析＆人物識別</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">話者を自動識別し、性格傾向まで分析。相手に合わせたコミュニケーションを。</p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="neumorph border-none hover:shadow-neumorph-inset transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="font-rounded text-xl">矛盾検知＆公平記録</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">発言の矛盾や信頼度を可視化。「言った言わない」問題をスマートに解決します。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scenes Section */}
      <section id="scenes" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-rounded text-foreground">
                あらゆる場面で、<br />
                楽しく会話をサポート
              </h2>
              <div className="space-y-6">
                {[
                  { title: "家族の会話をもっと楽しく", desc: "家族団らんが情報豊かで盛り上がる時間に" },
                  { title: "友達とのカフェタイム", desc: "話題が広がって、新しい発見がいっぱい！" },
                  { title: "学校での勉強サポート", desc: "グループワークが楽しくなる、学びの助っ人" },
                  { title: "オンライン会議もラクラク", desc: "リモートでも大事なポイントをキャッチ！" },
                  { title: "お客様対応もスマートに", desc: "接客も安心、AIがそっとサポート" }
                ].map((scene, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{scene.title}</h3>
                      <p className="text-muted-foreground">{scene.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="neumorph p-4 h-48 rounded-2xl flex items-center justify-center text-center text-muted-foreground">
                    カフェでの<br/>会話サポート
                  </div>
                  <div className="neumorph p-4 h-64 rounded-2xl flex items-center justify-center text-center text-muted-foreground bg-primary/5">
                    会議での<br/>情報アシスト
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="neumorph p-4 h-64 rounded-2xl flex items-center justify-center text-center text-muted-foreground bg-secondary/10">
                    日常会話を<br/>もっと楽しく
                  </div>
                  <div className="neumorph p-4 h-48 rounded-2xl flex items-center justify-center text-center text-muted-foreground">
                    学習支援
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section id="future" className="py-20 px-6 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/future_ar.png')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-rounded mb-12">あなたの会話を彩る、未来のAI</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-blue-300">装着型AIアシスタントへ</h3>
              <p className="text-gray-300">スマートイヤホンやARグラスとの連携で、よりシームレスで直感的な体験へ進化します。</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-purple-300">国際会話・聴覚支援</h3>
              <p className="text-gray-300">翻訳・音声合成と連動し、言葉の壁や聴覚のハンディキャップを超えたコミュニケーションを実現。</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-green-300">安心のプライバシー</h3>
              <p className="text-gray-300">匿名モードやプライバシー保護機能の強化で、公共空間でも安心して使用できる環境を整備。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-rounded text-primary mb-2">KUROKO PLUS</h3>
            <p className="text-muted-foreground text-sm">会話に寄り添う、あなただけのAI相棒</p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-primary transition-colors">利用規約</a>
            <a href="#" className="hover:text-primary transition-colors">お問い合わせ</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 KUROKO PLUS Project</p>
        </div>
      </footer>
    </div>
  );
}
