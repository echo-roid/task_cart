import { React, useState, useEffect } from 'react';
import './App.css';
import { getData } from "./apis"
import { AiFillDelete, AiOutlineLogin } from 'react-icons/ai';
import { ADD } from "./Add"
import { Modal } from "./Modal"

function App() {
  useEffect(() => {
    (async () => {
      const product = await getData();
      setData(product && product.products);
    })();
  }, [])

  const [data, setData] = useState()

  const [modalData, setModalData] = useState({
    status: false,
    price: null,
    description: null,
    images: [],
    category: null,
    discount: null
  })

  const deleteByValue = value => {
    let deleteDta = data.filter(elem => { return elem.title !== value })
    setData(deleteDta)
  }
  return (
    <>
      <section>
        <div className='container'>
          <div className='wrap_content'>
            {
              data && data.length !== 0 ? data.map((elem, index) => {
                return (
                  <div className='box' key={index}>
                    <img src={elem.thumbnail} alt="" />
                    <div className='heading'>
                      <div className='delete'>
                        <AiOutlineLogin onClick={() => { setModalData({ status: true, price: elem.price, description: elem.description, images: elem.images, category: elem.category, discount: elem.discountPercentage }) }} />
                        <AiFillDelete onClick={() => { deleteByValue(elem.title) }} />
                      </div>
                      <h3>{elem.brand}</h3>
                      <h5>{elem.title}</h5>
                    </div>


                    <ADD />

                    <h6>Quantity: {elem.stock}</h6>


                    <div>

                    </div>
                  </div>
                )
              }) : "not found"
            }

          </div>
        </div>

        {
          modalData.status &&
          <Modal price={modalData.price} description={modalData.description} images={modalData.images} category={modalData.category} setModalData={setModalData} discount={modalData.discount} />
        }
      </section>
    </>
  )
}

export default App;
