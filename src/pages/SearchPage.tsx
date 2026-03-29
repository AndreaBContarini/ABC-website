import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Search, ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface SearchResult {
  id: string;
  score: number;
  filename?: string;
  attributes?: Record<string, string>;
  content: Array<{ type: string; text: string }>;
}

interface SearchResponse {
  data?: SearchResult[];
  error?: string;
}

function getReadableTitle(filename: string | undefined): string {
  if (!filename) return 'Result';
  if (filename.includes('research')) return 'Research Projects';
  if (filename.includes('automation')) return 'AI Automation Projects';
  return filename.split('/').pop() ?? 'Result';
}

function getResultLink(filename: string | undefined): string {
  if (!filename) return '/';
  if (filename.includes('research')) return '/research-projects';
  if (filename.includes('automation')) return '/automation-projects';
  return '/';
}

function SearchPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (initialQuery) {
      runSearch(initialQuery);
    }
  }, [initialQuery]);

  const runSearch = async (q: string) => {
    if (!q.trim()) return;
    setLoading(true);
    setError(null);
    setSearched(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
      const data: SearchResponse = await res.json();
      if (data.error) {
        setError(data.error);
        setResults([]);
      } else {
        setResults(data.data ?? []);
      }
    } catch {
      setError('Search failed. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`, { replace: true });
    runSearch(query);
  };

  const toggleDarkMode = () => setIsDarkMode(d => !d);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/"
          className={`inline-flex items-center gap-1 text-sm mb-6 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>

        <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Search
        </h1>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search projects, articles, technologies…"
              className={`w-full pl-12 pr-28 py-4 rounded-xl border text-base outline-none transition-all
                ${isDarkMode
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                  : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 shadow-sm'
                }`}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className={`rounded-xl p-5 animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
                <div className={`h-4 w-1/3 rounded mb-3 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
                <div className={`h-3 w-full rounded mb-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
                <div className={`h-3 w-2/3 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className={`rounded-xl p-5 border ${isDarkMode ? 'bg-red-900/20 border-red-800 text-red-300' : 'bg-red-50 border-red-200 text-red-700'}`}>
            {error}
          </div>
        )}

        {/* No results */}
        {!loading && !error && searched && results.length === 0 && (
          <div className={`text-center py-16 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-1">No results found</p>
            <p className="text-sm">Try a different query, e.g. "RAG", "computer vision", "WhatsApp automation"</p>
          </div>
        )}

        {/* Results */}
        {!loading && !error && results.length > 0 && (
          <div>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {results.length} result{results.length !== 1 ? 's' : ''} for <strong>"{initialQuery || query}"</strong>
            </p>
            <div className="space-y-4">
              {results.map(result => {
                const snippet = result.content.find(c => c.type === 'text')?.text ?? '';
                const title = getReadableTitle(result.filename);
                const link = getResultLink(result.filename);
                return (
                  <div
                    key={result.id}
                    className={`rounded-xl p-5 border transition-all ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                        : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold text-base mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {title}
                        </h3>
                        {snippet && (
                          <p className={`text-sm leading-relaxed line-clamp-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {snippet.slice(0, 300)}{snippet.length > 300 ? '…' : ''}
                          </p>
                        )}
                        <div className="mt-3">
                          <Link
                            to={link}
                            className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors"
                          >
                            View section
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                      <span className={`text-xs shrink-0 px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                        {Math.round(result.score * 100)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Initial empty state */}
        {!loading && !error && !searched && (
          <div className={`text-center py-16 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p className="text-base">Type something to search across all projects and articles</p>
          </div>
        )}
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default SearchPage;
