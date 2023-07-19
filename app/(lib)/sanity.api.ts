import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

const projectId = 'isfwb2n4'
const dataset = 'production'
const apiVersion = '2023-07-18'

export const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
};

export const client = createClient(config)

export const urlFor = (source: string) => createImageUrlBuilder(config).image(source)