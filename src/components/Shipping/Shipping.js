import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const {user} = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue={user.email} placeholder="email" {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}
                
                <input placeholder="address" {...register("address")} />
                <input placeholder="city" {...register("city")} />
                <input placeholder="phone" {...register("phone")} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;