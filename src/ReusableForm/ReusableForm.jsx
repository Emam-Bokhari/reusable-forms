
const ReusableForm = ({ formTitle, formBtn, handleSubmit }) => {


    const handleLocalSubmit=(event)=>{
        event.preventDefault()
        const data={
            name:event.target.name.value,
            email:event.target.email.value,
            password:event.target.password.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            <h2>{formTitle}</h2>
            <div>
                <form onSubmit={handleLocalSubmit} className="w-[300px]">
                    <div className=" space-y-3 text-center">
                        <input className="border-2 border-black" type="text" name="name" />
                        <input className="border-2 border-black" type="email" name="email" />
                        <input className="border-2 border-black" type="password" name="password" />
                        <div>
                            <input className="bg-indigo-300 px-3 py-1 rounded-sm" type="submit" value={formBtn} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReusableForm;