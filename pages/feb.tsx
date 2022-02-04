import Head from 'next/head'

const index = () => {
  const Device = () => {
    return (
      <>
        <div className="bg-red-200">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          quidem laborum eaque officia ipsam similique expedita excepturi sequi,
          illo sit voluptatem fugit atque, aperiam culpa odit numquam quo rem
          quas! Possimus labore pariatur ipsam iste similique saepe illum
          quaerat dolor explicabo molestias, iure ad iusto accusamus placeat
          recusandae quibusdam inventore! Perferendis provident repellendus
          culpa aspernatur error sint accusamus impedit incidunt. Unde veritatis
          aspernatur reiciendis numquam minus quidem reprehenderit nemo quis
          fuga, voluptatibus mollitia perferendis accusantium aut, in impedit
          enim quae! Sequi vero quibusdam, doloribus cum harum voluptatum
          aliquam ipsam dolor. Id provident cum est sint eos numquam,
          repudiandae fuga maiores sit facere omnis! Quos, numquam qui! Placeat
          quis molestias neque dolores! Et dolore earum ratione, itaque natus
          eum reiciendis quos! Consequatur atque facere perferendis neque ea
          tempora! Repudiandae error id iure laboriosam officiis harum porro?
          Enim cumque ex distinctio aperiam, est corporis magni ratione impedit
          ab, hic adipisci explicabo minus. Sed eaque quo numquam doloremque,
          esse est illo quia ratione vel fuga quasi reiciendis tempora magnam
          enim cupiditate laborum voluptatem adipisci ut animi ab tempore
          consectetur officia nesciunt! Distinctio, ullam? Fugit rem quas, animi
          accusantium, tempore totam rerum facilis dolore porro, nostrum fugiat
          eius officiis sapiente laboriosam. Aspernatur fugit aliquid incidunt
          at inventore aut, labore quis, ab amet, quo dolorum? Adipisci quaerat
          vitae inventore, ut officiis, rerum quidem ab dolores mollitia
          voluptate repellendus ducimus! Culpa omnis molestias atque quam. Iste
          aut vel eum dolorum molestias earum natus totam in laboriosam!
          Voluptatibus, expedita quis! Perferendis aut reiciendis itaque quae
          magni, omnis modi nihil rem, veritatis commodi placeat nostrum
          voluptatum illum culpa aliquam id fugiat. Distinctio cupiditate ipsa
          maiores, officia voluptatibus vitae. Ipsa voluptates similique,
          debitis officia expedita incidunt aperiam quos, iure porro optio
          libero laudantium autem, beatae possimus odio maxime sit nemo.
          Impedit, reiciendis quidem provident eum mollitia nostrum aut illo. */}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <img
          className="absolute z-20 hidden h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-30 sm:block"
          src="/Apple iPhone 13 Pro Max — Sierra Blue.png"
          alt=""
        />

        <div className="z-10 hidden aspect-[0.463/1] h-[87.5%] rounded-[32px] bg-red-300 sm:block">
          <div className="h-[35px]" />
          <div id="noScroll" className="h-full overflow-y-scroll ">
            <Device />
          </div>
        </div>

        <div className="p-5 sm:hidden">
          Current not available on smaller devices
        </div>
      </div>

      <style jsx>{`
        #noScroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}

export default index
