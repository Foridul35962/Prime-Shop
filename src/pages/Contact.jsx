const Contact = () => {
  const formSubmit=(event)=>{
    event.preventDefault()
  }
  return (
    <div className="w-dvw bg-gray-200 dark:text-white px-5 py-8 md:px-40 dark:bg-gray-800">
      <div className="bg-gray-300 dark:bg-gray-900 shadow-2xl shadow-black p-10 rounded-2xl flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center">Get in Touch with <span className='text-red-500'>Prime Shop</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Contact Info</h2>
              <p>Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p><span>📍 Address: </span>123 Tech Lane, Dhaka, Bangladesh</p>
              <p><span>📧 Email: </span>support@prime-shop.com</p>
              <p><span>📞 Phone: </span>+880 1712 345 6789</p>
            </div>
          </div>
          <form onSubmit={formSubmit} className="*:flex *:flex-col *:gap-1.5 flex flex-col gap-5">
            <div>
              <label htmlFor="name">Your Name</label>
              <input className="bg-white text-black px-4 py-2 rounded-xl" type="text" id='name' placeholder='John Doe' />
            </div>
            <div>
              <label htmlFor="mail">Email Address</label>
              <input className="bg-white text-black px-4 py-2 rounded-xl" type="text" id='mail' placeholder='john@example.com' />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea rows={4} className="bg-white text-black px-4 py-2 rounded-xl" id="message" placeholder='Type your message...' />
            </div>
            <button type="submit" className="bg-red-500 hover:bg-red-700 active:bg-red-800 text-white rounded-xl rounded-tr-xl py-[12px] px-4 cursor-pointer transition duration-300 w-fit uppercase">Send Message 🚀</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact