<template>
  <div class="p-6 min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="w-full max-w-3xl">
      <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">🧾 Receipt Generator</h1>

      <!-- Add item form -->
      <div class="bg-white shadow-lg rounded-xl p-4 flex gap-3 mb-6">
        <input v-model="newItem.name" placeholder="Item name" class="border p-2 flex-1 rounded-md focus:ring focus:ring-teal-300" />
        <input v-model.number="newItem.qty" type="number" placeholder="Qty" class="border p-2 w-24 rounded-md text-right focus:ring focus:ring-teal-300" />
        <input v-model.number="newItem.price" type="number" placeholder="Price" class="border p-2 w-32 rounded-md text-right focus:ring focus:ring-teal-300" />
        <button @click="addItem" class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow transition">
          Add
        </button>
      </div>

      <!-- Logo upload -->
      <!-- <div class="bg-white shadow-md rounded-xl p-4 mb-6 flex items-center justify-between">
        <div>
          <p class="font-medium text-gray-700">Upload Logo:</p>
          <input type="file" accept="image/*" @change="onLogoUpload" class="mt-2" />
        </div>
        <div v-if="logoUrl" class="h-16 w-16 overflow-hidden rounded-full border shadow">
          <img :src="logoUrl" alt="Logo" class="h-full w-full object-cover" />
        </div>
      </div> -->

      <!-- Receipt preview -->
      <div id="receipt" class="bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center gap-3">
            <img  :src="logo" alt="Logo" class="h-14 w-14 rounded-full object-cover border" />
            <div>
              <h2 class="text-xl font-bold text-teal-700">PCBSBD</h2>
              <p class="text-sm text-gray-500">Thanks for your purchase!</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-500">Receipt #: {{ receiptNumber }}</p>
            <p class="text-sm text-gray-500">Date: {{ currentDate }}</p>
          </div>
        </div>

        <!-- Table -->
        <table class="w-full border-collapse mb-6">
          <thead>
            <tr class="bg-teal-600 text-white">
              <th class="text-left p-2">Item</th>
              <th class="text-right p-2">Qty</th>
              <th class="text-right p-2">Price</th>
              <th class="text-right p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, i) in items"
              :key="i"
              :class="i % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
              class="border-b"
            >
              <td class="p-2">{{ item.name }}</td>
              <td class="p-2 text-right">{{ item.qty }}</td>
              <td class="p-2 text-right">{{ formatCurrency(item.price) }}</td>
              <td class="p-2 text-right font-medium">{{ formatCurrency(item.qty * item.price) }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Totals -->
        <div class="flex justify-end">
          <div class="w-1/2 space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-600">Subtotal:</span>
              <span class="font-medium">{{ formatCurrency(subtotal) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Tax (5%):</span>
              <span class="font-medium">{{ formatCurrency(tax) }}</span>
            </div>
            <div class="flex justify-between text-lg font-bold border-t pt-2">
              <span>Grand Total:</span>
              <span class="text-teal-700">{{ formatCurrency(grandTotal) }}</span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-8 text-center text-gray-500 text-sm border-t pt-3">
          <p>Powered by PCBSBD | {{ new Date().getFullYear() }}</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-center gap-4 mt-6">
        <button
          @click="downloadPDF"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition"
        >
          Download PDF
        </button>
        <button
          @click="window.print()"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-lg transition"
        >
          Print
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "/src/assets/pc/logo.jpg";
import logo2 from "/src/assets/pc/cover.jpg";
const items = ref([]);
const newItem = ref({ name: "", qty: 1, price: 0 });

// Logo
const logoUrl = ref(null);
const onLogoUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      logoUrl.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// Auto-generated receipt info
const receiptNumber = "R-" + Math.floor(Math.random() * 1000000);
const currentDate = new Date().toLocaleDateString();

const addItem = () => {
  if (!newItem.value.name) return;
  items.value.push({ ...newItem.value });
  newItem.value = { name: "", qty: 1, price: 0 };
};

// Totals
const subtotal = computed(() =>
  items.value.reduce((sum, i) => sum + i.qty * i.price, 0)
);
const tax = computed(() => subtotal.value * 0.05);
const grandTotal = computed(() => subtotal.value + tax.value);

const formatCurrency = (val) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(val);

// PDF Export
const downloadPDF = async () => {
  const receiptEl = document.getElementById("receipt");
  const canvas = await html2canvas(receiptEl, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("receipt.pdf");
};
</script>
