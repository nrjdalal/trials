import Head from 'next/head'

const index = () => {
  const Device = () => {
    return (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        sunt aperiam nesciunt enim molestiae nobis excepturi eligendi amet
        ducimus a porro corrupti nihil, provident officiis suscipit, aliquam
        voluptatum quibusdam animi? Exercitationem eveniet perferendis magni
        debitis iusto blanditiis maiores dignissimos, officiis nesciunt at
        repudiandae laudantium illo possimus, illum mollitia nemo animi ipsum,
        necessitatibus suscipit. Molestiae sit dolore neque ducimus, commodi
        maiores! Officia saepe tempora illo adipisci totam magnam doloribus rem
        ut inventore officiis dignissimos iusto sed, sunt earum fugit eum
        tempore nulla! Excepturi harum saepe commodi autem, a voluptatem
        laudantium itaque. Iure voluptas eveniet nobis eius ullam dicta laborum,
        aperiam perspiciatis iusto rerum consectetur non maiores officia
        provident explicabo. Aperiam illum excepturi fugit officiis sit saepe
        eveniet, labore in eius quisquam. Sunt necessitatibus non eius nisi
        repudiandae exercitationem, rem placeat voluptatibus iure nihil beatae
        nam impedit est velit autem excepturi enim modi fugiat magnam blanditiis
        laborum minima saepe. Aliquid, excepturi quam. Earum eaque consequuntur
        modi laboriosam a hic assumenda ea dolor reiciendis repudiandae, quidem
        ipsum iste veritatis repellendus officia. Qui dicta, ipsum eveniet totam
        exercitationem vitae? Dicta rem ducimus repellat doloremque?
      </>
    )
  }

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <img
          className="absolute top-1/2 left-1/2 hidden h-[926px] -translate-x-1/2 -translate-y-1/2 sm:flex"
          src="/Apple iPhone 13 Pro Max — Sierra Blue.png"
          alt=""
        />

        <div className="hidden h-[811px] w-[375px] overflow-y-auto sm:flex">
          <div>
            <div className="h-9"></div>
            <Device />
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
