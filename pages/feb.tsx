import Head from 'next/head'

const index = () => {
  const Device = () => {
    return (
      <>
        <div className="bg-red-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, in
          quis consectetur maiores delectus commodi, corporis officiis dolorum
          eligendi necessitatibus quod aliquid quia non velit quo voluptatibus
          explicabo quidem praesentium. Enim fugit obcaecati, cum autem quasi
          laudantium, quam ea rem ducimus consequuntur libero sequi error
          incidunt fuga repudiandae iusto, assumenda dolore quis? Quam
          consequatur eius magnam, voluptatem inventore repellat velit. Magni
          saepe itaque at impedit nisi dolorem molestias temporibus, voluptates
          harum dignissimos, laudantium veniam quidem cum deleniti mollitia
          iusto vel quos! Adipisci nobis totam repellendus perspiciatis
          consequatur quasi officia odit! Ea quis soluta commodi delectus
          mollitia eligendi facere, ullam odio eius amet modi blanditiis
          laudantium rem consequatur provident veniam quia ipsa dolores
          repellat. Dolor quas modi doloremque consequatur repellat animi? Ut
          reprehenderit praesentium minima ipsum perferendis doloribus sit
          itaque quo at debitis, aliquid iste enim architecto soluta temporibus
          eligendi fuga suscipit impedit? Dolorem ea quia, in aut iure ab rem.
          Esse veniam, beatae est quaerat dolore hic nostrum veritatis laborum
          consectetur sunt delectus ut voluptatum obcaecati. Sequi
          necessitatibus beatae numquam repellat, exercitationem cum omnis, est
          tempore deleniti esse vitae voluptates! Commodi eius molestias magnam
          id doloribus culpa consequuntur assumenda non distinctio hic magni
          quis, laudantium rem pariatur deleniti est maiores tempore eveniet at.
          At quos delectus expedita ipsa, laborum totam? Error tempora nemo eum
          eius facere a, repudiandae, suscipit corporis nesciunt excepturi
          eveniet aliquam cumque odio possimus dolorem nulla nam quia! Sed
          perferendis consequuntur ex maxime nemo rem delectus praesentium! Ab
          est consequatur fugit a quas nesciunt tempore dolorum officia
          reiciendis sequi atque molestias mollitia dolores expedita,
          reprehenderit hic, quod ipsum recusandae totam ratione? Totam fugiat
          porro maiores qui doloremque. Nisi voluptate dignissimos harum dolorum
          illo dolore sit reprehenderit corrupti laudantium delectus, deleniti
          tempora inventore adipisci iusto maxime, repellat nostrum
          voluptatibus? Doloribus atque dolores consectetur exercitationem omnis
          quas? Exercitationem, culpa.
        </div>
      </>
    )
  }

  return (
    <>
      {/* Mobile view */}
      <div className="sm:hidden">
        <Device />
      </div>

      {/* 640px view */}
      <div className="relative mt-4 hidden h-[98%] w-screen items-center justify-center sm:flex">
        <div className="absolute top-4 aspect-[0.47/1] h-[92%] rounded-3xl bg-gray-900" />

        <img className="absolute h-full" src="/md-iPhone-13-Pro.png" alt="" />

        <div
          id="hideScrollbar"
          className="z-10 aspect-[121/250] h-[88%] overflow-y-scroll rounded-b-[40px] rounded-t-[1%]"
        >
          <Device />
        </div>
      </div>

      <style jsx>{`
        #hideScrollbar::-webkit-scrollbar {
          display: none;
        }

        #hideScrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}

export default index
