import React from 'react';
import './style.css';
import { useAuth } from '../../Contexts';

const HomePage = () => {
    const { user } = useAuth();

    return (
        <>
            <div id="sideBanner"></div>
            <div className='home-container'>
                <div className='home-wrapper-left'>
                    <h3>Welcome to</h3>
                    <h1>SHIKI</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor turpis, scelerisque id lectus eu, eleifend sodales neque. Nunc vel tortor ante. Sed sed justo arcu. Sed sed porta tellus. Fusce nec purus id lacus aliquet placerat sit amet vel eros. Cras non nunc fringilla, tempus nulla sed, vehicula ligula. Etiam fringilla imperdiet libero vestibulum tristique.
Vestibulum eu lectus diam. Maecenas pharetra ligula id lacus fermentum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus dapibus urna eu accumsan molestie. Nam cursus, erat vitae suscipit eleifend, justo mauris convallis felis, quis congue quam metus sit amet magna. In id aliquam eros. Ut ex neque, posuere euismod magna non, porttitor porta velit. Mauris dictum erat at feugiat suscipit.
Fusce scelerisque nunc id ante molestie cursus. Nullam nec fermentum metus. Donec est tortor, vulputate posuere varius ac, feugiat non massa. Nulla lacus velit, pharetra id nisl ut, pellentesque dapibus erat. Curabitur rutrum venenatis massa sit amet vehicula. Integer at sollicitudin nisl. Nunc id maximus diam. Aenean convallis justo ac libero tincidunt sagittis. Donec condimentum enim imperdiet scelerisque viverra. Integer pellentesque, ipsum vitae rhoncus feugiat, justo tortor lobortis erat, ut convallis nulla urna ut urna. Phasellus feugiat arcu magna, ac semper velit ultricies quis.</p>
                </div>
                <div className='home-wrapper-right'>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'>
                            <img src="../../public/cat.jpg"/>
                        </div>
                    </div>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'>
                            <img src="../../public/coffee-beans.jpg"/>
                        </div>
                    </div>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'>
                            <img src="../../public/mallard.jpg"/>
                        </div>
                    </div>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'>
                            <img src="../../public/startup.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
