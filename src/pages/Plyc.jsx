import React from 'react';
import Footer from '../components/Footer';
const Plyc = () => {
  return (
    <div>
    <div className="px-4 py-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome to ADI COURIER SERVICES</h2>
          <p>
            By accessing and using this website, you agree to be bound by the following terms and conditions of use, which together with our privacy policy govern our company's relationship with you in relation to this website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">1. Terms</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these website terms of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on the company's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on the company’s website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">3. Disclaimer</h2>
          <p>
            The materials on the company’s website are provided on an 'as is' basis. The company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">4. Limitations</h2>
          <p>
            In no event shall the company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the company’s website, even if the company or a company authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">5. Accuracy of materials</h2>
          <p>
            The materials appearing on the company’s website could include technical, typographical, or photographic errors. The company does not warrant that any of the materials on its website are accurate, complete or current. The company may make changes to the materials contained on its website at any time without notice. However, the company does not make any commitment to update the materials.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">6. Links</h2>
          <p>
            The company has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the company of the site. Use of any such linked website is at the user’s own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">7. Modifications</h2>
          <p>
            The company may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the state and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>
      </div>
    </div>
      <Footer />
      </div>
  );
};

export default Plyc;