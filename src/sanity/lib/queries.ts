export const getBuildBySlugQuery = `
  *[_type == "buildAlong" && slug.current == $slug][0]{
    name,
    subTitle,
    paragraphOne,
    paragraphTwo,
    categories,
    mainImage,
    components[]{
      componentName,
      code,
      subtitle,
      image
    },
    appsPlatforms[]{
      name,
      desc,
      icon
    },
    codesSetup[]{
      name,
      subtitle,
      filename,
      extension,
      code
    }
  }
`;
