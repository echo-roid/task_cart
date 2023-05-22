import { React } from 'react';
import './App.css';
import { RxCross1 } from 'react-icons/rx';
import { Carousel } from 'react-responsive-carousel';
export function Modal({ price, description, images, category, setModalData ,discount}) {
    console.log(images)
    return (
        <>

            <section className='modal'>
                <div className='main_modal'>
                    <div className='img_holder'>
                        <Carousel showIndicators={false}>
                            {
                                
                            
                                images.map((elem)=>{
                                    return(
                                <div>
                                    <img src={elem} alt="not found"/>
                                    
                                </div>
                                    )
                                })

                            }
                           
                    
                        </Carousel>
                    </div>

                    <div className='content'>
                        <div className='price'>
                            <p> price: ${price}</p>
                            <p>discount: {discount}</p>
                            <p>category: {category}</p>
                            <p>description: {description}</p>

                        </div>
                    </div>
                </div>
                <RxCross1 className='cross' onClick={() => { setModalData({ false: true }) }} />
            </section>

        </>
    )
}