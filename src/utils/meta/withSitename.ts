import config from "../../config/config"

const withSitename = (text: string) => {
    return `${text} | ${config.siteName}`
}

export default withSitename