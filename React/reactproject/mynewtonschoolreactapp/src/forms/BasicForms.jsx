function BasicForms() {
    return (
        <div className="comtainer m-5">
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" />
                </div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    );
}

export default BasicForms;