import { Button } from "@/components/ui/button";
import { PhoneMockup, ChatMessage } from "@/components/PhoneMockup";
import { motion } from "framer-motion";
import { Mic, Search, FileText, Settings, Zap, Brain, Lock, ArrowRight, Play, CheckCircle2 } from "lucide-react";
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-medium mb-8 animate-fade-in-up">
                <Zap className="w-4 h-4" />
                <span>AI Conversation Assistant</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
                もう、<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">検索しなくて</span><br/>
                いい。
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                会話中の「これ何だっけ？」をAIが全自動で解決。<br/>
                あなたはただ、目の前の会話を楽しむだけ。<br/>
                黒子がそっと、知識をサポートします。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-blue-200">
                  <Mic className="w-5 h-5 mr-2" />
                  無料で始める
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-2">
                  <Play className="w-5 h-5 mr-2" />
                  デモを見る
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>登録不要</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>完全無料</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>1,000+ ユーザー</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-blue-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
              
              {/* Interactive Phone Mockup */}
              <div className="relative z-10 transform lg:rotate-[-5deg] transition-transform hover:rotate-0 duration-500">
                <PhoneMockup>
                  <div className="h-full bg-slate-50 flex flex-col">
                    {/* App Header */}
                    <div className="bg-white p-4 pt-12 shadow-sm z-10 flex items-center justify-between">
                      <div className="font-bold text-gray-800">KUROKO PLUS</div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="text-xs text-gray-500">Listening...</div>
                      </div>
                    </div>
                    
                    {/* Chat Area */}
                    <div className="flex-1 p-4 overflow-hidden flex flex-col">
                      <ChatMessage 
                        isUser 
                        text="来週のコンセンサスについて相談したいです。" 
                        delay={0.5} 
                      />
                      <ChatMessage 
                        text={
                          <span>
                            <span className="font-bold text-pink-500">コンセンサス</span>ですね。<br/>
                            「合意」や「意見の一致」という意味です。<br/>
                            会議のゴール設定によく使われます。
                          </span>
                        }
                        type="card"
                        delay={1.5}
                      />
                      <ChatMessage 
                        isUser 
                        text="なるほど、アジェンダに入れておきます。" 
                        delay={3.0} 
                      />
                      <ChatMessage 
                        text={
                          <span>
                            <span className="font-bold text-pink-500">アジェンダ</span>：<br/>
                            会議の「議題」や「予定表」のことです。
                          </span>
                        }
                        type="card"
                        delay={4.0}
                      />
                    </div>

                    {/* Floating Action Button */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-14 h-14 bg-pink-500 rounded-full shadow-lg flex items-center justify-center text-white animate-pulse">
                        <Mic className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </PhoneMockup>

                {/* Character Image */}
                <img 
                  src="/images/char_hero.png" 
                  alt="Kuroko Character" 
                  className="absolute -bottom-10 -right-10 w-48 drop-shadow-xl animate-bounce-slow hidden lg:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <div className="relative w-full h-[600px] flex items-center justify-center">
                {/* Character behind mockup */}
                <div className="absolute right-0 bottom-0 w-3/4 h-3/4 opacity-80 z-0">
                   <img 
                    src="/images/char_hero.png" 
                    alt="Kuroko Character" 
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
                
                {/* Main Mockup */}
                <div className="relative z-10 w-full max-w-xs aspect-[9/19]">
                  <img 
                    src="/images/mockup_full_pink.png" 
                    alt="App Mockup" 
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">最新AI技術が、あなたの黒子に。</h2>
            <p className="text-gray-600">
              OpenAIのWhisperによる高精度な音声認識と、Geminiの文脈理解能力を統合。<br/>
              世界最高峰の技術が、あなたの会話をリアルタイムでサポートします。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="w-8 h-8 text-blue-500" />,
                title: "高精度な聞き取り",
                desc: "Whisper APIを使用し、騒がしい環境でも正確に音声を文字起こしします。"
              },
              {
                icon: <Brain className="w-8 h-8 text-pink-500" />,
                title: "文脈を理解",
                desc: "Gemini Proが会話の流れを読み取り、今必要な情報だけを抽出して提示します。"
              },
              {
                icon: <Lock className="w-8 h-8 text-green-500" />,
                title: "プライバシー保護",
                desc: "音声データはサーバーに保存されず、処理完了後に即座に破棄されるので安心です。"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container px-4 mx-auto space-y-32">
          
          {/* Feature 1: Explanation */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative mx-auto max-w-[300px]">
                <PhoneMockup>
                  <div className="h-full bg-slate-50 flex flex-col p-4">
                    <div className="text-center text-gray-400 text-xs mb-4">Today 10:23 AM</div>
                    <ChatMessage isUser text="最近、メタバースの案件が増えてきて..." />
                    <ChatMessage 
                      text={
                        <span>
                          <span className="font-bold text-pink-500">メタバース</span><br/>
                          インターネット上に構築された3次元の仮想空間のこと。アバターを使って活動します。
                        </span>
                      }
                      type="card"
                      delay={1}
                    />
                    <ChatMessage isUser text="NFTとの連携も視野に入れないとね。" delay={2} />
                    <ChatMessage 
                      text={
                        <span>
                          <span className="font-bold text-pink-500">NFT (非代替性トークン)</span><br/>
                          ブロックチェーン技術を使い、デジタルデータの所有権を証明する技術です。
                        </span>
                      }
                      type="card"
                      delay={3}
                    />
                  </div>
                </PhoneMockup>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold mb-4">
                用語解説
              </div>
              <h2 className="text-4xl font-bold mb-6">そっと教える。<br/>会話を止めない。</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                難しい専門用語も、知らない流行語も。<br/>
                会話の邪魔をしないように、そっとカードで教えてくれます。<br/>
                「これ何だっけ？」と検索する手間はもう不要です。
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">専門用語を自動検出</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">3行でわかりやすく要約</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">知っている単語はスルーする学習機能</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2: Summary */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative mx-auto max-w-[300px]">
                <PhoneMockup>
                  <div className="h-full bg-white flex flex-col">
                    <div className="bg-pink-500 p-6 text-white rounded-b-3xl shadow-lg mb-4">
                      <h3 className="font-bold text-lg mb-1">会議のまとめ</h3>
                      <p className="text-pink-100 text-sm">2024.01.05 14:00 - 15:00</p>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          決定事項
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                          <li>次期プロジェクトのリーダーは田中氏に決定</li>
                          <li>予算は前回比120%で承認</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          ネクストアクション
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                          <li>田中氏：チーム編成案を作成（来週水曜まで）</li>
                          <li>佐藤氏：見積書の修正</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-bold mb-4">
                自動要約
              </div>
              <h2 className="text-4xl font-bold mb-6">勝手にまとめる。<br/>議事録はもう不要。</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                長時間の会議や会話も、AIがリアルタイムで要点を抽出。<br/>
                「決定事項」や「ネクストアクション」を自動で整理するので、<br/>
                あなたは議論に集中できます。
              </p>
              <Button variant="outline" className="rounded-full">
                要約機能について詳しく <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">こんなシーンで活躍します</h2>
            <p className="text-gray-600">ビジネスからプライベートまで、あらゆる会話をサポート</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img src="/images/scene_meeting.png" alt="Meeting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">ビジネス会議</h3>
                <p className="text-sm text-gray-200">専門用語が飛び交う会議でも、即座に意味を理解して議論についていけます。</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                {/* Placeholder for learning scene */}
                <span className="text-gray-400">Learning Scene</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">オンライン授業・セミナー</h3>
                <p className="text-sm text-gray-200">聞き逃した単語や知らない概念も、その場で補足説明が表示されます。</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                {/* Placeholder for video scene */}
                <span className="text-gray-400">Video Scene</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">動画視聴</h3>
                <p className="text-sm text-gray-200">YouTubeや映画を見ながら、登場するキーワードを深掘りできます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/future_ar.png')] bg-cover bg-center opacity-20"></div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500 text-blue-300 text-sm font-bold mb-6">
            Future Vision
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">ARグラスで、<br/>視界に知識を重ねる。</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            スマホを見る必要すらありません。<br/>
            相手の顔を見たまま、視界の隅に情報が浮かび上がる。<br/>
            そんなSFのような体験を、KUROKO PLUSは目指しています。
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-2xl">👓</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-2xl">🌐</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto space-y-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
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

          {/* Feature 1: Explanation */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-yellow-100 rounded-full blur-3xl opacity-50 transform -translate-x-10"></div>
              <img 
                src="/images/feat_explain.png" 
                alt="Explanation Feature" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl transform hover:-rotate-2 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">そっと教える</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                難しい専門用語も、知らない流行語も。<br />
                会話の邪魔をしないように、そっとカードで教えてくれます。<br />
                「これ何だっけ？」と検索する手間はもう不要です。
              </p>
            </div>
          </div>

          {/* Feature 2: Summary */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1 space-y-6 md:pl-12">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">勝手にまとめる</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                長時間の会議や会話も、AIがリアルタイムで要点を抽出。<br />
                「結局何が決まったの？」という状況をゼロにします。<br />
                議事録作成の手間から解放されましょう。
              </p>
            </div>
            <div className="order-2 md:order-2 relative">
              <div className="absolute inset-0 bg-pink-100 rounded-full blur-3xl opacity-50 transform translate-x-10"></div>
              <img 
                src="/images/feat_summary.png" 
                alt="Summary Feature" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl transform hover:rotate-2 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Feature 3: Settings */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 transform -translate-x-10"></div>
              <img 
                src="/images/feat_search.png" 
                alt="Settings Feature" 
                className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl transform hover:-rotate-2 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">あなたに合わせる</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                小学生から専門家まで。<br />
                相手の知識レベルに合わせて、解説の難易度を自動調整。<br />
                誰とでもスムーズなコミュニケーションが可能になります。
              </p>
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
