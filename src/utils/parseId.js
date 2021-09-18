export const parseId = (url) => {
    const id = url.split("/");
    const digits = ("00" + id[6]).slice(-3)

    return digits;
}
