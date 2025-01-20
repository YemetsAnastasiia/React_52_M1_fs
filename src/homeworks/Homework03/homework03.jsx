import './styles.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Homework03() {
    return (
       
            <div className='homework03-wrapper'>
                <Input
                    name='Email'
                    type='email'
                    placeholder='Enter your email'
                    label='Email'
                />
                <Button name='Send email' />
            </div>
       


    );
}

export default Homework03;