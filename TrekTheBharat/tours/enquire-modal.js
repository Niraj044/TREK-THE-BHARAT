class EnquireModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
            /* General styles */
            :host {
              font-family: Arial, sans-serif;
            }
            .btn {
              padding: 10px 20px;
              background-color: orange;
              color: white;
              border: none;
              width:100%;
              cursor: pointer;
              font-size: 16px;
            }
            .btn:hover {
              background-color: #0056b3;
            }
            /* Modal styles */
            .modal {
              display: none;
              position: fixed;
              z-index: 1;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .modal-content {
              background-color: white;
              margin: 15% auto;
              padding: 20px;
              border: 1px solid #888;
              width: 80%;
              max-width: 500px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
            .close {
              color: #aaa;
              float: right;
              font-size: 28px;
              font-weight: bold;
            }
            .close:hover,
            .close:focus {
              color: black;
              text-decoration: none;
              cursor: pointer;
            }
            .form-group {
              margin-bottom: 15px;
            }
            .form-group label {
              display: block;
              margin-bottom: 5px;
            }
            .form-group input,
            .form-group textarea {
              width: 100%;
              padding: 8px;
              box-sizing: border-box;
            }
            .form-group button {
              width: 100%;
              padding: 10px;
              background-color: #007bff;
              color: white;
              border: none;
              cursor: pointer;
              font-size: 16px;
            }
            .form-group button:hover {
              background-color: #0056b3;
            }
          </style>
          <button class="btn">Enquire Now</button>
          <div class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Enquiry Form</h2>
              <form id="enquiry-form">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                  <label for="tel">Phone:</label>
                  <input type="tel" id="tel" name="tel" required>
                </div>
                <div class="form-group">
                  <label for="date">Depature:</label>
                  <input type="date" id="date" name="date" required>
                </div>
                <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn">Submit</button>
              </form>
            </div>
          </div>
        `;

    this.btn = this.shadowRoot.querySelector(".btn");
    this.modal = this.shadowRoot.querySelector(".modal");
    this.closeBtn = this.shadowRoot.querySelector(".close");
    this.form = this.shadowRoot.querySelector("#enquiry-form");

    this.btn.addEventListener("click", () => {
      this.modal.style.display = "block";
    });

    this.closeBtn.addEventListener("click", () => {
      this.modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.modal.style.display = "none";
      }
    });

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = this.shadowRoot.querySelector("#name").value;
      const email = this.shadowRoot.querySelector("#email").value;
      const phone = this.shadowRoot.querySelector("#tel").value;
      const date = this.shadowRoot.querySelector("#date").value;
      const message = this.shadowRoot.querySelector("#message").value;
      const whatsappNumber = "918382085044"; // Replace with the actual WhatsApp number (without the + symbol)
      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ADepature: ${date}%0AMessage: ${message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      window.open(whatsappUrl, "_blank");
    });
  }
}

customElements.define("enquire-modal", EnquireModal);
