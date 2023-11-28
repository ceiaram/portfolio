import Section from "../../structure/section";
import Container from "../../structure/container";

import Image from "next/image";
import SectionTitle from "../../blocks/section.title.block";

import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/blogs/recent.module.scss";
import content from "../../../content/blogs/blogs.json";

export default function Recent({ mediumArticles }) {
  const feed = mediumArticles.feed;
  // const articles = mediumArticles.items;
  const articles = content;

  return (
    <Section classProp="borderBottom">
      <Container spacing={"verticalXXXXLrg"}>
        <SectionTitle
          title="Recent Blogs"
          preTitle="Personal Commentary"
          subTitle="A page dedicated to personal content to manage my accomplishments and thoughts."
        />
        <section className={css.projects}>
          {articles.map(
            (
              {
                title,
                pubDate,
                link,
                author,
                thumbnail,
                categories,
                blogContent,
              },
              index
            ) => {
              const date = new Date(pubDate).toDateString();
              return (
                <>
                  <article key={index} className={css.project}>
                    <span className={css.featuredImage}>
                      <img src={thumbnail} alt="Article thumbnail" />
                    </span>
                    <span className={css.header}>
                      <a href={link} rel="noreferrer" target="_blank">
                        {title}{" "}
                        <Icon icon={["fad", "arrow-up-right-from-square"]} />
                      </a>
                    </span>
                    <span className={css.descriptionContainer}></span>
                    <span className={css.details}>
                      <p>By {author}</p>
                      <p className={css.pushedAt}>{date}</p>
                    </span>
                    <span className={css.blogContent}>
                      <p>{blogContent}</p>
                    </span>
                    <span className={css.topicsContainer}>
                      {categories.map((e, index) => {
                        return (
                          <span key={index} className={css.topics}>
                            <Icon icon={["fab", "medium"]} /> {e}
                          </span>
                        );
                      })}
                    </span>
                  </article>
                </>
              );
            }
          )}
        </section>
      </Container>
    </Section>
  );
}
