
const UpdateProfile = () => {
    return (
        <div className="border-l pl-8 py-8">
            <h1 className="text-4xl text-[#265582] font-semibold">Profile</h1>
            <p>Profile / Profile</p>
            <form action="">
                <div>
                    <div className="py-2">
                        <p>First Name</p>
                        <input type="text" name="firstName" className="border p-2 border-black w-full" />
                    </div>
                    <div className="py-2">
                        <p>Surname</p>
                        <input type="text" name="surname" className="border p-2 border-black w-full" />
                    </div>
                    <div className="py-2">
                        <p>Email for reservations</p>
                        <input type="text" name="email" className="border p-2 border-black w-full" />
                    </div>
                    <div className="py-2">
                        <p>Phone number for reservations</p>
                        <input type="text" name="phone" className="border p-2 border-black w-full" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl text-[#265582] font-semibold pt-10">Update Password</h3>
                    <div>
                        <div className="py-2">
                            <p>New Password</p>
                            <input type="text" name="password" className="border p-2 border-black w-full" />
                        </div>
                        <div className="py-2">
                            <p>Confirm New Password</p>
                            <input type="text" name="confPassword" className="border p-2 border-black w-full" />
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <input className="bg-[#ff675c] text-xl py-4 px-8 text-white" type="submit" value="Update" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;