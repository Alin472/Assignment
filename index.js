
<script>
    function calculateTotal() {
        const price = parseFloat(document.getElementById('price').value);
        const quantity = parseInt(document.getElementById('quantity').value);
        const taxRate = parseFloat(document.getElementById('tax').value);
        const shipping = parseFloat(document.getElementById('shipping').value);

        if (isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(shipping)) {
            document.getElementById('result').textContent = 'Please enter valid inputs.';
            return;
        }

        if (price < 0 || quantity < 0 || taxRate < 0 || shipping < 0) {
            document.getElementById('result').textContent = 'All inputs must be non-negative.';
            return;
        }

        const subtotal = price * quantity;
        const tax = subtotal * (taxRate / 100);
        const total = subtotal + tax + shipping;

        document.getElementById('result').textContent = `Total Cost: ${total.toFixed(2)}`;
    }
</script>
