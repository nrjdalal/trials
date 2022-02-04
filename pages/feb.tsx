import Head from 'next/head'

const index = () => {
  const Device = () => {
    return (
      <>
        <div className="bg-red-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          facere quam illum ea laborum quibusdam ducimus accusantium consequatur
          animi distinctio eveniet ipsam ratione quod provident, ut aliquid
          maxime nostrum omnis. Consequatur excepturi quis quod atque quia, id
          aspernatur eaque cumque eligendi velit modi sint maiores iusto alias
          dolorem, necessitatibus perferendis impedit ad accusantium porro
          labore magnam in. Sequi, rerum necessitatibus. Vitae autem in maxime
          maiores, veniam incidunt facilis, provident error repellat sapiente
          magni nostrum repellendus, fuga quis. Dolor eveniet explicabo nemo
          provident magnam, at dolorum corrupti officiis minima, earum vero? A
          neque dolorum, perferendis excepturi facilis nam possimus fuga quo
          velit consectetur ipsam magnam voluptates! Laborum vero fugit debitis
          doloribus neque architecto, odio sint ut est voluptatibus cupiditate
          incidunt quod? Vel sapiente eaque libero. Quo molestiae ab voluptatem
          voluptas, ea ad vel? Facilis corrupti, consectetur quisquam,
          voluptatibus aliquid quis harum ipsa mollitia saepe atque laboriosam a
          nemo, sed quos quam. Corrupti nemo, aut, repudiandae odit, tenetur
          impedit adipisci odio reiciendis dolor earum in a mollitia omnis
          corporis distinctio exercitationem pariatur qui nam autem dolore velit
          possimus nihil sint maxime. Quisquam. Aliquam sapiente, saepe eveniet
          consectetur cumque magni optio. Repellendus eveniet adipisci mollitia
          nihil sit commodi quasi vero, expedita eligendi natus reprehenderit,
          distinctio qui ut ab consequuntur modi illum rem quos.
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <img
          className="absolute top-1/2 left-1/2 z-10 hidden h-[926px] -translate-x-1/2 -translate-y-1/2 sm:flex"
          src="/Apple iPhone 13 Pro Max — Sierra Blue.png"
          alt=""
        />

        <div className="hidden h-[811px] w-[375px] sm:flex">
          <div>
            <div className="h-[35px]" />
            <div className="h-[776px] overflow-y-scroll">
              <Device />
            </div>
          </div>
        </div>

        <div className="w-full h-full sm:hidden">
          <div>
            <Device />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
