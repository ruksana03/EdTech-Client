import { useSelector } from "react-redux";


const WriteBlog = () => {
    const user = useSelector(state => state.data.user.user);
    console.log(user);

        const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target;
            const blogTitle = form.title.value;
            const image = form.image[0];
            const blogContent = form.content.value;
            // const loadImage = await imageUpload(image);
            console.log({blogTitle,
                blogContent, image});

        };
        return (
            <div className="max-w-3xl mx-auto my-8">
                <h1 className="text-3xl font-bold mb-4">Write a story</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userPhoto" className="block text-lg font-semibold mb-2">User Photo</label>
                        <input type="text" id="userPhoto" name="image" className="w-full px-4 py-2 border input border-black rounded-lg focus:outline-none focus:border-first" readOnly />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-lg font-semibold mb-2">User Name</label>
                        <input type="text" id="userName" name="name" value={user?.name} className="w-full px-4 py-2 border input border-black rounded-lg focus:outline-none focus:border-first" readOnly />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label>
                        <input type="text" id="title" name="title"  className="w-full px-4 py-2 border input border-black rounded-lg focus:outline-none focus:border-first" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-lg font-semibold mb-2">Image URL</label>
                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                            <input name='image' type="file" className="file-input file-input-bordered file-input-success border-first w-full" placeholder="Enter image URL or upload"  required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-lg font-semibold mb-2">Content</label>
                        <textarea id="content" name="content" rows="8" className="w-full px-4 py-2 border input border-black rounded-lg focus:outline-none focus:border-first"></textarea>
                    </div>
                    <button type="submit" className="bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#6a6767] transition-colors duration-300">Submit</button>
                </form>
            </div>
        );
    };

    export default WriteBlog;