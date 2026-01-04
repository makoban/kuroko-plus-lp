import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Search, MessageSquare, FileText, Shield, Users, Sparkles, ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden manga-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b-2 border-foreground px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-rounded text-foreground tracking-wider">KUROKO PLUS</span>
          </div>
          <div className="hidden md:flex gap-8 font-bold">
            <a href="#features" className="hover:text-chart-2 transition-colors">機能</a>
            <a href="#scenes" className="hover:text-chart-2 transition-colors">利用シーン</a>
            <a href="#future" className="hover:text-chart-2 transition-colors">将来展望</a>
          </div>
          <Button className="rounded-full border-2 border-foreground shadow-pop hover:shadow-pop-hover hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all bg-chart-3 text-foreground font-bold">
            アプリを試す
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700 z-10">
            <div className="inline-block relative">
              <Badge variant="secondary" className="px-4 py-2 text-base rounded-full border-2 border-foreground bg-chart-1 text-foreground font-bold transform -rotate-2">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                会話の裏方、私が支えます！
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-rounded leading-tight text-foreground drop-shadow-sm">
              頼れる相棒、<br />
              <span className="text-chart-2 relative inline-block">
                デジタル黒子
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-chart-2/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <div className="speech-bubble bg-white max-w-md text-lg font-medium">
              「会話についていけない…」「専門用語がわからない…」
              そんな時は、ボクにお任せあれ！こっそり助け舟を出しますよ！
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-xl text-lg px-8 border-2 border-foreground shadow-pop hover:shadow-pop-hover hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all bg-foreground text-background font-bold">
                <Download className="mr-2 w-5 h-5" />
                無料で始める
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl text-lg px-8 border-2 border-foreground shadow-pop hover:shadow-pop-hover hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all bg-white text-foreground font-bold">
                デモを見る
              </Button>
            </div>
          </div>
          <div className="relative animate-in slide-in-from-right duration-700 delay-200 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-chart-2/20 rounded-full blur-3xl transform scale-90 translate-y-10"></div>
              <img 
                src="/images/char_hero.png" 
                alt="Kuroko-kun helping user" 
                className="relative z-10 w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-chart-3 rounded-full border-2 border-foreground flex items-center justify-center animate-bounce duration-[3000ms] z-20 shadow-pop">
                <span className="font-bold text-sm text-center leading-tight">ステルス<br/>知能！</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white border-y-2 border-foreground">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-chart-2 text-foreground border-2 border-foreground px-4 py-1 text-sm font-bold">機能紹介</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-rounded mb-6 text-foreground">
              クロコくんの<span className="text-chart-1">ひみつ道具</span>
            </h2>
            <p className="text-muted-foreground text-lg font-medium">
              あなたの会話を影から支える、便利な機能がいっぱい！
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Summary */}
            <div className="pop-card p-6 bg-chart-1/10 group">
              <div className="h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl border-2 border-foreground bg-white">
                <img src="/images/feat_summary.png" alt="Summary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <FileText className="w-6 h-6 text-chart-4" />
                都度要約の術
              </h3>
              <p className="text-sm font-medium leading-relaxed">
                長〜い話も、ボクがギュッと短くまとめます！会議の議事録もこれなら安心。
              </p>
            </div>

            {/* Feature 2: Explanation */}
            <div className="pop-card p-6 bg-chart-3/10 group">
              <div className="h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl border-2 border-foreground bg-white">
                <img src="/images/feat_explain.png" alt="Explanation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-chart-3" />
                瞬間解説の術
              </h3>
              <p className="text-sm font-medium leading-relaxed">
                「今の言葉なに？」と思ったら、すぐにこっそり教えます。知ったかぶり卒業！
              </p>
            </div>

            {/* Feature 3: Level Adaptation */}
            <div className="pop-card p-6 bg-chart-2/10 group">
              <div className="h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl border-2 border-foreground bg-white">
                <img src="/images/feat_search.png" alt="Level Adaptation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Users className="w-6 h-6 text-chart-2" />
                知識レベル適応の術
              </h3>
              <p className="text-sm font-medium leading-relaxed">
                小学生から専門家まで。あなたのレベルに合わせて、解説の難易度を調整します。
              </p>
            </div>
          </div>

          {/* Other Features List */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="pop-card p-4 flex items-center gap-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-chart-4/20 border-2 border-foreground flex items-center justify-center shrink-0">
                <Mic className="w-6 h-6 text-chart-4" />
              </div>
              <div>
                <h4 className="font-bold text-lg">高精度音声認識</h4>
                <p className="text-xs text-muted-foreground">AssemblyAI / Whisper対応で聞き逃しなし</p>
              </div>
            </div>
            <div className="pop-card p-4 flex items-center gap-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-chart-1/20 border-2 border-foreground flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h4 className="font-bold text-lg">誤認識自動修正</h4>
                <p className="text-xs text-muted-foreground">文脈を読んで、間違いをこっそり直します</p>
              </div>
            </div>
            <div className="pop-card p-4 flex items-center gap-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-chart-5/20 border-2 border-foreground flex items-center justify-center shrink-0">
                <Search className="w-6 h-6 text-chart-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg">ジャンル自動推定</h4>
                <p className="text-xs text-muted-foreground">会話のテーマを察知して、精度アップ！</p>
              </div>
            </div>
            <div className="pop-card p-4 flex items-center gap-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-chart-3/20 border-2 border-foreground flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-chart-3" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Excel出力</h4>
                <p className="text-xs text-muted-foreground">調べた単語をリスト化して持ち帰れます</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenes Section */}
      <section id="scenes" className="py-20 px-6 bg-chart-5/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <Badge className="bg-chart-5 text-foreground border-2 border-foreground px-4 py-1 text-sm font-bold">利用シーン</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-rounded text-foreground">
                こんな時、<br />
                クロコくんが活躍！
              </h2>
              
              <div className="space-y-4">
                {[
                  { title: "会議・商談で", desc: "専門用語が出ても焦らない！議事録も自動作成。", color: "bg-chart-2/20" },
                  { title: "家族との団らんで", desc: "テレビの話題も深掘りして、会話がもっと弾む。", color: "bg-chart-1/20" },
                  { title: "学校・勉強会で", desc: "先生の話を要約して、復習もバッチリ。", color: "bg-chart-3/20" },
                  { title: "飲み会・デートで", desc: "話題に困ったら、こっそりネタを提供。", color: "bg-chart-4/20" }
                ].map((scene, i) => (
                  <div key={i} className={`pop-card p-4 flex items-start gap-4 ${scene.color} border-2 border-foreground`}>
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-foreground flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{scene.title}</h3>
                      <p className="text-sm font-medium">{scene.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="pop-card p-2 bg-white rotate-2 hover:rotate-0 transition-transform duration-300 z-10 relative">
                <img src="/images/scene_meeting.png" alt="Meeting Scene" className="rounded-lg w-full h-auto border-2 border-foreground" />
                <div className="absolute -bottom-6 -left-6 speech-bubble bg-chart-3 text-sm font-bold animate-bounce">
                  ここだよ！
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section id="future" className="py-20 px-6 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-rounded mb-12 text-white">未来のクロコくんはもっとスゴイ！</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-white/30 bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">👓</div>
              <h3 className="text-xl font-bold mb-4 text-chart-2">ARグラス対応</h3>
              <p className="text-gray-300 text-sm">視界に直接情報を表示。まるでゲームのUIみたいに！</p>
            </div>
            <div className="border-2 border-white/30 bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-xl font-bold mb-4 text-chart-1">言葉の壁を超える</h3>
              <p className="text-gray-300 text-sm">リアルタイム翻訳で、世界中の人と友達になれるよ。</p>
            </div>
            <div className="border-2 border-white/30 bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4 text-chart-3">鉄壁の守り</h3>
              <p className="text-gray-300 text-sm">プライバシー保護も万全。安心して任せてね。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t-2 border-foreground">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-rounded text-foreground mb-2">KUROKO PLUS</h3>
            <p className="text-muted-foreground text-sm font-medium">会話に寄り添う、あなただけのAI相棒</p>
          </div>
          <div className="flex gap-6 text-sm font-bold text-foreground">
            <a href="#" className="hover:text-chart-2 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-chart-2 transition-colors">利用規約</a>
            <a href="#" className="hover:text-chart-2 transition-colors">お問い合わせ</a>
          </div>
          <p className="text-xs font-bold text-muted-foreground">© 2026 KUROKO PLUS Project</p>
        </div>
      </footer>
    </div>
  );
}
