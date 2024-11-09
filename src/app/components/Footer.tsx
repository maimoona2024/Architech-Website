import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            {/* Replace Text with Image */}
            <div className="flex justify-center md:justify-start">
              <Image 
                src="/images/digitalproject.png" 
                alt="Digital Project" 
                width={150} 
                height={50} // Adjust size as needed
              />
            </div>
            <p className="mt-4">A premier digital project and architectural firm.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="mt-4 space-y-2">
              <li>Main</li>
              <li>Gallery</li>
              <li>Projects</li>
              <li>Certifications</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contacts</h3>
            <ul className="mt-4 space-y-2">
              <li>1244 Sample Street, Austin, TX 78704</li>
              <li>(512) 333-2222</li>
              <li>sampleemail@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <i className="icon-facebook" />
          <i className="icon-twitter" />
          <i className="icon-linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
