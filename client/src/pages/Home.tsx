import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Search, MessageSquare, FileText, Sparkles, Users, ArrowRight, Download, Zap, Brain, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-pink-500/20">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-100 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-chart-3/10 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 rounded-none">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">KUROKO PLUS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-pink-600 transition-colors">機能</a>
            <a href="#scenes" className="hover:text-pink-600 transition-colors">利用シーン</a>
            <a href="#future" className="hover:text-pink-600 transition-colors">将来展望</a>
          </div>
          <Button className="rounded-full shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all">
            アプリを試す
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-700 fade-in">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full bg-pink-100 text-pink-600 border-pink-200 font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-2 inline" />
              AI Conversation Assistant
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              もう、<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-400">
                検索しなくていい。
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              AIが勝手に調べて、そっと教えてくれる。<br />
              あなたはただ、会話を楽しむだけ。
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full h-12 px-8 text-base shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-all">
                <Download className="mr-2 w-5 h-5" />
                無料で始める
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-white/50 hover:bg-white/80 backdrop-blur-sm border-border/50">
                デモを見る
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                    U{i}
                  </div>
                ))}
              </div>
              <p>1,000+ ユーザーが利用中</p>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            <div className="relative z-10">
              {/* Main Character Visual */}
              <div className="relative w-full aspect-[9/16] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src="/images/mockup_mobile_final.png" 
                  alt="App Mockup" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating UI Cards */}
                <div className="absolute top-20 -right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce duration-[3000ms] hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">リアルタイム</p>
                      <p className="font-bold text-sm">高速文字起こし中...</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-32 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce duration-[4000ms] hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">AI解説</p>
                      <p className="font-bold text-sm">専門用語を検出！</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section id="features" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
                全自動
              </span>
              だから、見るだけ。
            </h2>
            <p className="text-muted-foreground text-lg">
              難しい操作は一切不要。AIがあなたの代わりに調査して、<br className="hidden md:block" />
              必要な情報をそっと差し出します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Feature 1: Summary (Large) */}
            <div className="md:col-span-2 bento-card p-8 flex flex-col md:flex-row items-center gap-8 group bg-gradient-to-br from-white to-pink-50/50">
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">勝手に調べる</h3>
                <p className="text-muted-foreground leading-relaxed">
                  会話中の「これ何だっけ？」をAIが自動検知。<br />
                  あなたがスマホを操作する必要はありません。<br />
                  AIが勝手に検索して、答えを用意してくれます。
                </p>
              </div>
              <div className="flex-1 w-full h-48 rounded-2xl overflow-hidden shadow-lg border border-border/50 relative group-hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/mockup_full_pink.png" alt="Summary UI" className="w-full h-full object-contain bg-pink-50/50" />
              </div>
            </div>

            {/* Feature 2: Explanation (Tall) */}
            <div className="md:row-span-2 bento-card p-8 flex flex-col gap-6 group bg-gradient-to-br from-white to-yellow-50/50">
              <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">そっと教える</h3>
                <p className="text-muted-foreground">
                  難しい専門用語も、知らない流行語も。<br />
                  会話の邪魔をしないように、<br />
                  そっとカードで教えてくれます。
                </p>
              </div>
              <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 relative mt-auto group-hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/mockup_empty_pink.png" alt="Explanation UI" className="w-full h-full object-contain bg-pink-50/50" />
              </div>
            </div>

            {/* Feature 3: Level Adaptation */}
            <div className="bento-card p-8 flex flex-col gap-4 group hover:bg-white/80 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">知識レベル適応</h3>
              <p className="text-sm text-muted-foreground">
                小学生から専門家まで。相手に合わせて解説の難易度を自動調整。
              </p>
            </div>

            {/* Feature 4: High Accuracy */}
            <div className="bento-card p-8 flex flex-col gap-4 group hover:bg-white/80 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <Mic className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">高精度音声認識</h3>
              <p className="text-sm text-muted-foreground">
                Whisper / AssemblyAI 搭載。小さな声も聞き逃しません。
              </p>
            </div>

            {/* Feature 5: Auto Correction */}
            <div className="md:col-span-2 bento-card p-8 flex items-center gap-6 group bg-white">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold">誤認識自動修正</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  文脈を理解して、誤字脱字を自動で修正。読みやすいテキストに整えます。
                </p>
              </div>
              <div className="hidden md:block w-1/3 h-24 rounded-xl bg-muted/50 border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground font-mono">
                  Auto-correcting...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenes Section */}
      <section id="scenes" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                あらゆるシーンで、<br />
                <span className="text-pink-600">スマート</span>にサポート。
              </h2>
              
              <div className="space-y-6">
                {[
                  { title: "ビジネス会議", desc: "議事録作成を自動化し、議論に集中。", icon: Users },
                  { title: "学習・セミナー", desc: "先生の話をリアルタイムで要約・解説。", icon: Brain },
                  { title: "日常会話", desc: "テレビやニュースの話題も深掘り。", icon: MessageSquare },
                ].map((scene, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                      <scene.icon className="w-6 h-6" />
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img src="/images/scene_meeting.png" alt="Meeting Scene" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <p className="font-bold text-lg">Meeting Room A</p>
                  <p className="text-sm opacity-80">Recording in progress...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 bg-muted/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight mb-2">KUROKO PLUS</h3>
            <p className="text-muted-foreground text-sm">AI Conversation Assistant</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-pink-600 transition-colors">プライバシー</a>
            <a href="#" className="hover:text-pink-600 transition-colors">利用規約</a>
            <a href="#" className="hover:text-pink-600 transition-colors">お問い合わせ</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 KUROKO PLUS Project</p>
        </div>
      </footer>
    </div>
  );
}
