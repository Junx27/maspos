function FormaterRupiah({ number, className }) {
    const formatRupiah = (value) => {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        });
        return formatter.format(value);
    };
    return <div className={className}>{formatRupiah(number)}</div>;
}

export default FormaterRupiah;
