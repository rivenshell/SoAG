import { BlogPosts } from "app/components/posts"

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">SoAG</h1>
      <p className="mb-4">
        {`we craft images that breathe life into luxury interiors. Every project is an exploration of light, texture, and atmosphere, with the goal of capturing not only how a space looks, but the feeling it leaves behind.
`}
        <br />
        <br />
        {`We approach each visualization with the same care an artist gives a canvas, blending precision with creativity. The result is imagery that helps designers and developers share their vision with clarity`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
