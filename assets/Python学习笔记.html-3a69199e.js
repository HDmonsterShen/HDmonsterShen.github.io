import{_ as c,r as p,o as i,c as l,a as n,d as t,w as u,b as s,e as a}from"./app-f6817a80.js";const r={},d=a(`<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="integral类型" tabindex="-1"><a class="header-anchor" href="#integral类型" aria-hidden="true">#</a> Integral类型</h3><blockquote><p>整数</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 十进制</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">1432144</span>
<span class="token comment"># 二进制</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">0b1100101010101010110</span>
<span class="token comment"># 八进制</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 0o9768273
<span class="token comment"># 十六进制</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">0xDECADE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>布尔型</li></ul><h3 id="浮点类型" tabindex="-1"><a class="header-anchor" href="#浮点类型" aria-hidden="true">#</a> 浮点类型</h3><ul><li>浮点数</li><li>复数</li></ul><blockquote><p>十进制数字（decimal模块可以提供固定的十进制数字，精度可以自己指定）</p></blockquote><p>decimal模块可以提供固定十进制数，精度可以自己指定</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> decimal
a <span class="token operator">=</span> decimal<span class="token punctuation">.</span>Decimal<span class="token punctuation">(</span><span class="token number">9876</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> decimal<span class="token punctuation">.</span>Decimal<span class="token punctuation">(</span><span class="token string">&quot;54321.123456&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
Deciaml<span class="token punctuation">(</span><span class="token string">&#39;64197.123456&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列类型-组合数据类型" tabindex="-1"><a class="header-anchor" href="#序列类型-组合数据类型" aria-hidden="true">#</a> 序列类型(组合数据类型)</h3><blockquote><p>容器序列</p></blockquote><p>可以存放不同类型的项，其中包括嵌套容器。list、tuple、collections.deque</p><blockquote><p>扁平序列：</p></blockquote><p>可以存放一种简单类型的项。str、bytes、array.array</p><p>根据性质分为：可变序列、不可变序列</p><h4 id="元祖" tabindex="-1"><a class="header-anchor" href="#元祖" aria-hidden="true">#</a> 元祖</h4><p>在 Python 中，元组（Tuple）是一种有序的、不可变的数据结构，可以用来存储多个项目。元组与列表相似，但元组中的元素不能被修改、添加或删除。元组通常用圆括号 <code>()</code> 来表示，其中的元素可以是不同的数据类型，如整数、字符串、浮点数等。以下是关于元组的一些基本信息和操作：</p><p><strong>创建元组：</strong> 你可以使用圆括号来创建一个元组，并在其中放置元素，用逗号分隔。元素的类型可以是任意的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
my_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token number">4.56</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>访问元组元素：</strong> 可以使用索引来访问元组中的元素。元组的索引从 0 开始。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
<span class="token keyword">print</span><span class="token punctuation">(</span>my_tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 输出: 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_tuple<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 输出: apple</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>元组切片：</strong> 和列表一样，你可以使用切片来访问元组的子集。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
subset_tuple <span class="token operator">=</span> my_tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>  <span class="token comment"># 包含索引 1 到 3 的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>元组的不可变性：</strong> 元组一旦创建，其元素就不能被修改、添加或删除。这与列表不同，列表是可变的数据结构。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
<span class="token comment"># 下面的代码会引发 TypeError</span>
my_tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>元组的解包：</strong> 你可以将元组的元素解包到多个变量中，这在一些情况下很有用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e <span class="token operator">=</span> my_tuple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>元组的长度和成员检查：</strong> 可以使用 <code>len()</code> 函数获取元组的长度，使用 <code>in</code> 关键字检查元素是否在元组中。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>my_tuple<span class="token punctuation">)</span>  <span class="token comment"># 元组的长度</span>
is_present <span class="token operator">=</span> <span class="token string">&quot;apple&quot;</span> <span class="token keyword">in</span> my_tuple  <span class="token comment"># 检查 &quot;apple&quot; 是否在元组中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>元组的方法：</strong> 由于元组是不可变的，它的方法相对较少。但仍然有一些方法，如 <code>count()</code> 和 <code>index()</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
count_apple <span class="token operator">=</span> my_tuple<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 统计 &quot;apple&quot; 在元组中出现的次数</span>
index_3 <span class="token operator">=</span> my_tuple<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 获取元素 3 的索引位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，元组是一种有用的数据结构，特别适用于需要不可变性和有序性的场景，如用作字典的键，或者存储不会变化的数据。</p><h4 id="具名元祖" tabindex="-1"><a class="header-anchor" href="#具名元祖" aria-hidden="true">#</a> 具名元祖</h4><p>具名元组是通过<code>collections</code>模块中的<code>namedtuple</code>函数来创建的。它接受两个参数：元组的名称和元素的字段名列表。通过指定名称和字段名列表，我们可以创建一个具名元组类，然后可以使用该类来创建具名元组对象。</p><p>具名元组的字段名可以用来访问元组中的值，这样可以使代码更易读、更具可维护性。与普通的元组相比，具名元组的优势在于它可以像对象一样访问字段，而不是使用索引。此外，具名元组还继承了元组的不可变性和紧凑性。</p><p>以下是一个创建和使用具名元组的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> namedtuple

<span class="token comment"># 创建具名元组类</span>
Person <span class="token operator">=</span> namedtuple<span class="token punctuation">(</span><span class="token string">&#39;Person&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 创建具名元组对象</span>
person1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;Female&#39;</span><span class="token punctuation">)</span>
person2 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">&#39;Male&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 访问具名元组的字段</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>   <span class="token comment"># 输出: Alice</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span>age<span class="token punctuation">)</span>    <span class="token comment"># 输出: 30</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>gender<span class="token punctuation">)</span> <span class="token comment"># 输出: Female</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用具名元组，我们可以在不引入新的类的情况下，方便地表示和操作具有结构化数据的对象，提高代码的可读性和可维护性。</p><h4 id="集合类型" tabindex="-1"><a class="header-anchor" href="#集合类型" aria-hidden="true">#</a> 集合类型⭐</h4><ul><li><p>集合</p></li><li><p>固定集合</p></li></ul><p>在Python中，集合（Set）是一种无序、不重复元素的数据结构。集合用于存储一组不重复的元素，它的作用主要是：</p><ol><li>去除重复元素：集合中不允许存在重复的元素，因此可以用集合来去除列表、元组等可迭代对象中的重复元素，得到唯一的元素集合。</li><li>数学集合运算：集合支持交集、并集、差集等数学运算，可以方便地进行数据处理和分析。</li><li>快速查找：集合内部使用哈希表实现，可以在O(1)的时间复杂度内进行元素查找，适用于大规模数据的查找。</li></ol><p>常用的集合方法包括：</p><ol><li><code>set()</code>: 创建一个空集合。</li><li><code>set(iterable)</code>: 创建一个包含<code>iterable</code>中元素的集合。</li><li><code>len(s)</code>: 返回集合<code>s</code>中元素的个数。</li><li><code>x in s</code>: 判断元素<code>x</code>是否在集合<code>s</code>中，返回<code>True</code>或<code>False</code>。</li><li><code>s.add(x)</code>: 向集合<code>s</code>中添加元素<code>x</code>，如果<code>x</code>已经存在，则不进行操作。</li><li><code>s.remove(x)</code>: 从集合<code>s</code>中移除元素<code>x</code>，如果<code>x</code>不存在，会抛出<code>KeyError</code>异常。</li><li><code>s.discard(x)</code>: 从集合<code>s</code>中移除元素<code>x</code>，如果<code>x</code>不存在，不会抛出异常。</li><li><code>s.clear()</code>: 清空集合<code>s</code>，使其变为空集合。</li><li><code>s.union(t)</code>, <code>s | t</code>: 返回<code>s</code>和<code>t</code>的并集。</li><li><code>s.intersection(t)</code>, <code>s &amp; t</code>: 返回<code>s</code>和<code>t</code>的交集。</li><li><code>s.difference(t)</code>, <code>s - t</code>: 返回<code>s</code>和<code>t</code>的差集。</li><li><code>s.symmetric_difference(t)</code>, <code>s ^ t</code>: 返回<code>s</code>和<code>t</code>的对称差集（即在<code>s</code>或<code>t</code>中，但不同时在二者中的元素）。</li><li><code>s.issubset(t)</code>, <code>s &lt;= t</code>: 判断<code>s</code>是否为<code>t</code>的子集，返回<code>True</code>或<code>False</code>。</li><li><code>s.issuperset(t)</code>, <code>s &gt;= t</code>: 判断<code>s</code>是否为<code>t</code>的超集，返回<code>True</code>或<code>False</code>。</li></ol><p>以下是一些使用集合的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建集合</span>
s <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment"># Output: {1, 2, 3, 4, 5}</span>

<span class="token comment"># 去除重复元素</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
unique_set <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>unique_set<span class="token punctuation">)</span>  <span class="token comment"># Output: {1, 2, 3, 4, 5}</span>

<span class="token comment"># 集合运算</span>
set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Output: {1, 2, 3, 4, 5}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span>intersection<span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Output: {3}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Output: {1, 2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，集合在Python中是一种非常有用的数据结构，可以快速高效地处理不重复的元素集合。</p><h4 id="映射类型-字典" tabindex="-1"><a class="header-anchor" href="#映射类型-字典" aria-hidden="true">#</a> 映射类型(字典)</h4><ul><li>字典</li><li>默认字典</li><li>有序字典</li></ul><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><h3 id="引发异常" tabindex="-1"><a class="header-anchor" href="#引发异常" aria-hidden="true">#</a> 引发异常</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 引发异常</span>
<span class="token keyword">raise</span> Exception
<span class="token keyword">raise</span> exception<span class="token punctuation">(</span>args<span class="token punctuation">)</span>
<span class="token keyword">raise</span> exception<span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token keyword">from</span> original_exception
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义异常类" tabindex="-1"><a class="header-anchor" href="#自定义异常类" aria-hidden="true">#</a> 自定义异常类</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SomeCustomException</span><span class="token punctuation">(</span>Exception<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>自定义异常跳出循环</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>found <span class="token operator">=</span> <span class="token boolean">False</span>
table <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> row<span class="token punctuation">,</span> record <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> column<span class="token punctuation">,</span> field <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> index<span class="token punctuation">,</span> item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> item <span class="token operator">==</span><span class="token operator">=</span> target<span class="token punctuation">:</span>
                found <span class="token operator">=</span> <span class="token boolean">True</span>
                <span class="token keyword">break</span>
        <span class="token keyword">if</span> found<span class="token punctuation">:</span>
            <span class="token keyword">break</span>
    <span class="token keyword">if</span> found<span class="token punctuation">:</span>
        <span class="token keyword">break</span>
<span class="token keyword">if</span> found<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;found at ({0},{1},{2}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> column<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;not found&#39;</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 以下是通过异常跳出循环

<span class="token keyword">class</span> <span class="token class-name">FoundException</span><span class="token punctuation">(</span>Exception<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">pass</span>


<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> row<span class="token punctuation">,</span> record <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> column<span class="token punctuation">,</span> field <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> index<span class="token punctuation">,</span> item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> item <span class="token operator">==</span> target<span class="token punctuation">:</span>
                    <span class="token keyword">raise</span> FoundException<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> FoundException<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;found at ({0},{1},{2}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> column<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="捕获异常" tabindex="-1"><a class="header-anchor" href="#捕获异常" aria-hidden="true">#</a> 捕获异常</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    muffed <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>
        <span class="token keyword">if</span> muffed<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;err&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError <span class="token keyword">from</span> <span class="token boolean">None</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    muffed <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> <span class="token punctuation">(</span>ZeroDivisionError<span class="token punctuation">,</span>ValueError<span class="token punctuation">,</span>NameError<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> muffed<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;err&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError <span class="token keyword">from</span> <span class="token boolean">None</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="捕获对象" tabindex="-1"><a class="header-anchor" href="#捕获对象" aria-hidden="true">#</a> 捕获对象</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    muffed <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> <span class="token punctuation">(</span>ZeroDivisionError<span class="token punctuation">,</span>ValueError<span class="token punctuation">,</span>NameError<span class="token punctuation">)</span> <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">if</span> muffed<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError <span class="token keyword">from</span> <span class="token boolean">None</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="else" tabindex="-1"><a class="header-anchor" href="#else" aria-hidden="true">#</a> else</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    muffed <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> <span class="token punctuation">(</span>ZeroDivisionError<span class="token punctuation">,</span> ValueError<span class="token punctuation">,</span> NameError<span class="token punctuation">)</span> <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">if</span> muffed<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> ValueError <span class="token keyword">from</span> <span class="token boolean">None</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 只有不出现异常才会退出</span>
            <span class="token keyword">break</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    muffed <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> <span class="token punctuation">(</span>ZeroDivisionError<span class="token punctuation">,</span> ValueError<span class="token punctuation">,</span> NameError<span class="token punctuation">)</span> <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">if</span> muffed<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> ValueError <span class="token keyword">from</span> <span class="token boolean">None</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 只有不出现异常才会退出</span>
            <span class="token keyword">break</span>
        <span class="token keyword">finally</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Cleaning up...&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">del</span> muffed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常应用" tabindex="-1"><a class="header-anchor" href="#异常应用" aria-hidden="true">#</a> 异常应用</h3><p>检查字典中是否有值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">describe_person</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Description of&#39;</span><span class="token punctuation">,</span>person<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Age&#39;</span><span class="token punctuation">,</span>person<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Occupation:&#39;</span><span class="token punctuation">,</span>person<span class="token punctuation">[</span><span class="token string">&#39;occupation&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment"># 如果键不存在则引发keyerror异常</span>
    <span class="token keyword">except</span> KeyError<span class="token punctuation">:</span><span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查是否有特定属性</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    obj<span class="token punctuation">.</span>write
<span class="token keyword">except</span> AttributeError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;The object is not writeable&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;The obect is writeable&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发出警告" tabindex="-1"><a class="header-anchor" href="#发出警告" aria-hidden="true">#</a> 发出警告</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> warnings <span class="token keyword">import</span> warn
warn<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> warnings <span class="token keyword">import</span> filterwarnings
<span class="token keyword">from</span> warnings <span class="token keyword">import</span> warn
<span class="token comment"># 过滤警告</span>
filterwarnings<span class="token punctuation">(</span><span class="token string">&quot;ignore&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 引发警告</span>
warn<span class="token punctuation">(</span><span class="token string">&quot;something is very wrong&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2><h3 id="函数基础" tabindex="-1"><a class="header-anchor" href="#函数基础" aria-hidden="true">#</a> 函数基础</h3><h4 id="任意数量实参" tabindex="-1"><a class="header-anchor" href="#任意数量实参" aria-hidden="true">#</a> 任意数量实参</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token operator">*</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> data<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
test<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">2</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任意数量关键字实参" tabindex="-1"><a class="header-anchor" href="#任意数量关键字实参" aria-hidden="true">#</a> 任意数量关键字实参</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span>last<span class="token punctuation">,</span><span class="token operator">**</span>user_info<span class="token punctuation">)</span><span class="token punctuation">:</span>
  profile <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  profile<span class="token punctuation">[</span><span class="token string">&#39;first_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> first
  profile<span class="token punctuation">[</span><span class="token string">&#39;last_name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> last
  <span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token keyword">in</span> user_info<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    profile<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">=</span>v
  <span class="token keyword">return</span> profile

user_profile <span class="token operator">=</span> test<span class="token punctuation">(</span><span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;gang&#39;</span><span class="token punctuation">,</span>location<span class="token operator">=</span><span class="token string">&quot;beijing&quot;</span><span class="token punctuation">,</span>field<span class="token operator">=</span><span class="token string">&#39;physis&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="强制关键字参数" tabindex="-1"><a class="header-anchor" href="#强制关键字参数" aria-hidden="true">#</a> 强制关键字参数</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">safe_division_c</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span>divisor<span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">,</span>ignore_oveflow<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>ignore_zero_division<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数拆分" tabindex="-1"><a class="header-anchor" href="#参数拆分" aria-hidden="true">#</a> 参数拆分</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>params<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
add<span class="token punctuation">(</span><span class="token operator">*</span>params<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">3</span>
params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;range&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">}</span>
prs<span class="token punctuation">(</span><span class="token operator">**</span>params<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="作用域嵌套" tabindex="-1"><a class="header-anchor" href="#作用域嵌套" aria-hidden="true">#</a> 作用域嵌套</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">mult</span><span class="token punctuation">(</span>factor<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">multe</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> number<span class="token operator">*</span>factor
    <span class="token keyword">return</span> multe
double <span class="token operator">=</span> mult<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>double<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h4><p>阶乘</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 循环实现</span>
<span class="token keyword">def</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
  result<span class="token operator">=</span>n
  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">*=</span>i
  <span class="token keyword">return</span> result
<span class="token comment"># 递归实现</span>
<span class="token keyword">def</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n<span class="token operator">*</span>factorial<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>factorial<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>求冥</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 循环实现</span>
<span class="token keyword">def</span> <span class="token function">power</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
  result<span class="token operator">=</span><span class="token number">1</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">*=</span>x
  <span class="token keyword">return</span> result
<span class="token comment"># 递归实现</span>
<span class="token keyword">def</span> <span class="token function">power</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x<span class="token operator">*</span>power<span class="token punctuation">(</span>x<span class="token punctuation">,</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数式编程" tabindex="-1"><a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a> 函数式编程</h4><p>字典</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> x<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
seq<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;x41&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;?!&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;***&quot;</span><span class="token punctuation">]</span>
<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">filter</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span>sqe<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;x41&#39;</span><span class="token punctuation">]</span>
<span class="token comment"># 列表推导式替代</span>
<span class="token punctuation">[</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> sqe <span class="token keyword">if</span> x<span class="token punctuation">.</span>isalnum<span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;x41&#39;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="序列模式匹配" tabindex="-1"><a class="header-anchor" href="#序列模式匹配" aria-hidden="true">#</a> 序列模式匹配</h4><p>在 Python 3.10 中引入了 <code>match</code> 语句，它是一种序列模式匹配的机制，用于更清晰和简洁地处理多种条件分支情况。<code>match</code> 语句在处理类似于 <code>switch</code> 语句的情况时非常有用，可以让代码更易读、易维护。</p><p>以下是 Python 3.10 中使用 <code>match</code> 语句的基本语法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
<span class="token keyword">match</span> value<span class="token punctuation">:</span>
    <span class="token keyword">case</span> pattern1<span class="token punctuation">:</span>
        <span class="token comment"># 执行与 pattern1 匹配时的操作</span>
    <span class="token keyword">case</span> pattern2<span class="token punctuation">:</span>
        <span class="token comment"># 执行与 pattern2 匹配时的操作</span>
    <span class="token keyword">case</span> pattern3<span class="token punctuation">:</span>
        <span class="token comment"># 执行与 pattern3 匹配时的操作</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">case</span> <span class="token keyword">_</span><span class="token punctuation">:</span>
        <span class="token comment"># 当没有任何模式匹配时的默认操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>value</code> 是要匹配的值，每个 <code>case</code> 子句中的 <code>pattern</code> 表示一种匹配模式，当 <code>value</code> 匹配到某个模式时，就会执行相应的操作。最后一个 <code>case</code> 子句中的 <code>_</code> 表示默认情况，即当没有任何模式匹配时执行的操作。</p><p>值得注意的是，Python 的 <code>match</code> 语句可以处理不同的数据类型，包括整数、字符串、列表、元组等。在实际使用中，你可以根据实际需求来编写不同的匹配模式和操作。</p><p>以下是一个简单的示例，展示了如何在 Python 3.10 中使用 <code>match</code> 语句：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
<span class="token keyword">def</span> <span class="token function">process_data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">match</span> data<span class="token punctuation">:</span>
        <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数据为零&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数据为一&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数据为大于一的整数&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token builtin">str</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;数据为字符串：</span><span class="token interpolation"><span class="token punctuation">{</span>s<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token keyword">_</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;无法识别的数据&quot;</span><span class="token punctuation">)</span>

data_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> data <span class="token keyword">in</span> data_list<span class="token punctuation">:</span>
    process_data<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，Python 3.10 中的 <code>match</code> 语句为处理多条件分支提供了更具表达力和可读性的方式，可以让你更好地组织和管理代码。</p><blockquote><p>序列匹配</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">handle_command</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">match</span> message<span class="token punctuation">:</span>
        <span class="token keyword">case</span> <span class="token punctuation">[</span><span class="token string">&#39;BEEPER&#39;</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">,</span> times<span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token comment"># 当test不是int类型的时候无法进行匹配</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> times<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token punctuation">[</span>test<span class="token punctuation">,</span> times<span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> times<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> <span class="token punctuation">(</span>lat<span class="token punctuation">,</span> lon<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> lon<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token keyword">_</span><span class="token punctuation">:</span>
            <span class="token comment">#</span>
            <span class="token keyword">raise</span> ImportWarning


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    handle_command<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;BEEPER&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    handle_command<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数方法" tabindex="-1"><a class="header-anchor" href="#函数方法" aria-hidden="true">#</a> 函数方法</h3><h4 id="函数判断" tabindex="-1"><a class="header-anchor" href="#函数判断" aria-hidden="true">#</a> 函数判断</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math
x<span class="token operator">=</span><span class="token number">1</span>
y<span class="token operator">=</span>math<span class="token punctuation">.</span>sqrt
<span class="token builtin">callable</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">False</span>
<span class="token builtin">callable</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数文档" tabindex="-1"><a class="header-anchor" href="#函数文档" aria-hidden="true">#</a> 函数文档</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token string">&#39;return a+b&#39;</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b
<span class="token comment"># 打印文档</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span>__doc__<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;return a+b&#39;</span>
<span class="token comment"># 查看文档</span>
<span class="token builtin">help</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> 
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Help on function add in module __main__:
		add(a, b)
			return a+b
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;模拟汽车&quot;&quot;&quot;</span>
  
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>make<span class="token punctuation">,</span>model<span class="token punctuation">,</span>year<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;初始化描述汽车的属性&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="私有属性" tabindex="-1"><a class="header-anchor" href="#私有属性" aria-hidden="true">#</a> 私有属性</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Secretive</span><span class="token punctuation">:</span>
	<span class="token keyword">def</span> <span class="token function">__inaccessible</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Bet you can&#39;t see me ...&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">def</span> <span class="token function">accessible</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The secret message is:&quot;</span><span class="token punctuation">)</span> self<span class="token punctuation">.</span>__inaccessible<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="超类" tabindex="-1"><a class="header-anchor" href="#超类" aria-hidden="true">#</a> 超类</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Filter</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>blocked <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">filter</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> sequence<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> sequence <span class="token keyword">if</span> x <span class="token keyword">not</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>blocked<span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">SPAMFilter</span><span class="token punctuation">(</span>Filter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>blocked <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;SPAM&#39;</span><span class="token punctuation">]</span>


s <span class="token operator">=</span> SPAMFilter<span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;SPAM&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;SPAM&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 确定是否是子类</span>
<span class="token builtin">issubclass</span><span class="token punctuation">(</span>SPAMFilter<span class="token punctuation">,</span>Filter<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span>
<span class="token comment"># 查找基类</span>
SPAMFilter<span class="token punctuation">.</span>__bases__
<span class="token comment"># 确定是否是类的实例</span>
<span class="token builtin">isinstance</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span>SPAMFilter<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span>
<span class="token comment"># 查找属于哪个类</span>
s<span class="token punctuation">.</span>__class__
<span class="token comment"># 检查方法是否存在</span>
<span class="token builtin">hasattr</span><span class="token punctuation">(</span>tc<span class="token punctuation">,</span><span class="token string">&#39;talk&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span>
<span class="token comment"># 检查方法是否存在，如果不存在则使用默认值</span>
<span class="token builtin">getattr</span><span class="token punctuation">(</span>tc<span class="token punctuation">,</span><span class="token string">&#39;talk&#39;</span><span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并发编程" tabindex="-1"><a class="header-anchor" href="#并发编程" aria-hidden="true">#</a> 并发编程</h3><h4 id="多线程-threading" tabindex="-1"><a class="header-anchor" href="#多线程-threading" aria-hidden="true">#</a> 多线程(threading)</h4><p>在 Python 中，你可以使用 <code>threading</code> 模块来实现多线程编程。多线程允许你在一个程序中并行执行多个任务，从而提高程序的性能和响应性。以下是一个简单的多线程示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pythonCopy code
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">print_numbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Number:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">print_letters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> letter <span class="token keyword">in</span> <span class="token string">&#39;abcde&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Letter:&quot;</span><span class="token punctuation">,</span> letter<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 创建线程对象</span>
thread1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>print_numbers<span class="token punctuation">)</span>
thread2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>print_letters<span class="token punctuation">)</span>

<span class="token comment"># 启动线程</span>
thread1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 等待线程完成</span>
thread1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Threads finished.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了两个线程，一个用于打印数字，另一个用于打印字母。通过调用 <code>start()</code> 方法，线程开始执行，而 <code>join()</code> 方法等待线程执行完成。这样，数字和字母将会交替地被打印。</p><p>需要注意的是，多线程可能涉及到共享资源的并发访问问题，需要特别注意避免竞态条件等问题。Python 还提供了 <code>threading.Lock</code> 类来帮助你管理线程间的共享资源。</p><p>另外，如果你的程序需要更高级的并发控制，还可以考虑使用 Python 的 <code>concurrent.futures</code> 模块中的 <code>ThreadPoolExecutor</code> 或 <code>ProcessPoolExecutor</code> 类，它们提供了更高级别的接口来管理线程池或进程池，从而更方便地进行并发编程。</p><h5 id="h5测试" tabindex="-1"><a class="header-anchor" href="#h5测试" aria-hidden="true">#</a> h5测试</h5><h4 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 抓取twitter timeline</span>

timeline <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;author&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;bobby&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tage&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;teacher&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;images&quot;</span><span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">&quot;a.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;b.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;timeline&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;create_time&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 数据表</span>
<span class="token comment"># timeline tags images retweet</span>

<span class="token comment"># 每个timeline的插入分成了多个线程的插入</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor<span class="token punctuation">,</span> ProcessPoolExecutor<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> ALL_COMPLETED<span class="token punctuation">,</span> as_completed


<span class="token comment"># 导入线程池和进程池</span>

<span class="token keyword">def</span> <span class="token function">sleep_task</span><span class="token punctuation">(</span>sleep_time<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;sleep %s s&quot;</span> <span class="token operator">%</span> sleep_time<span class="token punctuation">)</span>
   time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>sleep_time<span class="token punctuation">)</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span>


executor <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
task1 <span class="token operator">=</span> executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>sleep_task<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;bobby&quot;</span><span class="token punctuation">)</span>
task2 <span class="token operator">=</span> executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>sleep_task<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;bobby&quot;</span><span class="token punctuation">)</span>
task3 <span class="token operator">=</span> executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>sleep_task<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;bobby&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 取消任务，注意：运行中的程序是无法取消的</span>
task1<span class="token punctuation">.</span>cancel<span class="token punctuation">(</span><span class="token punctuation">)</span>
task2<span class="token punctuation">.</span>cancel<span class="token punctuation">(</span><span class="token punctuation">)</span>
task3<span class="token punctuation">.</span>cancel<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 查看任务是否完成</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>task1<span class="token punctuation">.</span>done<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 当某个线程完成后通知</span>
all_task <span class="token operator">=</span> <span class="token punctuation">[</span>task1<span class="token punctuation">,</span> task2<span class="token punctuation">,</span> task3<span class="token punctuation">]</span>
<span class="token keyword">for</span> task <span class="token keyword">in</span> as_completed<span class="token punctuation">(</span>all_task<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>
   <span class="token comment"># 获取返回值</span>
   <span class="token keyword">print</span><span class="token punctuation">(</span>task<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 等待线程完成</span>
<span class="token comment"># wait([task1,task2,task3],return_when=ALL_COMPLETED)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;main end&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># TODO:8-10</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级知识" tabindex="-1"><a class="header-anchor" href="#高级知识" aria-hidden="true">#</a> 高级知识</h2><h3 id="魔法方法-难点" tabindex="-1"><a class="header-anchor" href="#魔法方法-难点" aria-hidden="true">#</a> 魔法方法（难点）</h3><h4 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h4><p>在Python中，协议通常指的是规范行为的规则，有点类似于第7章提及的接口。协议指定 应实现哪些方法以及这些方法应做什么。在Python中，多态仅仅基于对象的行为(而不 基于祖先，如属于哪个类或其超类等)，因此这个概念很重要:其他的语言可能要求对象 属于特定的类或实现了特定的接口，而Python通常只要求对象遵循特定的协议。因此， 要成为序列，只需遵循序列协议即可</p><h4 id="基本的序列和映射协议" tabindex="-1"><a class="header-anchor" href="#基本的序列和映射协议" aria-hidden="true">#</a> 基本的序列和映射协议</h4><p>创建一个无穷序列</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">check_index</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    指定的键是否可接受的索引？

    键必须是非负整数，才是可接受的，如果不是整数，将引发TypeError异常。如果是负数，将引发IndexError异常
    :param key:
    :return:
    &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">raise</span> TypeError
    <span class="token keyword">if</span> key <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token keyword">raise</span> IndexError


<span class="token keyword">class</span> <span class="token class-name">ArithmeticSequence</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> step<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        初始化算术序列
        :param start: 序列第一个值
        :param step: 两个相邻值的差
        :param change:一个字典，包含用户修改的值
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>start <span class="token operator">=</span> start
        self<span class="token punctuation">.</span>step <span class="token operator">=</span> step
        self<span class="token punctuation">.</span>change <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        get a value from list
        :param key:
        :return:
        &quot;&quot;&quot;</span>
        check_index<span class="token punctuation">(</span>key<span class="token punctuation">)</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>change<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">except</span> KeyError<span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>start <span class="token operator">+</span> key <span class="token operator">*</span> self<span class="token punctuation">.</span>step

    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        修改算术序列中的元素
        :param key:
        :param value:
        :return:
        &quot;&quot;&quot;</span>

        check_index<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>change<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value

s <span class="token operator">=</span> ArithmeticSequence<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">6</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>change<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从list、dict和str派生" tabindex="-1"><a class="header-anchor" href="#从list、dict和str派生" aria-hidden="true">#</a> 从list、dict和str派生</h4><p>带访问计数器的列表</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
每当访问列表元素时，counter值加1
&quot;&quot;&quot;</span>


<span class="token keyword">class</span> <span class="token class-name">CounterList</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>CounterList<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__getitem__<span class="token punctuation">(</span>index<span class="token punctuation">)</span>


cl <span class="token operator">=</span> CounterList<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cl<span class="token punctuation">)</span>
cl<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cl<span class="token punctuation">.</span>counter<span class="token punctuation">)</span>
<span class="token keyword">del</span> cl<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cl<span class="token punctuation">.</span>counter<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cl<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">+</span> cl<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cl<span class="token punctuation">.</span>counter<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><h4 id="property" tabindex="-1"><a class="header-anchor" href="#property" aria-hidden="true">#</a> property</h4><p>在Python中，<code>property</code>是一种特殊的装饰器，用于将类的方法转换为属性。它允许我们在访问类的属性时执行自定义的获取、设置和删除逻辑，而不是直接访问属性本身。</p><p>通过使用<code>property</code>装饰器，我们可以定义一个方法，并将其标记为属性。这个方法分为三个部分：getter（获取器）、setter（设置器）和deleter（删除器）。每个部分都对应着属性的不同操作。</p><p>下面是一个使用<code>property</code>装饰器定义属性的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_my_property <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">my_property</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_my_property

    <span class="token decorator annotation punctuation">@my_property<span class="token punctuation">.</span>setter</span>
    <span class="token keyword">def</span> <span class="token function">my_property</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
      	<span class="token keyword">assert</span> value<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;radius must be nonzero and non-negative&quot;</span>
        self<span class="token punctuation">.</span>_my_property <span class="token operator">=</span> value

    <span class="token decorator annotation punctuation">@my_property<span class="token punctuation">.</span>deleter</span>
    <span class="token keyword">def</span> <span class="token function">my_property</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">del</span> self<span class="token punctuation">.</span>_my_property
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们定义了一个名为<code>my_property</code>的属性，并使用<code>@property</code>装饰器将方法<code>my_property</code>标记为getter。然后，我们使用<code>@my_property.setter</code>装饰器定义了一个名为<code>my_property</code>的setter方法。最后，我们使用<code>@my_property.deleter</code>装饰器定义了一个名为<code>my_property</code>的deleter方法。</p><p>现在，我们可以通过直接访问属性来获取、设置和删除<code>my_property</code>。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>obj <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>my_property <span class="token operator">=</span> <span class="token number">10</span>  <span class="token comment"># 调用setter方法，设置属性值为10</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>my_property<span class="token punctuation">)</span>  <span class="token comment"># 调用getter方法，输出属性值</span>
<span class="token keyword">del</span> obj<span class="token punctuation">.</span>my_property  <span class="token comment"># 调用deleter方法，删除属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>property</code>装饰器可以让我们以属性的形式访问和操作数据，而不需要直接访问方法。这样，我们可以在属性的获取、设置和删除时执行自定义逻辑，例如数据验证、计算或日志记录等。</p><h4 id="getattr、setattr" tabindex="-1"><a class="header-anchor" href="#getattr、setattr" aria-hidden="true">#</a> <strong>getattr</strong>、<strong>setattr</strong></h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>__getattribute__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>在属性被访问时自动调用<span class="token punctuation">(</span>只适用于新式类<span class="token punctuation">)</span>。 
__getattr__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>在属性被访问而对象没有这样的属性时自动调用。 
__setattr__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>试图给属性赋值时自动调用。 
__delattr__<span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>试图删除属性时自动调用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器⭐</h3><h4 id="斐波那契数列" tabindex="-1"><a class="header-anchor" href="#斐波那契数列" aria-hidden="true">#</a> 斐波那契数列</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Fibs</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>a<span class="token punctuation">,</span> self<span class="token punctuation">.</span>b <span class="token operator">=</span> self<span class="token punctuation">.</span>b<span class="token punctuation">,</span> self<span class="token punctuation">.</span>a <span class="token operator">+</span> self<span class="token punctuation">.</span>b
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>a

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self


fibs <span class="token operator">=</span> Fibs<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> f <span class="token keyword">in</span> fibs<span class="token punctuation">:</span>
    <span class="token keyword">if</span> f <span class="token operator">&gt;</span> <span class="token number">1000</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
        <span class="token keyword">break</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建序列" tabindex="-1"><a class="header-anchor" href="#创建序列" aria-hidden="true">#</a> 创建序列</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TestIterator</span><span class="token punctuation">:</span>
    value <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">:</span> <span class="token keyword">raise</span> StopIteration
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>value

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self


ti <span class="token operator">=</span> TestIterator<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>ti<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器⭐</h3>`,160),k=a(`<h4 id="创建生成器" tabindex="-1"><a class="header-anchor" href="#创建生成器" aria-hidden="true">#</a> 创建生成器</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>nested <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">flatten</span><span class="token punctuation">(</span>nested<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> sublist <span class="token keyword">in</span> nested<span class="token punctuation">:</span>
        <span class="token keyword">for</span> element <span class="token keyword">in</span> sublist<span class="token punctuation">:</span>
            <span class="token keyword">yield</span> element


<span class="token keyword">for</span> num <span class="token keyword">in</span> flatten<span class="token punctuation">(</span>nested<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">2</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>flatten<span class="token punctuation">(</span>nested<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成器表达式" tabindex="-1"><a class="header-anchor" href="#生成器表达式" aria-hidden="true">#</a> 生成器表达式</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>g<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">16</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归式生成器" tabindex="-1"><a class="header-anchor" href="#递归式生成器" aria-hidden="true">#</a> 递归式生成器</h4><p>当需要不定数量的循环时可以使用递归</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 这里需要检查对象是否为字符串</span>
<span class="token keyword">def</span> <span class="token function">flatten</span><span class="token punctuation">(</span>nested<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
      <span class="token comment"># 不迭代字符串</span>
      	<span class="token keyword">try</span><span class="token punctuation">:</span> nested <span class="token operator">+</span><span class="token string">&#39;&#39;</span>
      <span class="token keyword">except</span> TypeError<span class="token punctuation">:</span><span class="token keyword">pass</span>
        <span class="token keyword">for</span> sublist <span class="token keyword">in</span> nested<span class="token punctuation">:</span>
            <span class="token keyword">for</span> element <span class="token keyword">in</span> flatten<span class="token punctuation">(</span>sublist<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">yield</span> element
    <span class="token keyword">except</span> TypeError<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> nested


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>flatten<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>
<span class="token comment">#如果表达式nested + &#39;&#39;引发了TypeError异常，就忽略这种异常;如果没有引发 TypeError异常，内部try语句中的else子句将引发TypeError异常，这样将在外部的excpet子句中 原封不动地生成类似于字符串的对象&#39;</span>
<span class="token builtin">list</span><span class="token punctuation">(</span>flatten<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;baz&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="八皇后问题-重点" tabindex="-1"><a class="header-anchor" href="#八皇后问题-重点" aria-hidden="true">#</a> 八皇后问题（重点）</h4><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><h4 id="断言" tabindex="-1"><a class="header-anchor" href="#断言" aria-hidden="true">#</a> 断言</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>assertEqual<span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> test a<span class="token operator">==</span>b
assertNotEqual<span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> test a<span class="token operator">!=</span>b
assertTrue<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> test x<span class="token operator">=</span><span class="token boolean">True</span>
assertFalse<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> test x<span class="token operator">=</span><span class="token boolean">False</span>
assertIn<span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> test item <span class="token keyword">in</span> <span class="token builtin">list</span>
assertNotIn<span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token builtin">list</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> test item <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单个函数测试" tabindex="-1"><a class="header-anchor" href="#单个函数测试" aria-hidden="true">#</a> 单个函数测试</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name_function<span class="token punctuation">.</span>py
<span class="token comment"># 功能函数</span>
<span class="token keyword">def</span> <span class="token function">get_formatted_name</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span>last<span class="token punctuation">,</span>middle<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;Generate a neatly formatted full name&quot;&quot;&quot;</span>
  <span class="token keyword">if</span> middle<span class="token punctuation">:</span>
    full_name <span class="token operator">=</span> first <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> middle <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> last
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    full_name <span class="token operator">=</span> first <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> last
  <span class="token keyword">return</span> full_name<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 测试</span>
test_name_function<span class="token punctuation">.</span>py
<span class="token comment"># 包</span>
<span class="token keyword">import</span> unittest
<span class="token keyword">from</span> name_function <span class="token keyword">import</span> get_formatted_name

<span class="token keyword">class</span> <span class="token class-name">NamesTestCase</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TextCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;测试name_function.py&quot;&quot;&quot;</span>
  <span class="token keyword">def</span> <span class="token function">test_fist_last_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;能否正确的处理Janis Joplin这样的函数吗？&quot;&quot;&quot;</span>
    formatted_name <span class="token operator">=</span> get_formatted_name<span class="token punctuation">(</span><span class="token string">&quot;janis&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;joplin&quot;</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>formatted_name<span class="token punctuation">,</span><span class="token string">&quot;Janis Joplin&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">test_first_last_middle_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;能够正确的处理像Wolfgang Amadeus Mozart这样的姓名吗？&quot;&quot;&quot;</span>
    formatted_name <span class="token operator">=</span> get_formatted_name<span class="token punctuation">(</span><span class="token string">&#39;wolfgang&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;mozart&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;amadeus&#39;</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>assertEqual<span class="token punctuation">(</span>formatted_name<span class="token punctuation">,</span><span class="token string">&#39;Wolfgang Amadeus Mozart&#39;</span><span class="token punctuation">)</span>
unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试类" tabindex="-1"><a class="header-anchor" href="#测试类" aria-hidden="true">#</a> 测试类</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>survey<span class="token punctuation">.</span>py
<span class="token keyword">class</span> <span class="token class-name">AnoymousSurvey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;收集匿名调查问卷的答案&quot;&quot;&quot;</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>question<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;储存一个问题，并为储存答案做准备&quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>question <span class="token operator">=</span> question
    self<span class="token punctuation">.</span>response <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">def</span> <span class="token function">show_question</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;显示调查文件&quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>question<span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">store_response</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>new_response<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;储存单份调查问卷答案&quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>respinse<span class="token punctuation">.</span>append<span class="token punctuation">(</span>new_response<span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">show_results</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;显示收集到的所有答卷&quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Survey results:&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> response <span class="token keyword">in</span> self<span class="token punctuation">.</span>response<span class="token punctuation">:</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> response<span class="token punctuation">)</span>
      
language_survey<span class="token punctuation">.</span>py
<span class="token triple-quoted-string string">&quot;&quot;&quot;使用survey.py&quot;&quot;&quot;</span>
<span class="token keyword">from</span> survey <span class="token keyword">import</span> AnonymousSurvey

<span class="token comment"># 定义一个问题</span>
question <span class="token operator">=</span> <span class="token string">&quot;What language did you first learn to speak?&quot;</span>
my_survey <span class="token operator">=</span> AnonymousSurvey<span class="token punctuation">(</span>question<span class="token punctuation">)</span>
<span class="token comment"># 显示问题并储存答案</span>
my_survey<span class="token punctuation">.</span>show_question<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Enter &#39;q&#39; at any time to quit.\\n&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
  response <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Language:&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> response <span class="token operator">==</span> <span class="token string">&#39;q&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">break</span>
  my_survey<span class="token punctuation">.</span>store_response<span class="token punctuation">(</span>response<span class="token punctuation">)</span>

<span class="token comment"># 显示调查结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Thank you to everyone who participated in the survey&quot;</span><span class="token punctuation">)</span>
my_survey<span class="token punctuation">.</span>show_results<span class="token punctuation">(</span><span class="token punctuation">)</span>

test_survey<span class="token punctuation">.</span>py
<span class="token keyword">import</span> unittest
<span class="token keyword">from</span> survey <span class="token keyword">import</span> AnonymousSurvey

<span class="token keyword">class</span> <span class="token class-name">TestAnonymousSurvey</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;针对AnonymousSurey类的测试&quot;&quot;&quot;</span>
  <span class="token keyword">def</span> <span class="token function">setUp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;创建一个调查对象和一组答案，供使用的测试方法使用&quot;&quot;&quot;</span>
    question <span class="token operator">=</span> <span class="token string">&quot;What language did you first learn to speak?&quot;</span>
    self<span class="token punctuation">.</span>my_survey <span class="token operator">=</span> AnonymousSurvey<span class="token punctuation">(</span>question<span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>responses <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Spanish&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Mandarin&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">def</span> <span class="token function">test_store_single_response</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;测试单个答案会被妥善地储存&quot;&quot;&quot;</span>
    self<span class="token punctuation">.</span>my_survey<span class="token punctuation">.</span>store_response<span class="token punctuation">(</span>self<span class="token punctuation">.</span>responses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>assertIn<span class="token punctuation">(</span>self<span class="token punctuation">.</span>responses<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>self<span class="token punctuation">.</span>my_survey<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">test_store_three_response</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;测试三个答案会被妥善地储存&quot;&quot;&quot;</span>
    <span class="token keyword">for</span> response <span class="token keyword">in</span> self<span class="token punctuation">.</span>response<span class="token punctuation">:</span>
      self<span class="token punctuation">.</span>my_survey<span class="token punctuation">.</span>store_response<span class="token punctuation">(</span>response<span class="token punctuation">)</span>
    <span class="token keyword">for</span> response <span class="token keyword">in</span> self<span class="token punctuation">.</span>response<span class="token punctuation">:</span>
      self<span class="token punctuation">.</span>assertIn<span class="token punctuation">(</span>response<span class="token punctuation">,</span>self<span class="token punctuation">.</span>my_survey<span class="token punctuation">.</span>responses<span class="token punctuation">)</span>
      
unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h3><h4 id="简单服务器" tabindex="-1"><a class="header-anchor" href="#简单服务器" aria-hidden="true">#</a> 简单服务器</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 启动一个简单服务器</span>
python <span class="token operator">-</span>m http<span class="token punctuation">.</span>server <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> Socket</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token comment"># 创建socket对象，指定传输协议</span>
s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_STREAM<span class="token punctuation">)</span>
s<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token string">&quot;hello socket&quot;</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>socket编程</p><p><img src="https://typoras.oss-cn-hangzhou.aliyuncs.com/typora_images/image-20220414232508997.png" alt="image-20220414232508997"></p><p>socket服务端</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># socker server</span>
<span class="token keyword">import</span> socket
<span class="token keyword">import</span> threading

server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">handle_sock</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span>addr<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        temp_data <span class="token operator">=</span> sock<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>temp_data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        input_date <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        sock<span class="token punctuation">.</span>send<span class="token punctuation">(</span>input_date<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 获取客户端连接并启动线程去处理</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 阻塞等待连接</span>
    sock<span class="token punctuation">,</span>addr <span class="token operator">=</span> server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 启动一个线程去处理新的用户连接</span>
    client_thread <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>handle_sock<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span>addr<span class="token punctuation">)</span><span class="token punctuation">)</span>
    client_thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client客户端</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># socket客户端</span>
<span class="token keyword">import</span> socket
client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>
client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.0.105&quot;</span><span class="token punctuation">,</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># client.send(b&quot;bobby&quot;)</span>
<span class="token comment"># server_data = client.recv(1024)</span>
<span class="token comment"># print(&quot;server response:{}&quot;.format(server_data.decode(&quot;utf8&quot;)))</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    input_data <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    client<span class="token punctuation">.</span>send<span class="token punctuation">(</span>input_data<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    server_data <span class="token operator">=</span> client<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;server response:{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>server_data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># client.close()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行字符串" tabindex="-1"><a class="header-anchor" href="#执行字符串" aria-hidden="true">#</a> 执行字符串</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token string">&quot;print(&#39;Hello World&#39;)&quot;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hello world
<span class="token comment"># 提供作用域（推荐）</span>
<span class="token keyword">from</span> math <span class="token keyword">import</span> sqrt
scope<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token string">&#39;sqrt=1&#39;</span><span class="token punctuation">,</span>scope<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sqrt<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>scope<span class="token punctuation">[</span><span class="token string">&#39;sqrt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">2.0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>scope<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
scope<span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span>
scope<span class="token punctuation">[</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token string">&#39;x*y&#39;</span><span class="token punctuation">,</span>scope<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><p><a href="packaging.python.org">打包指南</a></p><h2 id="python面向对象" tabindex="-1"><a class="header-anchor" href="#python面向对象" aria-hidden="true">#</a> Python面向对象</h2><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><blockquote><p>继承list</p></blockquote><p>继承list后<code>ContactList</code>的行为就会像一个list，增加搜索功能</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ContactList</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        return all contacts that contain the search value in their name
        :param name:
        :return:
        &quot;&quot;&quot;</span>
        matching_contacts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> contact <span class="token keyword">in</span> self<span class="token punctuation">:</span>
            <span class="token keyword">if</span> name <span class="token keyword">in</span> contact<span class="token punctuation">.</span>name<span class="token punctuation">:</span>
                matching_contacts<span class="token punctuation">.</span>append<span class="token punctuation">(</span>contact<span class="token punctuation">)</span>
        <span class="token keyword">return</span> matching_contacts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>继承dict</p></blockquote><p>查找到最长的key</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">LongNameDict</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">longest_key</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        longest <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token keyword">for</span> key <span class="token keyword">in</span> self<span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> longest <span class="token keyword">or</span> <span class="token builtin">len</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>longest<span class="token punctuation">)</span><span class="token punctuation">:</span>
                longest <span class="token operator">=</span> key
        <span class="token keyword">return</span> longest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>多重继承</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Contact</span><span class="token punctuation">:</span>
    all_contacts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> email<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>email <span class="token operator">=</span> email
        self<span class="token punctuation">.</span>all_contacts<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">AddressHolder</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> street<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> city<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> state<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> code<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>street <span class="token operator">=</span> street
        self<span class="token punctuation">.</span>city <span class="token operator">=</span> city
        self<span class="token punctuation">.</span>state <span class="token operator">=</span> state
        self<span class="token punctuation">.</span>code <span class="token operator">=</span> code


<span class="token keyword">class</span> <span class="token class-name">Friend</span><span class="token punctuation">(</span>Contact<span class="token punctuation">,</span> AddressHolder<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> phone<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>phone <span class="token operator">=</span> phone

friend <span class="token operator">=</span> Friend<span class="token punctuation">(</span>phone<span class="token operator">=</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&#39;测试&#39;</span><span class="token punctuation">,</span>city<span class="token operator">=</span><span class="token string">&#39;北京&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>friend<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class AudioFile:
    def __init__(self, filename):
        if not filename.endswith(self.ext):
            raise Exception(&quot;Invalid file format&quot;)
        self.filename = filename


class MP3File(AudioFile):
    ext = &quot;mp3&quot;

    def play(self):
        print(&quot;playing {} as mp3&quot;.format(self.filename))


class WavFile(AudioFile):
    ext = &quot;wav&quot;

    def play(self):
        print(&quot;playing {} as wav&quot;.format(self.filename))


class OggFile(AudioFile):
    ext = &quot;ogg&quot;

    def play(self):
        print(&quot;playing {} as ogg&quot;.format(self.filename))


ogg = OggFile(&quot;myfile.ogg&quot;)
ogg.play() # &gt;&gt;&gt; playing myfile.ogg as ogg


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象基类" tabindex="-1"><a class="header-anchor" href="#抽象基类" aria-hidden="true">#</a> 抽象基类</h3><blockquote><p>基本抽象基类</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Container


<span class="token keyword">class</span> <span class="token class-name">OddContainer</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__contains__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token keyword">not</span> item <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>


odd_container <span class="token operator">=</span> OddContainer<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">isinstance</span><span class="token punctuation">(</span>odd_container<span class="token punctuation">,</span> Container<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &gt;&gt;&gt; True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">in</span> odd_container<span class="token punctuation">)</span>  <span class="token comment"># &gt;&gt;&gt; True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token keyword">in</span> odd_container<span class="token punctuation">)</span>  <span class="token comment"># &gt;&gt;&gt; False</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>创建抽象基类</p></blockquote><h2 id="流畅的python" tabindex="-1"><a class="header-anchor" href="#流畅的python" aria-hidden="true">#</a> 流畅的Python</h2><h3 id="python风格纸牌" tabindex="-1"><a class="header-anchor" href="#python风格纸牌" aria-hidden="true">#</a> Python风格纸牌</h3><p>该示例展示了 <code>__getitem__</code>和<code>__len__</code>两个特殊方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> collections

Card <span class="token operator">=</span> collections<span class="token punctuation">.</span>namedtuple<span class="token punctuation">(</span><span class="token string">&#39;Card&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;rank&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;suit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">FrenchDeck</span><span class="token punctuation">:</span>
    ranks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token string">&#39;JQKA&#39;</span><span class="token punctuation">)</span>
    suits <span class="token operator">=</span> <span class="token string">&#39;spades diamonds clubs hearts&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_cards <span class="token operator">=</span> <span class="token punctuation">[</span>Card<span class="token punctuation">(</span>rank<span class="token punctuation">,</span> suit<span class="token punctuation">)</span> <span class="token keyword">for</span> suit <span class="token keyword">in</span> self<span class="token punctuation">.</span>suits <span class="token keyword">for</span> rank <span class="token keyword">in</span> self<span class="token punctuation">.</span>ranks<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_cards<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_cards<span class="token punctuation">[</span>item<span class="token punctuation">]</span>


beer_card <span class="token operator">=</span> Card<span class="token punctuation">(</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;diamonds&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>beer_card<span class="token punctuation">)</span>
<span class="token comment"># &gt;&gt;&gt; by print(beer_card)</span>
Card<span class="token punctuation">(</span>rank<span class="token operator">=</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span> suit<span class="token operator">=</span><span class="token string">&#39;diamonds&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准则" tabindex="-1"><a class="header-anchor" href="#准则" aria-hidden="true">#</a> 准则</h3><h4 id="第23条-简单的接口应该接受函数-而不是类的实例" tabindex="-1"><a class="header-anchor" href="#第23条-简单的接口应该接受函数-而不是类的实例" aria-hidden="true">#</a> 第23条：简单的接口应该接受函数，而不是类的实例⭐</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Socrates&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Archimedes&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Plato&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Aristotle&#39;</span><span class="token punctuation">]</span>
    names<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>defaultdict示例</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> defaultdict


<span class="token keyword">def</span> <span class="token function">log_missing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;
        当 defaultdict中没有待查询的键时用该函数创建新值
        :return:
        &quot;&quot;&quot;</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Key added&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token number">0</span> 


current <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
increments <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
<span class="token comment"># 正常实现</span>
<span class="token comment"># for k,v in increments:</span>
<span class="token comment">#     if k not in current.keys():</span>
<span class="token comment">#         current[k] = v</span>
<span class="token comment">#     else:</span>
<span class="token comment">#         current[k] += v</span>
<span class="token comment"># print(current)</span>

<span class="token comment"># defaultdict实现</span>
<span class="token comment"># 构建一个新的字典对象</span>
result <span class="token operator">=</span> defaultdict<span class="token punctuation">(</span>log_missing<span class="token punctuation">,</span> current<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> amount <span class="token keyword">in</span> increments<span class="token punctuation">:</span>
  result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+=</span> amount
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>defaultdict+类示例</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> defaultdict

current <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
increments <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">BetterCountMissing</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>added <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>added <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token number">0</span>


counter <span class="token operator">=</span> BetterCountMissing<span class="token punctuation">(</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> defaultdict<span class="token punctuation">(</span>counter<span class="token punctuation">,</span> current<span class="token punctuation">)</span>
<span class="token keyword">for</span> key<span class="token punctuation">,</span> amount <span class="token keyword">in</span> increments<span class="token punctuation">:</span>
    result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">+=</span> amount
<span class="token keyword">assert</span> counter<span class="token punctuation">.</span>added <span class="token operator">==</span> <span class="token number">2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第24条-以-classmethod形式的多态去通用地构建对象" tabindex="-1"><a class="header-anchor" href="#第24条-以-classmethod形式的多态去通用地构建对象" aria-hidden="true">#</a> 第24条：以@classmethod形式的多态去通用地构建对象⭐</h4><blockquote><p>无多态形式的实现</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 以下功能是为了实现一套MapReduce流程</span>
<span class="token keyword">import</span> os
<span class="token keyword">import</span> tempfile


<span class="token comment"># 公共基类表示输入的数据，其中的read方法必须由子类实现</span>
<span class="token keyword">class</span> <span class="token class-name">InputData</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">read</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> NotImplementedError


<span class="token comment"># InoutData类的具体子类，从磁盘文件中读取数据</span>
<span class="token keyword">class</span> <span class="token class-name">PathInputData</span><span class="token punctuation">(</span>InputData<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>path <span class="token operator">=</span> path

    <span class="token keyword">def</span> <span class="token function">read</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 以下是为了定义MapReduce工作线程的抽象接口，使用标准的方式来处理输入的数据</span>
<span class="token keyword">class</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> input_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>input_data <span class="token operator">=</span> input_data
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">map</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> NotImplementedError

    <span class="token keyword">def</span> <span class="token function">reduce</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> NotImplementedError


<span class="token comment"># 以下类是为了实现我们需要的MapReduce功能，该功能是为了实现一个简单的换行符计数器</span>
<span class="token keyword">class</span> <span class="token class-name">LineCountWorker</span><span class="token punctuation">(</span>Worker<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">map</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> self<span class="token punctuation">.</span>input_data<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> data<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">reduce</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>result <span class="token operator">+=</span> other<span class="token punctuation">.</span>result


<span class="token comment"># 以下是使用方法，列出某个目录的内容，并为该目录下的每个文件创建一个PathInputData实例</span>
<span class="token keyword">def</span> <span class="token function">generate_inputs</span><span class="token punctuation">(</span>data_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> name <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>data_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> PathInputData<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>data_dir<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 使用 generate_inputs方法所返回的InputData实例来创建LineCountWorker实例</span>
<span class="token keyword">def</span> <span class="token function">create_workers</span><span class="token punctuation">(</span>input_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    workers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> input_data <span class="token keyword">in</span> input_list<span class="token punctuation">:</span>
        workers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>LineCountWorker<span class="token punctuation">(</span>input_data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> workers


<span class="token comment"># 执行任务，将MapReduce流程中的map步骤派发到多个线程之中，接下来反复调用reduce方法，将map步骤</span>
<span class="token comment"># 的结果合并成一个最终值</span>

<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>workers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    threads <span class="token operator">=</span> <span class="token punctuation">[</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>w<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">)</span> <span class="token keyword">for</span> w <span class="token keyword">in</span> workers<span class="token punctuation">]</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span> thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span> thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

    first<span class="token punctuation">,</span> rest <span class="token operator">=</span> workers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> workers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> worker <span class="token keyword">in</span> rest<span class="token punctuation">:</span>
        first<span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span>
    <span class="token keyword">return</span> first<span class="token punctuation">.</span>result


<span class="token comment"># 拼装上述代码，以便执行MapReduce流程的每个步骤</span>
<span class="token keyword">def</span> <span class="token function">mapreduce</span><span class="token punctuation">(</span>data_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
    inputs <span class="token operator">=</span> generate_inputs<span class="token punctuation">(</span>data_dir<span class="token punctuation">)</span>
    workers <span class="token operator">=</span> create_workers<span class="token punctuation">(</span>inputs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> execute<span class="token punctuation">(</span>workers<span class="token punctuation">)</span>


<span class="token keyword">from</span> tempfile <span class="token keyword">import</span> TemporaryDirectory


<span class="token keyword">def</span> <span class="token function">write_text_files</span><span class="token punctuation">(</span>tmpdir<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token keyword">with</span> TemporaryDirectory<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> tmpdir<span class="token punctuation">:</span>
    write_text_files<span class="token punctuation">(</span>tmpdir<span class="token punctuation">)</span>
    result <span class="token operator">=</span> mapreduce<span class="token punctuation">(</span>tmpdir<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;There are&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token string">&#39;lines&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>多态的形式实现</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 以下功能是为了实现一套MapReduce流程</span>
<span class="token keyword">import</span> os
<span class="token keyword">import</span> tempfile


<span class="token comment"># 公共基类表示输入的数据，其中的read方法必须由子类实现</span>
<span class="token comment"># 添加generate_inputs类方法，，根据通用的接口动态的创建新的InputData实例</span>
<span class="token keyword">class</span> <span class="token class-name">InputData</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">read</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> NotImplementedError

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">generate_inputs</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> NotImplementedError


<span class="token comment"># InoutData类的具体子类，从磁盘文件中读取数据</span>
<span class="token keyword">class</span> <span class="token class-name">PathInputData</span><span class="token punctuation">(</span>InputData<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>path <span class="token operator">=</span> path

    <span class="token keyword">def</span> <span class="token function">read</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">generate_inputs</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data_dir <span class="token operator">=</span> config<span class="token punctuation">[</span><span class="token string">&#39;data_dir&#39;</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> name <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>data_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">yield</span> cls<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>data_dir<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 以下是为了定义MapReduce工作线程的抽象接口，使用标准的方式来处理输入的数据</span>
<span class="token keyword">class</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> input_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>input_data <span class="token operator">=</span> input_data
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">map</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> NotImplementedError

    <span class="token keyword">def</span> <span class="token function">reduce</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> NotImplementedError

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">create_workers</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> input_class<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">:</span>
        workers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> inout_data <span class="token keyword">in</span> input_class<span class="token punctuation">.</span>generate_inputs<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">:</span>
            workers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cls<span class="token punctuation">(</span>inout_data<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> workers


<span class="token comment"># 以下类是为了实现我们需要的MapReduce功能，该功能是为了实现一个简单的换行符计数器</span>
<span class="token keyword">class</span> <span class="token class-name">LineCountWorker</span><span class="token punctuation">(</span>Worker<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">map</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> self<span class="token punctuation">.</span>input_data<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> data<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">reduce</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>result <span class="token operator">+=</span> other<span class="token punctuation">.</span>result


<span class="token comment"># 以下是使用方法，列出某个目录的内容，并为该目录下的每个文件创建一个PathInputData实例</span>
<span class="token keyword">def</span> <span class="token function">generate_inputs</span><span class="token punctuation">(</span>data_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> name <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>data_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> PathInputData<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>data_dir<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># 使用 generate_inputs方法所返回的InputData实例来创建LineCountWorker实例</span>
<span class="token keyword">def</span> <span class="token function">create_workers</span><span class="token punctuation">(</span>input_list<span class="token punctuation">)</span><span class="token punctuation">:</span>
    workers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> input_data <span class="token keyword">in</span> input_list<span class="token punctuation">:</span>
        workers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>LineCountWorker<span class="token punctuation">(</span>input_data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> workers


<span class="token comment"># 执行任务，将MapReduce流程中的map步骤派发到多个线程之中，接下来反复调用reduce方法，将map步骤</span>
<span class="token comment"># 的结果合并成一个最终值</span>

<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>workers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    threads <span class="token operator">=</span> <span class="token punctuation">[</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>w<span class="token punctuation">.</span><span class="token builtin">map</span><span class="token punctuation">)</span> <span class="token keyword">for</span> w <span class="token keyword">in</span> workers<span class="token punctuation">]</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span> thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> thread <span class="token keyword">in</span> threads<span class="token punctuation">:</span> thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

    first<span class="token punctuation">,</span> rest <span class="token operator">=</span> workers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> workers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> worker <span class="token keyword">in</span> rest<span class="token punctuation">:</span>
        first<span class="token punctuation">.</span><span class="token builtin">reduce</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span>
    <span class="token keyword">return</span> first<span class="token punctuation">.</span>result


<span class="token comment"># 拼装上述代码，以便执行MapReduce流程的每个步骤</span>
<span class="token keyword">def</span> <span class="token function">mapreduce</span><span class="token punctuation">(</span>worker_class<span class="token punctuation">,</span> input_class<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">:</span>
    workers <span class="token operator">=</span> worker_class<span class="token punctuation">.</span>create_workers<span class="token punctuation">(</span>input_class<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    <span class="token keyword">return</span> execute<span class="token punctuation">(</span>workers<span class="token punctuation">)</span>


<span class="token keyword">from</span> tempfile <span class="token keyword">import</span> TemporaryDirectory


<span class="token keyword">def</span> <span class="token function">write_text_files</span><span class="token punctuation">(</span>tmpdir<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token keyword">with</span> TemporaryDirectory<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> tmpdir<span class="token punctuation">:</span>
    write_text_files<span class="token punctuation">(</span>tmpdir<span class="token punctuation">)</span>
    config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;data_dir&#39;</span><span class="token punctuation">:</span> tmpdir<span class="token punctuation">}</span>
    result <span class="token operator">=</span> mapreduce<span class="token punctuation">(</span>LineCountWorker<span class="token punctuation">,</span> PathInputData<span class="token punctuation">,</span> config<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;There are&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token string">&#39;lines&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pep8" tabindex="-1"><a class="header-anchor" href="#pep8" aria-hidden="true">#</a> PEP8</h3>`,64),v={href:"https://peps.python.org/pep-0008/",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>PEP 8是Python的官方样式指南，以下是其中的一些主要原则：</p><ol><li><strong>缩进</strong>：使用4个空格作为每层缩进的宽度，不要使用制表符（Tab）。</li><li><strong>最大行宽</strong>：每行代码的长度不应超过79个字符。这使得代码在较小的显示器上也能方便地查看，并可以在同一屏幕上并排打开多个文件。</li><li><strong>空行</strong>：在顶层函数和类定义之间用两个空行隔开，类的方法定义之间用一个空行隔开。</li><li><strong>导入</strong>：每个导入语句应该在一行上独立出来，导入应该总是位于文件顶部，紧接着任何模块注释和文档字符串，并在模块全局变量和常量之前。</li><li><strong>空格</strong>：在二元运算符两侧放置一个空格，比如赋值（=），比较（==, &lt;, &gt;, !=, &lt;&gt;, &lt;=, &gt;=, in, not in, is, is not），布尔（and, or, not）。</li><li><strong>命名规范</strong>： <ul><li>类名应采用驼峰命名法，首字母大写，私有类可以以一个下划线开头；</li><li>函数名、变量名和属性名应该都是小写，可以使用下划线进行单词之间的分隔；</li><li>常量通常定义在模块级别，写成所有字母都大写，单词之间用下划线分隔的形式；</li><li>保护实例属性用一个下划线开头；</li><li>私有实例属性用两个下划线开头。</li></ul></li><li><strong>注释</strong>：应当使用完整的句子。如果注释是一个短语或句子，其首个单词应当大写，除非它是以小写字母开始的标识符（永远不改变标识符的大小写）。</li></ol><p>以上只是其中的一部分原则，PEP 8包含了更多详细的编码约定。如果需要深入了解，可以查阅PEP 8全文。</p><p>要注意的是，虽然这些原则是推荐的最佳实践，但在某些情况下，为了可读性或其他原因，可能需要适当地违反这些规则。如PEP 8文档所述：“这份指南是关于一致性的。一致性对于项目，和理想情况下对于全局都是重要的。但时刻记住，这些只是指南，不是法律。不要为了遵守这份指南，而打破向后兼容性，或者将个人的审美强加给别人。”</p><h3 id="生成器表达式-1" tabindex="-1"><a class="header-anchor" href="#生成器表达式-1" aria-hidden="true">#</a> 生成器表达式</h3><blockquote><p>📜简介</p></blockquote><p>生成器表达式是一种用于创建生成器的简洁语法。它类似于列表推导式，但使用圆括号而不是方括号。生成器表达式可以按需生成值，而不是一次性生成所有值。</p><p>生成器表达式的作用是在迭代过程中生成值，而不是一次性生成所有值。它适用于处理大量数据或需要按需生成值的情况，可以有效地节省内存空间和计算资源。</p><p>使用生成器表达式可以轻松地创建一个迭代器，通过迭代器逐个获取生成的值，而不需要一次性生成所有值并存储在内存中。这对于处理大型数据集或需要逐个处理数据的场景非常有用。此外，生成器表达式还可以与其他迭代器和生成器相关的功能和语法结构（如<code>for</code>循环、<code>yield</code>语句等）一起使用，提供更灵活和高效的数据处理方式。</p><blockquote><p>处理大量数据时使用生成器表达式</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>it <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;/tmp/myfile.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>roots<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>x<span class="token operator">**</span><span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> it<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">next</span><span class="token punctuation">(</span>roots<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">3.8782378892</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>改写直接返回列表的函数</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">index_words</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    将单词首字母添加到列表
    :param text:
    :return:
    &quot;&quot;&quot;</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> text<span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> letter <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> letter <span class="token operator">==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token keyword">def</span> <span class="token function">index_words_iter</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> text<span class="token punctuation">:</span>
        <span class="token keyword">yield</span> <span class="token number">0</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> letter <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> letter <span class="token operator">==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">yield</span> index <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h3><h4 id="enumerate" tabindex="-1"><a class="header-anchor" href="#enumerate" aria-hidden="true">#</a> enumerate</h4><p>使用 <code>emumerate</code>取代 <code>range</code></p><p><code>enumerate</code> 是 Python 内置函数，用于在迭代过程中同时获取元素的索引和值。它返回一个枚举对象，其中每个元素是一个包含索引和对应值的元组。</p><p><code>enumerate</code> 函数的语法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">enumerate</span><span class="token punctuation">(</span>iterable<span class="token punctuation">,</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>iterable</code>：表示要进行枚举的可迭代对象，例如列表、元组、字符串等。</li><li><code>start</code>（可选）：表示索引的起始值，默认为 0。</li></ul><p>使用 <code>enumerate</code> 函数可以更方便地遍历序列并获取元素的索引和值。下面是一个示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> index<span class="token punctuation">,</span> fruit <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fruit<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 apple
1 banana
2 orange
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在循环中，<code>enumerate</code> 函数将每个元素的索引和值组成一个元组，然后可以通过解构赋值的方式将索引赋值给 <code>index</code> 变量，将值赋值给 <code>fruit</code> 变量。</p><p>除了在循环中使用 <code>enumerate</code>，还可以将其结果转换为列表或字典等数据结构，根据需要进行进一步的处理和操作。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 转换为字典</span>
fruit_dict <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">enumerate</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruit_dict<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就可以通过索引快速访问对应的值。</p><h4 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> zip</h4><p>使用zip同时迭代两个迭代器，python2中应该使用<code>itertools</code>内置模块的<code>izip</code>函数。</p><p>如果两个迭代器长度不同：</p><ul><li>python3中可以使用<code>itertools</code>中的<code>zip_longest</code></li><li>python2中可以使用<code>izip_longest</code></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> name<span class="token punctuation">,</span>count <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>names<span class="token punctuation">,</span>letters<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> count<span class="token operator">&gt;</span>max_letters<span class="token punctuation">:</span>
    longest_name <span class="token operator">=</span> name
    max_letters <span class="token operator">=</span> count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常-1" tabindex="-1"><a class="header-anchor" href="#异常-1" aria-hidden="true">#</a> 异常</h3><h4 id="try-finally" tabindex="-1"><a class="header-anchor" href="#try-finally" aria-hidden="true">#</a> try/finally</h4><p>需要将异常向上传播，并在异常发生时执行清理工作。例如可靠的关闭文件句柄</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>handle <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;/tem/randmo_data.txt&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
  data <span class="token operator">=</span> handl<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
  handle<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="else-1" tabindex="-1"><a class="header-anchor" href="#else-1" aria-hidden="true">#</a> else</h4><p>try/except/else结构可以清晰地描述出哪些异常会由自己的代码来处理，哪些异常会传播到上一级。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">load_json_key</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>key<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">try</span><span class="token punctuation">:</span>
    result_dict <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">except</span> ValueError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">raise</span> KeyError <span class="token keyword">from</span> e
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> result_dict<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="try-except-else-finally" tabindex="-1"><a class="header-anchor" href="#try-except-else-finally" aria-hidden="true">#</a> try/except/else/finally</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">divide_json</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
  handle <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token string">&quot;r+&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">try</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> handle<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    op <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    value <span class="token operator">=</span> <span class="token punctuation">(</span>op<span class="token punctuation">[</span><span class="token string">&#39;numerator&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>op<span class="token punctuation">[</span><span class="token string">&#39;denominator&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">except</span> ZeroDivisionError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">return</span> UNDEFINED
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    op<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
    result <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>op<span class="token punctuation">)</span>
    handle<span class="token punctuation">.</span>seet<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    handle<span class="token punctuation">.</span>write<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token keyword">return</span> value
  <span class="token keyword">finally</span><span class="token punctuation">:</span>
    handle<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代器-1" tabindex="-1"><a class="header-anchor" href="#迭代器-1" aria-hidden="true">#</a> 迭代器⭐</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 普通实现</span>
<span class="token keyword">def</span> <span class="token function">normalize</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> value <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        percent <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> value <span class="token operator">/</span> total
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>percent<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token keyword">def</span> <span class="token function">read_visits</span><span class="token punctuation">(</span>data_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>data_path<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
            <span class="token keyword">yield</span> <span class="token builtin">int</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">normalize_copy</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    numbers <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
    total <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> value <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        percent <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> value <span class="token operator">/</span> total
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>percent<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token keyword">def</span> <span class="token function">normalize_func</span><span class="token punctuation">(</span>get_iter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    total <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>get_iter<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> value <span class="token keyword">in</span> get_iter<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        percent <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> value <span class="token operator">/</span> total
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>percent<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token comment"># 最终的处理</span>
<span class="token keyword">def</span> <span class="token function">normalize_defensive</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 检测输入值是否为迭代器本身，如果是则返回错误</span>
    <span class="token keyword">if</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&#39;Must supply a container&#39;</span><span class="token punctuation">)</span>
    total <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> value <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        percent <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> value <span class="token operator">/</span> total
        result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>percent<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token comment"># 迭代器协议</span>
<span class="token keyword">class</span> <span class="token class-name">ReadVisits</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>path <span class="token operator">=</span> path

    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
            <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
                <span class="token keyword">yield</span> <span class="token builtin">int</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    visits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
    percentages <span class="token operator">=</span> normalize<span class="token punctuation">(</span>visits<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>percentages<span class="token punctuation">)</span>

    <span class="token comment"># 这里不会产生结果</span>
    <span class="token comment"># 因为迭代器只能产生一轮结果</span>
    it <span class="token operator">=</span> read_visits<span class="token punctuation">(</span><span class="token string">&#39;visit.txt&#39;</span><span class="token punctuation">)</span>
    percentages <span class="token operator">=</span> normalize<span class="token punctuation">(</span>it<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>percentages<span class="token punctuation">)</span>

    <span class="token comment"># 这里复制迭代器，如果数据过多可能会导致程序奔溃</span>
    it <span class="token operator">=</span> read_visits<span class="token punctuation">(</span><span class="token string">&#39;visit.txt&#39;</span><span class="token punctuation">)</span>
    percentages <span class="token operator">=</span> normalize_copy<span class="token punctuation">(</span>it<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>percentages<span class="token punctuation">)</span>

    <span class="token comment"># 这里需要lambda表达式</span>
    percentages <span class="token operator">=</span> normalize_func<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> read_visits<span class="token punctuation">(</span><span class="token string">&#39;visit.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>percentages<span class="token punctuation">)</span>

    <span class="token comment"># 使用迭代器协议</span>
    visits <span class="token operator">=</span> ReadVisits<span class="token punctuation">(</span><span class="token string">&#39;visit.txt&#39;</span><span class="token punctuation">)</span>
    percentages <span class="token operator">=</span> normalize<span class="token punctuation">(</span>visits<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>percentages<span class="token punctuation">)</span>

    <span class="token comment"># 最终解决方法</span>
    visits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span>
    normalize_defensive<span class="token punctuation">(</span>visits<span class="token punctuation">)</span>  <span class="token comment"># No error</span>
    visits <span class="token operator">=</span> ReadVisits<span class="token punctuation">(</span><span class="token string">&#39;visit.txt&#39;</span><span class="token punctuation">)</span>
    normalize_defensive<span class="token punctuation">(</span>visits<span class="token punctuation">)</span>  <span class="token comment"># No error</span>

    it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span>visits<span class="token punctuation">)</span>
    normalize_defensive<span class="token punctuation">(</span>it<span class="token punctuation">)</span>  <span class="token comment"># TypeError</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><blockquote><p>获取闭包内的数据</p></blockquote><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>议只在简单的程序中使用</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sort_priority</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    对传入的数组进行排序，并且包含在 group 中的数据要排在前面
    :param numbers: 需要排序的数组
    :param group: 
    :return:
    &quot;&quot;&quot;</span>
    found <span class="token operator">=</span> <span class="token boolean">False</span>

    <span class="token keyword">def</span> <span class="token function">helper</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> found
        <span class="token keyword">if</span> x <span class="token keyword">in</span> group<span class="token punctuation">:</span>
            found <span class="token operator">=</span> <span class="token boolean">True</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>

    numbers<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>key<span class="token operator">=</span>helper<span class="token punctuation">)</span>
    <span class="token keyword">return</span> found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数" aria-hidden="true">#</a> 函数参数</h3><p>使用None和文档字符串来描述具有动态默认值的参数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> when<span class="token operator">=</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s,%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>when<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
log<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
log<span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token number">2023</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">30</span> <span class="token number">18</span><span class="token punctuation">:</span><span class="token number">51</span><span class="token punctuation">:</span><span class="token number">28.868699</span><span class="token punctuation">,</span><span class="token number">1</span>
<span class="token number">2023</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">30</span> <span class="token number">18</span><span class="token punctuation">:</span><span class="token number">51</span><span class="token punctuation">:</span><span class="token number">28.868699</span><span class="token punctuation">,</span><span class="token number">2</span>

<span class="token comment"># 正确的使用方法</span>
<span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> when<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> when <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        when <span class="token operator">=</span> datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s,%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>when<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mix-in组件-多重继承" tabindex="-1"><a class="header-anchor" href="#mix-in组件-多重继承" aria-hidden="true">#</a> Mix-in组件(多重继承)⭐</h3><p>在Python中，Mixin组件是一种通过多重继承方式来扩展类功能的技术。Mixin是一个包含一组方法和属性的类，它旨在被其他类通过继承来复用这些方法和属性，而不是作为独立的类进行实例化。</p><p>Mixin组件的特点是它们通常只关注单一功能或行为，并且可以与其他类进行组合使用，以提供额外的功能。通过将Mixin类与其他类进行多重继承，目标类可以继承Mixin类的方法和属性，从而扩展自身的功能，同时仍然保持类的层次结构清晰。</p><p>使用Mixin组件的好处是可以实现代码的重用和模块化，而无需使用复杂的继承层次结构或修改现有类的代码。通过将不同的Mixin组件组合在一起，可以灵活地定制类的功能，以满足特定的需求。</p><p>在Python中，Mixin组件通常命名为以Mixin结尾的类，并且不包含<code>__init__</code>方法，因为Mixin类不应该被实例化。Mixin类的方法和属性被设计为与其他类共同工作，以提供特定的功能。</p><p>例如，假设我们有一个基础类<code>BaseClass</code>，现在想要为它添加一些序列化和日志记录的功能。我们可以创建两个Mixin组件类，分别为<code>SerializationMixin</code>和<code>LoggingMixin</code>，它们分别提供序列化和日志记录的方法。然后，我们可以通过多重继承来扩展<code>BaseClass</code>并混入这些功能，如下所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SerializationMixin</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">serialize</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 实现序列化逻辑</span>
        <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">LoggingMixin</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 实现日志记录逻辑</span>
        <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">BaseClass</span><span class="token punctuation">(</span>SerializationMixin<span class="token punctuation">,</span> LoggingMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 初始化逻辑</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">perform_action</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 执行操作</span>
        self<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;Performing action&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>serialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<code>BaseClass</code>通过多重继承从<code>SerializationMixin</code>和<code>LoggingMixin</code>中继承了<code>serialize</code>方法和<code>log</code>方法，从而获得了序列化和日志记录的功能。通过Mixin组件，我们可以在不修改<code>BaseClass</code>代码的情况下，灵活地添加和组合功能。</p><p>需要注意的是，使用Mixin组件时要小心避免混入过多的功能，以免导致类的层次结构复杂化和代码的可读性降低。正确选择和组织Mixin组件，可以帮助我们实现代码的可重用性和灵活性。</p><blockquote><p>将内存中的python对象转换为字典形式，以便将其序列化</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 将内存中的python对象转换为字典形式，以便将其序列化</span>

<span class="token keyword">class</span> <span class="token class-name">ToDictMixin</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">to_dict</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_traverse_dict<span class="token punctuation">(</span>self<span class="token punctuation">.</span>__dict__<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_traverse_dict</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance_dict<span class="token punctuation">)</span><span class="token punctuation">:</span>
        output <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> instance_dict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            output<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>_traverse<span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        <span class="token keyword">return</span> output

    <span class="token keyword">def</span> <span class="token function">_traverse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> ToDictMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> value<span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>_traverse_dict<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>self<span class="token punctuation">.</span>_traverse<span class="token punctuation">(</span>key<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> value<span class="token punctuation">]</span>
        <span class="token keyword">elif</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__dict__&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>_traverse_dict<span class="token punctuation">(</span>value<span class="token punctuation">.</span>__dict__<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> value


<span class="token comment"># 以下是演示类</span>
<span class="token keyword">class</span> <span class="token class-name">BinaryTree</span><span class="token punctuation">(</span>ToDictMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">,</span> left<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> right<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> left
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> right


tree <span class="token operator">=</span> BinaryTree<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> left<span class="token operator">=</span>BinaryTree<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> right<span class="token operator">=</span>BinaryTree<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> right<span class="token operator">=</span>BinaryTree<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> left<span class="token operator">=</span>BinaryTree<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tree<span class="token punctuation">.</span>to_dict<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token punctuation">{</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰器" tabindex="-1"><a class="header-anchor" href="#修饰器" aria-hidden="true">#</a> 修饰器</h3><h4 id="property-1" tabindex="-1"><a class="header-anchor" href="#property-1" aria-hidden="true">#</a> @property</h4><h2 id="python数据模型" tabindex="-1"><a class="header-anchor" href="#python数据模型" aria-hidden="true">#</a> Python数据模型</h2>`,68),b={href:"https://docs.python.org/3/reference/datamodel.html",target:"_blank",rel:"noopener noreferrer"},y=a(`<h3 id="python风格卡牌" tabindex="-1"><a class="header-anchor" href="#python风格卡牌" aria-hidden="true">#</a> Python风格卡牌</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> collections

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    Card <span class="token operator">=</span> collections<span class="token punctuation">.</span>namedtuple<span class="token punctuation">(</span><span class="token string">&#39;Card&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;rank&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;suit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


    <span class="token keyword">class</span> <span class="token class-name">FrenchDeck</span><span class="token punctuation">:</span>
        ranks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token string">&#39;JQKA&#39;</span><span class="token punctuation">)</span>
        suits <span class="token operator">=</span> <span class="token string">&#39;spades diamonds clubs hearts&#39;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>_cards <span class="token operator">=</span> <span class="token punctuation">[</span>Card<span class="token punctuation">(</span>rank<span class="token punctuation">,</span> suit<span class="token punctuation">)</span> <span class="token keyword">for</span> suit <span class="token keyword">in</span> self<span class="token punctuation">.</span>suits <span class="token keyword">for</span> rank <span class="token keyword">in</span> self<span class="token punctuation">.</span>ranks<span class="token punctuation">]</span>

        <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token triple-quoted-string string">&quot;&quot;&quot;
            可以计算python内数据模型的长度
            :return:
            &quot;&quot;&quot;</span>
            <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_cards<span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> position<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token triple-quoted-string string">&quot;&quot;&quot;
            能够对python数据模型进行迭代操作
            例如 迭代，切片等
            :param position:
            :return:
            &quot;&quot;&quot;</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>_cards<span class="token punctuation">[</span>position<span class="token punctuation">]</span>


    deck <span class="token operator">=</span> FrenchDeck<span class="token punctuation">(</span><span class="token punctuation">)</span>
    suit_values <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>spades<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> hearts<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> diamonds<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> clubs<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">spades_high</span><span class="token punctuation">(</span>card<span class="token punctuation">:</span> Card<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        排序
        :param card:
        :return:
        &quot;&quot;&quot;</span>
        rank_value <span class="token operator">=</span> FrenchDeck<span class="token punctuation">.</span>ranks<span class="token punctuation">.</span>index<span class="token punctuation">(</span>card<span class="token punctuation">.</span>rank<span class="token punctuation">)</span>
        <span class="token keyword">return</span> rank_value <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>suit_values<span class="token punctuation">)</span> <span class="token operator">+</span> suit_values<span class="token punctuation">[</span>card<span class="token punctuation">.</span>suit<span class="token punctuation">]</span>


    <span class="token keyword">for</span> card <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>deck<span class="token punctuation">,</span> key<span class="token operator">=</span>spades_high<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>card<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟数值类型" tabindex="-1"><a class="header-anchor" href="#模拟数值类型" aria-hidden="true">#</a> 模拟数值类型</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> math <span class="token keyword">import</span> hypot


<span class="token keyword">class</span> <span class="token class-name">Vector</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>x <span class="token operator">=</span> x
        self<span class="token punctuation">.</span>y <span class="token operator">=</span> y

    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Vector(%r,%r)&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>y<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__abs__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> hypot<span class="token punctuation">(</span>self<span class="token punctuation">.</span>x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>y<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__bool__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__add__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> self<span class="token punctuation">.</span>x <span class="token operator">+</span> other<span class="token punctuation">.</span>x
        y <span class="token operator">=</span> self<span class="token punctuation">.</span>y <span class="token operator">+</span> other<span class="token punctuation">.</span>y
        <span class="token keyword">return</span> Vector<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>


v <span class="token operator">=</span> Vector<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
v1 <span class="token operator">=</span> Vector<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v<span class="token operator">+</span>v1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$$ 增长率= \\frac{(421.68+31.65)-(419.75+19.1)}{(419.75+19.1)}\\times100%=0.08% $$</p><p>$$ 得分=6+4\\times \\frac{0.08%}{0.1%}=9.2(分) $$</p>`,6);function g(h,f){const o=p("RouterLink"),e=p("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[t(o,{to:"/programming/python/www.python.org/dev/peps/pep-0342/"},{default:u(()=>[s("PEP342")]),_:1})]),k,n("p",null,[s("🌐"),n("a",v,[s("网址"),t(e)])]),m,n("p",null,[n("a",b,[s("特殊方法手册"),t(e)])]),y])}const _=c(r,[["render",g],["__file","Python学习笔记.html.vue"]]);export{_ as default};
