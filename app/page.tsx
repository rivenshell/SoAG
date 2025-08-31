import { BlogPosts } from "app/components/posts"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">SoAG</h1>
      <p className="mb-4">
        {`SOAG is a specialized UX studio that partners with founders to bring their ideas from concept to launch (0 to 1). We focus exclusively on product design with deep expertise in iOS UX/UI design, creating intuitive and engaging mobile experiences that users love.`}
        <br />
        <br />
        {`We work on a project basis with milestone-driven delivery, requiring a 50% deposit to secure your project with final payment due upon completion. Beyond project work, we offer Admin Design Support subscriptions for ongoing design needs like invoice design and business collateral.`}
        <br />
        <br />
        {`Our comprehensive services include product design & strategy, iOS specialization following Apple's Human Interface Guidelines, and end-to-end support from initial concept through final delivery. Partner with SOAG to create exceptional user experiences that drive engagement and growth.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
