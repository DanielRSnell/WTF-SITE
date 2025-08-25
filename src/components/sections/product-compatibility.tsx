'use client';

import { useEffect, useRef, useState } from 'react';

import { Check, Copy, RefreshCw } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import * as shiki from 'shiki';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

const frameworks = [
  {
    name: 'Model Definition',
    lang: 'typescript',
    code: `const Article = {
  name: 'Article',
  fields: {
    title: { type: 'string', required: true },
    content: { type: 'text' },
    featured: { type: 'boolean', default: false }
  }
};

export default Article;`,
  },
  {
    name: 'Form Component',
    lang: 'tsx',
    code: `import { useForm } from 'react-hook-form';

export function ArticleForm() {
  const { register, handleSubmit } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register('title', { required: true })}
        placeholder="Article title"
      />
      <textarea 
        {...register('content')}
        placeholder="Article content"
      />
      <input 
        type="checkbox"
        {...register('featured')}
      />
      <button type="submit">Save Article</button>
    </form>
  );
}`,
  },
  {
    name: 'Article List',
    lang: 'tsx',
    code: `import { useArticles } from '@/hooks/useArticles';

export function ArticleList() {
  const { articles, loading } = useArticles();
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="article-list">
      {articles.map(article => (
        <div key={article.id} className="article-card">
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          {article.featured && (
            <span className="featured-badge">Featured</span>
          )}
        </div>
      ))}
    </div>
  );
}`,
  },
  {
    name: 'Single Article View',
    lang: 'tsx',
    code: `import { useArticle } from '@/hooks/useArticle';

export function ArticleView({ id }: { id: string }) {
  const { article, loading } = useArticle(id);
  
  if (loading) return <div>Loading...</div>;
  if (!article) return <div>Article not found</div>;
  
  return (
    <article className="article-view">
      <header>
        <h1>{article.title}</h1>
        {article.featured && (
          <span className="featured">Featured Article</span>
        )}
      </header>
      <div className="content">
        {article.content}
      </div>
    </article>
  );
}`,
  },
  {
    name: 'API Routes',
    lang: 'typescript',
    code: `// app/api/articles/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Article } from '@/models/Article';

export async function GET() {
  const articles = await Article.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  const article = await Article.create({
    title: data.title,
    content: data.content,
    featured: data.featured || false
  });
  
  return NextResponse.json(article);
}`,
  },
  {
    name: 'Data Fetching',
    lang: 'typescript',
    code: `// hooks/useArticles.ts
import { useState, useEffect } from 'react';

export function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, []);
  
  return { articles, loading };
}`,
  },
];

export function ProductCompatibility() {
  const [activeTab, setActiveTab] = useState(frameworks[0].name);
  const [highlightedCode, setHighlightedCode] = useState<{
    light: Record<string, string>;
    dark: Record<string, string>;
  }>({
    light: {},
    dark: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { isAtLeast } = useMediaQuery();
  const isMobile = !isAtLeast('md');

  useEffect(() => {
    // Get initial theme from localStorage, default to 'light' if none exists
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(savedTheme || 'light');

    // Listen for theme changes
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (newTheme) {
        setTheme(newTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Listen for direct DOM class changes (for immediate updates)
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    async function highlightCode() {
      try {
        const highlighter = await shiki.createHighlighter({
          themes: ['github-dark-high-contrast', 'github-light-default'],
          langs: [
            'typescript',
            'tsx',
            'vue',
            'astro',
            'svelte',
            'javascript',
            'html',
            'python',
          ],
        });

        const lightHighlighted: Record<string, string> = {};
        const darkHighlighted: Record<string, string> = {};

        for (const framework of frameworks) {
          lightHighlighted[framework.name] = highlighter.codeToHtml(
            framework.code,
            {
              lang: framework.lang,
              theme: 'github-light-default',
            },
          );

          darkHighlighted[framework.name] = highlighter.codeToHtml(
            framework.code,
            {
              lang: framework.lang,
              theme: 'github-dark-high-contrast',
            },
          );
        }

        setHighlightedCode({
          light: lightHighlighted,
          dark: darkHighlighted,
        });
      } catch (error) {
        console.error('Failed to highlight code:', error);
      } finally {
        setIsLoading(false);
      }
    }

    highlightCode();
  }, []); // Remove theme dependency

  // Get the current highlighted code based on theme
  const currentHighlightedCode =
    theme === 'dark' ? highlightedCode.dark : highlightedCode.light;

  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <div className="space-y-4">
          <h3 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <RefreshCw className="size-5" />
            Real-time Sync
          </h3>
          <h2 className="text-foreground font-weight-display leading-snug md:text-xl">
            Sync instantly to the UI
          </h2>
        </div>

        <div className="mt-6 gap-6">
          {isMobile ? (
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue>{activeTab}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {frameworks.map((framework) => (
                  <SelectItem key={framework.name} value={framework.name}>
                    {framework.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex gap-3">
                {frameworks.map((framework) => (
                  <TabsTrigger key={framework.name} value={framework.name}>
                    {framework.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}

          <div className="mt-4">
            {isLoading ? (
              <Card className="relative overflow-hidden !p-0">
                <CardContent className="!p-0">
                  <div className="flex h-92 items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              frameworks.map(
                (framework) =>
                  framework.name === activeTab && (
                    <Card
                      key={framework.name}
                      className="relative overflow-hidden !p-0"
                    >
                      <CardContent className="!p-0">
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              currentHighlightedCode[framework.name] || '',
                          }}
                          className="h-89 overflow-x-auto overflow-y-auto text-sm [&_pre]:m-0 [&_pre]:h-89 [&_pre]:bg-transparent [&_pre]:p-4 [&_pre]:whitespace-pre-wrap"
                        />
                        <CopyButton
                          text={framework.code}
                          className="absolute top-4 right-4"
                        />
                      </CardContent>
                    </Card>
                  ),
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CopyButtonProps {
  text: string;
  className?: string;
}

function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Button
      aria-label="Copy code"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={cn('h-8 w-8 p-0', className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Check className="h-3 w-3" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Copy className="h-3 w-3" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
