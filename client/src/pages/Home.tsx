import { Button } from "@/components/ui/button";
import { PhoneMockup, ChatMessage } from "@/components/PhoneMockup";
import { motion } from "framer-motion";
import { Mic, Search, FileText, Settings, Zap, Brain, Lock, ArrowRight, Play, CheckCircle2, Sparkles, Users, Download, Globe, Volume2, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
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
                            <span className="font-bold text-pink-500">コンセンサス</span><br/>
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

      {/* Features Section */}
      <section id="features" className="py-24 bg-white/50 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
                会話を邪魔しない
              </span>
              <br />
              自然なサポート
            </h2>
            <p className="text-muted-foreground text-lg">
              最新のAI技術が、あなたの会話をリアルタイムで理解し、<br className="hidden md:block" />
              必要な情報だけをタイミングよく提供します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-50 hover:border-pink-200 transition-all group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Volume2 className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">高精度な聞き取り</h3>
              <p className="text-muted-foreground leading-relaxed">
                自動で音量を増幅し、人の声の周波数だけをクリアに取得。
                騒がしい環境でも、大切な会話を聞き逃しません。
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-100/50 border border-blue-50 hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">文脈理解AI</h3>
              <p className="text-muted-foreground leading-relaxed">
                単なる文字起こしではなく、会話の流れを理解。
                「その場の文脈」に合わせた最適な補足情報を提示します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-yellow-100/50 border border-yellow-50 hover:border-yellow-200 transition-all group">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">知識レベル自動調整</h3>
              <p className="text-muted-foreground leading-relaxed">
                あなたの知識レベルに合わせて、解説の詳しさを自動調整。
                知っていることは省略し、知らないことだけを教えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="scenes" className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
                <PhoneMockup>
                  <div className="h-full bg-slate-50 flex flex-col">
                    <div className="bg-white p-4 pt-12 shadow-sm z-10 border-b">
                      <div className="font-bold text-center text-gray-800">利用シーン：ビジネス会議</div>
                    </div>
                    <div className="flex-1 p-4 overflow-hidden flex flex-col gap-4">
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-pink-50 text-pink-600 border-pink-200">用語解説</Badge>
                          <span className="text-xs text-gray-400">Now</span>
                        </div>
                        <p className="text-sm font-bold text-gray-800 mb-1">ROI（投資対効果）</p>
                        <p className="text-xs text-gray-600">
                          投資した費用に対して、どれだけの利益が得られたかを示す指標。<br/>
                          (利益 ÷ 投資額) × 100 で算出されます。
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">人物情報</Badge>
                          <span className="text-xs text-gray-400">1 min ago</span>
                        </div>
                        <p className="text-sm font-bold text-gray-800 mb-1">田中 健一 氏</p>
                        <p className="text-xs text-gray-600">
                          株式会社テックフロンティア 代表取締役。<br/>
                          AI技術の実用化における第一人者として知られる。
                        </p>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                あらゆるシーンで、<br/>
                <span className="text-pink-500">知識の格差</span>をなくす。
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ビジネス会議・商談</h3>
                    <p className="text-muted-foreground">
                      飛び交う専門用語や業界用語をリアルタイムで解説。
                      新入社員でも、ベテランと同じレベルで議論に参加できます。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">講義・セミナー</h3>
                    <p className="text-muted-foreground">
                      先生の話を聞きながら、分からない単語だけをこっそりチェック。
                      授業の流れを止めずに、深い理解を得られます。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Play className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">動画視聴・学習</h3>
                    <p className="text-muted-foreground">
                      YouTubeや学習動画を見ながら起動しておけば、
                      動画内の難解なキーワードを自動でピックアップして解説します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="future" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <Badge variant="outline" className="mb-6 border-pink-500 text-pink-400 px-4 py-1">Future Vision</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            「検索」という行為そのものを、<br/>
            過去のものに。
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            スマホを見る必要すらなくなる未来へ。<br/>
            視界に情報が自然に溶け込む、新しい知体験を目指しています。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                <Radio className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="font-bold mb-2">インカム連携</h3>
              <p className="text-sm text-gray-400">
                耳元でささやくように情報を補足。
                画面を見ずに、会話に集中したまま知識を得られます。
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-bold mb-2">多言語リアルタイム翻訳</h3>
              <p className="text-sm text-gray-400">
                言語の壁も、知識の壁も同時に突破。
                海外のニュースや会議も、母国語で深く理解できます。
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold mb-2">思考の拡張</h3>
              <p className="text-sm text-gray-400">
                あなたの興味や専門分野を学習し、
                「今、知りたいはずの情報」を先回りして提示します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
            さあ、<span className="text-pink-500">全知全能</span>の<br/>
            会話体験へ。
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            もう、言葉に詰まることはありません。<br/>
            KUROKO PLUSが、あなたの会話を影から支えます。
          </p>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white rounded-full px-12 h-16 text-xl shadow-2xl shadow-pink-500/30 transform hover:scale-105 transition-all duration-300">
            無料でダウンロード
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            ※現在はベータ版として無料公開中です
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-gray-800">KUROKO PLUS</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2024 KUROKO PLUS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
