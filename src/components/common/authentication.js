export async function login (email, password) {
  if (
    this.input.username === this.$parent.mockAccount.username &&
    this.input.password === this.$parent.mockAccount.password
  ) {
    this.$emit('authenticated', true)
    this.$router.replace({ name: 'secure' })
  } else {
    return 'The username and / or password is incorrect'
  }
}
