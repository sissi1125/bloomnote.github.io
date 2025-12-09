export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-bloomnote",
    title: "Introducing Bloomnote: Where Every Note Blooms",
    date: "January 15, 2024",
    readTime: "5 min read",
    excerpt: "We're excited to launch Bloomnote, a revolutionary note-taking app designed to help your ideas flourish. With intuitive features and beautiful design, Bloomnote transforms how you capture, organize, and grow your thoughts.",
    content: `
      <p class="mb-4">We're thrilled to announce the launch of Bloomnote, a revolutionary note-taking application that transforms how you capture, organize, and grow your ideas. After months of development and refinement, we're excited to share this powerful tool with the world.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">A New Way to Think</h2>
      <p class="mb-4">Bloomnote isn't just another note-taking app. It's a comprehensive platform designed to help your ideas flourish. Whether you're a student, professional, creative, or anyone who values organized thinking, Bloomnote provides the tools you need to succeed.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Key Features</h2>
      <p class="mb-4">Our Block+ system allows you to create rich, structured notes that go beyond simple text. With support for advanced blocks including health tracking, weather updates, mood logging, and more, your notes become dynamic and interactive.</p>
      
      <p class="mb-4">The nested linking feature helps you create a web of interconnected ideas, making it easy to build knowledge graphs and never lose track of important connections. Combined with seamless iCloud sync, your notes are always accessible across all your devices.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Looking Forward</h2>
      <p class="mb-4">This is just the beginning. We're committed to continuously improving Bloomnote based on your feedback. We have exciting features planned for future updates, and we can't wait to share them with you.</p>
      
      <p class="mb-4">Thank you for being part of the Bloomnote journey. We hope this app helps your ideas bloom into something extraordinary.</p>
    `
  },
  {
    slug: "advanced-blocks-power-up",
    title: "Advanced Blocks: Power Up Your Notes",
    date: "February 8, 2024",
    readTime: "4 min read",
    excerpt: "Discover the power of Advanced Blocks in Bloomnote. From health tracking to weather updates, mood logging to countdown timers, these blocks make your notes more dynamic and useful than ever.",
    content: `
      <p class="mb-4">One of the most powerful features in Bloomnote is our Advanced Blocks system. These specialized blocks transform your notes from static text into dynamic, interactive experiences that provide real value.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Health Block</h2>
      <p class="mb-4">Track your health metrics directly in your notes. Monitor your daily steps, heart rate, sleep patterns, and more. The Health Block integrates seamlessly with Apple Health, giving you a comprehensive view of your wellness journey.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Weather Block</h2>
      <p class="mb-4">Never be caught off guard by the weather again. The Weather Block provides real-time weather information for any location, helping you plan your day and make informed decisions.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Sketch Block</h2>
      <p class="mb-4">Sometimes words aren't enough. The Sketch Block lets you draw directly in your notes, perfect for diagrams, mind maps, or quick visual notes. With support for Apple Pencil, your sketches feel natural and responsive.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Countdown Block</h2>
      <p class="mb-4">Keep track of important deadlines and events with the Countdown Block. Whether it's a project deadline, vacation, or special occasion, you'll always know how much time you have left.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Mood Block</h2>
      <p class="mb-4">Track your emotional state over time with the Mood Block. This feature helps you identify patterns and understand how different factors affect your wellbeing.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Location Block</h2>
      <p class="mb-4">Remember where you were when inspiration struck. The Location Block automatically records your location, helping you create context-rich notes that capture not just what happened, but where it happened.</p>
      
      <p class="mb-4">These Advanced Blocks are just the beginning. We're constantly working on new block types to make your notes even more powerful and useful.</p>
    `
  },
  {
    slug: "art-of-nested-linking",
    title: "The Art of Nested Linking: Connect Your Ideas",
    date: "March 12, 2024",
    readTime: "6 min read",
    excerpt: "Learn how nested linking in Bloomnote helps you create a web of interconnected ideas. Build knowledge graphs, connect related concepts, and never lose track of important connections.",
    content: `
      <p class="mb-4">One of the most revolutionary features in Bloomnote is our nested linking system. This powerful tool allows you to create a web of interconnected ideas, transforming your notes from isolated documents into a living knowledge graph.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">What is Nested Linking?</h2>
      <p class="mb-4">Nested linking allows you to create links within links, building complex relationships between your notes. Unlike traditional note-taking apps where links are flat, Bloomnote's nested linking lets you create multi-level connections that reflect how ideas actually relate to each other.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Building Knowledge Graphs</h2>
      <p class="mb-4">With nested linking, you can build comprehensive knowledge graphs that show how concepts connect. For example, you might link a note about "Machine Learning" to a note about "Neural Networks," which in turn links to notes about "Backpropagation" and "Activation Functions."</p>
      
      <p class="mb-4">This creates a visual and navigable structure that helps you understand the relationships between ideas, making it easier to recall information and discover new connections.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Practical Applications</h2>
      <p class="mb-4">Nested linking is perfect for:</p>
      <ul class="list-disc list-inside mb-4 space-y-2 text-gray-600 font-lexend-deca">
        <li>Research projects where you need to track sources and references</li>
        <li>Learning new subjects by connecting related concepts</li>
        <li>Project management by linking tasks, resources, and outcomes</li>
        <li>Creative writing by connecting characters, plot points, and themes</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 font-source-serif">Best Practices</h2>
      <p class="mb-4">To get the most out of nested linking:</p>
      <ul class="list-disc list-inside mb-4 space-y-2 text-gray-600 font-lexend-deca">
        <li>Start with broad concepts and drill down to specifics</li>
        <li>Use descriptive link names that clearly indicate the relationship</li>
        <li>Regularly review and update your link structure</li>
        <li>Don't over-link - focus on meaningful connections</li>
      </ul>
      
      <p class="mb-4">Nested linking transforms Bloomnote from a simple note-taking app into a powerful knowledge management system. Start building your knowledge graph today and watch your ideas bloom.</p>
    `
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

