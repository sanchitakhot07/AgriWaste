'use strict';

const sellForm = document.getElementById('sellForm');
const responseMessage = document.getElementById('responseMsg');
const receipt = document.getElementById('receipt');
const wasteImageInput = document.getElementById('wasteImage');
const wasteImagePreview = document.getElementById('wasteImagePreview');
const receiptWasteImage = document.getElementById('receipt-waste-image');
const companySelect = document.getElementById('sellCompany');
let wasteImageUrl = '';

function translate(key, fallback) {
  return window.I18N ? window.I18N.t(key) : fallback;
}

function showImagePreview(file) {
  if (wasteImageUrl) {
    URL.revokeObjectURL(wasteImageUrl);
    wasteImageUrl = '';
  }

  if (!file) {
    wasteImagePreview.hidden = true;
    wasteImagePreview.removeAttribute('src');
    return;
  }

  if (!file.type.startsWith('image/')) {
    wasteImageInput.value = '';
    wasteImagePreview.hidden = true;
    wasteImagePreview.removeAttribute('src');
    responseMessage.textContent = translate('sell_image_invalid', 'Choose a valid image file.');
    responseMessage.style.color = '#b00020';
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    wasteImageInput.value = '';
    wasteImagePreview.hidden = true;
    wasteImagePreview.removeAttribute('src');
    responseMessage.textContent = translate('sell_image_too_large', 'Choose an image smaller than 5 MB.');
    responseMessage.style.color = '#b00020';
    return;
  }

  responseMessage.textContent = '';
  wasteImageUrl = URL.createObjectURL(file);
  wasteImagePreview.src = wasteImageUrl;
  wasteImagePreview.hidden = false;
}

function generateTransactionId() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `AW${timestamp}${random}`;
}

function populateCompanies() {
  try {
    const previousCompany = companySelect.value;
    while (companySelect.options.length > 1) companySelect.remove(1);

    const raw = localStorage.getItem('onlineCompanies');
    const companies = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(companies)) {
      throw new Error('Saved online companies are not in a valid format.');
    }

    const now = Date.now();
    companies
      .filter(company =>
        company &&
        typeof company.name === 'string' &&
        company.name.trim() &&
        typeof company.lastSeen === 'number' &&
        now - company.lastSeen < 5 * 60 * 1000
      )
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(company => {
        const option = document.createElement('option');
        option.value = company.name;
        option.textContent = company.name;
        companySelect.appendChild(option);
      });

    if ([...companySelect.options].some(option => option.value === previousCompany)) {
      companySelect.value = previousCompany;
    }
  } catch (error) {
    console.error('Could not load online companies:', error);
    responseMessage.textContent = `Could not load companies: ${error.message}`;
    responseMessage.style.color = '#b00020';
  }
}

function showReceipt(listing) {
  document.getElementById('receipt-transaction-id').textContent = generateTransactionId();
  document.getElementById('receipt-date').textContent = new Date().toLocaleString(
    document.documentElement.lang || 'en'
  );
  document.getElementById('receipt-farmer-name').textContent = listing.farmerName;
  document.getElementById('receipt-email').textContent = listing.email;
  document.getElementById('receipt-phone').textContent = listing.phone;
  document.getElementById('receipt-company').textContent = listing.company;
  document.getElementById('receipt-waste-type').textContent = listing.wasteType;
  document.getElementById('receipt-quantity').textContent =
    `${listing.quantity} ${translate('unit_tons', 'tons')}`;
  document.getElementById('receipt-price').textContent =
    `₹${listing.price} / ${translate('unit_ton', 'ton')}`;
  document.getElementById('receipt-location').textContent = listing.location || '—';
  document.getElementById('receipt-total').textContent =
    `₹${(Number(listing.quantity) * Number(listing.price)).toFixed(2)}`;

  receiptWasteImage.hidden = !wasteImageUrl;
  if (wasteImageUrl) receiptWasteImage.src = wasteImageUrl;

  sellForm.hidden = true;
  responseMessage.textContent = translate('sell_local_success', '');
  responseMessage.style.color = '#2e7d32';
  receipt.style.display = 'block';
}

populateCompanies();
window.addEventListener('storage', event => {
  if (event.key === 'onlineCompanies') populateCompanies();
});
window.addEventListener('message', event => {
  if (
    event.origin === window.location.origin &&
    event.data &&
    event.data.type === 'refreshCompanies'
  ) {
    populateCompanies();
  }
});
window.addEventListener('focus', populateCompanies);
setInterval(populateCompanies, 60 * 1000);

wasteImageInput.addEventListener('change', () => {
  showImagePreview(wasteImageInput.files && wasteImageInput.files[0]);
});

sellForm.addEventListener('submit', event => {
  event.preventDefault();
  const image = wasteImageInput.files && wasteImageInput.files[0];
  if (image && (!image.type.startsWith('image/') || image.size > 5 * 1024 * 1024)) {
    showImagePreview(image);
    return;
  }

  showReceipt({
    farmerName: sellForm.elements.farmer_name.value.trim(),
    email: sellForm.elements.email.value.trim(),
    phone: sellForm.elements.phone.value.trim(),
    company: sellForm.elements.company.value,
    wasteType: sellForm.elements.waste_type.value,
    quantity: sellForm.elements.quantity.value,
    price: sellForm.elements.price.value,
    location: sellForm.elements.location.value.trim()
  });
});

document.getElementById('print-receipt').addEventListener('click', () => window.print());
document.getElementById('download-receipt').addEventListener('click', () => window.print());
document.getElementById('new-transaction').addEventListener('click', () => {
  receipt.style.display = 'none';
  receiptWasteImage.hidden = true;
  receiptWasteImage.removeAttribute('src');
  sellForm.reset();
  sellForm.hidden = false;
  responseMessage.textContent = '';
  wasteImagePreview.hidden = true;
  wasteImagePreview.removeAttribute('src');
  if (wasteImageUrl) {
    URL.revokeObjectURL(wasteImageUrl);
    wasteImageUrl = '';
  }
});
