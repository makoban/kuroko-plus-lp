import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="KUROKO PLUS Logo" className="h-10 w-10 object-cover rounded-lg" />
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
        <h1 className="text-3xl font-bold mb-8 text-center">プライバシーポリシー</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8 text-center">最終更新日: 2026年1月13日</p>

          <p>株式会社バンテックス（販売）および株式会社ビークリエイティブ（開発）（以下、両社を総称して「当社」といいます。）は、当社が提供する会話支援AIアプリケーション「ステルスAI」（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。</p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">第1条（収集する個人情報）</h2>
          <p>当社は、本サービスの提供にあたり、以下の情報を収集します。</p>

          <h3 className="text-lg font-bold mt-6 mb-3">1. ユーザーからご提供いただく情報</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>氏名、メールアドレス、パスワード等、ユーザー登録のためにご入力いただく情報</li>
            <li>Googleアカウント等の外部サービスとの連携を許可した場合、当該外部サービスから提供される情報</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-3">2. 本サービスのご利用により当社が収集する情報</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-orange-600">音声データ:</strong> 本サービスのコア機能である音声認識のために、ユーザーのデバイスのマイクを通じて入力された音声データ。</li>
            <li><strong>テキストデータ:</strong> 音声認識処理によって生成された文字データ。</li>
            <li><strong>Cookie及び利用状況に関する情報:</strong> 本サービスの利用状況（アクセス日時、操作ログ等）、ご利用のデバイス情報（OS、機種名、広告ID等）を、Cookie等の技術を用いて収集することがあります。</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">第2条（利用目的）</h2>
          <p>当社は、収集した個人情報を以下の目的で利用します。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>本サービスの提供、運営、維持、保護、および改善のため</li>
            <li>音声認識、文字起こし、および専門用語の解説機能を提供するため</li>
            <li>ユーザー認証、本人確認、およびアカウント管理のため</li>
            <li>利用料金の請求および決済処理のため</li>
            <li>ユーザーからのお問い合わせ、ご相談、苦情等に対応するため</li>
            <li>本サービスに関する規約等の変更などを通知するため</li>
            <li>個人を特定できない形式に加工した統計データを作成し、当社の新サービス開発やマーケティング活動に利用するため</li>
          </ol>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">第3条（第三者提供）</h2>
          <p>当社は、以下の場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
          </ol>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-6">
            <h3 className="text-lg font-bold mb-3 text-orange-700">音声認識機能の提供のための第三者への音声データ送信</h3>
            <p className="mb-4">当社は、本サービスの音声認識機能を提供するため、ユーザーの音声データを暗号化の上、以下の第三者に送信します。これらの事業者は、受け取った音声データを音声認識処理およびサービス改善のためにのみ利用し、その他の目的で利用することはありません。</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>OpenAI, L.L.C.</strong>（所在地: アメリカ合衆国）<br />
                <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">プライバシーポリシー</a>
              </li>
              <li>
                <strong>AssemblyAI, Inc.</strong>（所在地: アメリカ合衆国）<br />
                <a href="https://www.assemblyai.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">プライバシーポリシー</a>
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">第4条（安全管理措置）</h2>
          <p>当社は、個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。当社が講じる安全管理措置には、組織的・人的・物理的・技術的安全管理措置が含まれます。</p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">第5条（個人情報の開示、訂正等）</h2>
          <p>当社は、ユーザーから、個人情報保護法の定めに基づき個人情報の開示、訂正、追加、削除、利用停止、消去（以下「開示等」といいます。）を求められたときは、ユーザーご本人からのご請求であることを確認の上で、遅滞なく開示等を行います。ただし、個人情報保護法その他の法令により、当社が開示等の義務を負わない場合は、この限りではありません。</p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">第6条（本ポリシーの変更）</h2>
          <p>当社は、必要に応じて、本ポリシーを変更します。ただし、法令上ユーザーの同意が必要となるような本ポリシーの変更を行う場合、変更後の本ポリシーは、当社所定の方法で変更に同意したユーザーに対してのみ適用されるものとします。なお、当社は、本ポリシーを変更する場合には、変更後の本ポリシーの施行時期および内容を当社のウェブサイト上での表示その他の適切な方法により周知し、またはユーザーに通知します。</p>

          <h2 className="text-xl font-bold mt-8 mb-4 border-b pb-2">第7条（お問い合わせ窓口）</h2>
          <p>ご意見、ご質問、苦情のお申し出その他個人情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。</p>
          <div className="bg-slate-100 rounded-lg p-6 mt-4">
            <p><strong>販売:</strong> 株式会社バンテックス</p>
            <p><strong>開発:</strong> 株式会社ビークリエイティブ</p>
            <p><strong>住所:</strong> 愛知県名古屋市天白区原3丁目304番1号</p>
            <p><strong>Eメール:</strong> info@bantex.jp</p>
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
