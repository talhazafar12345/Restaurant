
import { useState } from "react"
import Swal from "sweetalert2";
function Hero24() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        productname: "",
        quantity: "",
    })
    const [errors, setErrors] = useState({})
    const change = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }
    const validate = () => {
        const newErrors = {}
        if (!formData.name) {
            newErrors.name = "Please enter your name"
        }
        if (!formData.email) {
            newErrors.email = "Please enter your email"
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter valid email"
        }
        if (!formData.address) {
            newErrors.address = "Please enter your address"
        }
        if (!formData.productname) {
            newErrors.productname = "Please enter your product name"
        }
        if (!formData.quantity) {
            newErrors.quantity = "Please enter your quantity"
        }
        return newErrors
    }
    const submit = (e) => {
        e.preventDefault()
        const validation = validate()
        if (Object.keys(validation).length > 0) {
            setErrors(validation)
            return
        }
        Swal.fire({
            icon: "Success",
            title: "Order submit successfully",
            confirmButtonColor: "#3085d6",
            scrollbarPadding: false
        });
        setFormData({
            name: "",
            email: "",
            address: "",
            productname: "",
            quantity: "",
        })
    }
    return (
        <div className="hero24">
            <form onSubmit={submit}>
                <div className="hero24-inp">
                    <input value={formData.name} onChange={change} placeholder="Enter your Name" type="text" name="name" id="" />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="hero24-inp">
                    <input value={formData.email} onChange={change} placeholder="Enter your email" type="text" name="email" id="" />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="hero24-inp">
                    <input value={formData.address} onChange={change} placeholder="Enter your address" type="text" name="address" id="" />
                    {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div className="hero24-inp">
                    <input value={formData.productname} onChange={change} placeholder="Enter your product name" type="text" name="productname" id="" />
                    {errors.productname && <p className="error">{errors.productname}</p>}
                </div>
                <div className="hero24-inp">
                    <input value={formData.quantity} onChange={change} placeholder="Enter your Product Quantity" type="number" name="quantity" id="" />
                    {errors.quantity && <p className="error">{errors.quantity}</p>}
                </div>
                <div className="hero24-btn">
                    <button>Submit Order</button>
                </div>
            </form>
        </div>
    )
}
export default Hero24
