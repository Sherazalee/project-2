export default function Home() {
  return (
    <figure className="md:flex bg-purple-600 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Sheeraz.jpg" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-5xl font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-white-500 dark:text-white-400">
        Sheeraz Ali
      </div>
      <div className="text-black-700 dark:text-black-500">
        SEO strategist, BrandIf
      </div>
    </figcaption>
  </div>
</figure>
  );
}
