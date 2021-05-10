function assertion(a, b) {
    if (a == b) {
        console.log("expected EQUALS actual");

    } else {
        console.log("expected DOES NOT equal actual");
    }
}
assertion(2, 3);