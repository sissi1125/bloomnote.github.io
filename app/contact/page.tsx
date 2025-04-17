import Image from "next/image";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center space-y-6">
        <div className="flex flex-col items-center space-y-3">
          
          <div className="flex h-fit items-center space-x-2">
            <Image
                src="/images/appIcon.png" // 替换为你的头像路径
                alt="bloomnote"
                width={28}
                height={28}
            />
          <h1 className="text-2xl font-bold text-gray-600">Bloomnote不录</h1>
          </div>
          <div>
            {/* <p className="text-sm text-gray-500">独立开发者 @ 自由工作室</p> */}
            <p className="text-sm text-gray-500 mt-1">WeChat: bloomnoteapp</p>
          </div>
        </div>

        <div>
          <Image
            src="/images/wechat-qrcode.jpg" // 替换为你的二维码路径
            alt="WeChat QR Code"
            width={200}
            height={200}
            className="mx-auto rounded-md"
          />
          <p className="text-xs text-gray-400 mt-2">微信扫一扫添加好友</p>
        </div>

        <div className="border-t pt-4 text-sm text-gray-600 space-y-1">
          <p>欢迎添加我们的官方微信，与开发团队交流想法、提出建议，我们期待听到你的声音！</p>
          <p className="text-xs text-gray-400">Add our official WeChat to share your thoughts or suggestions — we’d love to hear from you!</p>
        </div>
      </div>
    </main>
  );
}
