export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bloomnote Privacy Policy</h1>
      <p className="mb-4">Effective Date: [Insert Date]</p>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how Bloomnote ("we," "our," or "us") collects, uses, and protects your information when you use our mobile application ("the App"). By using the App, you agree to the terms of this Privacy Policy.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
      
      <h3 className="text-xl font-semibold mt-4 mb-2">1.1 Personal Data</h3>
      <p className="mb-4">We do not require you to provide personal information to use the App. However, the App may access certain information necessary for its features, such as:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Health Data: If you grant permission, we access your health information via Apple HealthKit to display health-related data in the App. This data is stored locally on your device and is not shared or uploaded.</li>
        <li>Location Data: If you grant permission, we use your location to display weather and location-related information. This data is not stored or shared.</li>
        <li>Media and Files: The App may access your photos, documents, and other files for features like document scanning and media attachments.</li>
        <li>Microphone: If you enable voice recording, the App will use your microphone. Audio recordings and their transcriptions are stored locally unless you choose to back them up.</li>
        <li>Contacts and Calendar: With your permission, the App can integrate contacts or calendar events for personalized features.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">1.2 Usage Data</h3>
      <p className="mb-4">We collect anonymized usage statistics to improve the App. This data includes:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Feature usage patterns</li>
        <li>Performance metrics</li>
        <li>Crash reports (via third-party tools like Apple Analytics)</li>
      </ul>
      <p className="mb-4">This data does not identify you personally.</p>

      {/* Add the rest of the privacy policy content here */}
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
      <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
      <p className="mb-4">Email: [Insert Email Address]<br />Address: [Insert Physical Address]</p>
      <p className="mb-4">Thank you for trusting Bloomnote. We are committed to safeguarding your privacy while providing you with an exceptional experience.</p>
    </div>
  )
}

