import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Tokushoho() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="KUROKO PLUS Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-slate-900">KUROKO PLUS</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> トップに戻る
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">特定商取引法に基づく表示</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8 text-center">最終更新日: 2026年1月13日</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold w-1/3">販売業者</th>
                  <td className="p-4">株式会社バンテックス</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">運営責任者</th>
                  <td className="p-4">代表取締役 磯貝 誠</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">所在地</th>
                  <td className="p-4">愛知県名古屋市天白区原3丁目304番1号</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">電話番号</th>
                  <td className="p-4">お問い合わせはメールまたはLINEにて承ります</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">メールアドレス</th>
                  <td className="p-4">kuroko@becreative.co.jp</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">URL</th>
                  <td className="p-4">
                    <a href="https://kuroko.becreative.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      https://kuroko.becreative.co.jp/
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">販売価格</th>
                  <td className="p-4">
                    各商品・サービスのページに記載された価格（税込）<br />
                    <span className="text-sm text-slate-500">※ポイント制: 1pt = 1円</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">商品代金以外の必要料金</th>
                  <td className="p-4">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>インターネット接続料金</li>
                      <li>通信料金</li>
                    </ul>
                    <span className="text-sm text-slate-500">※上記はお客様のご負担となります</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">支払方法</th>
                  <td className="p-4">
                    クレジットカード決済（Stripe）<br />
                    <span className="text-sm text-slate-500">対応ブランド: VISA, Mastercard, JCB, American Express</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">支払時期</th>
                  <td className="p-4">クレジットカード決済: ご注文時に即時決済</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">商品の引渡し時期</th>
                  <td className="p-4">決済完了後、即時利用可能</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">返品・キャンセル</th>
                  <td className="p-4">
                    <p className="font-bold text-orange-600">デジタルコンテンツの性質上、購入後の返品・キャンセル・返金はお受けできません。</p>
                    <p className="text-sm text-slate-500 mt-2">ご購入前に、サービス内容をよくご確認ください。</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="bg-slate-100 p-4 text-left font-bold">動作環境</th>
                  <td className="p-4">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>対応ブラウザ: Google Chrome, Safari, Microsoft Edge（最新版）</li>
                      <li>対応OS: Windows 10以降, macOS 10.15以降, iOS 14以降, Android 10以降</li>
                      <li>マイク: 内蔵または外付けマイクが必要</li>
                      <li>インターネット接続: 安定したブロードバンド接続を推奨</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">企画・開発</h2>
          <div className="bg-slate-100 rounded-lg p-6">
            <p><strong>事業者名:</strong> 株式会社ビークリエイティブ</p>
            <p><strong>住所:</strong> 愛知県名古屋市天白区原3丁目304番1号</p>
            <p><strong>Eメール:</strong> kuroko@becreative.co.jp</p>
          </div>

          <p className="mt-8 text-center text-slate-500">以上</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center text-xs text-slate-500">
          <p>&copy; 2026 KUROKO PLUS All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
